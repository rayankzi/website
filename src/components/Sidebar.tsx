"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <div className="hidden md:block col-span-1 h-screen">
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col items-start space-y-2">
          <Image
            src="/images/profile.png"
            alt="Profile Picture"
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-white text-lg">Rayan Kazi</p>
            <p className="text-sm text-gray-400">Software Engineer</p>
          </div>
        </div>

        <nav>
          <ul className="space-y-7">
            {menuItems.map((item) => (
              <li key={item.name} className="w-full">
                <Link
                  href={item.href}
                  className={`block w-full text-gray-400 hover:text-white transition-colors duration-200 ${
                    pathname === item.href && "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
