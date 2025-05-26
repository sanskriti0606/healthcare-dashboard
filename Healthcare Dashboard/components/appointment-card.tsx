import { SmileIcon as Tooth, Activity } from "lucide-react"

interface AppointmentCardProps {
  type: string
  time: string
  doctor: string
  icon: string
  color: string
}

export default function AppointmentCard({ type, time, doctor, icon, color }: AppointmentCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "tooth":
        return <Tooth className="h-5 w-5 text-white" />
      case "activity":
        return <Activity className="h-5 w-5 text-white" />
      default:
        return null
    }
  }

  return (
    <div className={`${color} rounded-xl p-4 text-white`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">{type}</h3>
          <div className="text-sm mt-1">{time}</div>
          <div className="text-sm mt-2">Dr. {doctor}</div>
        </div>
        <div className="p-2 rounded-md bg-white/20">{getIcon(icon)}</div>
      </div>
    </div>
  )
}
