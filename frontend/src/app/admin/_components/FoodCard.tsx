import { Card, CardContent } from "@/components/ui/card";
import { Pencil } from "lucide-react";
import Image from "next/image";

type FoodCardProps = {
  id: string;
  name: string;
  price: number;
  ingredients: string;
  image: string;
};

export function FoodCard({ name, price, ingredients, image }: FoodCardProps) {
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
          <button className="absolute top-3 right-3 p-3 bg-white rounded-full hover:bg-gray-100 shadow-md cursor-pointer">
            <Pencil className="size-4 text-[#EF4444]" />
          </button>
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
