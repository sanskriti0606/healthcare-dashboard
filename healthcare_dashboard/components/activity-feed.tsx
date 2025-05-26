interface ActivityFeedProps {
  activityData: {
    totalAppointments: number
    weeklyData: {
      day: string
      appointments: number[]
    }[]
  }
}

export default function ActivityFeed({ activityData }: ActivityFeedProps) {
  const maxAppointments = Math.max(...activityData.weeklyData.flatMap((day) => day.appointments))

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-gray-800">Activity</h2>
        <div className="text-sm text-gray-500">{activityData.totalAppointments} appointments on this week</div>
      </div>

      <div className="flex items-end h-40 space-x-2">
        {activityData.weeklyData.map((day, dayIndex) => (
          <div key={dayIndex} className="flex-1 flex flex-col items-center">
            {day.appointments.map((count, index) => {
              const height = (count / maxAppointments) * 100
              const colors = ["bg-cyan-400", "bg-indigo-500", "bg-cyan-300", "bg-indigo-400"]
              return (
                <div
                  key={index}
                  className={`${colors[index % colors.length]} w-3 mb-1 rounded-sm`}
                  style={{ height: `${height}%` }}
                ></div>
              )
            })}
            <div className="text-xs text-gray-500 mt-2">{day.day}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
