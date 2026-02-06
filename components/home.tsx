"use client";

import { useRef } from "react";
import { Header } from "@/components/header";
import { BalanceCard } from "@/components/balance-card";
import { UsageStats } from "@/components/usage-stats";
import { QuickActions } from "@/components/quick-actions";
import { PromotionBanner } from "@/components/promotion-banner";
import { RecentTransactions } from "@/components/recent-transactions";

export default function Home() {
	const quickActionsRef = useRef<HTMLDivElement>(null);

	const handleSeeMore = () => {
		quickActionsRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<div className="min-h-screen bg-background">
			<main className="pb-24">
				{/* Hero Section with Balance - extends full gradient */}
				<section className="bg-gradient-to-r from-lime-500 to-lime-500 text-white">
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
						<QuickActions />
					</div>
				</section>

				{/* Recent Transactions */}
				<section className="px-4 py-6">
					<div className="max-w-md mx-auto">
						<RecentTransactions />
					</div>
				</section>
			</main>
		</div>
	);
}
