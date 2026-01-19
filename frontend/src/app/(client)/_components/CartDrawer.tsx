"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HandPlatter, ShoppingCartIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CartContent } from "./CartContent";
import { useCart } from "../context/CartContext";

export function CartDrawer() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const subtotal = getTotalPrice();
  const shipping = 0.99;
  const total = subtotal + shipping;

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="w-9 h-9 rounded-full bg-[#F4F4F5] flex items-center justify-center cursor-pointer"
        >
          <ShoppingCartIcon className="size-4 text-[#18181B]" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#404040] p-8 sm:max-w-136">
        <div className="flex items-center gap-3 text-[20px] leading-7 font-semibold text-[#FAFAFA]">
          <ShoppingCartIcon />
          <h4>Order detail</h4>
        </div>
        <Tabs defaultValue="cart">
          <TabsList className="w-full rounded-full h-auto">
            <TabsTrigger
              value="cart"
              className="text-[18px] text-[#09090B] font-normal font-sans data-[state=active]:bg-[#EF4444] data-[state=active]:text-[#FAFAFA] data-[state=active]:rounded-full py-1"
            >
              Cart
            </TabsTrigger>
            <TabsTrigger
              value="order"
              className="text-[18px] text-[#09090B] font-normal font-sans data-[state=active]:bg-[#EF4444] data-[state=active]:text-[#FAFAFA] data-[state=active]:rounded-full py-1"
            >
              Order
            </TabsTrigger>
          </TabsList>
          <TabsContent value="cart" className="flex-1 flex flex-col mt-0">
            <CartContent
              cartItems={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              total={total}
              onUpdateQuantity={updateQuantity}
              onRemoveFromCart={removeFromCart}
            />
          </TabsContent>
          <TabsContent value="order">
            <div className="bg-[#F4F4F5] flex flex-col gap-1 items-center justify-center rounded-2xl">
              <HandPlatter className="text-[#EF4444] size-12" />
              <p className="text-[#09090B] text-[16px] font-bold">
                No Orders Yet?{" "}
              </p>
              <p className="text-[#71717A] text-[12px] font-normal text-center">
                🍕 "You haven't placed any orders yet. Start exploring our menu
                and satisfy your cravings!"
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
