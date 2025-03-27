import React from "react";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="mx-auto h-screen max-w-4xl dark:text-gray-400">
      <div className="mt-0 md:mt-20 md:px-10 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <header className="flex items-center justify-between py-4 px-6 border-b border-gray-200 dark:border-gray-700 md:hidden">
            <div className="space-y-1">
              <p className="font-medium text-black dark:text-white">
                Rayan Kazi
              </p>
              <p>Software Engineer</p>
            </div>

            <Button variant="outline" className="cursor-pointer py-4">
              <Menu className="h-5 w-5" />
            </Button>
          </header>

          <Sidebar />

          <div className="mt-5 md:mt-0 md:col-span-3 ml-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
