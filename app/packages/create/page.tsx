"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { CustomPackageForm } from "@/components/custom-package-form"

export default function CreatePackagePage() {
  const [activeTab, setActiveTab] = useState<"self" | "gift">("self")

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <div className="gradient-primary sticky top-0 z-40 px-4 py-4 flex items-center gap-3 text-white">
        <Link href="/packages" className="p-2 hover:bg-white/20 rounded-lg transition">
          <ChevronLeft size={24} />
        </Link>
        <h1 className="text-xl font-semibold flex-1">Create Your Own Package</h1>
      </div>

      {/* Tabs */}
      <div className="bg-card border-b border-border sticky top-16 z-30 px-4 pt-3">
        <div className="flex gap-12">
          <button
            onClick={() => setActiveTab("self")}
            className={`pb-3 font-semibold text-sm relative transition-colors ${
              activeTab === "self" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Self
            {activeTab === "self" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t"></div>}
          </button>
          <button
            onClick={() => setActiveTab("gift")}
            className={`pb-3 font-semibold text-sm relative transition-colors ${
              activeTab === "gift" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Gift
            {activeTab === "gift" && <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t"></div>}
          </button>
        </div>
      </div>

      {/* Form */}
      <CustomPackageForm mode={activeTab} />
    </div>
  )
}
