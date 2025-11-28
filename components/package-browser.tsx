"use client";

import { useState, useMemo } from "react";
import { Search, X, ChevronLeft, Filter } from "lucide-react";
import Link from "next/link";
import { PackageCard } from "./package-card";
import { FilterPanel } from "./filter-panel";

export interface Package {
	id: string;
	name: string;
	category: "voice" | "data" | "sms" | "5g" | "roaming" | "crbt";
	data?: number;
	voice?: number;
	sms?: number;
	price: number;
	frequency: "daily" | "weekly" | "monthly";
	validity?: string;
	badge?: string;
	popular?: boolean;
}

const PACKAGES: Package[] = [
	// Voice Packages
	{
		id: "1",
		name: "Voice Night for 57Min and 3 SMS",
		category: "voice",
		voice: 57,
		sms: 3,
		price: 3,
		frequency: "daily",
	},
	{
		id: "2",
		name: "Voice Daily for 14 Min and 3 SMS",
		category: "voice",
		voice: 14,
		sms: 3,
		price: 3,
		frequency: "daily",
		badge: "+14 Night Bonus",
	},
	{
		id: "3",
		name: "Voice Daily for 25 Min and 5 SMS",
		category: "voice",
		voice: 25,
		sms: 5,
		price: 5,
		frequency: "daily",
	},
	{
		id: "4",
		name: "Voice Night for 133Min and 6 SMS",
		category: "voice",
		voice: 133,
		sms: 6,
		price: 6,
		frequency: "daily",
	},
	{
		id: "5",
		name: "Voice Daily for 60 Min and 10 SMS",
		category: "voice",
		voice: 60,
		sms: 10,
		price: 12,
		frequency: "daily",
		badge: "+60 Night Bonus",
		popular: true,
	},
	{
		id: "6",
		name: "Voice Weekly for 80 Min and 15 SMS",
		category: "voice",
		voice: 80,
		sms: 15,
		price: 22,
		frequency: "weekly",
		badge: "+80 Night Bonus",
	},
	{
		id: "7",
		name: "Internet Night for 210 MB",
		category: "data",
		data: 210,
		price: 3,
		frequency: "daily",
	},
	{
		id: "8",
		name: "Internet Daily for 50 MB",
		category: "data",
		data: 50,
		price: 3,
		frequency: "daily",
		badge: "+50 MB Bonus",
	},
	{
		id: "9",
		name: "Internet Night for 512 MB",
		category: "data",
		data: 512,
		price: 5,
		frequency: "daily",
	},
	{
		id: "10",
		name: "Internet Daily for 100 MB",
		category: "data",
		data: 100,
		price: 5,
		frequency: "daily",
		badge: "+100 MB Bonus",
		popular: true,
	},
	{
		id: "11",
		name: "Internet Night for 1 GB",
		category: "data",
		data: 1024,
		price: 7,
		frequency: "daily",
	},
	{
		id: "12",
		name: "Internet Daily for 280MB",
		category: "data",
		data: 280,
		price: 14,
		frequency: "daily",
		badge: "+280 MB Bonus",
	},
	{
		id: "13",
		name: "Monthly 5G Package for 150GB",
		category: "5g",
		data: 150000,
		price: 1500,
		frequency: "monthly",
	},
	{
		id: "14",
		name: "Monthly 5G Package for 250GB",
		category: "5g",
		data: 250000,
		price: 1800,
		frequency: "monthly",
	},
	{
		id: "15",
		name: "Monthly 5G Unlimited Internet",
		category: "5g",
		data: 999999,
		price: 2250,
		frequency: "monthly",
		popular: true,
	},
	{
		id: "16",
		name: "Monthly 5G Unlimited Premium",
		category: "5g",
		data: 999999,
		price: 2450,
		frequency: "monthly",
	},
	{
		id: "17",
		name: "SMS Bundle 50",
		category: "sms",
		sms: 50,
		price: 3,
		frequency: "daily",
	},
	{
		id: "18",
		name: "SMS Bundle 100",
		category: "sms",
		sms: 100,
		price: 5,
		frequency: "daily",
	},
	{
		id: "19",
		name: "Normal CRBT Service",
		category: "crbt",
		price: 7,
		frequency: "monthly",
	},
	{
		id: "20",
		name: "Calling CRBT Service",
		category: "crbt",
		price: 7,
		frequency: "monthly",
	},
	{
		id: "21",
		name: "Umrah Roaming Package",
		category: "roaming",
		price: 100,
		frequency: "weekly",
	},
];

const CATEGORIES = [
	{ id: "all", label: "All Packages", icon: "📦" },
	{ id: "voice", label: "Voice", icon: "☎️" },
	{ id: "data", label: "Data", icon: "📡" },
	{ id: "5g", label: "5G", icon: "⚡" },
	{ id: "sms", label: "SMS", icon: "💬" },
	{ id: "crbt", label: "CRBT", icon: "🎵" },
	{ id: "roaming", label: "Roaming", icon: "✈️" },
];

interface PackageBrowserProps {
	onBack: () => void;
}

