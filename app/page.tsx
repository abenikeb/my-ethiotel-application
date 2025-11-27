"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { BalanceCard } from "@/components/balance-card"
import { UsageStats } from "@/components/usage-stats"
import { QuickActions } from "@/components/quick-actions"
import { PromotionBanner } from "@/components/promotion-banner"
import { RecentTransactions } from "@/components/recent-transactions"
import { BottomNav } from "@/components/bottom-nav"
import { PackageBrowser } from "@/components/package-browser"

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="min-h-screen bg-background">
      <Header userName="Misganaw Kebede" phoneNumber="913228892" />

      <main className="pb-24">
        {activeTab === "dashboard" ? (
          <>
            {/* Hero Section with Balance */}
            <section className="gradient-primary px-4 py-8 text-white">
              <div className="max-w-md mx-auto">
                <BalanceCard />
              </div>
            </section>

            {/* Usage Statistics */}
            <section className="px-4 py-6">
              <div className="max-w-md mx-auto">
                <UsageStats />
              </div>
            </section>

            {/* Promotion Banner */}
            <section className="px-4 py-3">
              <div className="max-w-md mx-auto">
                <PromotionBanner />
              </div>
            </section>

            {/* Quick Actions */}
            <section className="px-4 py-6">
              <div className="max-w-md mx-auto">
                <QuickActions onPackagesClick={() => setActiveTab("packages")} />
              </div>
            </section>

            {/* Recent Transactions */}
            <section className="px-4 py-6">
              <div className="max-w-md mx-auto">
                <RecentTransactions />
              </div>
            </section>
          </>
        ) : (
          <PackageBrowser onBack={() => setActiveTab("dashboard")} />
        )}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}
