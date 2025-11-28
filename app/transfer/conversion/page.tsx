"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, RefreshCw, CheckCircle2 } from "lucide-react"

type ResourceType = "voice" | "sms" | "data"

interface ConversionOption {
  id: string
  from: ResourceType
  to: ResourceType
  rate: string
  description: string
}

const conversionOptions: ConversionOption[] = [
  { id: "1", from: "voice", to: "data", rate: "1 Min = 1 MB", description: "Convert voice minutes to data" },
  { id: "2", from: "data", to: "voice", rate: "1 MB = 1 Min", description: "Convert data to voice minutes" },
  { id: "3", from: "voice", to: "sms", rate: "2 Min = 1 SMS", description: "Convert voice minutes to SMS" },
  { id: "4", from: "sms", to: "voice", rate: "1 SMS = 2 Min", description: "Convert SMS to voice minutes" },
  { id: "5", from: "data", to: "sms", rate: "5 MB = 1 SMS", description: "Convert data to SMS" },
  { id: "6", from: "sms", to: "data", rate: "1 SMS = 5 MB", description: "Convert SMS to data" },
]

const resources = {
  voice: 250,
  data: 1024,
  sms: 50,
}

export default function ConversionPage() {
  const router = useRouter()
  const [selectedConversion, setSelectedConversion] = useState<string>("1")
  const [amount, setAmount] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const selected = conversionOptions.find((c) => c.id === selectedConversion)
  const selectedFrom = selected?.from as ResourceType
  const selectedTo = selected?.to as ResourceType
  const availableAmount = resources[selectedFrom]

  const getUnit = (type: ResourceType) => {
    return type === "data" ? "MB" : type === "voice" ? "Min" : "SMS"
  }

  const getTypeColor = (type: ResourceType) => {
    switch (type) {
      case "voice":
        return "from-emerald-400 to-emerald-600"
      case "sms":
        return "from-blue-400 to-blue-600"
      case "data":
        return "from-purple-400 to-purple-600"
    }
  }

  const handleConvert = async () => {
    if (!amount || Number.parseFloat(amount) <= 0 || Number.parseFloat(amount) > availableAmount) {
      alert(`Please enter amount between 0 and ${availableAmount}`)
      return
    }

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setShowSuccess(true)
    }, 1500)
  }

  if (showSuccess && selected) {
    let resultAmount = Number.parseFloat(amount)
    if (selected.from === "voice" && selected.to === "sms") resultAmount /= 2
    else if (selected.from === "sms" && selected.to === "voice") resultAmount *= 2
    else if (selected.from === "data" && selected.to === "sms") resultAmount /= 5
    else if (selected.from === "sms" && selected.to === "data") resultAmount *= 5

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-gradient-to-br from-lime-400 to-emerald-500 rounded-full">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-2">Conversion Successful</h2>
          <p className="text-slate-600 mb-6">Your resources have been converted</p>

          <div className="bg-slate-50 rounded-xl p-4 mb-6 space-y-3 text-left text-sm">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">From:</span>
              <span className="font-semibold text-slate-900">
                {amount} {getUnit(selected.from)}
              </span>
            </div>
            <div className="flex justify-center">
              <RefreshCw className="w-4 h-4 text-lime-600" />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">To:</span>
              <span className="font-bold text-lime-600">
                {resultAmount.toFixed(2)} {getUnit(selected.to)}
              </span>
            </div>
            <div className="border-t border-slate-200 pt-3 flex justify-between">
              <span className="text-slate-600 font-semibold">Conversion Rate:</span>
              <span className="font-mono text-xs text-slate-700">{selected.rate}</span>
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
          <h1 className="text-2xl font-bold">Resource Conversion</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-6">
        {/* Conversion Options */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <h3 className="font-semibold text-slate-900 text-sm">Select Conversion Type</h3>
          </div>

          <div className="space-y-0">
            {conversionOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedConversion(option.id)}
                className={`w-full px-6 py-4 flex items-center justify-between border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                  selectedConversion === option.id ? "bg-lime-50" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex gap-2 items-center">
                    <div
                      className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(option.from)} text-white text-xs font-semibold rounded`}
                    >
                      {getUnit(option.from)}
                    </div>
                    <RefreshCw className="w-4 h-4 text-slate-400" />
                    <div
                      className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(option.to)} text-white text-xs font-semibold rounded`}
                    >
                      {getUnit(option.to)}
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-slate-900 text-sm">{option.description}</p>
                    <p className="text-xs text-slate-500 mt-1">{option.rate}</p>
                  </div>
                </div>
                {selectedConversion === option.id && (
                  <div className="w-4 h-4 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Amount Input */}
        {selected && (
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
            <label className="block">
              <span className="text-slate-700 font-semibold block mb-2">
                Amount to Convert ({getUnit(selectedFrom)})
              </span>
              <input
                type="number"
                inputMode="decimal"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-lime-500 focus:outline-none transition-colors text-lg font-semibold"
              />
            </label>

            <div className="bg-slate-100 rounded-lg px-4 py-3 text-xs text-slate-600 space-y-1">
              <p>
                <span className="font-semibold">Available:</span> {availableAmount}
                {getUnit(selectedFrom)}
              </p>
              <p>
                <span className="font-semibold">Conversion Rate:</span> {selected.rate}
              </p>
            </div>
          </div>
        )}

        {/* Conversion Preview */}
        {selected && amount && (
          <div className="bg-gradient-to-r from-lime-50 to-emerald-50 rounded-2xl p-6 border border-lime-200">
            <div className="flex items-center justify-between mb-4">
              <div className="text-center flex-1">
                <p className="text-sm text-slate-600 mb-1">From</p>
                <p className="text-2xl font-bold text-slate-900">{amount}</p>
                <p className="text-xs text-slate-500 capitalize">{selectedFrom}</p>
              </div>
              <RefreshCw className="w-6 h-6 text-lime-600 mx-4" />
              <div className="text-center flex-1">
                <p className="text-sm text-slate-600 mb-1">To</p>
                <p className="text-2xl font-bold text-lime-700">
                  {selectedConversion === "1" || selectedConversion === "2"
                    ? amount
                    : selectedConversion === "3" || selectedConversion === "4"
                      ? (Number.parseFloat(amount) / 2).toFixed(2)
                      : selectedConversion === "5"
                        ? (Number.parseFloat(amount) / 5).toFixed(2)
                        : (Number.parseFloat(amount) * 5).toFixed(2)}
                </p>
                <p className="text-xs text-slate-500 capitalize">{selectedTo}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Convert Button */}
      <div className="sticky bottom-0 px-4 py-4 bg-white border-t border-slate-200 shadow-lg">
        <button
          onClick={handleConvert}
          disabled={!amount || isLoading}
          className="w-full bg-gradient-to-r from-lime-500 to-emerald-500 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg active:scale-[0.98]"
        >
          {isLoading ? "Processing..." : "Convert"}
        </button>
      </div>
    </div>
  )
}
