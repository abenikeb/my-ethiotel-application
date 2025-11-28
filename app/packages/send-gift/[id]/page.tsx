"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Phone, Lock } from "lucide-react";
import { GiftSuccessDialog } from "@/components/gift-success-dialog";

const PACKAGES: Record<string, { name: string; price: number }> = {
	"1": { name: "Voice Night for 57Min and 3 SMS", price: 3 },
	"2": { name: "Voice Daily for 14 Min and 3 SMS", price: 3 },
	"3": { name: "Voice Daily for 25 Min and 5 SMS", price: 5 },
	"4": { name: "Voice Night for 133Min and 6 SMS", price: 6 },
	"5": { name: "Voice Daily for 60 Min and 10 SMS", price: 12 },
	"6": { name: "Voice Weekly for 80 Min and 15 SMS", price: 22 },
	"7": { name: "Internet Night for 210 MB", price: 3 },
	"8": { name: "Internet Daily for 50 MB", price: 3 },
	"9": { name: "Internet Night for 512 MB", price: 5 },
	"10": { name: "Internet Daily for 100 MB", price: 5 },
	"11": { name: "Internet Night for 1 GB", price: 7 },
	"12": { name: "Internet Daily for 280MB", price: 14 },
	"13": { name: "Monthly 5G Package for 150GB", price: 1500 },
	"14": { name: "Monthly 5G Package for 250GB", price: 1800 },
	"15": { name: "Monthly 5G Unlimited Internet", price: 2250 },
	"16": { name: "Monthly 5G Unlimited Premium", price: 2450 },
	"17": { name: "SMS Bundle 50", price: 3 },
	"18": { name: "SMS Bundle 100", price: 5 },
	"19": { name: "Normal CRBT Service", price: 7 },
	"20": { name: "Calling CRBT Service", price: 7 },
	"21": { name: "Umrah Roaming Package", price: 100 },
};

export default function SendGiftPage() {
	const params = useParams();
	const id = params.id as string;
	const pkg = PACKAGES[id] || { name: "Unknown Package", price: 0 };
	// const pkg = PACKAGES[params.id] || { name: "Unknown Package", price: 0 };
	const [mobileNumber, setMobileNumber] = useState("");
	const [otp, setOtp] = useState("");
	const [otpSent, setOtpSent] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	console.log("Selected package:", params);

	const handleGetOtp = async () => {
		if (!mobileNumber.trim() || mobileNumber.length < 9) {
			alert("Please enter a valid phone number");
			return;
		}
		setIsLoading(true);
		setTimeout(() => {
			setOtpSent(true);
			setIsLoading(false);
		}, 1000);
	};

	const handleSubmit = async () => {
		if (!mobileNumber.trim() || !otp.trim()) {
			alert("Please fill all fields");
			return;
		}
		setIsLoading(true);
		setTimeout(() => {
			setShowSuccess(true);
			setIsLoading(false);
		}, 1500);
	};

	return (
		<div className="min-h-screen bg-background pb-8">
			{/* Header */}
			<div className="gradient-primary sticky top-0 z-40 px-4 py-4 flex items-center gap-3 text-white">
				<Link
					href="/packages"
					className="p-2 hover:bg-white/20 rounded-lg transition">
					<ChevronLeft size={24} />
				</Link>
				<h1 className="text-xl font-semibold flex-1">Send a Gift</h1>
				<button className="p-2 hover:bg-white/20 rounded-lg transition">
					<Phone size={24} />
				</button>
			</div>

			<div className="max-w-md mx-auto px-4 py-6">
				{/* Package Summary Card */}
				<div className="bg-card rounded-xl p-6 text-center border border-border mb-8">
					<h2 className="text-lg font-semibold text-foreground mb-2">
						{pkg.name}
					</h2>
					<p className="text-4xl font-bold text-primary mb-2">{pkg.price}</p>
					<p className="text-sm text-muted-foreground">Birr</p>
				</div>

				{/* Mobile Number Field */}
				<div className="mb-6">
					<label className="text-sm font-semibold text-foreground mb-2 block">
						Mobile Number
					</label>
					<div className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 focus-within:border-primary transition">
						<Phone size={18} className="text-muted-foreground" />
						<input
							type="tel"
							value={mobileNumber}
							onChange={(e) =>
								setMobileNumber(e.target.value.replace(/[^\d]/g, ""))
							}
							placeholder="Enter recipient number"
							className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm"
							disabled={otpSent}
						/>
						{mobileNumber && mobileNumber.length >= 9 && (
							<div className="text-primary text-lg">✓</div>
						)}
					</div>
				</div>

				{/* OTP Field */}
				<div className="mb-8">
					<label className="text-sm font-semibold text-foreground mb-2 block">
						OTP
					</label>
					<div className="flex gap-2">
						<div className="flex-1 flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 focus-within:border-primary transition">
							<Lock size={18} className="text-muted-foreground" />
							<input
								type="text"
								value={otp}
								onChange={(e) => setOtp(e.target.value)}
								placeholder="Enter OTP"
								className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none text-sm"
								disabled={!otpSent}
							/>
						</div>
						<button
							onClick={handleGetOtp}
							disabled={!mobileNumber || otpSent || isLoading}
							className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground transition-all">
							{isLoading ? "..." : "Get"}
						</button>
					</div>
					{otpSent && (
						<p className="text-xs text-muted-foreground mt-2">
							OTP sent to +251{mobileNumber}
						</p>
					)}
				</div>

				{/* Pay Button */}
				<button
					onClick={handleSubmit}
					disabled={!mobileNumber || !otpSent || !otp || isLoading}
					className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed transition-all text-lg">
					{isLoading ? "Processing..." : "Pay"}
				</button>
			</div>

			{/* Success Dialog */}
			{showSuccess && (
				<GiftSuccessDialog
					packageName={pkg.name}
					packagePrice={pkg.price}
					recipientNumber={"+251" + mobileNumber}
					onClose={() => {
						setShowSuccess(false);
						window.location.href = "/packages";
					}}
				/>
			)}
		</div>
	);
}
