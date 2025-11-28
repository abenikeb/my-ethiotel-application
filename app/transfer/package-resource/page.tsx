"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react"

interface PackageResource {
  id: string
  name: string
  type: "voice" | "sms" | "data"
  amount: number
  unit: "Min" | "SMS" | "MB"
  expiryDate: string
  expiryTime: string
}

const resources: PackageResource[] = [
  {
    id: "1",
    name: "National Voice One Hour package",
    type: "voice",
    amount: 4.0,
    unit: "Min",
    expiryDate: "28/11/2025",
    expiryTime: "09:17:28",
  },
  {
    id: "2",
    name: "Weekly Bonus_Voice from 22:00-7:00",
    type: "voice",
    amount: 150.82,
    unit: "Min",
    expiryDate: "02/12/2025",
    expiryTime: "10:46:04",
  },
  {
    id: "3",
    name: "Convertible Weekly Voice",
    type: "voice",
    amount: 44.4,
    unit: "Min",
    expiryDate: "02/12/2025",
    expiryTime: "10:46:05",
  },
  {
    id: "4",
    name: "Convertible Weekly SMS",
    type: "sms",
    amount: 21.0,
    unit: "SMS",
    expiryDate: "02/12/2025",
    expiryTime: "10:46:05",
  },
  {
    id: "5",
    name: "Convertible Monthly Data_50GB Up To 150GB",
    type: "data",
    amount: 23478.92,
    unit: "MB",
    expiryDate: "04/12/2025",
    expiryTime: "22:42:53",
  },
]

export default function TransferPackageResourcePage() {
  const router = useRouter()
  const [selectedResource, setSelectedResource] = useState<string>("1")
  const [transferAmount, setTransferAmount] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("+251")
  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const selected = resources.find((r) => r.id === selectedResource)
  const minTransfer = 3
  const maxTransfer = selected?.amount || 100

  const getTypeColor = (type: string) => {
    switch (type) {
      case "voice":
        return "text-emerald-600 bg-emerald-50"
      case "sms":
        return "text-blue-600 bg-blue-50"
      case "data":
        return "text-purple-600 bg-purple-50"
      default:
        return "text-slate-600 bg-slate-50"
    }
  }

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "voice":
        return "bg-emerald-500"
      case "sms":
        return "bg-blue-500"
      case "data":
        return "bg-purple-500"
      default:
        return "bg-slate-500"
    }
  }

  const handleTransfer = async () => {
    const amount = Number.parseFloat(transferAmount)

    if (!transferAmount || amount <= 0 || amount < minTransfer || amount > maxTransfer) {
      alert(`Please enter amount between ${minTransfer} and ${maxTransfer}`)
      return
    }

    if (!/^\+251[0-9]{9}$/.test(phoneNumber)) {
      alert("Please enter a valid phone number")
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowSuccess(true)
    }, 1500)
  }

  if (showSuccess && selected) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-full">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-2">Transfer Successful</h2>
          <p className="text-slate-600 mb-6">Package resource transferred successfully</p>

          <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-3 text-left text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Resource Type:</span>
              <span className="font-semibold text-slate-900 capitalize">{selected.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Amount:</span>
              <span className="font-semibold text-slate-900">
                {transferAmount} {selected.unit}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Recipient:</span>
              <span className="font-semibold text-slate-900">{phoneNumber}</span>
            </div>
            <div className="border-t border-slate-200 pt-3 flex justify-between">
              <span className="text-slate-600 font-semibold">Remaining:</span>
              <span className="font-bold text-lime-600">
                {(selected.amount - Number.parseFloat(transferAmount)).toFixed(2)} {selected.unit}
              </span>
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
          <h1 className="text-2xl font-bold">Transfer Package Resource</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Resource Selection */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <div className="grid grid-cols-2 gap-4 text-sm font-semibold text-slate-600">
              <span>Resource Type</span>
              <span className="text-right">Current Amount/Expiry</span>
            </div>
          </div>

          <div className="space-y-0">
            {resources.map((resource) => (
              <button
                key={resource.id}
                onClick={() => setSelectedResource(resource.id)}
                className={`w-full px-6 py-4 flex items-start gap-4 border-b border-slate-100 hover:bg-slate-50 transition-colors text-left ${
                  selectedResource === resource.id ? "bg-lime-50" : ""
                }`}
              >
                {/* Radio Button */}
                <div className="mt-1 flex-shrink-0">
                  {selectedResource === resource.id ? (
                    <div className="w-6 h-6 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 border-2 border-slate-300 rounded-full" />
                  )}
                </div>

                {/* Resource Info */}
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 text-sm">{resource.name}</h3>
                  <div className="mt-1 flex items-center gap-2">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getTypeColor(resource.type)}`}>
                      {resource.type.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Amount & Expiry */}
                <div className="flex-shrink-0 text-right">
                  <p className="font-bold text-slate-900">
                    {resource.amount.toFixed(2)} {resource.unit}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{resource.expiryDate}</p>
                  <p className="text-xs text-slate-400">{resource.expiryTime}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Transfer Amount */}
        <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
          <label className="block">
            <span className="text-slate-700 font-semibold block mb-2">Amount to Transfer</span>
            <input
              type="number"
              inputMode="decimal"
              placeholder="0.00"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-lime-500 focus:outline-none transition-colors text-lg font-semibold"
            />
          </label>

          <div className="bg-slate-100 rounded-lg px-4 py-3 text-xs text-slate-600 space-y-1">
            <p>
              <span className="font-semibold">Min per transfer:</span> {minTransfer}
              {selected?.unit}
            </p>
            <p>
              <span className="font-semibold">Max per transfer:</span> {maxTransfer.toFixed(2)}
              {selected?.unit}
            </p>
          </div>
        </div>

        {/* Phone Number */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <label className="block">
            <span className="text-slate-700 font-semibold block mb-2">Recipient Phone Number</span>
            <input
              type="tel"
              placeholder="+251 9xx xxx xxx"
              value={phoneNumber}
              onChange={(e) => {
                let value = e.target.value.replace(/[^0-9+]/g, "")
                if (!value.startsWith("+251")) {
                  value = "+251" + value.replace(/^\+?251/, "")
                }
                setPhoneNumber(value.substring(0, 13))
              }}
              className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-lime-500 focus:outline-none transition-colors font-mono"
            />
          </label>
          <p className="text-xs text-slate-500 mt-2">Format: +251 followed by 9 digits</p>
        </div>

        {/* Info */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
          <p className="text-sm text-blue-800 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <span>
              <span className="font-semibold">Note:</span> Resources will be transferred instantly and cannot be
              reversed.
            </span>
          </p>
        </div>
      </div>

      {/* Transfer Button */}
      <div className="sticky bottom-0 px-4 py-4 bg-white border-t border-slate-200 shadow-lg">
        <button
          onClick={handleTransfer}
          disabled={!transferAmount || isLoading}
          className="w-full bg-gradient-to-r from-lime-500 to-emerald-500 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg active:scale-[0.98]"
        >
          {isLoading ? "Processing..." : "Transfer"}
        </button>
      </div>
    </div>
  )
}
