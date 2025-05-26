interface HealthStatusCardProps {
  name: string
  date: string
  status: "healthy" | "warning" | "danger"
}

export default function HealthStatusCard({ name, date, status }: HealthStatusCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-green-500"
      case "warning":
        return "bg-yellow-500"
      case "danger":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "bg-green-100"
      case "warning":
        return "bg-yellow-100"
      case "danger":
        return "bg-red-100"
      default:
        return "bg-gray-100"
    }
  }

  const getStatusIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "lungs":
        return (
          <svg className="w-6 h-6 text-red-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.081 20C4.381 20 3.019 18.638 3.019 16.938V7.062C3.019 5.362 4.381 4 6.081 4H7.019V7.5C7.019 8.881 8.138 10 9.519 10C10.9 10 12.019 8.881 12.019 7.5V4H17.919C19.619 4 20.981 5.362 20.981 7.062V16.938C20.981 18.638 19.619 20 17.919 20H6.081Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      case "teeth":
        return (
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 4C14.2091 4 16 5.79086 16 8V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16V8C8 5.79086 9.79086 4 12 4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M8 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )
      case "bone":
        return (
          <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.5 13.5L5.5 16.5M5.5 16.5L2.5 19.5M5.5 16.5L2.5 13.5M5.5 16.5L8.5 19.5M15.5 10.5L18.5 7.5M18.5 7.5L21.5 4.5M18.5 7.5L21.5 10.5M18.5 7.5L15.5 4.5M9.5 6.5L14.5 11.5M9.5 17.5L14.5 12.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0">{getStatusIcon(name)}</div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-gray-700">{name}</h4>
          <span className="text-xs text-gray-500">Date: {date}</span>
        </div>
        <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
          <div
            className={`${getStatusColor(status)} h-2 rounded-full`}
            style={{ width: status === "healthy" ? "80%" : status === "warning" ? "50%" : "30%" }}
          ></div>
        </div>
      </div>
    </div>
  )
}
