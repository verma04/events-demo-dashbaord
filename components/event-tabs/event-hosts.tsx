"use client"

import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function EventHosts() {
  const hosts = [
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Main Host",
      permissions: ["full_access"],
      image: "/placeholder.svg",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael@example.com",
      role: "Co-host",
      permissions: ["edit_agenda", "manage_speakers"],
      image: "/placeholder.svg",
    },
    {
      id: "3",
      name: "Jessica Williams",
      email: "jessica@example.com",
      role: "Co-host",
      permissions: ["manage_attendees", "send_communications"],
      image: "/placeholder.svg",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Hosts & Co-hosts</h2>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Host
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Host Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Host</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {hosts.map((host) => (
                <TableRow key={host.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={host.image || "/placeholder.svg"} alt={host.name} />
                        <AvatarFallback>{host.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{host.name}</div>
                        <div className="text-sm text-muted-foreground">{host.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{host.role}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {host.permissions.map((permission) => (
                        <Badge key={permission} variant="outline">
                          {permission.split("_").join(" ")}
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
        </CardContent>
      </Card>
    </div>
  )
}
