"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EventGeneralInfo } from "@/components/event-tabs/event-general-info";
import { EventHosts } from "@/components/event-tabs/event-hosts";
import { EventAgenda } from "@/components/event-tabs/event-agenda";
import { EventSpeakers } from "@/components/event-tabs/event-speakers";
import { EventSponsorship } from "@/components/event-tabs/event-sponsorship";
import { EventTicketing } from "@/components/event-tabs/event-ticketing";
import { EventVenue } from "@/components/event-tabs/event-venue";
import { EventMedia } from "@/components/event-tabs/event-media";
import { EventAttendees } from "@/components/event-tabs/event-attendees";
import { EventForms } from "@/components/event-tabs/event-forms";
import { EventCommunication } from "@/components/event-tabs/event-communication";
import { EventAnalytics } from "@/components/event-tabs/event-analytics";
import { EventEngagement } from "@/components/event-tabs/event-engagement";
import { EventTeam } from "@/components/event-tabs/event-team";
import { EventSettings } from "@/components/event-tabs/event-settings";
import { RazorpaySettings } from "@/components/payments/razorpay-settings";
import { EventPaymentTracking } from "@/components/event-tabs/event-payment-tracking";
import { EventTicketTracking } from "@/components/event-tabs/event-ticket-tracking";

export default function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="flex flex-col">
      <div className="flex h-16 items-center justify-between border-b px-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/events">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-xl font-semibold">Edit Event</h1>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="flex-1 p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="overflow-auto">
            <TabsList className="inline-flex w-full justify-start border-b bg-transparent p-0">
              <TabsTrigger
                value="general"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                General Info
              </TabsTrigger>
              <TabsTrigger
                value="hosts"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Hosts
              </TabsTrigger>
              <TabsTrigger
                value="agenda"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Agenda
              </TabsTrigger>
              <TabsTrigger
                value="speakers"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Speakers
              </TabsTrigger>
              <TabsTrigger
                value="sponsorship"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Sponsorship
              </TabsTrigger>
              <TabsTrigger
                value="ticketing"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Ticketing
              </TabsTrigger>
              <TabsTrigger
                value="venue"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Venue
              </TabsTrigger>
              <TabsTrigger
                value="media"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Media
              </TabsTrigger>
              <TabsTrigger
                value="attendees"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Attendees
              </TabsTrigger>
              <TabsTrigger
                value="forms"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Forms
              </TabsTrigger>
              <TabsTrigger
                value="communication"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Communication
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Analytics
              </TabsTrigger>
              <TabsTrigger
                value="engagement"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Engagement
              </TabsTrigger>
              <TabsTrigger
                value="team"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Team
              </TabsTrigger>
              <TabsTrigger
                value="payment-tracking"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Payment Tracking
              </TabsTrigger>
              <TabsTrigger
                value="ticket-tracking"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Ticket Tracking
              </TabsTrigger>
              <TabsTrigger
                value="payments"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Payments
              </TabsTrigger>
              <TabsTrigger
                value="settings"
                className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent"
              >
                Settings
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mt-6">
            <TabsContent value="general" className="m-0">
              <EventGeneralInfo />
            </TabsContent>
            <TabsContent value="hosts" className="m-0">
              <EventHosts />
            </TabsContent>
            <TabsContent value="agenda" className="m-0">
              <EventAgenda />
            </TabsContent>
            <TabsContent value="speakers" className="m-0">
              <EventSpeakers />
            </TabsContent>
            <TabsContent value="sponsorship" className="m-0">
              <EventSponsorship />
            </TabsContent>
            <TabsContent value="ticketing" className="m-0">
              <EventTicketing />
            </TabsContent>
            <TabsContent value="venue" className="m-0">
              <EventVenue />
            </TabsContent>
            <TabsContent value="media" className="m-0">
              <EventMedia />
            </TabsContent>
            <TabsContent value="attendees" className="m-0">
              <EventAttendees />
            </TabsContent>
            <TabsContent value="forms" className="m-0">
              <EventForms />
            </TabsContent>
            <TabsContent value="communication" className="m-0">
              <EventCommunication />
            </TabsContent>
            <TabsContent value="analytics" className="m-0">
              <EventAnalytics />
            </TabsContent>
            <TabsContent value="engagement" className="m-0">
              <EventEngagement />
            </TabsContent>
            <TabsContent value="team" className="m-0">
              <EventTeam />
            </TabsContent>
            <TabsContent value="payment-tracking" className="mt-6">
              <EventPaymentTracking />
            </TabsContent>
            <TabsContent value="ticket-tracking" className="mt-6">
              <EventTicketTracking />
            </TabsContent>

            <TabsContent value="payments" className="m-0">
              <RazorpaySettings />
            </TabsContent>
            <TabsContent value="settings" className="m-0">
              <EventSettings />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
