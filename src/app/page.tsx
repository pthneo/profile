import { Button } from "@/components/button"
import Banner from "@/components/banner"
import { GithubLogo, LinkedinLogo, XLogo, RedditLogo, EnvelopeSimple } from "@/components/icons"

export default function Home() {
  return (
    <div className="space-y-6 animate-fade-in">
      <Banner imageUrl="/banner-home.svg" alt="Home Banner" />
      <div className="pt-6 px-2">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Profile</h1>
        <p className="text-xl mb-4 text-muted-foreground">
          Hello! I'm John Doe, a passionate developer with expertise in web technologies. This documentation-style
          website showcases my skills, projects, and experience.
        </p>
        <p className="text-lg mb-6 text-muted-foreground">
          Feel free to explore the different sections using the sidebar navigation.
        </p>
        <p className="text-xl mb-4 text-muted-foreground">
          Hello! I'm John Doe, a passionate developer with expertise in web technologies. This documentation-style
          website showcases my skills, projects, and experience.
        </p>
        <p className="text-lg mb-6 text-muted-foreground">
          Feel free to explore the different sections using the sidebar navigation.
        </p>
        <p className="text-xl mb-4 text-muted-foreground">
          Hello! I'm John Doe, a passionate developer with expertise in web technologies. This documentation-style
          website showcases my skills, projects, and experience.
        </p>
        <p className="text-lg mb-6 text-muted-foreground">
          Feel free to explore the different sections using the sidebar navigation.
        </p>
        <p className="text-xl mb-4 text-muted-foreground">
          Hello! I'm John Doe, a passionate developer with expertise in web technologies. This documentation-style
          website showcases my skills, projects, and experience.
        </p>
        <p className="text-lg mb-6 text-muted-foreground">
          Feel free to explore the different sections using the sidebar navigation.
        </p>
        <p className="text-xl mb-4 text-muted-foreground">
          Hello! I'm John Doe, a passionate developer with expertise in web technologies. This documentation-style
          website showcases my skills, projects, and experience.
        </p>
        <p className="text-lg mb-6 text-muted-foreground">
          Feel free to explore the different sections using the sidebar navigation.
        </p>
        <p className="text-xl mb-4 text-muted-foreground">
          Hello! I'm John Doe, a passionate developer with expertise in web technologies. This documentation-style
          website showcases my skills, projects, and experience.
        </p>
        <p className="text-lg mb-6 text-muted-foreground">
          Feel free to explore the different sections using the sidebar navigation.
        </p>
        <p className="text-xl mb-4 text-muted-foreground">
          Hello! I'm John Doe, a passionate developer with expertise in web technologies. This documentation-style
          website showcases my skills, projects, and experience.
        </p>
        <p className="text-lg mb-6 text-muted-foreground">
          Feel free to explore the different sections using the sidebar navigation.
        </p>
        <div className="flex space-x-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <GithubLogo className="h-5 w-5" />  
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <LinkedinLogo className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <XLogo className="h-5 w-5" />
              <span className="sr-only">X</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

