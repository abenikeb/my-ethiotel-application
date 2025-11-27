"use client"

import { Smartphone, Wifi, MessageSquare } from "lucide-react"

export function UsageStats() {
  return (
    <div className="bg-card rounded-2xl p-6 space-y-6 shadow-sm border border-border">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Your Usage</h3>
        <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">Updated now</span>
      </div>

      {/* Data Usage */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Wifi size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Data</p>
              <p className="text-xs text-muted-foreground">23 GB used</p>
            </div>
          </div>
          <span className="text-sm font-bold text-foreground">92%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92%" }}></div>
        </div>
      </div>

      {/* Voice Usage */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <Smartphone size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Voice</p>
              <p className="text-xs text-muted-foreground">957 MB left</p>
            </div>
          </div>
          <span className="text-sm font-bold text-foreground">23%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-green-500 h-2 rounded-full" style={{ width: "23%" }}></div>
        </div>
      </div>

      {/* SMS Usage */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-100 rounded-lg">
              <MessageSquare size={20} className="text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">SMS</p>
              <p className="text-xs text-muted-foreground">266 KB remaining</p>
            </div>
          </div>
          <span className="text-sm font-bold text-foreground">8%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-purple-500 h-2 rounded-full" style={{ width: "8%" }}></div>
        </div>
      </div>

      {/* Validity */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Validity Expires In</p>
          <p className="text-lg font-bold text-foreground">1 Hour, 15 Min</p>
        </div>
        <span className="text-2xl font-bold text-amber-600">⏱</span>
      </div>
    </div>
  )
}
