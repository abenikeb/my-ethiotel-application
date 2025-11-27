"use client"

import { useState } from "react"
import { ChevronLeft, CheckCircle, AlertCircle, Phone } from "lucide-react"

interface BalanceTransferProps {
  onBack: () => void
}

export function BalanceTransfer({ onBack }: BalanceTransferProps) {
  const [step, setStep] = useState<"form" | "review" | "success">("form")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [amount, setAmount] = useState("")
  const [error, setError] = useState("")

  const currentBalance = 0.01
  const fees = Number.parseFloat(amount || "0") * 0.05 // 5% transfer fee

  const handleContinue = () => {
    setError("")

    if (!phoneNumber.trim()) {
      setError("Please enter a phone number")
      return
    }

    if (!phoneNumber.match(/^\+?251\d{9}$/)) {
      setError("Invalid phone number format")
      return
    }

    if (!amount) {
      setError("Please enter an amount")
      return
    }

    const transferAmount = Number.parseFloat(amount)

    if (isNaN(transferAmount) || transferAmount <= 0) {
      setError("Please enter a valid amount")
      return
    }

    if (transferAmount + fees > currentBalance) {
      setError("Insufficient balance including fees")
      return
    }

    setStep("review")
  }

  const handleTransfer = () => {
    setStep("success")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40 px-4 py-4 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition">
          <ChevronLeft size={24} className="text-foreground" />
        </button>
        <h1 className="text-xl font-semibold text-foreground flex-1">Transfer Balance</h1>
      </div>

      <div className="max-w-md mx-auto p-4 pb-24">
        {/* Step Indicator */}
        <div className="flex gap-2 mb-8">
          {["form", "review", "success"].map((s, idx) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  ["form", "review", "success"].indexOf(step) >= idx
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {idx + 1}
              </div>
              {idx < 2 && (
                <div
                  className={`flex-1 h-1 rounded-full ${
                    ["form", "review", "success"].indexOf(step) > idx ? "bg-primary" : "bg-muted"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {step === "form" && (
          <div className="space-y-6">
            {/* Current Balance */}
            <div className="bg-card rounded-xl p-4 border border-border">
              <p className="text-sm text-muted-foreground mb-1">Current Balance</p>
              <p className="text-3xl font-bold text-foreground">{currentBalance.toFixed(2)} ETB</p>
            </div>

            {/* Recipient Phone */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Recipient Phone Number</label>
              <div className="flex items-center gap-2 bg-input border border-border rounded-lg px-3 py-3">
                <Phone size={18} className="text-muted-foreground flex-shrink-0" />
                <input
                  type="tel"
                  placeholder="+251"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Format: +251 or +251912345678</p>
            </div>

            {/* Amount */}
            <div>
              <label className="text-sm font-semibold text-foreground mb-2 block">Amount to Transfer</label>
              <div className="flex items-center gap-2 bg-input border border-border rounded-lg px-3 py-3">
                <span className="text-muted-foreground font-medium">ETB</span>
                <input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="0.01"
                  step="0.01"
                  className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm"
                />
              </div>
            </div>

            {/* Fee Info */}
            {amount && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 space-y-2">
                <p className="text-xs font-semibold text-amber-900">Transfer Summary</p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-amber-900/70">Amount</span>
                    <span className="font-medium text-amber-900">{Number.parseFloat(amount).toFixed(2)} ETB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-900/70">Fee (5%)</span>
                    <span className="font-medium text-amber-900">{fees.toFixed(2)} ETB</span>
                  </div>
                  <div className="h-px bg-amber-200 my-1"></div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-amber-900">Total</span>
                    <span className="font-semibold text-amber-900">
                      {(Number.parseFloat(amount) + fees).toFixed(2)} ETB
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleContinue}
                disabled={!phoneNumber || !amount}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground transition-all"
              >
                Continue to Review
              </button>
            </div>
          </div>
        )}

        {step === "review" && (
          <div className="space-y-6">
            {/* Transaction Details */}
            <div className="bg-card rounded-xl p-6 border border-border space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Transaction Details</h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-sm font-medium text-foreground">You (913228892)</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">To</span>
                  <span className="text-sm font-medium text-foreground">{phoneNumber}</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Amount</span>
                  <span className="text-sm font-medium text-foreground">{amount} ETB</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Transfer Fee</span>
                  <span className="text-sm font-medium text-foreground">{fees.toFixed(2)} ETB</span>
                </div>
                <div className="h-px bg-border"></div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-semibold text-foreground">Total Deducted</span>
                  <span className="text-lg font-bold text-primary">
                    {(Number.parseFloat(amount) + fees).toFixed(2)} ETB
                  </span>
                </div>
              </div>

              {/* Remaining Balance */}
              <div className="bg-primary/10 rounded-lg p-3">
                <p className="text-xs text-muted-foreground mb-1">Your Balance After Transfer</p>
                <p className="text-2xl font-bold text-primary">
                  {(currentBalance - Number.parseFloat(amount) - fees).toFixed(2)} ETB
                </p>
              </div>
            </div>

            {/* Warning */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex gap-2">
              <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                This action cannot be undone. Recipient will receive the transfer within 1 minute.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setStep("form")}
                className="w-full py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all"
              >
                Back
              </button>
              <button
                onClick={handleTransfer}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
              >
                Confirm Transfer
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
              <h2 className="text-2xl font-bold text-foreground mb-2">Transfer Successful!</h2>
              <p className="text-sm text-muted-foreground">Your balance transfer has been completed</p>
            </div>

            {/* Receipt */}
            <div className="bg-card rounded-xl p-6 border border-border space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Recipient</span>
                <span className="text-sm font-medium text-foreground">{phoneNumber}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Amount Sent</span>
                <span className="text-sm font-medium text-foreground">{amount} ETB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Transaction ID</span>
                <span className="text-sm font-mono text-foreground">TRF20241127001</span>
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
              <button className="w-full py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-muted transition-all">
                Share Receipt
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
