"use client"

import { MapPin, Video } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { AddVenueModal } from "@/components/modals/add-venue-modal"

export function EventVenue() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Venue</h2>
      </div>

      <Tabs defaultValue="physical">
        <TabsList>
          <TabsTrigger value="physical">
            <MapPin className="mr-2 h-4 w-4" />
            Physical Venue
          </TabsTrigger>
          <TabsTrigger value="virtual">
            <Video className="mr-2 h-4 w-4" />
            Virtual Link
          </TabsTrigger>
          <TabsTrigger value="hybrid">Hybrid Mapping</TabsTrigger>
        </TabsList>

        <TabsContent value="physical" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Physical Venue Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="venue-name">Venue Name</Label>
                  <Input id="venue-name" defaultValue="San Francisco Convention Center" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="venue-hall">Hall/Room</Label>
                  <Input id="venue-hall" defaultValue="Grand Ballroom" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="venue-address">Address</Label>
                <Textarea id="venue-address" defaultValue="747 Howard St, San Francisco, CA 94103, United States" />
              </div>

              <div className="space-y-2">
                <Label>Map Location</Label>
                <div className="aspect-video rounded-md border bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Interactive map would be displayed here</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Venue Rooms</Label>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Main Hall</h3>
                      <p className="text-sm text-muted-foreground">Capacity: 1000</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Room A</h3>
                      <p className="text-sm text-muted-foreground">Capacity: 250</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Room B</h3>
                      <p className="text-sm text-muted-foreground">Capacity: 250</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <h3 className="font-medium">Workshop Hall</h3>
                      <p className="text-sm text-muted-foreground">Capacity: 150</p>
                    </CardContent>
                  </Card>
                  <AddVenueModal />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="virtual" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Virtual Meeting Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="platform">Platform</Label>
                  <Input id="platform" defaultValue="Zoom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meeting-id">Meeting ID</Label>
                  <Input id="meeting-id" defaultValue="123 456 7890" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="meeting-link">Meeting Link</Label>
                <Input id="meeting-link" defaultValue="https://zoom.us/j/1234567890" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="meeting-password">Password</Label>
                <Input id="meeting-password" defaultValue="techconf2023" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="meeting-notes">Additional Notes</Label>
                <Textarea id="meeting-notes" placeholder="Any additional information about the virtual meeting..." />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hybrid" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Hybrid Event Mapping</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex h-[300px] items-center justify-center border rounded-md">
                <div className="text-center">
                  <h3 className="text-lg font-medium">Hybrid Mapping Interface</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    This interface would allow mapping between physical rooms and virtual meeting links
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
