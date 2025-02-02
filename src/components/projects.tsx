"use client";

import Slider from "react-slick";
import React from "react";
import "@/lib/slick.css";
import "@/lib/slick-theme.css";
import { Separator } from "./separator";
import { Badge } from "./badge";
import { AnimatedCircularProgressBar } from "./progress";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio and profile landing page, built with Next.js. ",
    image: "/1.png",
    tech: ["Next.js", "React", "Tailwind CSS", "MagicUI"],
    github: "https://github.com/pthneo/profile",
    live: "/",
    progress: 100
  },
  {
    title: "UQ Football Society Website & Store",
    image: "/uqf.png",
    description:
      "Constructed a website for a university society, using WordPress and Elementor with a PayPal integration for booking tickets for events, QPay for managing memberships, and live social media feeds with Instagram and Facebook. ",
    tech: ["WordPress", "Elementor", "PayPal"],
    live: "https://uqfootball.com",
    progress: 100
  },
  {
    title: "Morgana Web Application",
    description:
      "As part of a team of three, I am working on a web application for players and gamemasters of Dungeons and Dragons games and other TTRPGs. It is a campaign compendium that makes it easier to take and keep notes, and we are working on an artificial intelligence integration that uses the context of a campaign to generate meaningful and relevant content. I built the authentication system, which incorporates OAuth, TOTP generation, breached password checking, email verification, and strong encryption.",
    image: "/morgana.png",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Drizzle ORM",
      "PostgreSQL",
      "OAuth",
      "Nodemailer",
      "TOTP",
      "Docker",
      "Stripe"
    ],
    progress: 20
  },
  {
    title: "Merit Web Application",
    image: "/merit.png",
    description:
      "For a university project, created a web application using Next.js, React and Supabase for a digital loyalty card system. Business owners could manage their business’ profile using the web application, and I constructed a mobile app using React Native for consumers of the loyalty cards to use. The React Native app implemented features such as QR code scanning and location tracking.",
    tech: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    demo: "https://merit.benschenk.dev",
    progress: 100
  },
  {
    title: "Economeals Web Application",
    image: "/economeals.png",
    description:
      "As a member of a group of six, designed and implemented a functional web application prototype for a university project. Using Django and React, the application allowed users to enter health goals and dietary restrictions for them and their families and it would generate a weekly meal plan using artificial intelligence. It would also provide a shopping list and use the weekly specials at Woolworths and Coles to prioritise certain meals over others. Users could then view and cook recipes and manage their virtual pantry.",
    tech: [
      "Node.js",
      "Express",
      "React",
      "Tailwind CSS",
      "Vite",
      "Django",
      "Python",
      "Heroku",
      "Groq",
      "Resend",
      "Neon"
    ],
    progress: 70
  },
  {
    title: "Kiamba Valley Nursery",
    image: "/kvn.png",
    description:
      "Constructed a landing page website for Kiamba Valley Nursery, built from scratch with HTML/CSS/Vanilla JS. Important to the client was a simple and effective design for a low cost, which was what led me to the current design.",
    tech: ["HTML", "CSS", "Vanilla JS", "Vercel"],
    live: "https://kvn.net.au",
    progress: 100
  }
];

export default function LatestWorks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div className="h-fit sm:h-full pb-12 pt-6">
      <Slider
        {...settings}
        className="h-full overflow-auto rounded-2xl border  shadow-md dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-none">
        {projects.map((project, index) => (
          <div className="flex h-full flex-col justify-start rounded-2xl" key={index}>
            <img
              src={project.image}
              alt="An image of a website project."
              loading="lazy"
              className="flex max-h-[270px] min-h-[200px] w-full flex-col rounded-t-2xl object-cover"
            />
            <h3 className="mx-4 mt-6 text-xl font-medium tracking-tighter">{project.title}</h3>
            <h4 className="mx-4 mt-1 text-sm font-light">{project.description}</h4>
            <Separator className="my-6 dark:bg-zinc-800" />
            <p className="mx-4 mb-2">Technologies Used</p>
            <div className="mx-4">
              {project.tech.map((tech, index) => (
                <span key={index} className="mr-2">
                  <Badge key={index}>{tech}</Badge>
                </span>
              ))}
            </div>
            <Separator className="my-6 dark:bg-zinc-800" />
            {(project.github || project.demo || project.live) && (
              <>
                <div className="mx-4 flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Badge>GitHub</Badge>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Badge>Demo</Badge>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Badge>Live Website</Badge>
                    </a>
                  )}
                </div>
                {/*<Separator className="my-6 dark:bg-zinc-800" />*/}
              </>
            )}{/*
            <p className="mx-4 mb-2">Progress</p>
            <AnimatedCircularProgressBar
              max={100}
              min={0}
              value={project.progress}
              gaugePrimaryColor="#2563EB"
              gaugeSecondaryColor="#D1D5DB"
              className="mx-auto"
            />*/}
          </div>
        ))}
      </Slider>
    </div>
  );
}
