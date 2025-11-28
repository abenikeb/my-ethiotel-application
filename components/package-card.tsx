"use client";

import { Download, Wifi, Smartphone, MessageSquare } from "lucide-react";
import type { Package } from "./package-browser";

interface PackageCardProps {
	package: Package;
	showBuyButton?: boolean;
}

export function PackageCard({
	package: pkg,
	showBuyButton = true,
}: PackageCardProps) {
	const getCategoryColor = (category: string) => {
		switch (category) {
			case "voice":
				return "bg-green-100 text-green-700";
			case "data":
				return "bg-blue-100 text-blue-700";
			case "5g":
				return "bg-purple-100 text-purple-700";
			case "sms":
				return "bg-pink-100 text-pink-700";
			case "crbt":
				return "bg-amber-100 text-amber-700";
			case "roaming":
				return "bg-teal-100 text-teal-700";
			default:
				return "bg-gray-100 text-gray-700";
		}
	};

	const getCategoryIcon = (category: string) => {
		switch (category) {
			case "voice":
				return <Smartphone size={16} />;
			case "data":
				return <Wifi size={16} />;
			case "sms":
				return <MessageSquare size={16} />;
			default:
				return <Download size={16} />;
		}
	};

	const getResourcesText = () => {
		const resources = [];
		if (pkg.data)
			resources.push(
				`${
					pkg.data >= 1024
						? (pkg.data / 1024).toFixed(0) + "GB"
						: pkg.data + "MB"
				}`
			);
		if (pkg.voice) resources.push(`${pkg.voice}m`);
		if (pkg.sms) resources.push(`${pkg.sms} SMS`);
		return resources.join(" • ");
	};

	return (
		<div className="bg-card border border-border rounded-xl p-4 hover:shadow-md transition-all active:scale-98">
			<div className="flex items-start justify-between gap-3">
				<div className="flex-1">
					{/* Category Badge */}
					<div
						className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-2 ${getCategoryColor(
							pkg.category
						)}`}>
						{getCategoryIcon(pkg.category)}
						{pkg.category.toUpperCase()}
					</div>

					{/* Package Name */}
					<h3 className="text-sm font-semibold text-foreground mb-2">
						{pkg.name}
					</h3>

					{/* Resources */}
					<p className="text-xs text-muted-foreground mb-3">
						{getResourcesText()}
					</p>

					{/* Badge */}
					{pkg.badge && (
						<p className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded w-fit mb-3">
							{pkg.badge}
						</p>
					)}

					{/* Frequency & Validity */}
					<div className="flex items-center gap-2 text-xs text-muted-foreground">
						<span className="px-2 py-1 bg-muted rounded">
							{pkg.frequency.charAt(0).toUpperCase() + pkg.frequency.slice(1)}
						</span>
						{pkg.validity && <span>{pkg.validity}</span>}
					</div>
				</div>

				<div className="flex flex-col items-end gap-3">
					{/* Price */}
					<div className="text-center">
						<p className="text-2xl font-bold text-primary">{pkg.price}</p>
						<p className="text-xs text-muted-foreground">ETB</p>
					</div>

					{/* Popular Badge */}
					{pkg.popular && (
						<span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-lg">
							Popular
						</span>
					)}

					{showBuyButton && (
						<button className="w-20 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-semibold hover:bg-primary/90 transition-all active:scale-95">
							Buy
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
