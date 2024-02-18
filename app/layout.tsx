import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { inter, roboto_mono } from "@/components/fonts";

export const metadata: Metadata = {
  title: "NextJS Template With Tailwind And Shadcn",
  description: "Template Repo To Use To Initialize Any Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
          roboto_mono.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
