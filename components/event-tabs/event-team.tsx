"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { AddTeamMemberModal } from "@/components/modals/add-team-member-modal";
import { EditTeamMemberModal } from "@/components/modals/edit-team-member-modal";

export function EventTeam() {
  const teamMembers = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Admin",
      permissions: ["full_access"],
      lastActive: "Today, 2:30 PM",
      image: "/placeholder.svg",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael@example.com",
      role: "Editor",
      permissions: ["edit_agenda", "manage_speakers"],
      lastActive: "Yesterday, 4:15 PM",
      image: "/placeholder.svg",
    },
    {
      id: "3",
      name: "Jessica Williams",
      email: "jessica@example.com",
      role: "Viewer",
      permissions: ["view_only"],
      lastActive: "Oct 30, 2023",
      image: "/placeholder.svg",
    },
    {
      id: "4",
      name: "David Rodriguez",
      email: "david@example.com",
      role: "Editor",
      permissions: ["manage_attendees", "send_communications"],
      lastActive: "Today, 10:45 AM",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Team & Roles</h2>
        <AddTeamMemberModal />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Team Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Team Member</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {teamMembers.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                        />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {member.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{member.role}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {member.permissions.map((permission) => (
                        <Badge key={permission} variant="outline">
                          {permission.split("_").join(" ")}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{member.lastActive}</TableCell>
                  <TableCell>
                    <EditTeamMemberModal member={member} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Activity Log</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Avatar className="mt-0.5">
                <AvatarImage src="/placeholder.svg" alt="Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Sarah Johnson</span>
                  <span className="text-sm text-muted-foreground">
                    updated the event description
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Today, 2:30 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Avatar className="mt-0.5">
                <AvatarImage src="/placeholder.svg" alt="David Rodriguez" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">David Rodriguez</span>
                  <span className="text-sm text-muted-foreground">
                    added a new speaker
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Today, 10:45 AM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Avatar className="mt-0.5">
                <AvatarImage src="/placeholder.svg" alt="Michael Chen" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Michael Chen</span>
                  <span className="text-sm text-muted-foreground">
                    updated the agenda
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Yesterday, 4:15 PM
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Avatar className="mt-0.5">
                <AvatarImage src="/placeholder.svg" alt="Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Sarah Johnson</span>
                  <span className="text-sm text-muted-foreground">
                    sent an announcement to all attendees
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Oct 30, 2023</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
