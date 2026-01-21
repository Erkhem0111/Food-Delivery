"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PaymentSummaryProps {
  subtotal?: number;
  shipping?: number;
  total?: number;
}

export function PaymentSummary({
  subtotal,
  shipping,
  total,
}: PaymentSummaryProps) {
  const hasItems =
    subtotal !== undefined && shipping !== undefined && total !== undefined;
  return (
    <div className="mt-6 bg-[#FFFFFF] p-4 rounded-2xl">
      <h4 className="text-[22px] text-[#71717A] font-semibold">Payment info</h4>
      {hasItems ? (
        <>
          <div className="border-b-2 border-dashed py-5 border-[#71717A]">
            <div className="flex justify-between text-[16px] mb-3">
              <span className="text-[#71717A]">Items</span>
              <span className="font-bold text-[16px]">
                ${subtotal!.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-[16px]">
              <span className="text-[#71717A]">Shipping</span>
              <span className="font-bold text-[16px]">
                {shipping!.toFixed(2)}$
              </span>
            </div>
          </div>
          <div className="flex justify-between text-[16px] my-5">
            <span className="text-[#71717A]">Total</span>
            <span className="font-bold text-[16px]">${total!.toFixed(2)}</span>
          </div>
          <Dialog>
            <form>
              <DialogTrigger asChild>
                <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-6 rounded-full text-base font-semibold cursor-pointer">
                  Checkout
                </Button>
              </DialogTrigger>
              <DialogContent className="flex flex-col items-center">
                <DialogTitle className="text-[#09090B] text-[24px] font-semibold">
                  Your order has been successfully placed !
                </DialogTitle>
                <img src="/illustration.png" />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  Back to home
                </Button>
              </DialogContent>
            </form>
          </Dialog>
        </>
      ) : (
        <>
          <div className="border-b-2 border-dashed py-5 border-[#71717A]">
            <div className="flex justify-between text-[16px] mb-3">
              <span className="text-[#71717A]">Items</span>
              <span className="font-bold text-[16px]">-</span>
            </div>
            <div className="flex justify-between text-[16px]">
              <span className="text-[#71717A]">Shipping</span>
              <span className="font-bold text-[16px]">-</span>
            </div>
          </div>
          <div className="flex justify-between text-[16px] my-5">
            <span className="text-[#71717A]">Total</span>
            <span className="font-bold text-[16px]">-</span>
          </div>
          <Button
            disabled={hasItems}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-6 rounded-full text-base font-semibold cursor-pointer"
          >
            Checkout
          </Button>
        </>
      )}
    </div>
  );
}
