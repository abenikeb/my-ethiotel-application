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
				<section className="">
					<div className="px-0">
						<div className="relative max-w-md mx-auto">
							<BalanceCard onSeeMoreClick={handleSeeMore} />
							<svg
								className="absolute top-0 left-0 w-full h-48 pointer-events-none overflow-visible"
								viewBox="0 0 400 300"
								preserveAspectRatio="xMidYMid slice"
								xmlns="http://www.w3.org/2000/svg">
								{/* Left side - curves flowing INWARD toward center */}
								<path
									d="M -50 20 Q 50 15 180 80"
									stroke="white"
									strokeWidth="1.2"
									fill="none"
									opacity="0.35"
								/>
								<path
									d="M -30 40 Q 60 35 190 100"
									stroke="white"
									strokeWidth="1.2"
									fill="none"
									opacity="0.3"
								/>
								<path
									d="M -10 60 Q 70 55 200 120"
									stroke="white"
									strokeWidth="1.2"
									fill="none"
									opacity="0.25"
								/>
								<path
									d="M 5 85 Q 80 80 210 145"
									stroke="white"
									strokeWidth="1.2"
									fill="none"
									opacity="0.2"
								/>
								<path
									d="M 20 110 Q 90 105 220 170"
									stroke="white"
									strokeWidth="1.2"
									fill="none"
									opacity="0.15"
								/>
								<path
									d="M 35 135 Q 100 130 230 195"
									stroke="white"
									strokeWidth="1.2"
									fill="none"
									opacity="0.12"
								/>

								{/* Right side - curves flowing INWARD toward center (mirror of left) */}
								<path
									d="M 450 20 Q 350 15 220 80"
									stroke="white"
									strokeWidth="1.2"
									fill="none"
									opacity="0.35"
								/>
								<path
									d="M 430 40 Q 340 35 210 100"
									stroke="white"
									strokeWidth="1.2"
									fill="none"
									opacity="0.3"
								/>
								<path
									d="M 410 60 Q 330 55 200 120"
									stroke="white"
									strokeWidth="1.2"
									fill="none"
									opacity="0.25"
								/>
								<path
									d="M 395 85 Q 320 80 190 145"
									stroke="white"
									strokeWidth="1.2"
									fill="none"
									opacity="0.2"
								/>
								<path
									d="M 380 110 Q 310 105 180 170"
									stroke="white"
									strokeWidth="1.2"
									fill="none"
									opacity="0.15"
								/>
								<path
									d="M 365 135 Q 300 130 170 195"
									stroke="white"
									strokeWidth="1.2"
									fill="none"
									opacity="0.12"
								/>
							</svg>
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
