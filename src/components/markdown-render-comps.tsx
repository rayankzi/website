import { formatDate, formatDateToAgo } from "@/lib/utils";
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

export function PostDateRenderer({ date }: { date: string }) {
  return (
    <div className="mb-4">
      <span className="text-low-contrast-text text-sm">
        {`${formatDate(date)} • ${formatDateToAgo(date)}`}
      </span>
    </div>
  );
}
