"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { BalanceCard } from "@/components/balance-card";
import { UsageStats } from "@/components/usage-stats";
import { QuickActions } from "@/components/quick-actions";
import { PromotionBanner } from "@/components/promotion-banner";
import { RecentTransactions } from "@/components/recent-transactions";
import { BottomNav } from "@/components/bottom-nav";
import { PackageBrowser } from "@/components/package-browser";
import Home from "@/components/home";

export default function Page() {
	return <Home />;
}
