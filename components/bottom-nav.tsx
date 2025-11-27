"use client"

import { Home, ShoppingBag, Zap, Settings } from "lucide-react"

interface BottomNavProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const items = [
    { id: "dashboard", icon: Home, label: "Home" },
    { id: "packages", icon: ShoppingBag, label: "Packages" },
    { id: "recharge", icon: Zap, label: "Recharge" },
    { id: "settings", icon: Settings, label: "Settings" },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border flex items-center justify-around px-2 py-3 max-w-md mx-auto">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
            activeTab === item.id ? "text-primary" : "text-muted-foreground"
          }`}
        >
          <item.icon size={20} />
          <span className="text-xs font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  )
}
