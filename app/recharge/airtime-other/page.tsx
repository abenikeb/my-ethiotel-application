"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Phone } from "lucide-react"
import RechargeSuccessDialog from "@/components/recharge-success-dialog"

interface RechargeResult {
  voucherCode: string
  amount: number
  recipientPhone: string
}

export default function AirtimeRechargeOtherPage() {
  const [recipientPhone, setRecipientPhone] = useState("")
  const [voucherCode, setVoucherCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [rechargeResult, setRechargeResult] = useState<RechargeResult | null>(null)
  const [error, setError] = useState("")

  const handleRecharge = async () => {
    // Validate inputs
    if (!recipientPhone.trim()) {
      setError("Please enter recipient phone number")
      return
    }

    if (!voucherCode.trim()) {
      setError("Please enter a voucher code")
      return
    }

    if (voucherCode.length < 4) {
      setError("Voucher code must be at least 4 characters")
      return
    }

    setError("")
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const rechargeAmount = Number.parseFloat((Math.random() * 50 + 10).toFixed(2))

    setRechargeResult({
      voucherCode: voucherCode.toUpperCase(),
      amount: rechargeAmount,
      recipientPhone,
    })

    setShowSuccess(true)
    setIsLoading(false)
  }

  const handleSuccess = () => {
    setShowSuccess(false)
    setRecipientPhone("")
    setVoucherCode("")
    setRechargeResult(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-lime-400 to-lime-500 text-white pt-4 pb-6 px-4">
        <div className="flex items-center justify-between">
          <Link href="/recharge" className="hover:opacity-80 transition-opacity">
            <ChevronRight className="rotate-180 w-6 h-6" />
          </Link>
          <h1 className="text-xl font-semibold">Recharge For Other</h1>
          <div className="w-6" />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 max-w-md mx-auto">
        {/* Recipient Phone */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Recipient Phone Number</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              value={recipientPhone}
              onChange={(e) => {
                setRecipientPhone(e.target.value)
                setError("")
              }}
              placeholder="+251 9XX XXX XXX"
              className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition"
              disabled={isLoading}
            />
          </div>
        </div>

        {/* Voucher Input */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Voucher Number</label>
          <input
            type="text"
            value={voucherCode}
            onChange={(e) => {
              setVoucherCode(e.target.value.toUpperCase())
              setError("")
            }}
            placeholder="Please enter the voucher number..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition"
            disabled={isLoading}
          />
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>

        {/* Recharge Button */}
        <button
          onClick={handleRecharge}
          disabled={isLoading || !recipientPhone.trim() || !voucherCode.trim()}
          className={`w-full py-3 rounded-lg font-medium text-white transition-all ${
            isLoading || !recipientPhone.trim() || !voucherCode.trim()
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gradient-to-r from-lime-400 to-lime-500 hover:shadow-lg active:scale-95"
          }`}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Processing...
            </span>
          ) : (
            "Send Recharge"
          )}
        </button>
      </div>

      {/* Success Dialog */}
      {showSuccess && rechargeResult && <RechargeSuccessDialog result={rechargeResult} onClose={handleSuccess} />}
    </div>
  )
}
