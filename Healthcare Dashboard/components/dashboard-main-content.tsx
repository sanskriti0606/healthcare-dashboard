import AnatomySection from "@/components/anatomy-section"
import CalendarView from "@/components/calendar-view"
import UpcomingSchedule from "@/components/upcoming-schedule"
import ActivityFeed from "@/components/activity-feed"

interface DashboardMainContentProps {
  healthData: any
  calendarData: any
  appointmentData: any
}

export default function DashboardMainContent({ healthData, calendarData, appointmentData }: DashboardMainContentProps) {
  return (
    <main className="flex-1 overflow-auto p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <AnatomySection healthData={healthData} />
        </div>
        <div className="space-y-6">
          <CalendarView calendarData={calendarData} />
          <UpcomingSchedule appointments={appointmentData.upcomingAppointments} />
        </div>
      </div>

      <div className="mt-6">
        <ActivityFeed activityData={appointmentData.activityData} />
      </div>
    </main>
  )
}
