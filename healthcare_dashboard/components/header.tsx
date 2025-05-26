import { Search, Bell, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <div className="flex items-center space-x-4 w-full max-w-md">
        <div className="flex items-center">
          <span className="text-xl font-semibold text-cyan-500">Health</span>
          <span className="text-xl font-semibold text-gray-800">care.</span>
        </div>
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input type="text" placeholder="Search" className="pl-8 h-9 bg-gray-50 border-gray-200" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar className="h-9 w-9 bg-cyan-500 text-white">
          <span className="text-sm">JD</span>
        </Avatar>
        <Button size="icon" className="rounded-full bg-cyan-500 hover:bg-cyan-600">
          <Plus className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
