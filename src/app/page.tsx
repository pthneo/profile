import { CaretRight } from "@/lib/icons";
import * as motion from "motion/react-client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="h-full w-full">
          <Link href="./works" className="group text-4xl transition-all duration-300 ease-in-out tracking-tighter text-white sm:text-6xl">
            <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[length:100%_2px]">
              View my latest work 
            </span>
            <CaretRight color="black" className="hidden group-hover:inline-flex pl-20 transition-all duration-500 ease-in-out" />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="h-full w-full">
          <h1 className="text-4xl tracking-tighter text-white sm:text-6xl">Check out my bio</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="h-full w-full">
          <h1 className="text-4xl tracking-tighter  text-white sm:text-6xl">Read my blog</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            ease: "easeInOut"
          }}
          className="h-full w-full">
          <h1 className="text-4xl tracking-tighter  text-white sm:text-6xl">Play Prometheus</h1>
        </motion.div>
      </div>
    </>
  );
}
