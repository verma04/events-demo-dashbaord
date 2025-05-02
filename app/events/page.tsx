import Link from "next/link"
import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { EventsTable } from "@/components/events-table"
import { EventsFilter } from "@/components/events-filter"

export default function EventsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex h-16 items-center justify-between border-b px-6">
        <h1 className="text-xl font-semibold">Events</h1>
        <Button asChild>
          <Link href="/events/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New Event
          </Link>
        </Button>
      </div>
      <div className="p-6">
        <Card className="overflow-hidden">
          <div className="p-4">
            <EventsFilter />
          </div>
          <EventsTable />
        </Card>
      </div>
    </div>
  )
}
