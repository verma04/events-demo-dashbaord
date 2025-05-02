"use client"

import { Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function EventSettings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Settings</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="zh">Chinese</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Select defaultValue="pst">
                <SelectTrigger id="timezone">
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

            <div className="flex items-center space-x-2">
              <Switch id="event-privacy" />
              <Label htmlFor="event-privacy">Make event private</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="event-featured" defaultChecked />
              <Label htmlFor="event-featured">Feature on homepage</Label>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Domain Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="subdomain">Event Subdomain</Label>
              <div className="flex">
                <Input id="subdomain" defaultValue="techconf2023" className="rounded-r-none" />
                <div className="flex items-center rounded-r-md border border-l-0 bg-muted px-3 text-sm text-muted-foreground">
                  .eventmaster.com
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                Your event will be accessible at techconf2023.eventmaster.com
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="custom-domain">Custom Domain</Label>
              <Input id="custom-domain" placeholder="events.yourcompany.com" />
              <p className="text-xs text-muted-foreground">
                You'll need to configure DNS settings to point to our servers
              </p>
            </div>

            <Button variant="outline">Verify Domain</Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Advanced Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="data-retention">
              <AccordionTrigger>Data Retention</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="retention-period">Retention Period</Label>
                  <Select defaultValue="1year">
                    <SelectTrigger id="retention-period">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30days">30 Days</SelectItem>
                      <SelectItem value="90days">90 Days</SelectItem>
                      <SelectItem value="1year">1 Year</SelectItem>
                      <SelectItem value="forever">Forever</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">How long to keep attendee data after the event</p>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="anonymize-data" />
                  <Label htmlFor="anonymize-data">Anonymize data after retention period</Label>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="integrations">
              <AccordionTrigger>Integrations</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Switch id="google-analytics" defaultChecked />
                  <Label htmlFor="google-analytics">Google Analytics</Label>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ga-id">Google Analytics ID</Label>
                  <Input id="ga-id" defaultValue="UA-123456789-1" />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="zapier" />
                  <Label htmlFor="zapier">Zapier</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="slack" defaultChecked />
                  <Label htmlFor="slack">Slack</Label>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="danger-zone">
              <AccordionTrigger>Danger Zone</AccordionTrigger>
              <AccordionContent className="space-y-4">
                <div className="rounded-md border border-destructive/50 p-4">
                  <h3 className="font-medium text-destructive">Delete Event</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Once you delete an event, there is no going back. This action cannot be undone.
                  </p>
                  <Button variant="destructive" className="mt-4">
                    <Trash className="mr-2 h-4 w-4" />
                    Delete Event
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
