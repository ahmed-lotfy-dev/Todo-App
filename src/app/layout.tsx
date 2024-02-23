import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/src/lib/utils";
import { inter, roboto_mono } from "@/src/components/ui/fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Todo App",
  description:
    "Todo appication that can help you manage your time and projects to make you more productive and don't waste time",
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
        <Toaster/>
      </body>
    </html>
  );
}
