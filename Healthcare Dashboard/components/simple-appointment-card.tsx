import { Activity, Eye, Heart, Brain } from "lucide-react"

interface SimpleAppointmentCardProps {
  title: string
  time: string
  icon: string
}

export default function SimpleAppointmentCard({ title, time, icon }: SimpleAppointmentCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "activity":
        return <Activity className="h-4 w-4 text-red-500" />
      case "eye":
        return <Eye className="h-4 w-4 text-blue-500" />
      case "heart":
        return <Heart className="h-4 w-4 text-red-500" />
      case "brain":
        return <Brain className="h-4 w-4 text-purple-500" />
      default:
        return null
    }
  }

  const getBackgroundColor = (iconName: string) => {
    switch (iconName) {
      case "activity":
        return "bg-red-50"
      case "eye":
        return "bg-blue-50"
      case "heart":
        return "bg-red-50"
      case "brain":
        return "bg-purple-50"
      default:
        return "bg-gray-50"
    }
  }

  return (
    <div className={`${getBackgroundColor(icon)} rounded-xl p-4`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-sm">{title}</h3>
          <div className="text-xs text-gray-500 mt-1">{time}</div>
        </div>
        <div>{getIcon(icon)}</div>
      </div>
    </div>
  )
}
