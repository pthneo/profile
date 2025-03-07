import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ExternalLink, Music, Play, User } from "lucide-react"

export default function SpotifyProfileCard() {
  return (
    <Card className="w-full max-w-md border-green-500/20 overflow-hidden">
      <div className="h-16 bg-gradient-to-r from-green-500 to-green-600"></div>
      <CardHeader className="pt-4 pb-2">
        <div className="flex items-start gap-4">
          <Avatar className="h-20 w-20 border-4 border-background -mt-12">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Profile picture" />
            <AvatarFallback className="bg-green-100 text-green-800">
              <User className="h-8 w-8" />
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1.5">
            <CardTitle className="text-xl">Alex Johnson</CardTitle>
            <CardDescription className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/30"
              >
                Premium
              </Badge>
              <span className="text-sm text-muted-foreground">12 followers</span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-2 flex items-center gap-1">
            <Music className="h-4 w-4 text-green-500" /> Recently Played
          </h3>
          <div className="space-y-3">
            {recentlyPlayed.map((track) => (
              <div key={track.id} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-md overflow-hidden flex-shrink-0 bg-muted">
                  <img
                    src={track.albumCover || "/placeholder.svg"}
                    alt={track.album}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">{track.title}</p>
                  <p className="text-xs text-muted-foreground truncate">{track.artist}</p>
                </div>
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                  <Play className="h-4 w-4 fill-current" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="text-sm font-medium mb-2">Public Playlists</h3>
          <div className="grid grid-cols-3 gap-2">
            {playlists.map((playlist) => (
              <div key={playlist.id} className="space-y-1">
                <div className="aspect-square rounded-md overflow-hidden bg-muted">
                  <img
                    src={playlist.cover || "/placeholder.svg"}
                    alt={playlist.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-xs font-medium truncate">{playlist.name}</p>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/50 py-3">
        <Button variant="outline" size="sm">
          Follow
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="text-green-600 border-green-600/20 bg-green-50 hover:bg-green-100 hover:text-green-700"
        >
          <ExternalLink className="h-3.5 w-3.5 mr-1" />
          Open in Spotify
        </Button>
      </CardFooter>
    </Card>
  )
}

// Sample data
const recentlyPlayed = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    albumCover: "/placeholder.svg?height=40&width=40&text=BL",
  },
  {
    id: 2,
    title: "As It Was",
    artist: "Harry Styles",
    album: "Harry's House",
    albumCover: "/placeholder.svg?height=40&width=40&text=AIW",
  },
  {
    id: 3,
    title: "Heat Waves",
    artist: "Glass Animals",
    album: "Dreamland",
    albumCover: "/placeholder.svg?height=40&width=40&text=HW",
  },
]

const playlists = [
  {
    id: 1,
    name: "Chill Vibes",
    cover: "/placeholder.svg?height=80&width=80&text=CV",
  },
  {
    id: 2,
    name: "Workout Mix",
    cover: "/placeholder.svg?height=80&width=80&text=WM",
  },
  {
    id: 3,
    name: "Road Trip",
    cover: "/placeholder.svg?height=80&width=80&text=RT",
  },
]

