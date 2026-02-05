"use client";

import { useState } from "react";
import { ChevronLeft, MoreVertical, X } from "lucide-react";

interface CreateFamilyGroupFormProps {
	onBack: () => void;
	onConfirm: () => void;
}

export function CreateFamilyGroupForm({
	onBack,
	onConfirm,
}: CreateFamilyGroupFormProps) {
	const [formData, setFormData] = useState({
		shareRule: "",
		memberRangePlan: "",
		resourcePlan: "",
		groupName: "",
	});

	const shareRuleOptions = [
		"Equal Share",
		"Proportional Share",
		"Custom Share",
	];

	const memberRangeOptions = ["2-3 Members", "4-5 Members", "6-10 Members"];

	const resourcePlanOptions = ["Basic", "Standard", "Premium"];

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleConfirm = () => {
		if (formData.groupName.trim()) {
			onConfirm();
		}
	};

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<div className="sticky top-0 z-50 bg-gradient-to-r from-lime-500 to-lime-600 text-white px-4 py-4 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<button
						onClick={onBack}
						className="p-1 hover:bg-white/20 rounded-lg transition">
						<ChevronLeft size={24} />
					</button>
					<h1 className="text-xl font-semibold">Create Family Group</h1>
				</div>
				<div className="flex items-center gap-2">
					<button className="p-2 hover:bg-white/20 rounded-full transition">
						<MoreVertical size={20} />
					</button>
					<button className="p-2 hover:bg-white/20 rounded-full transition">
						<X size={20} />
					</button>
				</div>
			</div>

			{/* Form Content */}
			<div className="px-4 py-6 pb-28 max-w-md mx-auto">
				{/* Family Package */}
				<div className="mb-6">
					<label className="block text-sm font-medium text-muted-foreground mb-3">
						Family Package
					</label>
					<div className="relative">
						<select
							value={formData.shareRule}
							onChange={(e) => handleInputChange("shareRule", e.target.value)}
							className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime-500">
							<option value="" disabled>
								Select Share Rule
							</option>
							{shareRuleOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
						<div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-muted-foreground">
							▼
						</div>
					</div>
				</div>

				{/* Member Range Plan */}
				<div className="mb-6">
					<label className="block text-sm font-medium text-muted-foreground mb-3">
						Member Range Plan
					</label>
					<div className="relative">
						<select
							value={formData.memberRangePlan}
							onChange={(e) =>
								handleInputChange("memberRangePlan", e.target.value)
							}
							className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime-500">
							<option value="" disabled>
								Select Member Range Plan
							</option>
							{memberRangeOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
						<div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-muted-foreground">
							▼
						</div>
					</div>
				</div>

				{/* Resource Plan */}
				<div className="mb-6">
					<label className="block text-sm font-medium text-muted-foreground mb-3">
						Resource Plan
					</label>
					<div className="relative">
						<select
							value={formData.resourcePlan}
							onChange={(e) =>
								handleInputChange("resourcePlan", e.target.value)
							}
							className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime-500">
							<option value="" disabled>
								Select Resource Plan
							</option>
							{resourcePlanOptions.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
						<div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-muted-foreground">
							▼
						</div>
					</div>
				</div>

				{/* Group Name */}
				<div className="mb-8">
					<label className="block text-sm font-medium text-muted-foreground mb-3">
						Group Name
					</label>
					<input
						type="text"
						placeholder="Please enter the Group Name"
						value={formData.groupName}
						onChange={(e) => handleInputChange("groupName", e.target.value)}
						className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-lime-500"
					/>
				</div>

				{/* Confirm Button */}
				<button
					onClick={handleConfirm}
					disabled={!formData.groupName.trim()}
					className="w-full bg-gray-300 hover:bg-gray-400 disabled:opacity-50 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
					Confirm
				</button>
			</div>
		</div>
	);
}
