import SimpleAppointmentCard from "@/components/simple-appointment-card"

interface UpcomingScheduleProps {
  appointments: {
    day: string
    items: {
      id: string
      title: string
      time: string
      icon: string
    }[]
  }[]
}

export default function UpcomingSchedule({ appointments }: UpcomingScheduleProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-lg font-medium text-gray-800 mb-4">The Upcoming Schedule</h2>

      <div className="space-y-6">
        {appointments.map((daySchedule) => (
          <div key={daySchedule.day}>
            <h3 className="text-sm font-medium text-gray-600 mb-3">On {daySchedule.day}</h3>
            <div className="grid grid-cols-2 gap-4">
              {daySchedule.items.map((appointment) => (
                <SimpleAppointmentCard
                  key={appointment.id}
                  title={appointment.title}
                  time={appointment.time}
                  icon={appointment.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