export function PackageBrowser({ onBack }: PackageBrowserProps) {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [selectedFrequency, setSelectedFrequency] = useState("all");
	const [showFilters, setShowFilters] = useState(false);
	const [sortBy, setSortBy] = useState("popular");
	const [activeTab, setActiveTab] = useState<"buy" | "gift">("buy");

	const filteredPackages = useMemo(() => {
		let result = PACKAGES;

		if (selectedCategory !== "all") {
			result = result.filter((p) => p.category === selectedCategory);
		}

		if (selectedFrequency !== "all") {
			result = result.filter((p) => p.frequency === selectedFrequency);
		}

		if (searchQuery) {
			result = result.filter((p) =>
				p.name.toLowerCase().includes(searchQuery.toLowerCase())
			);
		}

		if (sortBy === "popular") {
			result = result.sort((a, b) => {
				if (a.popular === b.popular) return 0;
				return a.popular ? -1 : 1;
			});
		} else if (sortBy === "price-low") {
			result = result.sort((a, b) => a.price - b.price);
		} else if (sortBy === "price-high") {
			result = result.sort((a, b) => b.price - a.price);
		}

		return result;
	}, [searchQuery, selectedCategory, selectedFrequency, sortBy]);

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<div className="bg-card border-b border-border sticky top-0 z-40 px-4 py-4 flex items-center gap-3">
				<button
					onClick={onBack}
					className="p-2 hover:bg-muted rounded-lg transition">
					<ChevronLeft size={24} className="text-foreground" />
				</button>
				<h1 className="text-xl font-semibold text-foreground flex-1">
					Packages
				</h1>
				<button
					onClick={() => setShowFilters(!showFilters)}
					className="p-2 hover:bg-muted rounded-lg transition">
					<Filter size={20} className="text-foreground" />
				</button>
			</div>

			{/* Tab Navigation */}
			<div className="bg-card border-b border-border sticky top-16 z-30 px-4 pt-3">
				<div className="flex gap-8">
					<button
						onClick={() => setActiveTab("buy")}
						className={`pb-3 font-semibold text-sm relative transition-colors ${
							activeTab === "buy"
								? "text-foreground"
								: "text-muted-foreground hover:text-foreground"
						}`}>
						Buy Package
						{activeTab === "buy" && (
							<div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t"></div>
						)}
					</button>
					<button
						onClick={() => setActiveTab("gift")}
						className={`pb-3 font-semibold text-sm relative transition-colors ${
							activeTab === "gift"
								? "text-foreground"
								: "text-muted-foreground hover:text-foreground"
						}`}>
						Send a Gift
						{activeTab === "gift" && (
							<div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t"></div>
						)}
					</button>
				</div>
			</div>

			{/* Search Bar */}
			<div className="px-4 py-4 bg-card border-b border-border">
				<div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2.5">
					<Search size={18} className="text-muted-foreground" />
					<input
						type="text"
						placeholder="Search packages..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm"
					/>
					{searchQuery && (
						<button
							onClick={() => setSearchQuery("")}
							className="p-1 hover:bg-muted rounded">
							<X size={16} className="text-muted-foreground" />
						</button>
					)}
				</div>
			</div>

			{/* Category Tabs */}
			<div className="bg-card border-b border-border px-4 py-3 overflow-x-auto">
				<div className="flex gap-2 min-w-min">
					{CATEGORIES.map((cat) => (
						<button
							key={cat.id}
							onClick={() => setSelectedCategory(cat.id)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
								selectedCategory === cat.id
									? "bg-primary text-primary-foreground shadow-md"
									: "bg-muted text-foreground hover:bg-muted/80"
							}`}>
							{cat.icon} {cat.label}
						</button>
					))}
				</div>
			</div>

			{/* Filter Panel */}
			{showFilters && (
				<div className="bg-card border-b border-border px-4 py-4">
					<FilterPanel
						selectedFrequency={selectedFrequency}
						onFrequencyChange={setSelectedFrequency}
						sortBy={sortBy}
						onSortChange={setSortBy}
					/>
				</div>
			)}

			{/* Packages Grid */}
			<div className="px-4 py-6 pb-32">
				<div className="space-y-3">
					{filteredPackages.length > 0 ? (
						filteredPackages.map((pkg) => (
							<div key={pkg.id}>
								{activeTab === "gift" ? (
									<Link href={`/packages/send-gift/${pkg.id}`}>
										<PackageCard package={pkg} buy="buy" />
									</Link>
								) : (
									<PackageCard package={pkg} buy="send" />
								)}
							</div>
						))
					) : (
						<div className="text-center py-12">
							<p className="text-muted-foreground">No packages found</p>
							<button
								onClick={() => {
									setSearchQuery("");
									setSelectedCategory("all");
									setSelectedFrequency("all");
								}}
								className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium">
								Reset Filters
							</button>
						</div>
					)}
				</div>
			</div>

			{/* Create Your Own Package Button */}
			{activeTab === "buy" && (
				<div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-30">
					<Link href="/packages/create">
						<button className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all">
							Create Your Own Package
						</button>
					</Link>
				</div>
			)}
		</div>
	);
}
