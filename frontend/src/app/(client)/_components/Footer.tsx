import { Logo } from "@/app/(client)/_components/Logo";
import { Facebook, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <div className="bg-[#18181B] py-20">
      <div className="bg-[#EF4444] h-24 overflow-hidden flex items-center">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "marquee 14s linear infinite",
          }}
        >
          <p className="text-[30px] text-white font-semibold px-10">
            Fresh fast delivered
          </p>
          <p className="text-[30px] text-white font-semibold px-10">
            Fresh fast delivered
          </p>
          <p className="text-[30px] text-white font-semibold px-10">
            Fresh fast delivered
          </p>
          <p className="text-[30px] text-white font-semibold px-10">
            Fresh fast delivered
          </p>
          <p className="text-[30px] text-white font-semibold px-10">
            Fresh fast delivered
          </p>
          <p className="text-[30px] text-white font-semibold px-10">
            Fresh fast delivered
          </p>
          <p className="text-[30px] text-white font-semibold px-10">
            Fresh fast delivered
          </p>
          <p className="text-[30px] text-white font-semibold px-10">
            Fresh fast delivered
          </p>
          <p className="text-[30px] text-white font-semibold px-10">
            Fresh fast delivered
          </p>
          <p className="text-[30px] text-white font-semibold px-10">
            Fresh fast delivered
          </p>
          <p className="text-[30px] text-white font-semibold px-10">
            Fresh fast delivered
          </p>
        </div>

        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}
        </style>
      </div>
      <div className="px-22 pt-19">
        <div className="flex gap-28">
          <Logo />
          <div className="text-[16px] font-normal flex flex-col gap-4 pl-28">
            <p className="text-[#71717A]">NOMNOM</p>
            <p className="text-[#FAFAFA]">Home</p>
            <p className="text-[#FAFAFA]">Contact us</p>
            <p className="text-[#FAFAFA]">Delivery zone</p>
          </div>
          <div className="flex gap-28 items-end">
            <div className="text-[16px] font-normal flex flex-col gap-4">
              <p className="text-[#71717A]">MENU</p>
              <p className="text-[#FAFAFA]">Appetizers</p>
              <p className="text-[#FAFAFA]">Salads</p>
              <p className="text-[#FAFAFA]">Pizzas</p>
              <p className="text-[#FAFAFA]">Main dishes</p>
              <p className="text-[#FAFAFA]">Desserts</p>
            </div>
            <div className="text-[16px] font-normal flex flex-col gap-4">
              <p className="text-[#FAFAFA]">Side dish </p>
              <p className="text-[#FAFAFA]">Brunch</p>
              <p className="text-[#FAFAFA]">Desserts</p>
              <p className="text-[#FAFAFA]">Beverages</p>
              <p className="text-[#FAFAFA]">Fish & Sea foods</p>
            </div>
          </div>
          <div className="text-[16px] font-normal flex flex-col gap-4">
            <p className="text-[#71717A]">FOLLOW US</p>
            <div className="flex gap-4">
              <Facebook className="text-[#FAFAFA]" />
              <Instagram className="text-[#FAFAFA]" />
            </div>
          </div>
        </div>
        <div className="border-t border-[#71717A] flex gap-14 mt-26">
          <p className="text-[14px] leading-4 text-[#A1A1AA] font-normal mt-6">
            © 2024 NomNom. All rights reserved.
          </p>
          <p className="text-[14px] leading-4 text-[#A1A1AA] font-normal mt-6">
            Privacy Policy
          </p>
          <p className="text-[14px] leading-4 text-[#A1A1AA] font-normal mt-6">
            Terms & Conditions
          </p>
          <p className="text-[14px] leading-4 text-[#A1A1AA] font-normal mt-6">
            Cookie policy
          </p>
        </div>
      </div>
    </div>
  );
};
