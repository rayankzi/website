import React from "react";

export function PrimaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[40rem] flex-col px-6">
      {children}
    </div>
  );
}
