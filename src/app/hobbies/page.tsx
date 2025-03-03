import Banner from "@/components/banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hobbies",
  description: "Check out my content relating to video games, music, sport and other entertainment, as well as view my social profiles.",
};

export default function Hobbies() {
  return (
    <div className="animate-fade-in space-y-6">
      <Banner imageUrl="/hobbies-banner.webp" alt="Banner image, that titles the page Hobbies." />
      <div className="px-2 pt-6">
        <h1 className="mb-4 text-4xl font-bold">Insert</h1>
      </div>
    </div>
  );
}
