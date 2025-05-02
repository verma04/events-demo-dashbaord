"use client"

import { useState } from "react"
import Image from "next/image"
import { Calendar, Clock, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"

export function EventGeneralInfo() {
  const [eventType, setEventType] = useState("physical")
  const [registrationOpen, setRegistrationOpen] = useState(true)

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Event Title</Label>
            <Input id="title" placeholder="Enter event title" defaultValue="Tech Conference 2023" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter event description"
              className="min-h-[120px]"
              defaultValue="Join us for the premier tech conference of the year, featuring industry leaders, workshops, and networking opportunities."
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Nov 15, 2023</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  {/* Calendar would go here */}
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>End Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Nov 18, 2023</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  {/* Calendar would go here */}
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Start Time</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>9:00 AM</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  {/* Time picker would go here */}
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Timezone</Label>
              <Select defaultValue="pst">
                <SelectTrigger>
                  <SelectValue placeholder="Select timezone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pst">Pacific Time (PST)</SelectItem>
                  <SelectItem value="mst">Mountain Time (MST)</SelectItem>
                  <SelectItem value="cst">Central Time (CST)</SelectItem>
                  <SelectItem value="est">Eastern Time (EST)</SelectItem>
                  <SelectItem value="utc">Coordinated Universal Time (UTC)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Event Type</Label>
            <Select value={eventType} onValueChange={setEventType}>
              <SelectTrigger>
                <SelectValue placeholder="Select event type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="physical">Physical</SelectItem>
                <SelectItem value="online">Online</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="seats">Seat Limit</Label>
              <Input id="seats" type="number" defaultValue="1500" />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="registration" checked={registrationOpen} onCheckedChange={setRegistrationOpen} />
            <Label htmlFor="registration">Registration Open</Label>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <Label>Cover Image</Label>
                <div className="relative aspect-video overflow-hidden rounded-lg border border-dashed border-muted-foreground/25">
                  <Image src="/placeholder.svg?height=400&width=800" alt="Event cover" className="object-cover" fill />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/50">
                    <Button variant="secondary" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Cover Image
                    </Button>
                    <p className="mt-2 text-xs text-muted-foreground">Recommended size: 1200x630px</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
