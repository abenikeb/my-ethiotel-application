"use client"

import { useState, useMemo } from "react"
import { Check } from "lucide-react"
import { CustomPackageSuccessDialog } from "./custom-package-success-dialog"

interface CustomPackageFormProps {
  mode: "self" | "gift"
}

export function CustomPackageForm({ mode }: CustomPackageFormProps) {
  const [frequency, setFrequency] = useState<"daily" | "weekly" | "monthly">("daily")
  const [data, setData] = useState(0)
  const [voice, setVoice] = useState(0)
  const [sms, setSms] = useState(0)
  const [mobileNumber, setMobileNumber] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const calculatePrice = () => {
    const dataRate = 0.015
    const voiceRate = 0.5
    const smsRate = 0.2

    let basePrice = data * dataRate + voice * voiceRate + sms * smsRate

    if (frequency === "weekly") {
      basePrice = basePrice * 5
    } else if (frequency === "monthly") {
      basePrice = basePrice * 25
    }

    return Math.max(basePrice, 1)
  }

  const price = useMemo(() => calculatePrice(), [data, voice, sms, frequency])

  const maxData = frequency === "daily" ? 500 : frequency === "weekly" ? 2000 : 5000
  const maxVoice = frequency === "daily" ? 120 : frequency === "weekly" ? 500 : 1500
  const maxSms = frequency === "daily" ? 20 : frequency === "weekly" ? 100 : 300

  const formatValue = (val: number, unit: string) => {
    if (unit === "data") {
      if (val >= 1024) return `${(val / 1024).toFixed(1)}GB`
      return `${val}MB`
    }
    return `${val}${unit === "voice" ? "m" : ""}`
  }

  const handleBuy = async () => {
    setIsLoading(true)
    setTimeout(() => {
      setShowSuccess(true)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="max-w-md mx-auto px-4 py-6 pb-20">
      {/* Frequency Selection */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-foreground mb-3 block">Select Frequency</label>
        <select
          value={frequency}
          onChange={(e) => setFrequency(e.target.value as any)}
          className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground font-medium appearance-none cursor-pointer hover:border-primary transition focus:border-primary outline-none"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Mobile Number (Gift mode) */}
      {mode === "gift" && (
        <div className="mb-6">
          <label className="text-sm font-semibold text-foreground mb-2 block">Mobile Number</label>
          <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 focus-within:border-primary transition">
            <span className="text-muted-foreground font-medium">+251</span>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value.replace(/[^\d]/g, ""))}
              placeholder="Enter recipient number"
              className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none"
            />
            {mobileNumber && mobileNumber.length >= 9 && <span className="text-primary text-lg">✓</span>}
          </div>
        </div>
      )}

      {/* Data Slider */}
      <div className="mb-6 bg-card rounded-xl p-4 border border-border">
        <label className="text-sm font-semibold text-foreground mb-4 block">Data</label>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max={maxData}
            value={data}
            onChange={(e) => setData(Number(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">0 MB</span>
            <p className="text-2xl font-bold text-blue-600">{formatValue(data, "data")}</p>
            <span className="text-xs text-muted-foreground">{formatValue(maxData, "data")}</span>
          </div>
        </div>
      </div>

      {/* Voice Slider */}
      <div className="mb-6 bg-card rounded-xl p-4 border border-border">
        <label className="text-sm font-semibold text-foreground mb-4 block">Voice</label>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max={maxVoice}
            value={voice}
            onChange={(e) => setVoice(Number(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">0 m</span>
            <p className="text-2xl font-bold text-green-600">{formatValue(voice, "voice")}</p>
            <span className="text-xs text-muted-foreground">{formatValue(maxVoice, "voice")}</span>
          </div>
        </div>
      </div>

      {/* SMS Slider */}
      <div className="mb-6 bg-card rounded-xl p-4 border border-border">
        <label className="text-sm font-semibold text-foreground mb-4 block">SMS</label>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max={maxSms}
            value={sms}
            onChange={(e) => setSms(Number(e.target.value))}
            className="w-full h-2 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">0</span>
            <p className="text-2xl font-bold text-purple-600">{sms}</p>
            <span className="text-xs text-muted-foreground">{maxSms}</span>
          </div>
        </div>
      </div>

      {/* Show Price Section */}
      <div className="mb-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Show Price</p>
            <div className="text-4xl font-bold text-primary">{price.toFixed(2)}</div>
          </div>
          <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all">
            Check
          </button>
        </div>
      </div>

      {/* Buy Button */}
      <button
        onClick={handleBuy}
        disabled={isLoading}
        className="w-full py-4 bg-muted text-muted-foreground rounded-lg font-semibold cursor-not-allowed opacity-50 flex items-center justify-center gap-2"
      >
        <Check size={18} />
        Buy
      </button>

      {/* Success Dialog */}
      {showSuccess && (
        <CustomPackageSuccessDialog
          packageData={data}
          packageVoice={voice}
          packageSms={sms}
          packageFrequency={frequency}
          packagePrice={price}
          mode={mode}
          recipientNumber={mode === "gift" ? "+251" + mobileNumber : undefined}
          onClose={() => {
            setShowSuccess(false)
            window.location.href = "/packages"
          }}
        />
      )}
    </div>
  )
}
