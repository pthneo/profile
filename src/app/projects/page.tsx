import Banner from "@/components/banner";
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
      <div className="px-2 pt-6">
        <h1 className="mb-4 text-4xl font-bold">Insert</h1>
      </div>
    </div>
  );
}
