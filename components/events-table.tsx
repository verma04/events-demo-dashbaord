"use client"
import Link from "next/link"
import { Copy, Edit, MoreHorizontal, Trash } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function EventsTable() {
  const events = [
    {
      id: "1",
      title: "Tech Conference 2023",
      date: "Nov 15-18, 2023",
      location: "San Francisco, CA",
      attendees: 1200,
      status: "upcoming",
    },
    {
      id: "2",
      title: "Product Launch",
      date: "Dec 5, 2023",
      location: "New York, NY",
      attendees: 500,
      status: "upcoming",
    },
    {
      id: "3",
      title: "Annual Summit",
      date: "Jan 20-22, 2024",
      location: "Chicago, IL",
      attendees: 800,
      status: "upcoming",
    },
    {
      id: "4",
      title: "Developer Workshop",
      date: "Feb 10, 2024",
      location: "Austin, TX",
      attendees: 150,
      status: "draft",
    },
    {
      id: "5",
      title: "Marketing Conference",
      date: "Oct 10-12, 2023",
      location: "Los Angeles, CA",
      attendees: 950,
      status: "past",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Event Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Attendees</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="w-[100px]">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event) => (
          <TableRow key={event.id}>
            <TableCell className="font-medium">
              <Link href={`/events/${event.id}`} className="hover:underline">
                {event.title}
              </Link>
            </TableCell>
            <TableCell>{event.date}</TableCell>
            <TableCell>{event.location}</TableCell>
            <TableCell>{event.attendees}</TableCell>
            <TableCell>
              <Badge
                variant={event.status === "upcoming" ? "default" : event.status === "past" ? "secondary" : "outline"}
              >
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </Badge>
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href={`/events/${event.id}`}>
                      <Edit className="mr-2 h-4 w-4" />
                      <span>Edit</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Copy className="mr-2 h-4 w-4" />
                    <span>Duplicate</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <Trash className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
