import type React from "react"
import {
  LayoutDashboard,
  History,
  Calendar,
  ClipboardList,
  BarChart2,
  Microscope,
  MessageSquare,
  HelpCircle,
  Settings,
} from "lucide-react"

interface SidebarProps {
  navigationLinks: {
    section: string
    items: {
      name: string
      icon: string
    }[]
  }[]
  activeLink: string
}

export default function Sidebar({ navigationLinks, activeLink }: SidebarProps) {
  // Map icon names to Lucide React components
  const getIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      LayoutDashboard: <LayoutDashboard className="h-5 w-5" />,
      History: <History className="h-5 w-5" />,
      Calendar: <Calendar className="h-5 w-5" />,
      ClipboardList: <ClipboardList className="h-5 w-5" />,
      BarChart2: <BarChart2 className="h-5 w-5" />,
      Microscope: <Microscope className="h-5 w-5" />,
      MessageSquare: <MessageSquare className="h-5 w-5" />,
      HelpCircle: <HelpCircle className="h-5 w-5" />,
      Settings: <Settings className="h-5 w-5" />,
    }
    return icons[iconName] || null
  }

  return (
    <aside className="w-48 bg-white border-r flex-shrink-0">
      <div className="h-full flex flex-col">
        {navigationLinks.map((section) => (
          <div key={section.section} className="px-4 py-6">
            <h3 className="text-xs font-medium text-gray-400 uppercase mb-4">{section.section}</h3>
            <nav className="space-y-1">
              {section.items.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`flex items-center px-3 py-2 text-sm rounded-md ${
                    activeLink === item.name ? "bg-cyan-50 text-cyan-500" : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="mr-3">{getIcon(item.icon)}</span>
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  )
}
