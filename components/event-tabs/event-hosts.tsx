"use client";

import type React from "react";

import { useState } from "react";
import { PlusCircle, LinkIcon, X } from "lucide-react";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { EditHostModal } from "@/components/modals/edit-host-modal";

export function EventHosts() {
  const [open, setOpen] = useState(false);
  const [hosts, setHosts] = useState([
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Main Host",
      permissions: ["full_access"],
      image: "/placeholder.svg",
      company: "TechCorp",
      companyUrl: "https://techcorp.example.com",
    },
    {
      id: "2",
      name: "Michael Chen",
      email: "michael@example.com",
      role: "Co-host",
      permissions: ["edit_agenda", "manage_speakers"],
      image: "/placeholder.svg",
      company: "InnovateLabs",
      companyUrl: "https://innovatelabs.example.com",
    },
    {
      id: "3",
      name: "Jessica Williams",
      email: "jessica@example.com",
      role: "Co-host",
      permissions: ["manage_attendees", "send_communications"],
      image: "/placeholder.svg",
      company: null,
      companyUrl: null,
    },
  ]);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentHost, setCurrentHost] = useState<(typeof hosts)[0] | null>(
    null
  );

  const handleEditHost = (host: (typeof hosts)[0]) => {
    setCurrentHost(host);
    setEditModalOpen(true);
  };

  const handleSaveHost = (updatedHost: (typeof hosts)[0]) => {
    setHosts(
      hosts.map((host) => (host.id === updatedHost.id ? updatedHost : host))
    );
  };

  const handleAddHost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newHost = {
      id: (hosts.length + 1).toString(),
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      role: formData.get("role") as string,
      permissions: Array.from(formData.getAll("permissions") as string[]),
      image: "/placeholder.svg",
      company: (formData.get("company") as string) || null,
      companyUrl: (formData.get("companyUrl") as string) || null,
    };

    setHosts([...hosts, newHost]);
    setOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Hosts & Co-hosts</h2>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Host
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Host</DialogTitle>
              <DialogDescription>
                Add a new host or co-host to your event.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddHost}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter host's full name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter host's email"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="role">Role</Label>
                  <Select name="role" defaultValue="Co-host">
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Main Host">Main Host</SelectItem>
                      <SelectItem value="Co-host">Co-host</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Enter company name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="companyUrl">Company URL (Optional)</Label>
                  <div className="flex items-center gap-2">
                    <LinkIcon className="h-4 w-4 text-muted-foreground" />
                    <Input
                      id="companyUrl"
                      name="companyUrl"
                      placeholder="https://company.example.com"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>Permissions</Label>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="full_access"
                        name="permissions"
                        value="full_access"
                      />
                      <Label
                        htmlFor="full_access"
                        className="text-sm font-normal"
                      >
                        Full Access
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="edit_agenda"
                        name="permissions"
                        value="edit_agenda"
                      />
                      <Label
                        htmlFor="edit_agenda"
                        className="text-sm font-normal"
                      >
                        Edit Agenda
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="manage_speakers"
                        name="permissions"
                        value="manage_speakers"
                      />
                      <Label
                        htmlFor="manage_speakers"
                        className="text-sm font-normal"
                      >
                        Manage Speakers
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="manage_attendees"
                        name="permissions"
                        value="manage_attendees"
                      />
                      <Label
                        htmlFor="manage_attendees"
                        className="text-sm font-normal"
                      >
                        Manage Attendees
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="send_communications"
                        name="permissions"
                        value="send_communications"
                      />
                      <Label
                        htmlFor="send_communications"
                        className="text-sm font-normal"
                      >
                        Send Communications
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="manage_sponsors"
                        name="permissions"
                        value="manage_sponsors"
                      />
                      <Label
                        htmlFor="manage_sponsors"
                        className="text-sm font-normal"
                      >
                        Manage Sponsors
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">Add Host</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
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
                <TableHead>Company</TableHead>
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
                        <AvatarImage
                          src={host.image || "/placeholder.svg"}
                          alt={host.name}
                        />
                        <AvatarFallback>{host.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{host.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {host.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        host.role === "Main Host" ? "default" : "secondary"
                      }
                    >
                      {host.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {host.company ? (
                      host.companyUrl ? (
                        <a
                          href={host.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                        >
                          {host.company}
                          <LinkIcon className="h-3 w-3" />
                        </a>
                      ) : (
                        <span>{host.company}</span>
                      )
                    ) : (
                      <span className="text-muted-foreground text-sm">
                        Not specified
                      </span>
                    )}
                  </TableCell>
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
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEditHost(host)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <EditHostModal
        host={currentHost}
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        onSave={handleSaveHost}
      />
    </div>
  );
}
