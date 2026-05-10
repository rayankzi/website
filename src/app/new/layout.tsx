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
    resolvedTheme === "dark" ? "rgba(255,255,255,0.24)" : "rgba(0,0,0,0.16)";

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
          "dark:bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)] bg-[radial-gradient(ellipse_at_bottom,_#f5f5f5_0%,_#fff_100%)]",
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
