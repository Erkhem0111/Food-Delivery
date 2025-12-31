import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin, User } from "lucide-react";
import { Logo } from "./Logo";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { StoreSheet } from "./StoreSheet";

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
          <StoreSheet />
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
};
