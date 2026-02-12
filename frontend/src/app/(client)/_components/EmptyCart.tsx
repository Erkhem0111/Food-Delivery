"use client";

import { HandPlatter } from "lucide-react";

export function EmptyCart() {
  return (
    <>
      <div className="bg-[#F4F4F5] rounded-lg">
        <div className="flex flex-col items-center justify-center py-8 px-4">
          <HandPlatter className="text-[#EF4444] size-12" />
          <p className="text-[#09090B] text-[16px] font-bold">
            Your cart is empthy
          </p>
          <p className="text-[#71717A] text-[12px] font-normal text-center">
            Hungry? 🍔 Add some delicious dishes to your cart and satisfy your
            cravings!
          </p>
        </div>
      </div>
    </>
  );
}
