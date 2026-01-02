"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCartIcon } from "lucide-react";
import { CartItem } from "./CartItem";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type CartSheetProps = {
  item: {
    name: string;
    price: number;
    description: string;
    image: string;
  };
};

export const CartSheet = ({ item }: CartSheetProps) => {
  return (
    <Sheet>
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
          <TabsContent value="cart">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-[20px] leading-7 font-semibold text-[#71717A]">
                  My cart
                </CardTitle>
                <CartItem item={item} />
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </SheetContent>
    </Sheet>
  );
};
