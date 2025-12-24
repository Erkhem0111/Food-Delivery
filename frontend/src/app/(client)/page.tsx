"use client";

import { Footer } from "../_components/Footer";
import {
  Appetizers,
  FoodList,
  Lunches,
  Salads,
} from "../_components/MovieList";

const Home = () => {
  return (
    <div className="bg-[#404040]">
      <img src="/BG.png" />

      <div className="bg-[#404040] px-22 py-12">
        <h2 className="text-[30px] leading-6 text-white font-semibold mb-6">
          Appetizers
        </h2>
        <FoodList food={Appetizers} />

        <h2 className="text-[30px] leading-6 text-white font-semibold mt-12 mb-6">
          Salads
        </h2>
        <FoodList food={Salads} />
        <h2 className="text-[30px] leading-6 text-white font-semibold mt-12 mb-6">
          Lunch Favorites
        </h2>
        <FoodList food={Lunches} />
        <h2 className="text-[30px] leading-6 text-white font-semibold mt-12 mb-6">
          Salads
        </h2>
        <FoodList food={Salads} />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
