import { Card } from "@/components/ui/card";
import { LayoutDashboard, Truck } from "lucide-react";

export const Header = () => {
  return (
    <div>
      <Card className="h-screen bg-[#FFFFFF] w-51">
        <div className="bg-[#FFFFFF] rounded-full flex justify-center items-center gap-2">
          <LayoutDashboard />
          <h1 className="text-[14px] leading-5 text-[#09090B] font-medium">
            Food menu
          </h1>
        </div>
        <div className="bg-[#18181B] rounded-full flex justify-center items-center gap-2">
          <Truck />
          <h1 className="text-[14px] leading-5 text-[#09090B] font-medium">
            Orders
          </h1>
        </div>
      </Card>
      <div></div>
    </div>
  );
};
