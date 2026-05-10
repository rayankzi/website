"use client";

import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { NewFooter } from "@/components/footer";
import { NewHeader } from "@/components/header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function NotFound() {
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
          "bg-[radial-gradient(ellipse_at_bottom,_#dbeafe_0%,_#f8fafc_48%,_#fff_100%)] dark:bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)]",
        )}
      />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-2xl flex-col px-4 sm:px-6">
        <NewHeader />
        <main className="flex flex-1 items-center py-16">
          <section className="flex max-w-lg flex-col gap-5">
            <p className="text-sm font-medium text-muted-foreground">404</p>
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                This page drifted out of orbit.
              </h1>
              <p className="text-base leading-7 text-muted-foreground">
                The page you are looking for does not exist, or it moved during
                the redesign.
              </p>
            </div>
            <Button asChild className="w-fit">
              <Link href="/">Back home</Link>
            </Button>
          </section>
        </main>
        <NewFooter />
      </div>
    </div>
  );
}
