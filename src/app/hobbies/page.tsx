import Banner from "@/components/banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hobbies",
  description: "Check out my content relating to video games, music, sport and other entertainment, as well as view my social profiles.",
};


/**
 * TODO:
 * Add blurb
 * Add discord profile embedding
 * Add spotify profile embedding
 * Add steam profile embedding
 * Add social images and other metadata
 */

export default function Hobbies() {
  return (
    <div className="animate-fade-in space-y-6">
      <Banner imageUrl="/hobbies-banner.webp" alt="Banner image, that titles the page Hobbies." />
      <div className="px-2 pt-6">
        <h1 className="mb-4 text-4xl font-bold">Social profiles</h1>
      </div>
    </div>
  );
}
