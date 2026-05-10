"use client";

import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React from "react";

export default function NewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { resolvedTheme } = useTheme();
  const starColor =
    resolvedTheme === "dark" ? "rgba(255,255,255,0.24)" : "rgba(15,23,42,0.3)";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <StarsBackground
        aria-hidden="true"
        factor={0.01}
        pointerEvents={false}
        speed={120}
        starColor={starColor}
        className={cn(
          "pointer-events-none fixed inset-0 min-h-screen",
          "bg-[radial-gradient(ellipse_at_bottom,_#dbeafe_0%,_#f8fafc_48%,_#fff_100%)] dark:bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]"
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
