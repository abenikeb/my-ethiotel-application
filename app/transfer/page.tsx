"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeftRight, Wallet, RefreshCw, ChevronRight } from "lucide-react"

const transferOptions = [
  {
    id: "balance",
    title: "Balance Transfer",
    description: "Send balance to other numbers",
    icon: Wallet,
    color: "from-emerald-500 to-lime-500",
    route: "/transfer/balance",
  },
  {
    id: "package-resource",
    title: "Transfer Package Resource",
    description: "Share your package minutes, SMS, or data",
    icon: ArrowLeftRight,
    color: "from-lime-400 to-emerald-500",
    route: "/transfer/package-resource",
  },
  {
    id: "conversion",
    title: "Package Resource Conversion",
    description: "Convert between resource types",
    icon: RefreshCw,
    color: "from-lime-500 to-lime-400",
    route: "/transfer/conversion",
  },
]

export default function TransferPage() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleOptionSelect = (route: string) => {
    router.push(route)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gradient-to-r from-lime-500 via-emerald-500 to-emerald-600 text-white px-4 py-4 rounded-b-3xl shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={() => router.back()} className="p-2 hover:bg-white/20 rounded-lg transition-colors">
            <ArrowLeftRight className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold">Package Share/Convert</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-6 space-y-3">
        {transferOptions.map((option) => {
          const Icon = option.icon
          return (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.route)}
              className="w-full flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Icon Container */}
              <div className={`p-3 rounded-xl bg-gradient-to-br ${option.color} flex-shrink-0`}>
                <Icon className="w-6 h-6 text-white" />
              </div>

              {/* Text Content */}
              <div className="flex-1 text-left">
                <h3 className="text-lg font-semibold text-slate-900">{option.title}</h3>
                <p className="text-sm text-slate-500 mt-1">{option.description}</p>
              </div>

              {/* Chevron */}
              <ChevronRight className="w-5 h-5 text-slate-400 flex-shrink-0" />
            </button>
          )
        })}
      </div>

      {/* Info Box */}
      <div className="mx-4 mt-8 p-4 bg-lime-50 border border-lime-200 rounded-xl">
        <p className="text-sm text-slate-700">
          <span className="font-semibold text-lime-700">Tip:</span> Transfer operations are instant and cannot be
          reversed. Please verify recipient details before confirming.
        </p>
      </div>
    </div>
  )
}
