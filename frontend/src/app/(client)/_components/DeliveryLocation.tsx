"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ChevronRight, MapPin } from "lucide-react";

export function DeliveryLocation() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="rounded-full bg-[#FFFFFF] flex items-center justify-center w-63 text-[12px] leading-4 font-normal py-2 cursor-pointer">
            <MapPin className="size-5 text-[#EF4444]" />
            <p className="text-[#EF4444]">Delivery address:</p>
            <p className="text-[#71717A]">Add Location</p>
            <ChevronRight className="size-5 text-[#18181B80]" />
          </div>
        </DialogTrigger>

        <DialogContent>
          <DialogTitle className="text-[24px] font-semibold text-[#09090B] ">
            Please write your delivery address!
          </DialogTitle>
          <Input
            placeholder="Please share your complete address"
            className="pb-13 pt-5"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Deliver Here</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
