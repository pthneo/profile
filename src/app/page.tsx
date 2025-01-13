import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/button";
import { Envelope, GithubLogo } from "@/lib/icons";
import Ripple from "@/components/ripple";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen min-h-[800px] flex-col items-center justify-between bg-white p-8 dark:bg-zinc-950">
      <header className="flex w-full max-w-[1680px] justify-end">
        <p className="sr-only">Hi i&apos;m Ben, and welcome to my site.</p>
        <div className="flex gap-4 z-10">
          <Button variant="ghost" size="icon">
            <Link href="mailto:ben@schenk.com" prefetch={false} target="_blank">
            <Envelope className="h-5 w-5" />
            <span className="sr-only">Click here to email me.</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/pthneo" prefetch={false} target="_blank">
              <GithubLogo className="h-5 w-5" />
              <span className="sr-only">Click here to view my GitHub.</span>
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </header>
      <>
        
          <div className="absolute h-full top-[160px] left-1/2 -translate-x-1/2 ">
            <div className="flex w-full items-center justify-center">
              <Image src="/profile.webp" alt="A photo of me!" height={200} width={200} />
            </div>
            <h1 className="mt-4 text-4xl text-center font-bold">Hi! I&apos;m Ben</h1>
            <h3 className="text-center mt-3">Web Developer and Legal Enthusiast</h3>
          </div>
          <div className="absolute  z-0 h-[500px] w-full">
            <Ripple numCircles={6} mainCircleSize={280} className="hidden sm:block xl:hidden"/>
            <Ripple numCircles={10} mainCircleSize={280} className="hidden xl:block"/>
          </div>
          
      
        <div className="hidden z-10 h-full w-full max-w-[1680px] grid-cols-3 grid-rows-9 gap-x-8 xl:grid">
          <div className="col-span-1 row-span-7 row-start-3 rounded-xl bg-zinc-50 p-12 shadow-md dark:bg-black">
            <h3 className="text-2xl font-light">Latest Works</h3>
          </div>
          <div className="col-span-1 row-span-5 row-start-5 rounded-xl bg-zinc-50 p-12 shadow-md dark:bg-black">
            <h3 className="text-2xl font-light">About Me</h3>
          </div>
          <div className="col-span-1 row-span-7 row-start-3 rounded-xl bg-zinc-50 p-12 shadow-md dark:bg-black">
            <h3 className="text-2xl font-light">Resume</h3>
          </div>
        </div>
        <div className="hidden h-full mt-[440px] z-10 w-full grid-cols-2 grid-rows-2 gap-8 sm:grid xl:hidden">
          <div className="col-span-2 row-span-1 rounded-xl bg-zinc-50 p-12 shadow-md dark:bg-black">
            <h3 className="text-2xl font-light">About Me</h3>
          </div>
          <div className="col-span-1 row-span-1 rounded-xl bg-zinc-50 p-12 shadow-md dark:bg-black">
            <h3 className="text-2xl font-light">Latest Works</h3>
          </div>

          <div className="col-span-1 row-span-1 rounded-xl bg-zinc-50 p-12 shadow-md dark:bg-black">
            <h3 className="text-2xl font-light">Resume</h3>
          </div>
        </div>
      </>
    </div>
  );
}
