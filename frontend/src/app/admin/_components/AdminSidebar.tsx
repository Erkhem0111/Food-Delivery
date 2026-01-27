"use client";

import { Button } from "@/components/ui/button";
import { HandPlatter, LayoutDashboard, Truck } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-10 mt-5">
        <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center">
          <HandPlatter className="size-8 text-white" />
        </div>
        <div>
          <h1 className="font-bold text-[24px]">NomNom</h1>
          <p className="text-[16px] text-gray-500">Swift delivery</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Link href="/admin">
          <Button
            variant={pathname === "/admin" ? "default" : "ghost"}
            className={
              pathname === "/admin"
                ? "w-full justify-start gap-2 bg-black text-white hover:bg-black/90"
                : "w-full justify-start gap-2"
            }
          >
            <LayoutDashboard className="w-4 h-4" />
            Food menu
          </Button>
        </Link>
        <Link href="/admin/orders">
          <Button
            variant={pathname === "/admin/orders" ? "default" : "ghost"}
            className={
              pathname === "/admin/orders"
                ? "w-full justify-start gap-2 bg-black text-white hover:bg-black/90"
                : "w-full justify-start gap-2"
            }
          >
            <Truck className="w-4 h-4" />
            Orders
          </Button>
        </Link>
      </div>
    </div>
  );
}
