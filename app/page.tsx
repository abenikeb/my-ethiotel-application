"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { BalanceCard } from "@/components/balance-card";
import { UsageStats } from "@/components/usage-stats";
import { QuickActions } from "@/components/quick-actions";
import { PromotionBanner } from "@/components/promotion-banner";
import { RecentTransactions } from "@/components/recent-transactions";
import { BottomNav } from "@/components/bottom-nav";
import { PackageBrowser } from "@/components/package-browser";

export default function Home() {
	const [activeTab, setActiveTab] = useState("dashboard");
	const quickActionsRef = useRef<HTMLDivElement>(null);

	const handleSeeMore = () => {
		quickActionsRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<div className="min-h-screen bg-background">
			{/* <Header userName="Misganaw Kebede" phoneNumber="913228892" /> */}

			<main className="pb-24">
				{activeTab === "dashboard" ? (
					<>
						{/* Hero Section with Balance - extends full gradient */}
						<section className="gradient-primary text-white">
							<div className="px-0 pb-8 pt-2">
								<div className="max-w-md mx-auto">
									<BalanceCard onSeeMoreClick={handleSeeMore} />
								</div>
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
						<section className="px-4 py-6" ref={quickActionsRef}>
							<div className="max-w-md mx-auto">
								<QuickActions
									onPackagesClick={() => setActiveTab("packages")}
								/>
							</div>
						</section>

						{/* Recent Transactions */}
						<section className="px-4 py-6">
							<div className="max-w-md mx-auto">
								<RecentTransactions />
							</div>
						</section>
					</>
				) : activeTab === "packages" ? (
					<PackageBrowser onBack={() => setActiveTab("dashboard")} />
				) : activeTab === "recharge" ? (
					<div className="px-4 py-6">
						<div className="text-center py-12">
							<p className="text-gray-600 mb-4">Redirecting to Recharge...</p>
							<Link href="/recharge" className="text-lime-600 hover:underline">
								Click here if not redirected
							</Link>
						</div>
					</div>
				) : (
					<div className="px-4 py-6">
						<div className="text-center py-12 text-gray-600">Loading...</div>
					</div>
				)}
			</main>

			<BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
		</div>
	);
}
