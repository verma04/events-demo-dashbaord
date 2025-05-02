import { Progress } from "@/components/ui/progress"

export function EventTimeline() {
  const events = [
    {
      id: 1,
      name: "Tech Conference 2023",
      date: "Nov 15-18, 2023",
      progress: 85,
      status: "Registration Open",
    },
    {
      id: 2,
      name: "Product Launch",
      date: "Dec 5, 2023",
      progress: 60,
      status: "Planning",
    },
    {
      id: 3,
      name: "Annual Summit",
      date: "Jan 20-22, 2024",
      progress: 40,
      status: "Speakers Confirmed",
    },
    {
      id: 4,
      name: "Developer Workshop",
      date: "Feb 10, 2024",
      progress: 25,
      status: "Venue Selection",
    },
  ]

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">{event.name}</h3>
              <p className="text-sm text-muted-foreground">{event.date}</p>
            </div>
            <div className="text-sm font-medium">{event.status}</div>
          </div>
          <div className="flex items-center gap-2">
            <Progress value={event.progress} className="h-2" />
            <span className="text-xs text-muted-foreground">{event.progress}%</span>
          </div>
        </div>
      ))}
    </div>
  )
}
