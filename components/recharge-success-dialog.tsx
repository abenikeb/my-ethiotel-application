"use client";

import { CheckCircle, X } from "lucide-react";

interface RechargeResult {
	voucherCode: string;
	amount: number;
	newBalance?: number;
	recipientPhone?: string;
}

interface RechargeSuccessDialogProps {
	result: RechargeResult;
	onClose: () => void;
}

export default function RechargeSuccessDialog({
	result,
	onClose,
}: RechargeSuccessDialogProps) {
	const isForOther = !!result.recipientPhone;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
			<div className="bg-white rounded-lg max-w-sm w-full p-6 animate-in fade-in zoom-in-95 duration-300">
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
					<X className="w-6 h-6" />
				</button>

				{/* Success Icon */}
				<div className="flex justify-center mb-4">
					<CheckCircle className="w-16 h-16 text-green-500" />
				</div>

				{/* Title */}
				<h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
					Recharge Successful!
				</h2>
				<p className="text-center text-gray-600 mb-6">
					{isForOther
						? "Airtime sent successfully"
						: "Your account has been recharged"}
				</p>

				{/* Details */}
				<div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-lg">
					<div className="flex justify-between">
						<span className="text-gray-600">Voucher Code:</span>
						<span className="font-medium text-gray-900">
							{result.voucherCode}
						</span>
					</div>
					<div className="flex justify-between">
						<span className="text-gray-600">Amount:</span>
						<span className="font-medium text-lime-600">
							{result.amount.toFixed(2)} Birr
						</span>
					</div>
					{isForOther ? (
						<div className="flex justify-between">
							<span className="text-gray-600">Recipient:</span>
							<span className="font-medium text-gray-900">
								{result.recipientPhone}
							</span>
						</div>
					) : (
						<div className="flex justify-between">
							<span className="text-gray-600">New Balance:</span>
							<span className="font-medium text-gray-900">
								{result.newBalance?.toFixed(2)} Birr
							</span>
						</div>
					)}
				</div>

				{/* Close Button */}
				<button
					onClick={onClose}
					className="w-full bg-gradient-to-r from-lime-400 to-lime-500 text-white py-3 rounded-lg font-medium hover:shadow-lg active:scale-95 transition-all">
					Done
				</button>
			</div>
		</div>
	);
}
