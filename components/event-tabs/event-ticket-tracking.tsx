"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Download,
  Filter,
  QrCode,
  Search,
  UserPlus,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

// Sample ticket tracking data
const ticketTypes = [
  {
    id: "1",
    name: "Early Bird",
    price: 199,
    available: 100,
    sold: 100,
    checkedIn: 75,
    status: "sold_out",
  },
  {
    id: "2",
    name: "Regular",
    price: 299,
    available: 500,
    sold: 320,
    checkedIn: 180,
    status: "on_sale",
  },
  {
    id: "3",
    name: "VIP",
    price: 499,
    available: 50,
    sold: 28,
    checkedIn: 15,
    status: "on_sale",
  },
  {
    id: "4",
    name: "Student",
    price: 99,
    available: 200,
    sold: 175,
    checkedIn: 120,
    status: "on_sale",
  },
];

// Sample attendee data
const attendees = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@example.com",
    ticketType: "Regular",
    purchaseDate: "2023-11-10T14:30:00",
    status: "confirmed",
    checkedIn: true,
    checkedInTime: "2023-11-15T09:15:00",
    paymentStatus: "paid",
  },
  {
    id: "2",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    ticketType: "VIP",
    purchaseDate: "2023-11-08T10:45:00",
    status: "confirmed",
    checkedIn: false,
    checkedInTime: null,
    paymentStatus: "paid",
  },
  {
    id: "3",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    ticketType: "Regular",
    purchaseDate: "2023-11-12T16:20:00",
    status: "confirmed",
    checkedIn: true,
    checkedInTime: "2023-11-15T09:30:00",
    paymentStatus: "paid",
  },
  {
    id: "4",
    name: "Sarah Davis",
    email: "sarah.davis@example.com",
    ticketType: "Student",
    purchaseDate: "2023-11-05T11:15:00",
    status: "confirmed",
    checkedIn: false,
    checkedInTime: null,
    paymentStatus: "paid",
  },
  {
    id: "5",
    name: "David Wilson",
    email: "david.wilson@example.com",
    ticketType: "Regular",
    purchaseDate: "2023-11-14T09:10:00",
    status: "waitlisted",
    checkedIn: false,
    checkedInTime: null,
    paymentStatus: "pending",
  },
  {
    id: "6",
    name: "Jennifer Lee",
    email: "jennifer.lee@example.com",
    ticketType: "Early Bird",
    purchaseDate: "2023-10-20T14:45:00",
    status: "confirmed",
    checkedIn: true,
    checkedInTime: "2023-11-15T08:50:00",
    paymentStatus: "paid",
  },
  {
    id: "7",
    name: "Robert Taylor",
    email: "robert.taylor@example.com",
    ticketType: "VIP",
    purchaseDate: "2023-11-07T13:30:00",
    status: "confirmed",
    checkedIn: false,
    checkedInTime: null,
    paymentStatus: "paid",
  },
];

// Sample roles for ticket tracking
const trackingRoles = [
  {
    id: "1",
    name: "Check-in Staff",
    permissions: ["view_attendees", "check_in", "view_tickets"],
    description: "Can check in attendees at the event",
  },
  {
    id: "2",
    name: "Ticket Manager",
    permissions: [
      "view_attendees",
      "check_in",
      "view_tickets",
      "manage_tickets",
      "export_data",
    ],
    description: "Can manage tickets and check in attendees",
  },
  {
    id: "3",
    name: "Registration Desk",
    permissions: ["view_attendees", "check_in", "view_tickets", "register_new"],
    description: "Can register new attendees and check in existing ones",
  },
  {
    id: "4",
    name: "Analytics Viewer",
    permissions: ["view_attendees", "view_tickets", "view_analytics"],
    description: "Can view attendance data and analytics",
  },
];

