"use client"

import { useState, useMemo } from "react"
import { ChevronLeft, Gift, User, Check } from "lucide-react"

interface PackageBuilderProps {
  onBack: () => void
}

export function PackageBuilder({ onBack }: PackageBuilderProps) {
  const [mode, setMode] = useState<"self" | "gift">("self")
  const [frequency, setFrequency] = useState<"daily" | "weekly" | "monthly">("daily")
  const [data, setData] = useState(0)
  const [voice, setVoice] = useState(0)
  const [sms, setSms] = useState(0)
  const [showPriceCalc, setShowPriceCalc] = useState(false)

  // Pricing formula based on frequency and resources
  const calculatePrice = () => {
    const dataRate = 0.015 // ETB per MB
    const voiceRate = 0.5 // ETB per minute
    const smsRate = 0.2 // ETB per SMS

    let basePrice = data * dataRate + voice * voiceRate + sms * smsRate

    // Frequency multiplier
    if (frequency === "weekly") {
      basePrice = basePrice * 5 // Approximately 5 days
    } else if (frequency === "monthly") {
      basePrice = basePrice * 25 // Approximately 25 days
    }

    return Math.max(basePrice, 1) // Minimum 1 ETB
  }

  const price = useMemo(() => calculatePrice(), [data, voice, sms, frequency])

  // Max values for sliders
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40 px-4 py-4 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition">
          <ChevronLeft size={24} className="text-foreground" />
        </button>
        <h1 className="text-xl font-semibold text-foreground flex-1">Create Your Package</h1>
      </div>

      <div className="max-w-md mx-auto p-4 pb-24">
        {/* Mode Selection */}
        <div className="flex gap-2 mb-6 bg-muted rounded-lg p-1">
          <button
            onClick={() => setMode("self")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md font-medium transition-all ${
              mode === "self" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-white/50"
            }`}
          >
            <User size={18} />
            <span>For Me</span>
          </button>
          <button
            onClick={() => setMode("gift")}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md font-medium transition-all ${
              mode === "gift" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-white/50"
            }`}
          >
            <Gift size={18} />
            <span>As Gift</span>
          </button>
        </div>

        {/* Frequency Selection */}
        <div className="mb-6">
          <label className="text-sm font-semibold text-foreground mb-3 block">Select Frequency</label>
          <div className="grid grid-cols-3 gap-2">
            {["daily", "weekly", "monthly"].map((freq) => (
              <button
                key={freq}
                onClick={() => setFrequency(freq as any)}
                className={`py-3 rounded-lg font-medium transition-all ${
                  frequency === freq
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                {freq.charAt(0).toUpperCase() + freq.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Data Slider */}
        <div className="mb-8 bg-card rounded-xl p-4 border border-border">
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
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{formatValue(data, "data")}</p>
              </div>
              <span className="text-xs text-muted-foreground">{formatValue(maxData, "data")}</span>
            </div>
          </div>
        </div>

        {/* Voice Slider */}
        <div className="mb-8 bg-card rounded-xl p-4 border border-border">
          <label className="text-sm font-semibold text-foreground mb-4 block">Voice Minutes</label>
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
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{formatValue(voice, "voice")}</p>
              </div>
              <span className="text-xs text-muted-foreground">{formatValue(maxVoice, "voice")}</span>
            </div>
          </div>
        </div>

        {/* SMS Slider */}
        <div className="mb-8 bg-card rounded-xl p-4 border border-border">
          <label className="text-sm font-semibold text-foreground mb-4 block">SMS Messages</label>
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
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">{sms}</p>
              </div>
              <span className="text-xs text-muted-foreground">{maxSms}</span>
            </div>
          </div>
        </div>

        {/* Price Display */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-xl p-6 mb-6">
          <p className="text-sm text-muted-foreground mb-2">Estimated Price</p>
          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-bold text-primary">{price.toFixed(2)}</p>
            <p className="text-lg font-medium text-muted-foreground">ETB</p>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            {frequency.charAt(0).toUpperCase() + frequency.slice(1)} package • Updated in real-time
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-card rounded-xl p-4 border border-border mb-6 space-y-3">
          <h3 className="text-sm font-semibold text-foreground">Your Package</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Frequency</span>
              <span className="font-medium text-foreground capitalize">{frequency}</span>
            </div>
            {data > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Data
                </span>
                <span className="font-medium text-foreground">{formatValue(data, "data")}</span>
              </div>
            )}
            {voice > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Voice
                </span>
                <span className="font-medium text-foreground">{formatValue(voice, "voice")}</span>
              </div>
            )}
            {sms > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  SMS
                </span>
                <span className="font-medium text-foreground">{sms}</span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 fixed bottom-0 left-0 right-0 max-w-md mx-auto p-4 bg-gradient-to-t from-background to-background/80 border-t border-border">
          <button
            onClick={() => setShowPriceCalc(!showPriceCalc)}
            className="w-full py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all"
          >
            Show Price Calculation
          </button>
          <button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
            <Check size={18} />
            Buy Package
          </button>
        </div>

        {/* Price Calculation Breakdown */}
        {showPriceCalc && (
          <div className="mt-32 bg-card rounded-xl p-4 border border-border space-y-2 mb-6">
            <h3 className="text-sm font-semibold text-foreground mb-3">Price Breakdown</h3>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Data: {data}MB × 0.015 ETB</span>
                <span className="font-medium text-foreground">{(data * 0.015).toFixed(2)} ETB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Voice: {voice}m × 0.5 ETB</span>
                <span className="font-medium text-foreground">{(voice * 0.5).toFixed(2)} ETB</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">SMS: {sms} × 0.2 ETB</span>
                <span className="font-medium text-foreground">{(sms * 0.2).toFixed(2)} ETB</span>
              </div>
              <div className="h-px bg-border my-2"></div>
              <div className="flex justify-between font-semibold">
                <span className="text-foreground">Subtotal</span>
                <span className="text-foreground">{price.toFixed(2)} ETB</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                × {frequency === "weekly" ? "5" : frequency === "monthly" ? "25" : "1"} days multiplier
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
