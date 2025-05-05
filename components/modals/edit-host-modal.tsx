"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { LinkIcon } from "lucide-react";

interface Host {
  id: string;
  name: string;
  email: string;
  role: string;
  permissions: string[];
  image: string;
  company: string | null;
  companyUrl: string | null;
}

interface EditHostModalProps {
  host: Host | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (host: Host) => void;
}

export function EditHostModal({
  host,
  open,
  onOpenChange,
  onSave,
}: EditHostModalProps) {
  const [formData, setFormData] = useState<Host | null>(host);

  if (!host) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      onSave(formData);
      onOpenChange(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!formData) return;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (value: string) => {
    if (!formData) return;
    setFormData({
      ...formData,
      role: value,
    });
  };

  const handlePermissionChange = (permission: string, checked: boolean) => {
    if (!formData) return;

    let updatedPermissions = [...formData.permissions];

    if (checked) {
      updatedPermissions.push(permission);
    } else {
      updatedPermissions = updatedPermissions.filter((p) => p !== permission);
    }

    setFormData({
      ...formData,
      permissions: updatedPermissions,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Host</DialogTitle>
          <DialogDescription>
            Update host information and permissions.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="edit-name">Full Name</Label>
              <Input
                id="edit-name"
                name="name"
                value={formData?.name || ""}
                onChange={handleInputChange}
                placeholder="Enter host's full name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-email">Email</Label>
              <Input
                id="edit-email"
                name="email"
                type="email"
                value={formData?.email || ""}
                onChange={handleInputChange}
                placeholder="Enter host's email"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-role">Role</Label>
              <Select
                name="role"
                value={formData?.role || "Co-host"}
                onValueChange={handleRoleChange}
              >
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
              <Label htmlFor="edit-company">Company (Optional)</Label>
              <Input
                id="edit-company"
                name="company"
                value={formData?.company || ""}
                onChange={handleInputChange}
                placeholder="Enter company name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="edit-companyUrl">Company URL (Optional)</Label>
              <div className="flex items-center gap-2">
                <LinkIcon className="h-4 w-4 text-muted-foreground" />
                <Input
                  id="edit-companyUrl"
                  name="companyUrl"
                  value={formData?.companyUrl || ""}
                  onChange={handleInputChange}
                  placeholder="https://company.example.com"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
