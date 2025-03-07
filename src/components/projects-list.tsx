import Link from "next/link"
import Image from "next/image"
import { LinkIcon } from "lucide-react"

const projects = [
  {
    id: "portfolio",
    title: "This Website",
    description: "A lightweight portfolio and blog website built with Next.js and optimised for SEO.",
    website: "benschenk.dev",
    icon: "/profile.jpeg",
  },
  {
    id: "merit",
    title: "Merit",
    description:
      "An online loyalty card SaaS project for small businesses and restaruants.",
    website: "merit.benschenk.dev",
    icon: "/merit.webp",
  },
  {
    id: "kvn",
    title: "Kiamba Valley Nursery",
    description:
      "An optimised static website for a tree nursery built with Vanilla HTML, CSS & JS.",
    website: "kvn.net.au",
    icon: "/kvn.jpg",
  },
  {
    id: "uqf",
    title: "UQ Football Society",
    description:
      "A full-stack web application for a university society built with Wordpress.",
    website: "uqfootball.com",
    icon: "/uqf.webp",
  },
  {
    id: "morgana",
    title: "Morgana",
    description:
      "A full-stack web app campaign manager and game notebook for TTRPGs built with Next.js.",
    icon: "/morgana.webp",
  },
  {
    id: "economeals",
    title: "Economeals",
    description:
      "A full-stack AI-powered recipe and diet planner app built with React and Django.",
    icon: "/economeals.webp",
  },
  {
    id: "merit-mobile",
    title: "Merit (Mobile)",
    description:
      "A loyalty card wallet cross-platform mobile application built with React Native.",
    icon: "/merit.webp",
  },
]

export default function ProjectsList() {
  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="hover:bg-zinc-100 transition-all group dark:hover:bg-zinc-900 rounded-xl p-8 flex flex-col">
              <div className="mb-6 flex justify-start">
                <div className="relative p-4 w-16 h-16 flex items-center justify-center">
                  <Image
                    src={project.icon}
                    alt={`${project.title}'s logo`}
                    fill
                    className="object-contain rounded-full border border-zinc-300 dark:border-0"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

              <p className="text-zinc-400 flex-grow">{project.description}</p>

              {project.website && (
              <Link
                href={`https://${project.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-5 group-hover:text-purple-700 transition-all"
              >
                <LinkIcon className="w-5 h-5 mr-2" />
                {project.website}
              </Link>)}
            </div>
          ))}
        </div>
  )
}

