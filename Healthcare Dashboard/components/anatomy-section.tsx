"use client"

import { useState } from "react"
import { Maximize } from "lucide-react"
import HealthStatusCard from "@/components/health-status-card"

interface AnatomySectionProps {
  healthData: {
    anatomyImage: string
    indicators: {
      id: string
      name: string
      position: { top: string; left: string }
      status: "healthy" | "warning" | "danger"
      color: string
    }[]
    healthStatus: {
      id: string
      name: string
      date: string
      status: "healthy" | "warning" | "danger"
    }[]
  }
}

export default function AnatomySection({ healthData }: AnatomySectionProps) {
  const [selectedIndicator, setSelectedIndicator] = useState<string | null>(null)

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

  return (
    <div className="relative bg-white rounded-xl p-6 shadow-sm">
      <div className="absolute top-4 right-4">
        <button className="text-gray-400 hover:text-gray-600">
          <Maximize className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex justify-center mb-6">
        <div className="relative">
          <img src="/anatomy.png" alt="Human anatomy" className="h-[300px] object-contain" />

          {healthData.indicators.map((indicator) => (
            <div
              key={indicator.id}
              className={`absolute cursor-pointer ${selectedIndicator === indicator.id ? "z-10" : "z-0"}`}
              style={{
                top: indicator.position.top,
                left: indicator.position.left,
              }}
              onClick={() => setSelectedIndicator(indicator.id)}
            >
              <div
                className={`flex items-center justify-center px-2 py-1 rounded-md text-white text-xs ${
                  indicator.color
                }`}
              >
                {indicator.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {healthData.healthStatus.map((status) => (
          <HealthStatusCard key={status.id} name={status.name} date={status.date} status={status.status} />
        ))}
      </div>
    </div>
  )
}
