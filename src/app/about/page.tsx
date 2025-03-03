import Banner from "@/components/banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Find out more about me, my background in law and web development, and my skills.",
};

export default function AboutMe() {
  return (
    <div className="animate-fade-in space-y-6">
      <Banner imageUrl="/about-banner.webp" alt="Banner image, that titles the page About Me." />
      <div className="px-2 pt-6">
        <h1 className="mb-4 text-4xl font-bold">Insert</h1>
      </div>
    </div>
  );
}
