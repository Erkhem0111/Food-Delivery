import { Button } from "@/components/ui/button";
import { ShoppingCartIcon, User } from "lucide-react";
import { Logo } from "./Logo";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { CartDrawer } from "./CartDrawer";
import { DeliveryLocation } from "./DeliveryLocation";

interface HeaderProps {
  totalItems: number;
  onCartClick: () => void;
}

export function Header({ totalItems, onCartClick }: HeaderProps) {
  const LoggedIn = true;
  return (
    <div className="bg-[#18181B] flex items-center justify-between px-22 py-3">
      <Logo />

      {LoggedIn ? (
        <div className="flex gap-3">
          <DeliveryLocation />
          <Button
            variant="outline"
            className="w-9 h-9 rounded-full bg-[#F4F4F5] flex items-center justify-center cursor-pointer"
            onClick={onCartClick}
          >
            <ShoppingCartIcon className="size-4 text-[#18181B]" />
            {totalItems > 0 && (
              <span className="absolute top-3 right-33 bg-white text-red-500 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-lg">
                {totalItems}
              </span>
            )}
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="secondary"
                className="w-9 h-9 rounded-full bg-[#EF4444] flex items-center justify-center cursor-pointer"
              >
                <User className="size-4 text-[#FAFAFA]" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-fit flex flex-col gap-2 justify-center items-center">
              <p>Test@gmail.com</p>
              <Link href="/Login">
                <Button
                  variant="destructive"
                  className="h-9 px-3 rounded-full bg-[#F4F4F5] flex items-center justify-center text-[#18181B] cursor-pointer"
                >
                  Sign out
                </Button>
              </Link>
            </PopoverContent>
          </Popover>
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
}
