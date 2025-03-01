import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationPane from "@/components/navigation-pane";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

const fontBody = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const fontHeading = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Ben Schenk",
  description: "Hi! I'm Ben, a web developer. Visit my website to learn more about me and my work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", fontHeading.variable, fontBody.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen max-h-screen bg-background text-foreground overflow-hidden">
            <div className="flex flex-col lg:flex-row container mx-auto max-w-7xl px-4 pt-16">
              <NavigationPane />
              <main className="max-h-screen flex-1 overflow-auto lg:pl-8 pr-2 styled-scrollbar">{children}</main>
            </div>
            <div className="absolute bottom-4 left-4 z-10">
              <ThemeToggle />
            </div>
            <div className="absolute bottom-6 right-6 z-10 text-sm text-muted-foreground">
              <p className="inline-flex">© 2025 Ben Schenk. All rights reserved.</p>
              <Link href="/legal" className="underline underline-offset-3 ml-2">Legal</Link>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
