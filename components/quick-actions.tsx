"use client"

import { ShoppingBag, Send, Shuffle, Zap, Users, History } from "lucide-react"

interface QuickActionsProps {
  onPackagesClick?: () => void
}

export function QuickActions({ onPackagesClick }: QuickActionsProps) {
  const actions = [
    { icon: ShoppingBag, label: "Buy Package", onClick: onPackagesClick, bgColor: "bg-blue-100 text-blue-600" },
    { icon: Send, label: "Transfer", onClick: () => {}, bgColor: "bg-lime-100 text-lime-700" },
    { icon: Shuffle, label: "Share/Convert", onClick: () => {}, bgColor: "bg-purple-100 text-purple-600" },
    { icon: Zap, label: "Recharge", onClick: () => {}, bgColor: "bg-amber-100 text-amber-600" },
    { icon: Users, label: "Family Group", onClick: () => {}, bgColor: "bg-pink-100 text-pink-600" },
    { icon: History, label: "History", onClick: () => {}, bgColor: "bg-teal-100 text-teal-600" },
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground px-2">Quick Actions</h3>
      <div className="grid grid-cols-3 gap-4">
        {actions.map((action, idx) => (
          <button
            key={idx}
            onClick={action.onClick}
            className="flex flex-col items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent hover:shadow-md transition-all active:scale-95"
          >
            <div className={`p-3 rounded-lg ${action.bgColor}`}>
              <action.icon size={20} />
            </div>
            <span className="text-xs font-medium text-center text-foreground">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
