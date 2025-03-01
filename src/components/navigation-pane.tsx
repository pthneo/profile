import Link from "next/link";

export default function NavigationPane() {
  return (
    <aside className="w-full lg:w-64 bg-card mb-8 lg:mb-0">
      <nav className="p-4 space-y-4">
        <div className="flex items-center mb-8">
          <img
            src="/placeholder.svg?height=64&width=64"
            alt="John Doe"
            className="w-16 h-16 rounded-full border-2 border-primary mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">Ben Schenk</h1>
            <p className="text-sm text-muted-foreground">Web Developer</p>
          </div>
        </div>
        <ul className="space-y-2">
          <li>
            <Link
              href="/"
              className="block py-2 px-4 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 px-4 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/hobbies"
              className="block py-2 px-4 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Hobbies
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="block py-2 px-4 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block py-2 px-4 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
