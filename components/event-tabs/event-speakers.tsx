"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { AddSpeakerModal } from "@/components/modals/add-speaker-modal"

export function EventSpeakers() {
  const speakers = [
    {
      id: "1",
      name: "Dr. Emily Chen",
      role: "AI Research Lead, TechCorp",
      bio: "Leading researcher in artificial intelligence with over 15 years of experience.",
      sessions: ["Future of AI"],
      image: "/placeholder.svg",
    },
    {
      id: "2",
      name: "James Wilson",
      role: "Senior Developer Advocate, WebTech",
      bio: "Passionate about web technologies and developer experience.",
      sessions: ["Web Development Trends"],
      image: "/placeholder.svg",
    },
    {
      id: "3",
      name: "Maria Rodriguez",
      role: "Product Director, ProductHQ",
      bio: "Experienced product leader with a track record of successful launches.",
      sessions: ["Product Management Workshop"],
      image: "/placeholder.svg",
    },
    {
      id: "4",
      name: "Sarah Johnson",
      role: "CEO, InnovateCo",
      bio: "Visionary leader driving innovation in the tech industry.",
      sessions: ["Opening Keynote"],
      image: "/placeholder.svg",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Speakers & Curators</h2>
        <AddSpeakerModal />
      </div>

      <div className="flex items-center gap-2">
        <Input placeholder="Search speakers..." className="max-w-sm" />
        <Button variant="secondary">Search</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {speakers.map((speaker) => (
          <Card key={speaker.id}>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={speaker.image || "/placeholder.svg"} alt={speaker.name} />
                  <AvatarFallback>{speaker.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 text-lg font-semibold">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground">{speaker.role}</p>
                <p className="mt-2 text-sm">{speaker.bio}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {speaker.sessions.map((session) => (
                    <Badge key={session} variant="secondary">
                      {session}
                    </Badge>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    Assign
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
