"use client";

import { Card, CardContent } from "@/components/ui/card";
import { FoodCard } from "./FoodCard";

export type FoodListProps = {
  item: {
    name: string;
    price: string;
    description: string;
    image: string;
  }[];
};

export const Appetizers = [
  {
    name: "Finger food",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/Food.png",
  },
  {
    name: "Finger food",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/Food.png",
  },
  {
    name: "Finger food",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/Food.png",
  },
  {
    name: "Finger food",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/Food.png",
  },
  {
    name: "Finger food",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/Food.png",
  },
  {
    name: "Finger food",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/Food.png",
  },
];

export const Salads = [
  {
    name: "Fruit Salad",
    price: "$10.99",
    description:
      "A refreshing mix of seasonal fruits, perfect for a light snack.",
    image: "/Food.png",
  },
  {
    name: "Fruit Salad",
    price: "$10.99",
    description:
      "A refreshing mix of seasonal fruits, perfect for a light snack.",
    image: "/Food.png",
  },
  {
    name: "Fruit Salad",
    price: "$10.99",
    description:
      "A refreshing mix of seasonal fruits, perfect for a light snack.",
    image: "/Food.png",
  },
];

export const Lunches = [
  {
    name: "Finger food",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/Food.png",
  },
  {
    name: "Finger food",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/Food.png",
  },
  {
    name: "Finger food",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/Food.png",
  },
  {
    name: "Finger food",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/Food.png",
  },
  {
    name: "Finger food",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/Food.png",
  },
];

export const FoodList = ({ item }: FoodListProps) => {
  return (
    <div className="grid grid-cols-3 gap-16">
      {item.map((item, index) => (
        <Card key={index} className="w-full relative">
          <CardContent>
            <div className="relative">
              <img
                className="rounded-2xl w-full h-64 object-cover"
                src={item.image}
              />
              <FoodCard key={index} />
            </div>
            <div className="flex justify-between pt-5">
              <p className="text-[28px] leading-8 text-[#EF4444] font-bold">
                {item.name}
              </p>
              <p className="text-[20px] leading-7 text-[#09090B] font-bold">
                {item.price}
              </p>
            </div>
            <p className="text-[16px] leading-5 text-[#09090B] font-medium font-sans pt-2">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
