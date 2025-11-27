import { Menu, Bell, Settings } from "lucide-react"

interface HeaderProps {
  userName: string
  phoneNumber: string
}

export function Header({ userName, phoneNumber }: HeaderProps) {
  return (
    <header className="gradient-primary text-white px-4 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">
      <div>
        <h1 className="text-sm font-medium opacity-95">My Ethiotel</h1>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-black/10 rounded-lg transition">
          <Bell size={20} />
        </button>
        <button className="p-2 hover:bg-black/10 rounded-lg transition">
          <Settings size={20} />
        </button>
        <button className="p-2 hover:bg-black/10 rounded-lg transition">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
