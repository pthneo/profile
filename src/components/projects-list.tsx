import Link from "next/link"
import Image from "next/image"
import { LinkIcon } from "lucide-react"
import { getPayload } from "payload"
import config from "@payload-config"

async function getProjects() {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: "projects",
      limit: 100,
    })
    return result.docs
  } catch (error) {
    console.error("Error fetching projects:", error)
    // Fallback to empty array if Payload isn't configured yet
    return []
  }
}

function getIconUrl(icon: any): string {
  if (!icon) return "/profile.jpeg"
  
  // If icon is a string (already a URL), return it
  if (typeof icon === "string") return icon
  
  // If icon is a Payload media object
  if (icon && typeof icon === "object") {
    if (icon.url) return icon.url
    if (icon.filename) return `/media/${icon.filename}`
  }
  
  return "/profile.jpeg"
}

export default async function ProjectsList() {
  const projects = await getProjects()
  
  // Fallback to empty state if no projects
  if (projects.length === 0) {
    return (
      <div className="text-center text-zinc-400 py-12">
        <p>No projects found. Add projects through the Payload admin panel.</p>
      </div>
    )
  }

  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="hover:bg-zinc-100 transition-all group dark:hover:bg-zinc-900 rounded-xl p-8 flex flex-col">
              <div className="mb-6 flex justify-start">
                <div className="relative p-4 w-16 h-16 flex items-center justify-center">
                  <Image
                    src={getIconUrl(project.icon)}
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
                <LinkIcon className="w-3 h-3 mt-1 mr-2" />
                {project.website}
              </Link>)}
            </div>
          ))}
        </div>
  )
}

