"use client";

import { PlusCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreateMessageTemplateModal } from "@/components/modals/create-message-template-modal";

export function EventCommunication() {
  const communications = [
    {
      id: "1",
      subject: "Welcome to Tech Conference 2023",
      recipients: "All Attendees",
      sentDate: "Oct 15, 2023",
      status: "sent",
      openRate: "68%",
    },
    {
      id: "2",
      subject: "Important Event Updates",
      recipients: "All Attendees",
      sentDate: "Oct 30, 2023",
      status: "sent",
      openRate: "72%",
    },
    {
      id: "3",
      subject: "Your Schedule for Day 1",
      recipients: "All Attendees",
      sentDate: "Nov 14, 2023",
      status: "scheduled",
      openRate: "—",
    },
    {
      id: "4",
      subject: "VIP Dinner Invitation",
      recipients: "VIP Attendees",
      sentDate: "—",
      status: "draft",
      openRate: "—",
    },
    {
      id: "5",
      subject: "Post-Event Survey",
      recipients: "All Attendees",
      sentDate: "—",
      status: "draft",
      openRate: "—",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Communication</h2>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Message
        </Button>
      </div>

      <Tabs defaultValue="messages">
        <TabsList>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="compose">Compose</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="messages" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Message History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Sent Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Open Rate</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {communications.map((comm) => (
                    <TableRow key={comm.id}>
                      <TableCell className="font-medium">
                        {comm.subject}
                      </TableCell>
                      <TableCell>{comm.recipients}</TableCell>
                      <TableCell>{comm.sentDate}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            comm.status === "sent"
                              ? "default"
                              : comm.status === "scheduled"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {comm.status.charAt(0).toUpperCase() +
                            comm.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell>{comm.openRate}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compose" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Compose New Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipients">Recipients</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select recipients" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Attendees</SelectItem>
                    <SelectItem value="vip">VIP Attendees</SelectItem>
                    <SelectItem value="speakers">Speakers</SelectItem>
                    <SelectItem value="sponsors">Sponsors</SelectItem>
                    <SelectItem value="custom">Custom Segment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter email subject" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Compose your message..."
                  className="min-h-[200px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Scheduling</Label>
                <div className="flex gap-4">
                  <Button variant="outline" className="flex-1">
                    Schedule for Later
                  </Button>
                  <Button className="flex-1">
                    <Send className="mr-2 h-4 w-4" />
                    Send Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Welcome Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Standard welcome email sent after registration
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Use
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Event Reminder</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reminder email sent 1 day before the event
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Use
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Post-Event Thank You</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Thank you email sent after the event concludes
                </p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Use
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="flex h-[180px] items-center justify-center border-dashed">
              <CreateMessageTemplateModal />
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
