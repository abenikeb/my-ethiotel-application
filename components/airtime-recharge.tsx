"use client"

import { useState } from "react"
import { ChevronLeft, CheckCircle, AlertCircle, Ticket } from "lucide-react"

interface AirtimeRechargeProps {
  onBack: () => void
}

export function AirtimeRecharge({ onBack }: AirtimeRechargeProps) {
  const [step, setStep] = useState<"voucher" | "confirm" | "success">("voucher")
  const [voucherCode, setVoucherCode] = useState("")
  const [error, setError] = useState("")
  const [voucherAmount, setVoucherAmount] = useState(0)

  const currentBalance = 0.01

  const validateVoucher = () => {
    setError("")

    if (!voucherCode.trim()) {
      setError("Please enter a voucher code")
      return
    }

    if (voucherCode.length < 12) {
      setError("Voucher code must be at least 12 characters")
      return
    }

    // Simulate validation - in real app would call API
    const mockAmount = Math.floor(Math.random() * 100) + 10
    setVoucherAmount(mockAmount)
    setStep("confirm")
  }

  const handleRecharge = () => {
    setStep("success")
  }

  const handleAnother = () => {
    setVoucherCode("")
    setStep("voucher")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40 px-4 py-4 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition">
          <ChevronLeft size={24} className="text-foreground" />
        </button>
        <h1 className="text-xl font-semibold text-foreground flex-1">Airtime Recharge</h1>
      </div>

      <div className="max-w-md mx-auto p-4 pb-24">
        {/* Step Indicator */}
        <div className="flex gap-2 mb-8">
          {["voucher", "confirm", "success"].map((s, idx) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  ["voucher", "confirm", "success"].indexOf(step) >= idx
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {idx + 1}
              </div>
              {idx < 2 && (
                <div
                  className={`flex-1 h-1 rounded-full ${
                    ["voucher", "confirm", "success"].indexOf(step) > idx ? "bg-primary" : "bg-muted"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {step === "voucher" && (
          <div className="space-y-6">
            {/* Current Balance */}
            <div className="bg-gradient-primary rounded-2xl p-6 text-white text-center">
              <p className="text-sm opacity-90 mb-2">Current Balance</p>
              <p className="text-4xl font-bold">{currentBalance.toFixed(2)} ETB</p>
            </div>

            {/* Voucher Input */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Voucher Code</label>
              <div className="flex items-center gap-2 bg-input border border-border rounded-lg px-3 py-3">
                <Ticket size={18} className="text-muted-foreground flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Enter voucher code..."
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value.toUpperCase())}
                  maxLength={20}
                  className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm uppercase tracking-widest"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Voucher code is usually found on the back of your voucher card
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 space-y-2">
              <p className="text-xs font-semibold text-blue-900">How to find your voucher code:</p>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>• Look for a 12-16 digit code on your voucher card</li>
                <li>• Scratch the silver area to reveal the code</li>
                <li>• Enter the code below to recharge instantly</li>
              </ul>
            </div>

            {/* CTA Button */}
            <button
              onClick={validateVoucher}
              disabled={!voucherCode}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground transition-all"
            >
              Validate Voucher
            </button>
          </div>
        )}

        {step === "confirm" && (
          <div className="space-y-6">
            {/* Voucher Details */}
            <div className="bg-card rounded-xl p-6 border border-border space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Voucher Details</h3>

              <div className="bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-lg p-4 text-center">
                <p className="text-sm text-muted-foreground mb-1">Voucher Value</p>
                <p className="text-4xl font-bold text-green-600">{voucherAmount} ETB</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Your Current Balance</span>
                  <span className="text-sm font-medium text-foreground">{currentBalance.toFixed(2)} ETB</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Recharge Amount</span>
                  <span className="text-sm font-medium text-foreground">+{voucherAmount} ETB</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-semibold text-foreground">New Balance</span>
                  <span className="text-lg font-bold text-primary">
                    {(currentBalance + voucherAmount).toFixed(2)} ETB
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setStep("voucher")}
                className="w-full py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all"
              >
                Back
              </button>
              <button
                onClick={handleRecharge}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Confirm Recharge
              </button>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="space-y-6 py-8">
            {/* Success Icon */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Recharge Successful!</h2>
              <p className="text-sm text-muted-foreground">Your balance has been updated</p>
            </div>

            {/* Receipt */}
            <div className="bg-card rounded-xl p-6 border border-border space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Recharge Amount</span>
                <span className="text-sm font-medium text-green-600">+{voucherAmount} ETB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">New Balance</span>
                <span className="text-sm font-bold text-foreground">
                  {(currentBalance + voucherAmount).toFixed(2)} ETB
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Transaction ID</span>
                <span className="text-sm font-mono text-foreground">RCH20241127001</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Time</span>
                <span className="text-sm text-foreground">Just now</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={onBack}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Back to Dashboard
              </button>
              <button
                onClick={handleAnother}
                className="w-full py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all"
              >
                Recharge Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
