"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Upload } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AddSpeakerModal() {
  const [open, setOpen] = useState(false)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission, e.g., send data to an API
    console.log("Speaker added")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Speaker
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Speaker</DialogTitle>
          <DialogDescription>Add a new speaker to your event.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="flex flex-col items-center gap-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={imagePreview || "/placeholder.svg"} alt="Speaker" />
                  <AvatarFallback>SP</AvatarFallback>
                </Avatar>
                <div className="relative">
                  <Input
                    id="speaker-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                  <Label
                    htmlFor="speaker-image"
                    className="flex cursor-pointer items-center gap-1 rounded-md border px-3 py-1 text-sm"
                  >
                    <Upload className="h-4 w-4" />
                    Upload Photo
                  </Label>
                </div>
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter speaker's full name" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role / Title</Label>
              <Input id="role" placeholder="e.g., CTO at TechCorp" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio">Biography</Label>
              <Textarea id="bio" placeholder="Enter speaker's bio" className="min-h-[100px]" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter speaker's email" />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input id="twitter" placeholder="@username" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input id="linkedin" placeholder="LinkedIn profile URL" />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">Add Speaker</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
