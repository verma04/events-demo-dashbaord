"use client"

import { Download, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AddAttendeeModal } from "@/components/modals/add-attendee-modal"

export function EventAttendees() {
  const attendees = [
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@example.com",
      ticketType: "Regular",
      status: "confirmed",
      checkedIn: true,
    },
    {
      id: "2",
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      ticketType: "VIP",
      status: "confirmed",
      checkedIn: false,
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      ticketType: "Regular",
      status: "confirmed",
      checkedIn: true,
    },
    {
      id: "4",
      name: "Sarah Davis",
      email: "sarah.davis@example.com",
      ticketType: "Student",
      status: "confirmed",
      checkedIn: false,
    },
    {
      id: "5",
      name: "David Wilson",
      email: "david.wilson@example.com",
      ticketType: "Regular",
      status: "waitlisted",
      checkedIn: false,
    },
    {
      id: "6",
      name: "Jennifer Lee",
      email: "jennifer.lee@example.com",
      ticketType: "Early Bird",
      status: "confirmed",
      checkedIn: true,
    },
    {
      id: "7",
      name: "Robert Taylor",
      email: "robert.taylor@example.com",
      ticketType: "VIP",
      status: "confirmed",
      checkedIn: false,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Attendees</h2>
        <div className="flex gap-2">
          <AddAttendeeModal />
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Import CSV
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Attendee Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-1 items-center gap-2">
              <Input placeholder="Search attendees..." className="max-w-xs" />
              <Button variant="secondary" size="sm">
                Search
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Attendees</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="waitlisted">Waitlisted</SelectItem>
                  <SelectItem value="checked-in">Checked In</SelectItem>
                  <SelectItem value="vip">VIP</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Ticket Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {attendees.map((attendee) => (
                  <TableRow key={attendee.id}>
                    <TableCell className="font-medium">{attendee.name}</TableCell>
                    <TableCell>{attendee.email}</TableCell>
                    <TableCell>{attendee.ticketType}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            attendee.status === "confirmed"
                              ? "default"
                              : attendee.status === "waitlisted"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {attendee.status.charAt(0).toUpperCase() + attendee.status.slice(1)}
                        </Badge>
                        {attendee.checkedIn && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Checked In
                          </Badge>
                        )}
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
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
