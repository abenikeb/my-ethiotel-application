"use client"

import { Gift, X } from "lucide-react"
import { useState } from "react"

export function PromotionBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="relative bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-4 flex items-center justify-between overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <Gift size={100} className="absolute -top-8 -right-8" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-sm font-semibold text-foreground mb-1">Weekend Special!</p>
        <p className="text-xs text-muted-foreground">Get 50% extra data on all packages</p>
      </div>

      <button onClick={() => setVisible(false)} className="p-1 hover:bg-primary/10 rounded-lg transition">
        <X size={16} className="text-muted-foreground" />
      </button>
    </div>
  )
}
