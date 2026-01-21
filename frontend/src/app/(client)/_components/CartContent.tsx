"use client";

import { PaymentSummary } from "./PaymentSummary";
import { EmptyCart } from "./EmptyCart";
import { CartItem } from "./CartItem";
import { CartItemType } from "../context/CartContext";
import { Input } from "@/components/ui/input";

interface CartContentProps {
  cartItems: CartItemType[];
  subtotal: number;
  shipping: number;
  total: number;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveFromCart: (id: number) => void;
}

export function CartContent({
  cartItems,
  subtotal,
  shipping,
  total,
  onUpdateQuantity,
  onRemoveFromCart,
}: CartContentProps) {
  return (
    <>
      <div className="flex-1 flex-col py-4 justify-between">
        <div className="bg-[#FFFFFF] rounded-2xl h-152 p-4 overflow-hidden overflow-y-scroll">
          <h3 className="text-[22px] font-semibold mb-4 text-[#71717A]">
            My cart
          </h3>
          {cartItems?.length === 0 ? (
            <EmptyCart />
          ) : (
            <div className="h-152 flex flex-col justify-between">
              <div className="space-y-4">
                {cartItems?.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemoveFromCart}
                  />
                ))}
              </div>
              <div>
                <h3 className="text-[22px] font-semibold mb-4 text-[#71717A]">
                  Delivery location
                </h3>
                <Input className="pb-13 pt-4" />
              </div>
            </div>
          )}
        </div>
        {cartItems?.length === 0 ? (
          <PaymentSummary />
        ) : (
          <div>
            <PaymentSummary
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          </div>
        )}
      </div>
    </>
  );
}
