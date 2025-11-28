"use client"

import { Check } from "lucide-react"

interface GiftSuccessDialogProps {
  packageName: string
  packagePrice: number
  recipientNumber: string
  onClose: () => void
}

export function GiftSuccessDialog({ packageName, packagePrice, recipientNumber, onClose }: GiftSuccessDialogProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-2xl p-8 max-w-sm w-full border border-border shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
            <Check size={32} className="text-primary-foreground" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-foreground mb-2">Gift Sent Successfully!</h2>
        <p className="text-center text-muted-foreground mb-6">Your gift package has been delivered.</p>

        <div className="bg-muted/50 rounded-lg p-4 mb-6 space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Package</span>
            <span className="font-semibold text-foreground">{packageName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Amount</span>
            <span className="font-semibold text-primary">{packagePrice} Birr</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Recipient</span>
            <span className="font-semibold text-foreground">{recipientNumber}</span>
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-3 mb-6">
          <p className="text-xs text-muted-foreground mb-1">Reference ID</p>
          <p className="text-sm font-mono text-foreground">#GFT202511280001</p>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
        >
          Back to Packages
        </button>
      </div>
    </div>
  )
}
