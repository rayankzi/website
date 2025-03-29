import { ArrowLeft } from "lucide-react";
import { Link } from "next-view-transitions";

export function BackLink({
  className = "",
  children = "Home",
  href = "/",
}: {
  className?: string;
  children?: React.ReactNode;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center group gap-1 mb-4 no-underline text-low-contrast-text hover:text-high-contrast-text ${className}`}
    >
      <span className="group-hover:-translate-x-1 transition-transform">←</span>
      {children}
    </Link>
  );
}

// TODO: fix this
export function PostDateRenderer() {
  return (
    <div className="mb-4">
      <span className="text-low-contrast-text text-sm">
        Aug 1, 2023 • 8mo ago
      </span>
    </div>
  );
}
