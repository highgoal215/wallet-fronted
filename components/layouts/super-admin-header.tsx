"use client";

import { usePathname } from "next/navigation";
import { Image } from "@heroui/image";
import { Code } from "@heroui/code";
import { Menu } from "lucide-react";

import { superAdminData } from "@/app/data/icon/super-admin-panel/adminpanelicon";
import Logo from "@/assets/svg/logo.svg";
import AdminPic from "@/assets/svg/admin-pic.svg";
import BellIcon from "@/assets/icon/bell.svg";

export default function AdminHeader() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row flex-1 items-center border-b-2 ">
      <div className="px-4 py-4 border-r">
        <Image src={Logo.src} className="w-[223px] h-8" alt="image" />
      </div>
      <div className="flex flex-1 gap-4 items-center pl-6">
        <Menu className="h-5 w-5 cursor-pointer" />
        <p className="text-xl text-gray-800 font-Roboto font-semibold">
          {superAdminData.map((item) => {
            if (item.path == pathname) return item.pageTitle;
          })}
        </p>
      </div>
      <div className="flex flex-row items-center gap-3 pr-6">
        <Image className="w-5 h-5" src={BellIcon.src} alt="bell-icon" />
        <Code color="success">Super Admin</Code>
        <Image
          src={AdminPic.src}
          className="w-[30px] h-[30px]"
          alt="admin pic"
        />
      </div>
    </div>
  );
}
