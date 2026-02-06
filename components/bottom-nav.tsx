"use client";

import Link from "next/link";
import { Home, Send, Package, Share2, RefreshCw } from "lucide-react";

interface BottomNavProps {
	activeTab: string;
	setActiveTab: (tab: string) => void;
}

export function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
	const items = [
		{ id: "home", icon: Home, label: "Home", href: "/" },
		{ id: "transfer", icon: Send, label: "Transfer", href: "/transfer" },
		{
			id: "packages",
			icon: Package,
			label: "Packages",
			href: "/packages",
			isCenter: true,
		},
		{ id: "share", icon: Share2, label: "Share", href: "/transfer" },
		{ id: "rechange", icon: RefreshCw, label: "Recharge", href: "/recharge" },
	];

	const leftItems = items.slice(0, 2);
	const centerItem = items[2];
	const rightItems = items.slice(3);

	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border flex items-center justify-between px-4 py-3 max-w-md mx-auto">
			{/* Left items */}
			<div className="flex flex-1 justify-around">
				{leftItems.map((item) => {
					const isActive = activeTab === item.id;
					return (
						<Link
							key={item.id}
							href={item.href}
							className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
								isActive ? "text-primary" : "text-muted-foreground"
							}`}>
							<item.icon size={20} />
							<span className="text-xs font-medium">{item.label}</span>
						</Link>
					);
				})}
			</div>

			{/* Center prominent button */}
			<Link
				href={centerItem.href}
				className={`flex flex-col items-center justify-center gap-1 mx-4 transition-all transform hover:scale-110 ${
					activeTab === centerItem.id ? "text-primary" : "text-muted-foreground"
				}`}>
				<div
					className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${
						activeTab === centerItem.id
							? "bg-primary text-white"
							: "bg-primary/10 text-primary"
					}`}>
					<centerItem.icon size={32} />
				</div>
				<span className="text-xs font-medium">{centerItem.label}</span>
			</Link>

			{/* Right items */}
			<div className="flex flex-1 justify-around">
				{rightItems.map((item) => {
					const isActive = activeTab === item.id;
					return (
						<Link
							key={item.id}
							href={item.href}
							className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
								isActive ? "text-primary" : "text-muted-foreground"
							}`}>
							<item.icon size={20} />
							<span className="text-xs font-medium">{item.label}</span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
// "use client";

// import Link from "next/link";
// import { Home, ShoppingBag, Zap, Settings } from "lucide-react";

// interface BottomNavProps {
// 	activeTab: string;
// 	setActiveTab: (tab: string) => void;
// }

// export function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
// 	const items = [
// 		{ id: "dashboard", icon: Home, label: "Home", href: "/" },
// 		{ id: "packages", icon: ShoppingBag, label: "Packages", href: "/packages" },
// 		{ id: "recharge", icon: Zap, label: "Recharge", href: "/recharge" },
// 		{ id: "settings", icon: Settings, label: "Settings", href: null },
// 	];

// 	return (
// 		<nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border flex items-center justify-around px-2 py-3 max-w-md mx-auto">
// 			{items.map((item) => {
// 				const isActive = activeTab === item.id;
// 				const buttonClass = `flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
// 					isActive ? "text-primary" : "text-muted-foreground"
// 				}`;

// 				if (item.href) {
// 					return (
// 						<Link key={item.id} href={item.href} className={buttonClass}>
// 							<item.icon size={20} />
// 							<span className="text-xs font-medium">{item.label}</span>
// 						</Link>
// 					);
// 				}

// 				return (
// 					<button
// 						key={item.id}
// 						onClick={() => setActiveTab(item.id)}
// 						className={buttonClass}>
// 						<item.icon size={20} />
// 						<span className="text-xs font-medium">{item.label}</span>
// 					</button>
// 				);
// 			})}
// 		</nav>
// 	);
// }
// "use client";

// import Link from "next/link";
// import { Home, ShoppingBag, Zap, Settings } from "lucide-react";

// interface BottomNavProps {
// 	activeTab: string;
// 	setActiveTab: (tab: string) => void;
// }

// export function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
// 	const items = [
// 		{ id: "dashboard", icon: Home, label: "Home", href: "/" },
// 		{ id: "packages", icon: ShoppingBag, label: "Packages", href: "/packages" },
// 		{ id: "recharge", icon: Zap, label: "Recharge", href: "/recharge" },
// 		{ id: "settings", icon: Settings, label: "Settings", href: null },
// 	];

// 	return (
// 		<nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border flex items-center justify-around px-2 py-3 max-w-md mx-auto">
// 			{items.map((item) => {
// 				const isActive = activeTab === item.id;
// 				const buttonClass = `flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all ${
// 					isActive ? "text-primary" : "text-muted-foreground"
// 				}`;

// 				if (item.href) {
// 					return (
// 						<Link key={item.id} href={item.href} className={buttonClass}>
// 							<item.icon size={20} />
// 							<span className="text-xs font-medium">{item.label}</span>
// 						</Link>
// 					);
// 				}

// 				return (
// 					<button
// 						key={item.id}
// 						onClick={() => setActiveTab(item.id)}
// 						className={buttonClass}>
// 						<item.icon size={20} />
// 						<span className="text-xs font-medium">{item.label}</span>
// 					</button>
// 				);
// 			})}
// 		</nav>
// 	);
// }
