"use client";

import Image from "next/image";

export function Avatar({
  width = 72,
  height = 72,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Image
      loading="eager"
      src="/images/profile.png"
      width={width}
      height={height}
      className="rounded-full"
      alt="Rayan Kazi"
    />
  );
}
