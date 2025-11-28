"use client"
import Link from "next/link"
import { ChevronRight, Phone, Smartphone } from "lucide-react"

export default function RechargePaymentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-lime-400 to-lime-500 text-white pt-4 pb-6 px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <ChevronRight className="rotate-180 w-6 h-6" />
          </Link>
          <h1 className="text-xl font-semibold">Recharge/Payment</h1>
          <div className="w-6" />
        </div>
      </div>

      {/* Recharge Options */}
      <div className="px-4 py-6 space-y-4">
        {/* Airtime Recharge for Self */}
        <Link href="/recharge/airtime">
          <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-full">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-gray-900 font-medium">Airtime Recharge</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>

        {/* Airtime Recharge for Other */}
        <Link href="/recharge/airtime-other">
          <div className="flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="flex items-center justify-center w-12 h-12 bg-teal-500 rounded-full">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div className="ml-4 flex-1">
              <p className="text-gray-900 font-medium">Airtime Recharge For Other</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
      </div>
    </div>
  )
}
