"use client"

import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { AddSponsorModal } from "@/components/modals/add-sponsor-modal"

export function EventSponsorship() {
  const tiers = [
    {
      id: "1",
      name: "Platinum",
      price: "$10,000",
      benefits: ["Logo on main stage", "10 VIP tickets", "Booth space", "Speaking slot", "Logo on website"],
      limit: 3,
      sponsors: [
        { id: "1", name: "TechCorp", logo: "/placeholder.svg" },
        { id: "2", name: "InnovateCo", logo: "/placeholder.svg" },
      ],
    },
    {
      id: "2",
      name: "Gold",
      price: "$5,000",
      benefits: ["Logo on website", "5 VIP tickets", "Booth space", "Logo on promotional materials"],
      limit: 5,
      sponsors: [
        { id: "3", name: "WebTech", logo: "/placeholder.svg" },
        { id: "4", name: "ProductHQ", logo: "/placeholder.svg" },
        { id: "5", name: "DevTools Inc", logo: "/placeholder.svg" },
      ],
    },
    {
      id: "3",
      name: "Silver",
      price: "$2,500",
      benefits: ["Logo on website", "2 VIP tickets", "Logo on promotional materials"],
      limit: 10,
      sponsors: [
        { id: "6", name: "StartupX", logo: "/placeholder.svg" },
        { id: "7", name: "CodeLabs", logo: "/placeholder.svg" },
      ],
    },
  ]

  const specialSponsors = [
    {
      id: "1",
      type: "Title Sponsor",
      name: "MegaTech Industries",
      logo: "/placeholder.svg",
      benefits: ["Exclusive branding as 'Title Sponsor'", "Prime logo placement", "VIP dinner with speakers"],
    },
    {
      id: "2",
      type: "Co-powered by",
      name: "InnovateNow",
      logo: "/placeholder.svg",
      benefits: ["Secondary branding", "Special mention in opening keynote", "VIP access"],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Sponsorship</h2>
        <AddSponsorModal />
      </div>

      <Tabs defaultValue="tiers">
        <TabsList>
          <TabsTrigger value="tiers">Sponsorship Tiers</TabsTrigger>
          <TabsTrigger value="special">Special Sponsors</TabsTrigger>
        </TabsList>

        <TabsContent value="tiers" className="space-y-6 mt-6">
          {tiers.map((tier) => (
            <Card key={tier.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    {tier.name} Tier - {tier.price}
                  </CardTitle>
                  <Badge variant="outline">
                    {tier.sponsors.length}/{tier.limit} Filled
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Benefits:</h4>
                    <ul className="ml-6 list-disc">
                      {tier.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Current Sponsors:</h4>
                    <div className="flex flex-wrap gap-4">
                      {tier.sponsors.map((sponsor) => (
                        <div key={sponsor.id} className="flex flex-col items-center">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} />
                            <AvatarFallback>{sponsor.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="mt-2 text-sm">{sponsor.name}</span>
                        </div>
                      ))}
                      {tier.sponsors.length < tier.limit && (
                        <Button variant="outline" className="h-16 w-16 rounded-full">
                          <PlusCircle className="h-6 w-6" />
                          <span className="sr-only">Add Sponsor</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="special" className="space-y-6 mt-6">
          {specialSponsors.map((sponsor) => (
            <Card key={sponsor.id}>
              <CardHeader>
                <CardTitle>{sponsor.type}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src={sponsor.logo || "/placeholder.svg"} alt={sponsor.name} />
                    <AvatarFallback>{sponsor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold">{sponsor.name}</h3>
                    <h4 className="font-medium mt-2">Benefits:</h4>
                    <ul className="ml-6 list-disc">
                      {sponsor.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Button className="w-full">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Special Sponsor
          </Button>
        </TabsContent>
      </Tabs>
    </div>
  )
}
