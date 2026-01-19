"use client";

import { Button } from "@/components/ui/button";
import { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { HandPlatter } from "lucide-react";
import Link from "next/link";

export function EmptyCart() {
  return (
    <>
      <div className="bg-[#F4F4F5] flex flex-col gap-1 items-center justify-center rounded-2xl">
        <HandPlatter className="text-[#EF4444] size-12" />
        <p className="text-[#09090B] text-[16px] font-bold">
          Your cart is empthy
        </p>
        <p className="text-[#71717A] text-[12px] font-normal text-center">
          Hungry? 🍔 Add some delicious dishes to your cart and satisfy your
          cravings!
        </p>
      </div>
      <DialogContent>
        <DialogTitle className="text-[#09090B] text-[24px] font-semibold">
          Your order has been successfully placed !
        </DialogTitle>
        <img src="/illustration.png" />
        <Link href="../page">
          <Button type="submit" variant="outline">
            Back to home
          </Button>
        </Link>
      </DialogContent>
    </>
  );
}
