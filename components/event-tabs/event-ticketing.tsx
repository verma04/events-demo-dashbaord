"use client"

import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AddTicketModal } from "@/components/modals/add-ticket-modal"

export function EventTicketing() {
  const tickets = [
    {
      id: "1",
      name: "Early Bird",
      price: "$199",
      available: 100,
      sold: 100,
      status: "sold_out",
      validUntil: "Oct 15, 2023",
    },
    {
      id: "2",
      name: "Regular",
      price: "$299",
      available: 500,
      sold: 320,
      status: "on_sale",
      validUntil: "Nov 10, 2023",
    },
    {
      id: "3",
      name: "VIP",
      price: "$499",
      available: 50,
      sold: 28,
      status: "on_sale",
      validUntil: "Nov 10, 2023",
    },
    {
      id: "4",
      name: "Student",
      price: "$99",
      available: 200,
      sold: 175,
      status: "on_sale",
      validUntil: "Nov 10, 2023",
    },
  ]

  const discountCodes = [
    {
      id: "1",
      code: "EARLYACCESS",
      discount: "20%",
      usageLimit: 100,
      used: 45,
      validUntil: "Oct 30, 2023",
    },
    {
      id: "2",
      code: "SPEAKER2023",
      discount: "100%",
      usageLimit: 50,
      used: 22,
      validUntil: "Nov 14, 2023",
    },
    {
      id: "3",
      code: "PARTNER50",
      discount: "50%",
      usageLimit: 25,
      used: 10,
      validUntil: "Nov 1, 2023",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Ticketing</h2>
        <div className="flex gap-2">
          <AddTicketModal />
          <Button variant="outline">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Discount Code
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ticket Types</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Availability</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Valid Until</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.name}</TableCell>
                  <TableCell>{ticket.price}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>{ticket.sold} sold</span>
                        <span>{ticket.available} total</span>
                      </div>
                      <Progress value={(ticket.sold / ticket.available) * 100} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        ticket.status === "on_sale"
                          ? "default"
                          : ticket.status === "sold_out"
                            ? "destructive"
                            : "outline"
                      }
                    >
                      {ticket.status === "on_sale" ? "On Sale" : ticket.status === "sold_out" ? "Sold Out" : "Draft"}
                    </Badge>
                  </TableCell>
                  <TableCell>{ticket.validUntil}</TableCell>
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

      <Card>
        <CardHeader>
          <CardTitle>Discount Codes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Valid Until</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {discountCodes.map((code) => (
                <TableRow key={code.id}>
                  <TableCell className="font-medium">{code.code}</TableCell>
                  <TableCell>{code.discount}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>{code.used} used</span>
                        <span>{code.usageLimit} limit</span>
                      </div>
                      <Progress value={(code.used / code.usageLimit) * 100} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>{code.validUntil}</TableCell>
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
