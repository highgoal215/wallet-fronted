"use client";

import { usePathname } from "next/navigation";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";

import { superAdminData } from "@/app/data/icon/super-admin-panel/adminpanelicon";

export default function SuperAdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed lg:static inset-y-0 left-0 z-50 w-64 min-w-64 h-screen bg-white border-r transform translate-x-0 lg:translate-x-0 transition-transform duration-200 ease-in-out">
      <nav className="p-4 space-y-2">
        {superAdminData.map((item, index) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={index}
              href={item.path}
              className={`
                flex items-center gap-3 w-full px-2 py-2 text-sm rounded-lg
                ${
                  isActive
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50"
                }
              `}
            >
              <Image src={item.icon} alt="icon" />
              <div className="flex w-full">
                <p>{item.label}</p>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
