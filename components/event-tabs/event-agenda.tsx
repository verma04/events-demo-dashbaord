"use client"

import { useState } from "react"
import { Calendar, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { AddSessionModal } from "@/components/modals/add-session-modal"

export function EventAgenda() {
  const [view, setView] = useState("list")

  const sessions = [
    {
      id: "1",
      title: "Opening Keynote",
      time: "9:00 AM - 10:00 AM",
      date: "Nov 15, 2023",
      speaker: "Sarah Johnson",
      room: "Main Hall",
      tags: ["keynote"],
    },
    {
      id: "2",
      title: "Future of AI",
      time: "10:30 AM - 11:30 AM",
      date: "Nov 15, 2023",
      speaker: "Michael Chen",
      room: "Room A",
      tags: ["technical", "ai"],
    },
    {
      id: "3",
      title: "Web Development Trends",
      time: "1:00 PM - 2:00 PM",
      date: "Nov 15, 2023",
      speaker: "Jessica Williams",
      room: "Room B",
      tags: ["technical", "web"],
    },
    {
      id: "4",
      title: "Product Management Workshop",
      time: "2:30 PM - 4:00 PM",
      date: "Nov 15, 2023",
      speaker: "David Rodriguez",
      room: "Workshop Hall",
      tags: ["workshop", "product"],
    },
    {
      id: "5",
      title: "Networking Reception",
      time: "5:00 PM - 7:00 PM",
      date: "Nov 15, 2023",
      speaker: "",
      room: "Lobby",
      tags: ["networking"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Agenda & Timeline</h2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setView("list")}
            className={view === "list" ? "bg-muted" : ""}
          >
            <List className="mr-2 h-4 w-4" />
            List
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setView("calendar")}
            className={view === "calendar" ? "bg-muted" : ""}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Calendar
          </Button>
          <AddSessionModal />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Event Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={view} className="w-full">
            <TabsContent value="list" className="m-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Session</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead>Speaker</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sessions.map((session) => (
                    <TableRow key={session.id}>
                      <TableCell className="font-medium">{session.title}</TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span>{session.date}</span>
                          <span className="text-muted-foreground">{session.time}</span>
                        </div>
                      </TableCell>
                      <TableCell>{session.speaker || "—"}</TableCell>
                      <TableCell>{session.room}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {session.tags.map((tag) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="calendar" className="m-0">
              <div className="flex h-[400px] items-center justify-center border rounded-md p-6">
                <div className="flex flex-col items-center text-center text-muted-foreground">
                  <Calendar className="mb-2 h-10 w-10" />
                  <h3 className="text-lg font-medium">Calendar View</h3>
                  <p className="max-w-md">
                    Calendar view would display a drag-and-drop interface for managing sessions across days and time
                    slots.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
