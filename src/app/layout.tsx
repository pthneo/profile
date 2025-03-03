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
  title: {
    default: "Ben Schenk: Web Developer",
    template: "%s | Ben Schenk",
  },
  description: "Hi! I'm Ben, a web developer. Visit my website to learn more about me and my work.",
  icons: [{ rel: "icon", url: "/icon.png" }],
};

// TODO: Fix scrollbar staying visible when not needed
// TODO: Add page transitions and animations
// TODO: Fix footer positioning
// TODO: Add sitemap, schema, and other SEO improvements
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
          <div className="relative min-h-screen lg:max-h-screen bg-background text-foreground overflow-hidden">
            <div className="flex flex-col lg:flex-row container mx-auto max-w-4xl lg:max-w-7xl px-4 pt-16">
              <NavigationPane />
              <main className="max-h-screen flex-1 overflow-auto lg:pl-8 lg:pr-2 lg:pt-5 p-0 lg:styled-scrollbar">{children}</main>
              <div className="lg:hidden my-10 text-center text-muted-foreground text-sm">
                <p className="inline-flex">© 2025 Ben Schenk. All rights reserved.</p>
                <Link href="/legal" className="underline underline-offset-3 ml-2">Legal</Link>
              </div>
            </div>
            <div className="hidden lg:block absolute bottom-4 left-4 z-10">
              <ThemeToggle />
            </div>
            <div className="hidden lg:block absolute bottom-6 right-6 z-10 text-sm text-muted-foreground">
              <p className="inline-flex">© 2025 Ben Schenk. All rights reserved.</p>
              <Link href="/legal" className="underline underline-offset-3 ml-2">Legal</Link>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
