import { HandPlatter } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex gap-2">
      <HandPlatter className="size-11 text-[#EF4444]" />
      <div>
        <div className="flex text-[20px] leading-7 font-semibold font-sans">
          <p className="text-[#FAFAFA]">NOM</p>
          <p className="text-[#EF4444]">NOM</p>
        </div>
        <p className="text-[12px] leading-4 text-[#F4F4F5] font-normal">
          Swift Delivery
        </p>
      </div>
    </div>
  );
};
