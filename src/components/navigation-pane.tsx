import Link from "next/link";
import { List, User } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "./button";
import { NavigationSheet } from "./navigation-sheet";

export default function NavigationPane() {
  return (
    <aside className="bg-card mb-0 w-full lg:w-64">
      <nav className="space-y-4 lg:p-4">
        <div className="mb-8 flex w-full justify-between items-center">
          <div className="flex items-center gap-4">
            <Avatar className="size-12">
              <AvatarImage src="https://github.com/shadcn.aspng" className="size-12" />
              <AvatarFallback className="size-12">
                <User weight="thin" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Ben Schenk</h1>
              <p className="text-muted-foreground text-sm">Web Developer</p>
            </div>
          </div>
          <NavigationSheet />
        </div>
        <ul className="space-y-2 hidden lg:block">
          <li>
            <Link
              href="/"
              className="hover:bg-accent hover:text-accent-foreground block rounded px-4 py-2 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:bg-accent hover:text-accent-foreground block rounded px-4 py-2 transition-colors">
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="/hobbies"
              className="hover:bg-accent hover:text-accent-foreground block rounded px-4 py-2 transition-colors">
              Hobbies
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:bg-accent hover:text-accent-foreground block rounded px-4 py-2 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:bg-accent hover:text-accent-foreground block rounded px-4 py-2 transition-colors">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
