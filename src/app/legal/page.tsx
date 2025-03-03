import Banner from "@/components/banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
  description: "Ensure you follow these terms and conditions that apply to you when accessing my site.",
};

export default function Legal() {
  return (
    <div className="animate-fade-in space-y-6">
      <Banner imageUrl="/legal-banner.webp" alt="Banner image, that titles the page Legal." />
      <div className="px-2 pt-6">
        <h1 className="mb-4 text-4xl font-bold">Insert</h1>
      </div>
    </div>
  );
}
