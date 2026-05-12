import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { PrimaryLayout } from "@/layouts/primary";

import React from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimaryLayout>
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <Footer />
    </PrimaryLayout>
  );
}
