import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
    <html lang="en">
      <body className={cn("antialiased min-h-screen max-h-screen overflow-hidden bg-gradient-to-b from-[#232323] to-black", fontCustom.variable)}>
          <header className="hidden sm:block sm:-top-5 md:-top-8 lg:-top-10 xl:-top-12 2xl:-top-16 3xl:-top-24 4xl:-top-32 5xl:-top-40 relative w-[calc(100vw+20px)]">
            <img alt="A decorative display of my name, Ben Schenk" src="/title.svg" className="w-[130%] -mr-20"/>
          </header>
          <main className="fixed styled-scrollbar overflow-auto right-0 pt-20 sm:pt-32 md:pt-40 pl-20 pl-20 lg:pl-40 pb-20 bottom-0 w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[75vw] h-[75vh] sm:h-[85vh] lg:h-[80vh] xl:h-[75vh] 2xl:h-[72vh] 3xl:h-[70vh] bg-black rounded-tl-[3rem] sm:rounded-tl-[6rem]">
            {children}
          </main>
      </body>
    </html>
  );
}
