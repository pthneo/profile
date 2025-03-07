"use client"

import Link from "next/link";
import { List, User } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "./button";
import { NavigationSheet } from "./navigation-sheet";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function NavigationPane() {
  const pathname = usePathname();

  return (
    <aside className="bg-card mb-0 w-full lg:w-64">
      <nav className="space-y-4 lg:p-4">
        <div className="mb-8 flex w-full justify-between items-center">
          <div className="flex items-center gap-4">
            <Avatar className="size-12">
              <AvatarImage src="profile.jpeg" className="size-12" />
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
              className={cn("hover:bg-accent block rounded px-4 py-2 transition-colors",
                pathname === "/"
                ? "bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-muted"
                : "hover:bg-accent",
              )}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={cn("hover:bg-accent block rounded px-4 py-2 transition-colors",
                pathname === "/about"
                ? "bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-muted"
                : "hover:bg-accent",
              )}>
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="/hobbies"
              className={cn("hover:bg-accent block rounded px-4 py-2 transition-colors",
                pathname === "/hobbies"
                ? "bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-muted"
                : "hover:bg-accent",
              )}>
              Hobbies
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={cn("hover:bg-accent block rounded px-4 py-2 transition-colors",
                pathname === "/projects"
                ? "bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-muted"
                : "hover:bg-accent",
              )}>
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={cn("hover:bg-accent block rounded px-4 py-2 transition-colors",
                pathname === "/blog"
                ? "bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-muted"
                : "hover:bg-accent",
              )}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
