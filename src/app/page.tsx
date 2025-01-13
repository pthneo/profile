import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 bg-white dark:bg-zinc-900">
      <header className="flex justify-between">
        <p className="sr-only">My Landing Page</p>
        <div className="flex">
          <Button variant="ghost" size="icon">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <ModeToggle />
        </div>
      </header>
    </div>
  );
}
