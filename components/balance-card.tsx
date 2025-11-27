"use client"

import { CreditCard } from "lucide-react"

export function BalanceCard() {
  return (
    <div className="gradient-primary rounded-2xl p-6 text-white space-y-4">
      {/* Balance Section */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm opacity-85 mb-1">Current Balance</p>
          <h2 className="text-4xl font-bold tracking-tight">0.01 ETB</h2>
        </div>
        <CreditCard size={28} className="opacity-75" />
      </div>

      {/* Divider */}
      <div className="h-px bg-white/15"></div>

      {/* Account Info */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="opacity-85">Account ID</span>
          <span className="font-medium opacity-95">913228892</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="opacity-85">Status</span>
          <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium">Active</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <button className="bg-white/20 hover:bg-white/30 rounded-lg py-3 text-sm font-medium transition-all duration-200">
          Recharge
        </button>
        <button className="bg-white/20 hover:bg-white/30 rounded-lg py-3 text-sm font-medium transition-all duration-200">
          Transfer
        </button>
      </div>
    </div>
  )
}
