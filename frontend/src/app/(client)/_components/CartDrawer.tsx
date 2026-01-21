"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CartContent } from "./CartContent";
import { useCart } from "../context/CartContext";
import { OrderHistory } from "./OrderHistory";

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
      <SheetContent className="bg-[#404040] p-8 sm:max-w-136 rounded-l-3xl">
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
          <TabsContent value="cart" className="flex flex-col mt-0">
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
            <OrderHistory
              cartItems={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              total={total}
              onUpdateQuantity={updateQuantity}
              onRemoveFromCart={removeFromCart}
            />
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
}
