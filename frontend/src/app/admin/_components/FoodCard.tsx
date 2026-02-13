"use client";
import { Card, CardContent } from "@/components/ui/card";
import { api } from "@/lib/axios";
import Image from "next/image";
import { UpdateFoodDialog } from "./UpdateFoodDialog";
import { useState } from "react";
import { id } from "zod/v4/locales";

type FoodCardProps = {
  id: string;
  name: string;
  price: number;
  ingredients: string;
  image: string;
};
type Food = {
  _id: string;
  name: string;
  price: number;
  image: string;
  ingredients: string;
  categoryIds: string[];
};

export function FoodCard({ name, price, ingredients, image }: FoodCardProps) {
  const [foods, setFoods] = useState<Food[]>([]);
  const refreshFoods = async () => {
    const { data } = await api.get("/foods");
    setFoods(data);
  };
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent>
        <div className="relative aspect-video">
          <Image
            src={image.startsWith("http") ? image : `/${image}`}
            alt={name}
            fill
            className="object-cover rounded-lg shadow-lg"
          />
          {/* <UpdateFoodDialog
            food={{ _id: id, name, price, ingredients, image, categoryIds: [] }}
          /> */}
          <div></div>
        </div>
        <div className="pt-5">
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-semibold text-[20px] flex-1 text-[#EF4444]">
              {name}
            </h4>
            <span className="text-[20px] font-semibold text-[#09090B]">
              ${price}
            </span>
          </div>
          <p className="text-[15px] text-[#09090B] font-medium line-clamp-2">
            {ingredients}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
