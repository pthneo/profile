import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/button";
import { Envelope, LinkedinLogo } from "@/lib/icons";

export default function Home() {
  return (
    <div className="flex h-screen min-h-[800px] flex-col items-center justify-between bg-white p-8 dark:bg-zinc-950">
      <header className="flex w-full max-w-[1680px] justify-end">
        <p className="sr-only">Hi i&apos;m Ben, and welcome to my site.</p>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon">
            <Envelope className="h-5 w-5" />
            <span className="sr-only">Click here to email me.</span>
          </Button>
          <Button variant="ghost" size="icon">
            <LinkedinLogo className="h-5 w-5" />
            <span className="sr-only">Click here to view my LinkedIn.</span>
          </Button>
          <ThemeToggle />
        </div>
      </header>
      <>
        <div className="hidden h-full w-full max-w-[1680px] grid-cols-3 grid-rows-9 gap-x-8 xl:grid">
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
        <div className="sm:grid hidden h-full w-full grid-cols-2 grid-rows-2 gap-8 xl:hidden">
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
