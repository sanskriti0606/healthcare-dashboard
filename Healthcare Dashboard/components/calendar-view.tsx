import { ChevronLeft, ChevronRight } from "lucide-react"
import AppointmentCard from "@/components/appointment-card"

interface CalendarViewProps {
  calendarData: {
    month: string
    year: number
    days: {
      dayOfWeek: string
      date: number
      appointments: {
        time: string
        available: boolean
      }[]
    }[]
    featuredAppointments: {
      id: string
      type: string
      time: string
      doctor: string
      icon: string
      color: string
    }[]
  }
}

export default function CalendarView({ calendarData }: CalendarViewProps) {
  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"]

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <button className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-medium text-gray-800">
            {calendarData.month} {calendarData.year}
          </h2>
          <button className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
            {day}
          </div>
        ))}

        {calendarData.days.map((day, index) => (
          <div key={index} className={`text-center p-1 ${day.date === 28 ? "bg-indigo-100 rounded-md" : ""}`}>
            <div className="text-sm font-medium mb-1">{day.date}</div>
            <div className="space-y-1">
              {day.appointments.map((appointment, idx) => (
                <div
                  key={idx}
                  className={`text-xs py-0.5 rounded-sm ${
                    appointment.available ? "bg-indigo-100 text-indigo-700" : "text-gray-400"
                  }`}
                >
                  {appointment.time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {calendarData.featuredAppointments.map((appointment) => (
          <AppointmentCard
            key={appointment.id}
            type={appointment.type}
            time={appointment.time}
            doctor={appointment.doctor}
            icon={appointment.icon}
            color={appointment.color}
          />
        ))}
      </div>
    </div>
  )
}
