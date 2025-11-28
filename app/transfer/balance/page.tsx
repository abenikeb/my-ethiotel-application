"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Wallet, Phone, CheckCircle, AlertCircle } from "lucide-react"

export default function BalanceTransferPage() {
  const router = useRouter()
  const [amount, setAmount] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("+251")
  const [isPhoneValid, setIsPhoneValid] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const currentBalance = 1.76
  const fee = amount ? (Number.parseFloat(amount) * 0.05).toFixed(2) : "0.00"
  const totalDeduction = amount ? (Number.parseFloat(amount) + Number.parseFloat(fee)).toFixed(2) : "0.00"
  const remainingBalance = amount
    ? (currentBalance - Number.parseFloat(totalDeduction)).toFixed(2)
    : currentBalance.toFixed(2)

  const validatePhone = (phone: string) => {
    const isValid = /^\+251[0-9]{9}$/.test(phone)
    setIsPhoneValid(isValid)
    return isValid
  }

  const handlePhoneChange = (e: string) => {
    let value = e.replace(/[^0-9+]/g, "")
    if (!value.startsWith("+251")) {
      value = "+251" + value.replace(/^\+?251/, "")
    }
    value = value.substring(0, 13)
    setPhoneNumber(value)
    validatePhone(value)
  }

  const handleTransfer = async () => {
    if (!amount || !isPhoneValid || Number.parseFloat(amount) <= 0) {
      alert("Please enter a valid amount and phone number")
      return
    }

    if (Number.parseFloat(totalDeduction) > currentBalance) {
      alert("Insufficient balance")
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowSuccess(true)
    }, 1500)
  }

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-full">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-2">Transfer Successful</h2>
          <p className="text-slate-600 mb-6">Your balance has been transferred successfully</p>

          <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-3 text-left">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Amount Transferred:</span>
              <span className="font-semibold text-slate-900">{amount} Birr</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-600">Transaction Fee:</span>
              <span className="text-slate-900">{fee} Birr</span>
            </div>
            <div className="border-t border-slate-200 pt-3 flex justify-between items-center">
              <span className="text-slate-600 font-semibold">New Balance:</span>
              <span className="font-bold text-lg text-lime-600">{remainingBalance} Birr</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Recipient:</span>
              <span className="font-semibold text-slate-900">{phoneNumber}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Transaction ID:</span>
              <span className="font-mono text-xs text-slate-500">TXN20251128091200</span>
            </div>
          </div>

          <button
            onClick={() => router.push("/")}
            className="w-full bg-gradient-to-r from-lime-500 to-emerald-500 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-lime-500 via-emerald-500 to-emerald-600 text-white px-4 py-4 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold">Balance Transfer</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Current Balance Card */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-slate-500 text-sm mb-1">Current Balance</p>
              <h2 className="text-4xl font-bold text-slate-900">{currentBalance.toFixed(2)} Birr</h2>
            </div>
            <div className="p-3 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-xl">
              <Wallet className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        {/* Amount Input */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <label className="block">
            <span className="text-slate-700 font-semibold block mb-2">Amount</span>
            <div className="flex gap-2">
              <input
                type="number"
                inputMode="decimal"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-lime-500 focus:outline-none transition-colors text-lg font-semibold"
              />
              <div className="flex items-center justify-center px-4 bg-slate-100 rounded-xl">
                <span className="text-slate-600 font-semibold">Birr</span>
              </div>
            </div>
          </label>

          {/* Fee & Total Preview */}
          {amount && (
            <div className="bg-lime-50 rounded-xl p-3 space-y-2 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Transfer Fee (5%):</span>
                <span>{fee} Birr</span>
              </div>
              <div className="flex justify-between font-semibold text-slate-900 text-base">
                <span>Total Deduction:</span>
                <span>{totalDeduction} Birr</span>
              </div>
              <div className="border-t border-lime-200 pt-2 flex justify-between font-bold text-lime-700">
                <span>Remaining Balance:</span>
                <span>{remainingBalance} Birr</span>
              </div>
            </div>
          )}
        </div>

        {/* Phone Number Input */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-2">
          <label className="block">
            <span className="text-slate-700 font-semibold block mb-2">Recipient Phone Number</span>
            <div className="flex gap-2">
              <div className="flex items-center px-4 bg-slate-100 rounded-xl border-2 border-slate-200">
                <Phone className="w-4 h-4 text-slate-400 mr-2" />
              </div>
              <input
                type="tel"
                placeholder="+251 9xx xxx xxx"
                value={phoneNumber}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-lime-500 focus:outline-none transition-colors font-mono"
              />
              {isPhoneValid && (
                <div className="flex items-center text-lime-600">
                  <CheckCircle className="w-5 h-5" />
                </div>
              )}
            </div>
          </label>
          {phoneNumber && !isPhoneValid && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <AlertCircle className="w-4 h-4" />
              Invalid phone number format
            </p>
          )}
          <p className="text-xs text-slate-500 mt-2">Format: +251 followed by 9 digits</p>
        </div>

        {/* Warning */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
          <p className="text-sm text-amber-800">
            <span className="font-semibold">Warning:</span> This transaction cannot be reversed. Please verify the
            recipient phone number before confirming.
          </p>
        </div>
      </div>

      {/* Transfer Button */}
      <div className="sticky bottom-0 px-4 py-4 bg-white border-t border-slate-200 shadow-lg">
        <button
          onClick={handleTransfer}
          disabled={!amount || !isPhoneValid || isLoading || Number.parseFloat(amount) <= 0}
          className="w-full bg-gradient-to-r from-lime-500 to-emerald-500 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg active:scale-[0.98]"
        >
          {isLoading ? "Processing..." : "Transfer"}
        </button>
      </div>
    </div>
  )
}
