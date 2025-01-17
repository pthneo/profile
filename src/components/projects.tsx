'use client'

import Slider from "react-slick";
import "@/lib/slick.css";
import "@/lib/slick-theme.css";
import Image from "next/image";
import { Separator } from "./separator";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio.dev"
  },
  {
    title: "Legal Document AI",
    description: "AI-powered legal document analysis and processing system",
    tech: ["Python", "TensorFlow", "Flask"],
    github: "https://github.com/username/legal-ai",
    demo: "https://legal-ai.dev"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    github: "https://github.com/username/ecommerce",
    demo: "https://ecommerce.dev"
  }
]

export default function LatestWorks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="h-full pt-6 pb-12">
    <Slider {...settings} className="h-full border dark:bg-zinc-950 dark:border-zinc-800  rounded-2xl shadow-md dark:shadow-none">
      <div className="flex h-full rounded-2xl flex-col justify-start">
        <img src="/1.png" loading="lazy" className="w-full flex flex-col object-cover rounded-t-2xl min-h-[200px] max-h-[270px]"/>
        <h3 className="text-xl font-medium tracking-tighter mt-6 mx-4">
          {projects[0].title}
        </h3>
        <h4 className="mt-1 mx-4 text-sm font-light">
          {projects[0].description}
        </h4>
        <Separator className="my-6 dark:bg-zinc-800" />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </div>
)}

