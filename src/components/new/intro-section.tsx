import Image from "next/image";

import { personalInfo } from "@/lib/new-data";

export function IntroSection() {
  return (
    <section className="flex flex-col gap-8 py-4">
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="shrink-0 rounded-full sm:border sm:border-border sm:p-1 sm:shadow-sm">
          <Image
            src="/images/profile.png"
            alt="Rayan Kazi"
            width={120}
            height={120}
            priority
            className="size-16 rounded-full object-cover sm:size-20"
          />
        </div>

        <div className="flex min-w-0 flex-col gap-1.5">
          <h1 className="text-xl font-semibold tracking-normal text-foreground sm:text-2xl">
            Hey, I&apos;m Rayan
          </h1>
          <div className="flex items-center gap-2 text-base text-muted-foreground sm:gap-3 sm:text-xl">
            <span
              className="size-2.5 shrink-0 rounded-full bg-emerald-500 sm:size-3"
              aria-hidden="true"
            />
            <span className="whitespace-nowrap">
              {personalInfo.availability.status}
            </span>
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
