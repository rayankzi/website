import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "next-view-transitions";

export function NavMenu() {
  return (
    <header className="flex items-center justify-between py-4 px-7 border-b border-gray-200 dark:border-gray-700 md:hidden">
      <Link href="/" className="cursor-pointer">
        <div className="space-y-1">
          <span className="font-medium text-high-contrast-text z-100">
            Rayan Kazi
          </span>
          <p>Software Engineer</p>
        </div>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="py-4">
            <Menu className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-4 mt-2">
          <DropdownMenuLabel>Navigation</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/blog" className="cursor-pointer">
              Blog
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/projects" className="cursor-pointer">
              Projects
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/experience" className="cursor-pointer">
              Experience
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/notes" className="cursor-pointer">
              Notes
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
