// "use client";

// import { FoodCard } from "./_components/FoodCard";
// import { Footer } from "./_components/Footer";
// import { Header } from "./_components/Header";

// const Home = () => {
//   return (
//     <div className="bg-[#404040]">
//       <Header />
//       <img src="/BG.png" />

//       <div className="bg-[#404040] px-22 py-12">
//         <h2 className="text-[30px] leading-6 text-white font-semibold mb-6">
//           Appetizers
//         </h2>
//         <FoodCard food={Appetizers} />

//         <h2 className="text-[30px] leading-6 text-white font-semibold mt-12 mb-6">
//           Salads
//         </h2>
//         <FoodList food={Salads} />
//         <h2 className="text-[30px] leading-6 text-white font-semibold mt-12 mb-6">
//           Lunch Favorites
//         </h2>
//         <FoodList food={Lunches} />
//         <h2 className="text-[30px] leading-6 text-white font-semibold mt-12 mb-6">
//           Salads
//         </h2>
//         <FoodList food={Salads} />
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default Home;

"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useCart } from "./context/CartContext";
import { FoodItem } from "./_components/FoodCard";
import { Header } from "./_components/Header";
import { FoodDetailDialog } from "./_components/FoodDetailDialog";
import { FoodGrid } from "./_components/FoodGrid";

const foodItems = [
  {
    id: 1,
    name: "Finger food",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1541599468348-e96984315921?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Cranberry Brie Bites",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1559058789-672da06263d8?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Sunshine Stackers",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Brie Crostini Appetizer",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Sunshine Stackers",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Grilled chicken",
    price: "$12.99",
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop",
  },
];

export default function Home() {
  const { addToCart, setIsCartOpen, getTotalItems } = useCart();
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);

  const handleAddToCart = (food: FoodItem, quantity: number) => {
    for (let i = 0; i < quantity; i++) addToCart(food);
    setSelectedFood(null);
    toast.success("Food is being added to the cart!");
  };

  return (
    <div className="min-h-screen bg-[#2a2a2a]">
      <Header
        totalItems={getTotalItems()}
        onCartClick={() => setIsCartOpen(true)}
      />

      <FoodGrid
        title="Appetizers"
        items={foodItems}
        onItemClick={setSelectedFood}
      />

      <FoodDetailDialog
        food={selectedFood}
        onClose={() => setSelectedFood(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
