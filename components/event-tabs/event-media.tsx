"use client"

import { PlusCircle, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function EventMedia() {
  const mediaItems = [
    {
      id: "1",
      type: "image",
      title: "Opening Keynote",
      url: "/placeholder.svg",
      tags: ["keynote", "day1"],
      isPublic: true,
    },
    {
      id: "2",
      type: "image",
      title: "Workshop Session",
      url: "/placeholder.svg",
      tags: ["workshop", "day1"],
      isPublic: true,
    },
    {
      id: "3",
      type: "image",
      title: "Networking Event",
      url: "/placeholder.svg",
      tags: ["networking", "day1"],
      isPublic: true,
    },
    {
      id: "4",
      type: "image",
      title: "Panel Discussion",
      url: "/placeholder.svg",
      tags: ["panel", "day2"],
      isPublic: false,
    },
    {
      id: "5",
      type: "video",
      title: "Closing Remarks",
      url: "/placeholder.svg",
      tags: ["closing", "day3"],
      isPublic: false,
    },
    {
      id: "6",
      type: "image",
      title: "Sponsor Booth",
      url: "/placeholder.svg",
      tags: ["sponsor", "day2"],
      isPublic: true,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Media Gallery</h2>
        <div className="flex gap-2">
          <Button>
            <Upload className="mr-2 h-4 w-4" />
            Upload Media
          </Button>
          <Button variant="outline">
            <PlusCircle className="mr-2 h-4 w-4" />
            Import from Social
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Media</TabsTrigger>
          <TabsTrigger value="public">Public</TabsTrigger>
          <TabsTrigger value="private">Private</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mediaItems.map((item) => (
              <Card key={item.id}>
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <Image src={item.url || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="rounded-full bg-white/80 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-8 w-8"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{item.title}</h3>
                    <Badge variant={item.isPublic ? "default" : "outline"}>
                      {item.isPublic ? "Public" : "Private"}
                    </Badge>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      {item.isPublic ? "Make Private" : "Make Public"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Card className="flex aspect-video items-center justify-center border-dashed">
              <Button variant="ghost">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Media
              </Button>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="public" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mediaItems
              .filter((item) => item.isPublic)
              .map((item) => (
                <Card key={item.id}>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image src={item.url || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="rounded-full bg-white/80 p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-8 w-8"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{item.title}</h3>
                      <Badge variant="default">Public</Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="private" className="mt-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {mediaItems
              .filter((item) => !item.isPublic)
              .map((item) => (
                <Card key={item.id}>
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image src={item.url || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="rounded-full bg-white/80 p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-8 w-8"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{item.title}</h3>
                      <Badge variant="outline">Private</Badge>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
