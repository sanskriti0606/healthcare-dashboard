"use client"

import { useState } from "react"
import Header from "@/components/header"
import Sidebar from "@/components/sidebar"
import DashboardMainContent from "@/components/dashboard-main-content"
import { navigationLinks } from "@/data/navigation-links"
import { healthData } from "@/data/health-data"
import { calendarData } from "@/data/calendar-data"
import { appointmentData } from "@/data/appointment-data"

export default function Dashboard() {
  const [activeLink, setActiveLink] = useState("Dashboard")

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar navigationLinks={navigationLinks} activeLink={activeLink} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <DashboardMainContent healthData={healthData} calendarData={calendarData} appointmentData={appointmentData} />
      </div>
    </div>
  )
}
