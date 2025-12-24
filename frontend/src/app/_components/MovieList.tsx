import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

type FoodListProps = {
  food: {
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

export const FoodList = ({ food }: FoodListProps) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {food.map((item, index) => (
        <Card key={index} className="w-full relative">
          <CardContent>
            <div className="relative">
              <img
                className="rounded-3xl w-full h-52 object-cover"
                src={item.image}
                alt={item.name}
              />
              <div className="rounded-full bg-white w-11 h-11 text-[#EF4444] flex items-center justify-center absolute bottom-3 right-3 cursor-pointer">
                <Plus />
              </div>
            </div>
            <div className="flex justify-between pt-5">
              <p className="text-[24px] leading-8 text-[#EF4444] font-semibold">
                {item.name}
              </p>
              <p className="text-[18px] leading-7 text-[#09090B] font-semibold">
                {item.price}
              </p>
            </div>
            <p className="text-[14px] leading-5 text-[#09090B] font-medium font-sans pt-2">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
