"use client";

import Link from "next/link";
import { Home, ShoppingBag, Zap, Settings } from "lucide-react";

interface BottomNavProps {
	activeTab: string;
	setActiveTab: (tab: string) => void;
}

export function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
	const items = [
		{ id: "dashboard", icon: Home, label: "Home", href: "/" },
		{ id: "packages", icon: ShoppingBag, label: "Packages", href: null },
		{ id: "recharge", icon: Zap, label: "Recharge", href: "/recharge" },
		{ id: "settings", icon: Settings, label: "Settings", href: null },
	];

	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border flex items-center justify-around px-2 py-3 max-w-md mx-auto">
			{items.map((item) => {
				const isActive = activeTab === item.id;
				const buttonClass = `flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
					isActive ? "text-primary" : "text-muted-foreground"
				}`;

				if (item.href) {
					return (
						<Link key={item.id} href={item.href} className={buttonClass}>
							<item.icon size={20} />
							<span className="text-xs font-medium">{item.label}</span>
						</Link>
					);
				}

				return (
					<button
						key={item.id}
						onClick={() => setActiveTab(item.id)}
						className={buttonClass}>
						<item.icon size={20} />
						<span className="text-xs font-medium">{item.label}</span>
					</button>
				);
			})}
		</nav>
	);
}
