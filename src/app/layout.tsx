import type { Metadata } from "next";
import { siteMetadata } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: "%s | Rayan Kazi",
  },
  description: siteMetadata.description,
};

// TODO: change metadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased dark">{children}</body>
    </html>
  );
}
