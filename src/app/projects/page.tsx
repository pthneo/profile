import Banner from "@/components/banner";
import ProjectsList from "@/components/projects-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Find out more about my latest web development and software projects, and view some website demos.",
};

/**
* TODO:
* Create project cards
* Create subpages for some projects
* Add social images and other metadata
*/

export default function Projects() {
  return (
    <div className="animate-fade-in space-y-6">
      <Banner imageUrl="/projects-banner.webp" alt="Banner image, that titles the page Projects." />
      <div className="pt-6">
        <ProjectsList />
      </div>
    </div>
  );
}
