import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { ChevronRight, MapPin, ShoppingCart, User } from "lucide-react";

export const Header = () => {
  const LoggedIn = true;
  return (
    <div className="bg-[#18181B] flex items-center justify-between px-22 py-3">
      <Logo />

      {LoggedIn ? (
        <div className="flex gap-3">
          <div className="rounded-full bg-[#FFFFFF] flex items-center justify-center w-63 text-[12px] leading-4 font-normal">
            <MapPin className="size-5 text-[#EF4444]" />
            <p className="text-[#EF4444]">Delivery address:</p>
            <p className="text-[#71717A]">Add Location</p>
            <ChevronRight className="size-5 text-[#18181B80]" />
          </div>
          <div className="w-9 h-9 rounded-full bg-[#F4F4F5] flex items-center justify-center">
            <ShoppingCart className="size-4 text-[#18181B]" />
          </div>
          <div className="w-9 h-9 rounded-full bg-[#EF4444] flex items-center justify-center">
            <User className="size-4 text-[#FAFAFA]" />
          </div>
        </div>
      ) : (
        <div className="flex gap-3">
          <Button className="h-9 px-3 rounded-full bg-[#F4F4F5] text-[#18181B] flex items-center justify-center">
            Sign up
          </Button>
          <Button className="h-9 px-3 rounded-full bg-[#EF4444] flex items-center justify-center">
            Log in
          </Button>
        </div>
      )}
    </div>
  );
};
