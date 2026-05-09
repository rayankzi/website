import Image from "next/image";

import { personalInfo } from "@/lib/new-data";

export function IntroSection() {
  return (
    <section className="flex flex-col gap-8 py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="rounded-full border border-border p-1 shadow-sm">
          <Image
            src="/images/profile.png"
            alt="Rayan Kazi"
            width={120}
            height={120}
            priority
            className="size-20 rounded-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <h1 className="text-lg font-semibold tracking-normal text-foreground sm:text-xl">
            Hey, I&apos;m Rayan
          </h1>
          <div className="flex items-center gap-3 text-lg text-muted-foreground sm:text-xl">
            <span
              className="size-3 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            <span>{personalInfo.availability.status}</span>
          </div>
        </div>
      </div>

      <p className="max-w-2xl text-base leading-7 text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </section>
  );
}
