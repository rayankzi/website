import type { Metadata } from "next";
import { siteMetadata } from "@/lib/data";
import "./globals.css";
import Script from "next/script";
import { env } from "@/env";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: siteMetadata.title,
    template: "%s | Rayan Kazi",
  },
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
      </body>
    </html>
  );
}
