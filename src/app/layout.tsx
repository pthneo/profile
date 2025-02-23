import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

const fontCustom = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-custom"
});

export const metadata: Metadata = {
  title: "Ben Schenk",
  description: "Hi! I'm Ben, a web developer. Visit my website to learn more about me and my work."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={fontCustom.variable}>
      <body>
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
