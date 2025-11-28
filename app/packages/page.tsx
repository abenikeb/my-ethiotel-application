"use client";
import { Header } from "@/components/header";
import { PackageBrowser } from "@/components/package-browser";
import { BottomNav } from "@/components/bottom-nav";

export default function PackagesPage() {
	return (
		<div className="min-h-screen bg-background">
			<Header userName="Misganaw Kebede" phoneNumber="913228892" />
			<main className="pb-24">
				<PackageBrowser onBack={() => window.history.back()} />
			</main>
			<BottomNav activeTab="packages" setActiveTab={() => {}} />
		</div>
	);
}
