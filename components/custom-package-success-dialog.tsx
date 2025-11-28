"use client"

import { Check } from "lucide-react"

interface CustomPackageSuccessDialogProps {
  packageData: number
  packageVoice: number
  packageSms: number
  packageFrequency: string
  packagePrice: number
  mode: "self" | "gift"
  recipientNumber?: string
  onClose: () => void
}

export function CustomPackageSuccessDialog({
  packageData,
  packageVoice,
  packageSms,
  packageFrequency,
  packagePrice,
  mode,
  recipientNumber,
  onClose,
}: CustomPackageSuccessDialogProps) {
  const formatData = (val: number) => {
    if (val >= 1024) return `${(val / 1024).toFixed(1)}GB`
    return `${val}MB`
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-2xl p-8 max-w-sm w-full border border-border shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
            <Check size={32} className="text-primary-foreground" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-foreground mb-2">
          {mode === "gift" ? "Gift Package Sent!" : "Package Created!"}
        </h2>
        <p className="text-center text-muted-foreground mb-6">
          {mode === "gift" ? "Your custom gift package has been delivered." : "Your custom package is now active."}
        </p>

        <div className="bg-muted/50 rounded-lg p-4 mb-6 space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Frequency</span>
            <span className="font-semibold text-foreground capitalize">{packageFrequency}</span>
          </div>
          {packageData > 0 && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Data</span>
              <span className="font-semibold text-foreground">{formatData(packageData)}</span>
            </div>
          )}
          {packageVoice > 0 && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Voice</span>
              <span className="font-semibold text-foreground">{packageVoice}m</span>
            </div>
          )}
          {packageSms > 0 && (
            <div className="flex justify-between">
              <span className="text-muted-foreground">SMS</span>
              <span className="font-semibold text-foreground">{packageSms}</span>
            </div>
          )}
          <div className="border-t border-border pt-3 flex justify-between">
            <span className="text-muted-foreground font-semibold">Amount</span>
            <span className="font-bold text-primary">{packagePrice.toFixed(2)} Birr</span>
          </div>
        </div>

        {mode === "gift" && recipientNumber && (
          <div className="bg-muted/30 rounded-lg p-3 mb-6">
            <p className="text-xs text-muted-foreground mb-1">Sent to</p>
            <p className="text-sm font-semibold text-foreground">{recipientNumber}</p>
          </div>
        )}

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
