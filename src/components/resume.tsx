import { Badge } from "./badge";
import { ResumeItem } from "./resume-item";

const Education = [
  {
    id: 1,
    school: "University of Queensland",
    degree: "Bachelor of Computer Science & Law",
    start: "February 2023",
    logoURL: "/uq.jpg"
  },
  {
    id: 2,
    school: "University of Queensland",
    degree: "Bachelor of Commerce & Law",
    start: "February 2020",
    end: "January 2023",
    logoURL: "/uq.jpg"
  }
];

const Work = [
  {
    id: 1,
    company: "Freelance",
    title: "Web Designer & Developer",
    start: "October 2019",
    end: "Present",
    logoURL: "/freelance.jpg"
  },
  {
    id: 2,
    company: "Clayton Utz",
    title: "Paralegal",
    start: "August 2024",
    end: "Present",
    logoURL: "/cu.jpg"
  },
  {
    id: 3,
    company: "HWL Ebsworth Lawyers",
    title: "Law Clerk",
    start: "June 2021",
    end: "July 2024",
    logoURL: "/hwle.jpg"
  }
];

const Skills = [
  "React (including React 19)",
  "Next.js (including Next 15)",
  "React Native",
  "WordPress",
  "HTML",
  "CSS",
  "Vanilla JS",
  "Node.js",
  "Express",
  "SQL (including MySQL, Oracle SQL and PostgreSQL)",
  "RESTful APIs",
  "Django",
  "Python",
  "DNS Management",
  "Figma",
  "Canva",
  "Stripe",
  "Groq"
];

export default function Resume() {
  return (
    <div className="py-6">
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-light">Education</h2>
        {Education.map((entry) => (
          <div key={entry.id}>
            <ResumeItem
              key={entry.id}
              logoURL={entry.logoURL}
              altText={entry.school}
              title={entry.school}
              subtitle={entry.degree}
              period={`${entry.start} - ${entry.end ?? "Present"}`}
            />
          </div>
        ))}
      </div>
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="pt-4 text-xl font-light">Work</h2>
        {Work.map((entry) => (
          <div key={entry.id}>
            <ResumeItem
              key={entry.id}
              logoURL={entry.logoURL}
              altText={entry.company}
              title={entry.company}
              subtitle={entry.title}
              period={`${entry.start} - ${entry.end}`}
            />
          </div>
        ))}
      </div>
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="pt-4 text-xl font-light">Skills</h2>
        <div className="flex flex-wrap gap-2">
        {Skills.map((skill, index) => (
          <span key={index}>
            <Badge key={index}>{skill}</Badge>
          </span>
        ))}
        </div>
      </div>
    </div>
  );
}