export function EventTicketTracking() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [ticketTypeFilter, setTicketTypeFilter] = useState("all");

  // Filter attendees based on search term and filters
  const filteredAttendees = attendees.filter((attendee) => {
    const matchesSearch =
      attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendee.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || attendee.status === statusFilter;
    const matchesTicketType =
      ticketTypeFilter === "all" || attendee.ticketType === ticketTypeFilter;

    return matchesSearch && matchesStatus && matchesTicketType;
  });

  // Calculate totals and stats
  const totalAttendees = attendees.length;
  const totalCheckedIn = attendees.filter((a) => a.checkedIn).length;
  const checkInPercentage = Math.round((totalCheckedIn / totalAttendees) * 100);

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Ticket & Attendee Tracking</h2>
        <div className="flex gap-2">
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Attendee
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Attendees
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAttendees}</div>
            <p className="text-xs text-muted-foreground">
              Across {ticketTypes.length} ticket types
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Check-in Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{checkInPercentage}%</div>
            <div className="mt-2">
              <Progress value={checkInPercentage} className="h-2" />
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {totalCheckedIn} of {totalAttendees} checked in
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Ticket Sales
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {ticketTypes.reduce((sum, ticket) => sum + ticket.sold, 0)} /{" "}
              {ticketTypes.reduce((sum, ticket) => sum + ticket.available, 0)}
            </div>
            <div className="mt-2">
              <Progress
                value={
                  (ticketTypes.reduce((sum, ticket) => sum + ticket.sold, 0) /
                    ticketTypes.reduce(
                      (sum, ticket) => sum + ticket.available,
                      0
                    )) *
                  100
                }
                className="h-2"
              />
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {Math.round(
                (ticketTypes.reduce((sum, ticket) => sum + ticket.sold, 0) /
                  ticketTypes.reduce(
                    (sum, ticket) => sum + ticket.available,
                    0
                  )) *
                  100
              )}
              % of tickets sold
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="attendees">
        <TabsList>
          <TabsTrigger value="attendees">Attendees</TabsTrigger>
          <TabsTrigger value="tickets">Ticket Types</TabsTrigger>
          <TabsTrigger value="check-in">Check-in</TabsTrigger>
          <TabsTrigger value="roles">Tracking Roles</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="attendees" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendee Management</CardTitle>
              <CardDescription>
                View and manage all registered attendees for this event.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-1 items-center gap-2">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search attendees..."
                      className="pl-8"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-4" align="end">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-medium">Status</h4>
                          <Select
                            value={statusFilter}
                            onValueChange={setStatusFilter}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Statuses</SelectItem>
                              <SelectItem value="confirmed">
                                Confirmed
                              </SelectItem>
                              <SelectItem value="waitlisted">
                                Waitlisted
                              </SelectItem>
                              <SelectItem value="cancelled">
                                Cancelled
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">Ticket Type</h4>
                          <Select
                            value={ticketTypeFilter}
                            onValueChange={setTicketTypeFilter}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select ticket type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All Tickets</SelectItem>
                              {ticketTypes.map((ticket) => (
                                <SelectItem key={ticket.id} value={ticket.name}>
                                  {ticket.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
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
                      <TableHead>Check-in</TableHead>
                      <TableHead className="w-[100px]">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAttendees.map((attendee) => (
                      <TableRow key={attendee.id}>
                        <TableCell className="font-medium">
                          {attendee.name}
                        </TableCell>
                        <TableCell>{attendee.email}</TableCell>
                        <TableCell>{attendee.ticketType}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              attendee.status === "confirmed"
                                ? "default"
                                : attendee.status === "waitlisted"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {attendee.status.charAt(0).toUpperCase() +
                              attendee.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {attendee.checkedIn ? (
                              <>
                                <Badge
                                  variant="outline"
                                  className="bg-green-50 text-green-700 border-green-200 mr-2"
                                >
                                  Checked In
                                </Badge>
                                <span className="text-xs text-muted-foreground">
                                  {attendee.checkedInTime
                                    ? formatDate(attendee.checkedInTime)
                                    : "N/A"}
                                </span>
                              </>
                            ) : (
                              <Badge variant="outline">Not Checked In</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                            {!attendee.checkedIn && (
                              <Button variant="outline" size="sm">
                                Check In
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tickets" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Ticket Types</CardTitle>
              <CardDescription>
                Manage ticket types and monitor sales progress.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Availability</TableHead>
                    <TableHead>Check-in Rate</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ticketTypes.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">
                        {ticket.name}
                      </TableCell>
                      <TableCell>${ticket.price}</TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>{ticket.sold} sold</span>
                            <span>{ticket.available} total</span>
                          </div>
                          <Progress
                            value={(ticket.sold / ticket.available) * 100}
                            className="h-2"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>{ticket.checkedIn} checked in</span>
                            <span>{ticket.sold} sold</span>
                          </div>
                          <Progress
                            value={(ticket.checkedIn / ticket.sold) * 100}
                            className="h-2"
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            ticket.status === "on_sale"
                              ? "default"
                              : ticket.status === "sold_out"
                              ? "destructive"
                              : "outline"
                          }
                        >
                          {ticket.status === "on_sale"
                            ? "On Sale"
                            : ticket.status === "sold_out"
                            ? "Sold Out"
                            : "Draft"}
                        </Badge>
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
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="check-in" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Check-in Station</CardTitle>
              <CardDescription>
                Quickly check in attendees by scanning QR codes or searching by
                name/email.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="check-in-search">Search Attendee</Label>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="check-in-search"
                        placeholder="Name, email or ticket ID..."
                        className="pl-8"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="auto-check-in" />
                    <Label htmlFor="auto-check-in">Auto check-in on scan</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="print-badge" />
                    <Label htmlFor="print-badge">Print badge on check-in</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="send-notification" />
                    <Label htmlFor="send-notification">
                      Send confirmation email
                    </Label>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center border rounded-md p-6">
                  <QrCode className="h-16 w-16 mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Scan QR Code</h3>
                  <p className="text-sm text-muted-foreground text-center mt-2">
                    Point the camera at the attendee's ticket QR code to check
                    them in instantly.
                  </p>
                  <Button className="mt-4">Start Scanning</Button>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Recent Check-ins</h3>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Ticket Type</TableHead>
                        <TableHead>Check-in Time</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {attendees
                        .filter((a) => a.checkedIn)
                        .sort(
                          (a, b) =>
                            new Date(b.checkedInTime || 0).getTime() -
                            new Date(a.checkedInTime || 0).getTime()
                        )
                        .slice(0, 5)
                        .map((attendee) => (
                          <TableRow key={attendee.id}>
                            <TableCell className="font-medium">
                              {attendee.name}
                            </TableCell>
                            <TableCell>{attendee.ticketType}</TableCell>
                            <TableCell>
                              {formatDate(attendee.checkedInTime || "")}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className="bg-green-50 text-green-700 border-green-200"
                              >
                                Checked In
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Tracking Roles</CardTitle>
              <CardDescription>
                Manage staff roles for ticket tracking and check-in.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Available Roles</h3>
                <Button>
                  <UserPlus className="mr-2 h-4 w-4" />
                  Create New Role
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {trackingRoles.map((role) => (
                  <Card key={role.id} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <CardTitle>{role.name}</CardTitle>
                      <CardDescription>{role.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">Permissions:</h4>
                        <div className="flex flex-wrap gap-1">
                          {role.permissions.map((permission) => (
                            <Badge key={permission} variant="outline">
                              {permission.split("_").join(" ")}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <div className="border-t p-4 flex justify-end gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        Assign
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Analytics</CardTitle>
              <CardDescription>
                Visualize attendance data and track check-in patterns.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-6 border rounded-md">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Analytics Dashboard</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Detailed analytics charts and visualizations would be
                    displayed here.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 mt-6 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Check-in Rate by Ticket Type
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {ticketTypes.map((ticket) => (
                        <div key={ticket.id} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{ticket.name}</span>
                            <span>
                              {Math.round(
                                (ticket.checkedIn / ticket.sold) * 100
                              )}
                              %
                            </span>
                          </div>
                          <Progress
                            value={(ticket.checkedIn / ticket.sold) * 100}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      Check-in Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center">
                      <p className="text-sm text-muted-foreground">
                        Timeline chart would be displayed here
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
