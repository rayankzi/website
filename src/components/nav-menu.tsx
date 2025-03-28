import { Menu } from "lucide-react";
import { Button } from "./ui/button";

export function NavMenu() {
  return (
    <header className="flex items-center justify-between py-4 px-7 border-b border-gray-200 dark:border-gray-700 md:hidden">
      <div className="space-y-1">
        <p className="font-medium text-black dark:text-white">Rayan Kazi</p>
        <p>Software Engineer</p>
      </div>

      <Button variant="outline" className="cursor-pointer py-4">
        <Menu className="h-5 w-5" />
      </Button>
    </header>
  );
}
