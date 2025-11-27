"use client"

import { ArrowDown, TrendingUp, Send } from "lucide-react"

const transactions = [
  { type: "purchase", amount: "50", package: "Internet Daily 100MB", date: "Today, 10:30 AM" },
  { type: "transfer", amount: "10", recipient: "To Abeba", date: "Yesterday" },
  { type: "recharge", amount: "100", package: "Voucher Recharge", date: "Dec 25" },
  { type: "purchase", amount: "25", package: "Voice Daily 25 Min", date: "Dec 24" },
]

export function RecentTransactions() {
  return (
    <div className="bg-card rounded-2xl p-6 space-y-4 shadow-sm border border-border">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <button className="text-sm text-primary font-medium">View All</button>
      </div>

      <div className="space-y-3">
        {transactions.map((tx, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition">
            <div className="flex items-center gap-3">
              <div
                className={`p-2.5 rounded-lg ${
                  tx.type === "purchase" ? "bg-blue-100" : tx.type === "transfer" ? "bg-green-100" : "bg-amber-100"
                }`}
              >
                {tx.type === "purchase" ? (
                  <ArrowDown size={18} className="text-blue-600" />
                ) : tx.type === "transfer" ? (
                  <Send size={18} className="text-green-600" />
                ) : (
                  <TrendingUp size={18} className="text-amber-600" />
                )}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{tx.package || tx.recipient}</p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
            </div>
            <span className={`text-sm font-bold ${tx.type === "recharge" ? "text-green-600" : "text-red-600"}`}>
              {tx.type === "recharge" ? "+" : "-"}
              {tx.amount} ETB
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
