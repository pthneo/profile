import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/button";
import { Envelope, GithubLogo } from "@/lib/icons";
import Link from "next/link";
import { AuroraBackground } from "@/components/aurora";
import * as motion from "motion/react-client";
import LatestWorks from "@/components/projects";
import Resume from "@/components/resume";

export default function Home() {
  return (
    <AuroraBackground className="flex h-screen min-h-[800px] flex-col items-center justify-between p-8 tracking-tighter dark:text-white">
      <header className="flex w-full max-w-[1680px] justify-end ">
        <p className="sr-only">Hi i&apos;m Ben, and welcome to my site.</p>
        <div className="z-10 flex gap-4">
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
        <div className="absolute left-1/2 top-[15vh] sm:top-[10vh] -translate-x-1/2 ">
          <div className="flex w-full items-center justify-center">
            <Image src="/profile.webp" alt="A photo of me!" priority height={200} width={200} />
          </div>
          <h1 className="mt-4 text-center text-4xl font-bold">Hi! I&apos;m Ben</h1>
          <h2 className="mt-3 text-center font-medium">Web & Mobile Developer</h2>
        </div>

        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="z-10 hidden h-full w-full max-w-[1680px] max-h-[1300px] grid-cols-3 grid-rows-9 gap-x-8 xl:grid">
          <div className="col-span-1 row-span-7 row-start-3 rounded-3xl bg-zinc-50 p-12 shadow-md dark:bg-black">
            <h2 className="text-2xl font-medium tracking-tighter dark:text-white">Latest Works</h2>
            <LatestWorks />
          </div>
          <div className="col-span-1 row-span-5 row-start-5 rounded-3xl bg-zinc-50 p-12 shadow-md dark:bg-black">
            <h2 className="text-2xl font-medium tracking-tighter dark:text-white">About Me</h2>
            <p className="mt-3 text-sm font-normal text-zinc-">
              I am a full-stack web and mobile developer, specialising in React, React Native and
              Next.js. I have been in the web design industry for around five years, and work on
              projects for startups, non-profits, eCommerce, and other businesses. <br />
              <br />I am also
              currently working on some open-source projects, available on GitHub. Feel free to help
              me out with feedback or a pull request! <br />
              <br />
              Outside of work, I am a student at the University of Queensland, studing Law and
              Computer Science, and with a passion for football and video games.{" "}
            </p>
            <h2 className="text-2xl mt-8 font-medium tracking-tighter dark:text-white">Get in Touch</h2>
            <p className="mt-3 text-md font-normal text-zinc-">
              Want to chat? Feel free to send me an email using the icon above.
            </p>
          </div>
          <div className="col-span-1 row-span-7 row-start-3 rounded-3xl bg-zinc-50 p-12 shadow-md dark:bg-black">
            <h2 className="text-2xl font-medium tracking-tighter dark:text-white">Resume</h2>
            <Resume />
          </div>
        </motion.div>
        <div className="z-10 mt-[440px] hidden h-full w-full grid-cols-2 grid-rows-2 gap-8 sm:grid xl:hidden">
          <div className="col-span-2 row-span-1 rounded-3xl bg-zinc-50 p-12 shadow-md dark:bg-black">
            <h2 className="text-2xl font-medium tracking-tighter">About Me</h2>
          </div>
          <div className="col-span-1 row-span-1 rounded-3xl bg-zinc-50 p-12 shadow-md dark:bg-black">
            <h2 className="text-2xl font-medium tracking-tighter">Latest Works</h2>
          </div>
          <div className="col-span-1 row-span-1 rounded-3xl bg-zinc-50 p-12 shadow-md dark:bg-black">
            <h2 className="text-2xl font-medium tracking-tighter">Resume</h2>
            <Resume />
          </div>
        </div>
      </>
    </AuroraBackground>
  );
}
