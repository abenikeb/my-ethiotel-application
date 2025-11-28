"use client";

import Link from "next/link";
import { ShoppingBag, Send, Shuffle, Zap, Users, History } from "lucide-react";

interface QuickActionsProps {
	onPackagesClick?: () => void;
}

export function QuickActions({ onPackagesClick }: QuickActionsProps) {
	const actions = [
		{
			icon: ShoppingBag,
			label: "Buy Package",
			href: null,
			onClick: onPackagesClick,
			bgColor: "bg-blue-100 text-blue-600",
		},
		{
			icon: Send,
			label: "Transfer",
			href: "/transfer",
			bgColor: "bg-lime-100 text-lime-700",
		},
		{
			icon: Shuffle,
			label: "Share/Convert",
			href: "/transfer",
			bgColor: "bg-purple-100 text-purple-600",
		},
		{
			icon: Zap,
			label: "Recharge",
			href: "/recharge",
			bgColor: "bg-amber-100 text-amber-600",
		},
		{
			icon: Users,
			label: "Family Group",
			href: "/family-group",
			bgColor: "bg-pink-100 text-pink-600",
		},
		{
			icon: History,
			label: "History",
			href: "/history",
			bgColor: "bg-teal-100 text-teal-600",
		},
	];

	return (
		<div className="space-y-4">
			<h3 className="text-lg font-semibold text-foreground px-2">
				Quick Actions
			</h3>
			<div className="grid grid-cols-3 gap-4">
				{actions.map((action, idx) => {
					const content = (
						<div className="flex flex-col items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent hover:shadow-md transition-all active:scale-95 cursor-pointer">
							<div className={`p-3 rounded-lg ${action.bgColor}`}>
								<action.icon size={20} />
							</div>
							<span className="text-xs font-medium text-center text-foreground">
								{action.label}
							</span>
						</div>
					);

					if (action.href) {
						return (
							<Link key={idx} href={action.href}>
								{content}
							</Link>
						);
					}

					return (
						<button key={idx} onClick={action.onClick}>
							{content}
						</button>
					);
				})}
			</div>
		</div>
	);
}
// "use client";

// import Link from "next/link";
// import { ShoppingBag, Send, Shuffle, Zap, Users, History } from "lucide-react";

// interface QuickActionsProps {
// 	onPackagesClick?: () => void;
// }

// export function QuickActions({ onPackagesClick }: QuickActionsProps) {
// 	const actions = [
// 		{
// 			icon: ShoppingBag,
// 			label: "Buy Package",
// 			href: null,
// 			onClick: onPackagesClick,
// 			bgColor: "bg-blue-100 text-blue-600",
// 		},
// 		{
// 			icon: Send,
// 			label: "Transfer",
// 			href: "/transfer",
// 			bgColor: "bg-lime-100 text-lime-700",
// 		},
// 		{
// 			icon: Shuffle,
// 			label: "Share/Convert",
// 			href: "/share-convert",
// 			bgColor: "bg-purple-100 text-purple-600",
// 		},
// 		{
// 			icon: Zap,
// 			label: "Recharge",
// 			href: "/recharge",
// 			bgColor: "bg-amber-100 text-amber-600",
// 		},
// 		{
// 			icon: Users,
// 			label: "Family Group",
// 			href: "/family-group",
// 			bgColor: "bg-pink-100 text-pink-600",
// 		},
// 		{
// 			icon: History,
// 			label: "History",
// 			href: "/history",
// 			bgColor: "bg-teal-100 text-teal-600",
// 		},
// 	];

// 	return (
// 		<div className="space-y-4">
// 			<h3 className="text-lg font-semibold text-foreground px-2">
// 				Quick Actions
// 			</h3>
// 			<div className="grid grid-cols-3 gap-4">
// 				{actions.map((action, idx) => {
// 					const content = (
// 						<div className="flex flex-col items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-accent hover:shadow-md transition-all active:scale-95 cursor-pointer">
// 							<div className={`p-3 rounded-lg ${action.bgColor}`}>
// 								<action.icon size={20} />
// 							</div>
// 							<span className="text-xs font-medium text-center text-foreground">
// 								{action.label}
// 							</span>
// 						</div>
// 					);

// 					if (action.href) {
// 						return (
// 							<Link key={idx} href={action.href}>
// 								{content}
// 							</Link>
// 						);
// 					}

// 					return (
// 						<button key={idx} onClick={action.onClick}>
// 							{content}
// 						</button>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// }
