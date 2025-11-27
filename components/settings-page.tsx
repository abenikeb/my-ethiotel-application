"use client"

import { ChevronLeft, Bell, Lock, Eye, HelpCircle, LogOut, ChevronRight, Moon, Globe } from "lucide-react"
import { useState } from "react"

interface SettingsPageProps {
  onBack: () => void
}

export function SettingsPage({ onBack }: SettingsPageProps) {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [showModal, setShowModal] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40 px-4 py-4 flex items-center gap-3">
        <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition">
          <ChevronLeft size={24} className="text-foreground" />
        </button>
        <h1 className="text-xl font-semibold text-foreground flex-1">Settings</h1>
      </div>

      <div className="max-w-md mx-auto pb-24">
        {/* Profile Section */}
        <div className="border-b border-border">
          <button className="w-full px-4 py-6 flex items-center gap-4 hover:bg-muted/50 transition">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
              MK
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-foreground">Misganaw Kebede</p>
              <p className="text-xs text-muted-foreground">913228892</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Preferences Section */}
        <div className="border-b border-border">
          <h3 className="text-xs font-semibold text-muted-foreground px-4 pt-4 pb-2 uppercase">Preferences</h3>

          {/* Notifications */}
          <button
            onClick={() => setNotifications(!notifications)}
            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition"
          >
            <Bell size={20} className="text-primary" />
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-foreground">Push Notifications</p>
              <p className="text-xs text-muted-foreground">Get alerts for transactions</p>
            </div>
            <div className={`w-10 h-6 rounded-full transition-all ${notifications ? "bg-primary" : "bg-muted"}`}>
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform m-0.5 ${
                  notifications ? "translate-x-4" : ""
                }`}
              ></div>
            </div>
          </button>

          {/* Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition"
          >
            <Moon size={20} className="text-primary" />
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-foreground">Dark Mode</p>
              <p className="text-xs text-muted-foreground">Easy on the eyes</p>
            </div>
            <div className={`w-10 h-6 rounded-full transition-all ${darkMode ? "bg-primary" : "bg-muted"}`}>
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform m-0.5 ${
                  darkMode ? "translate-x-4" : ""
                }`}
              ></div>
            </div>
          </button>

          {/* Language */}
          <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition">
            <Globe size={20} className="text-primary" />
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-foreground">Language</p>
              <p className="text-xs text-muted-foreground">English</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Security Section */}
        <div className="border-b border-border">
          <h3 className="text-xs font-semibold text-muted-foreground px-4 pt-4 pb-2 uppercase">Security</h3>

          {/* Change Password */}
          <button
            onClick={() => setShowModal("password")}
            className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition"
          >
            <Lock size={20} className="text-primary" />
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-foreground">Change Password</p>
              <p className="text-xs text-muted-foreground">Update your security</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </button>

          {/* Privacy Settings */}
          <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition">
            <Eye size={20} className="text-primary" />
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-foreground">Privacy Settings</p>
              <p className="text-xs text-muted-foreground">Control your data</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Support Section */}
        <div className="border-b border-border">
          <h3 className="text-xs font-semibold text-muted-foreground px-4 pt-4 pb-2 uppercase">Support</h3>

          {/* Help & Support */}
          <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition">
            <HelpCircle size={20} className="text-primary" />
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-foreground">Help & Support</p>
              <p className="text-xs text-muted-foreground">Get help or contact us</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </button>

          {/* About */}
          <button className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition">
            <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center text-xs font-bold text-primary">
              i
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-foreground">About</p>
              <p className="text-xs text-muted-foreground">Version 1.0.0</p>
            </div>
            <ChevronRight size={20} className="text-muted-foreground" />
          </button>
        </div>

        {/* Logout Section */}
        <div className="px-4 py-6">
          <button className="w-full px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-medium flex items-center justify-center gap-2 transition-all">
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Version Info */}
        <div className="text-center py-6 text-xs text-muted-foreground">
          <p>My Ethiotel v1.0.0</p>
          <p>© 2025 Ethiotel. All rights reserved.</p>
        </div>
      </div>

      {/* Change Password Modal */}
      {showModal === "password" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-2xl max-w-sm w-full space-y-4 p-6">
            <h2 className="text-xl font-semibold text-foreground">Change Password</h2>

            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Current Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground outline-none"
                  placeholder="Enter current password"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">New Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground outline-none"
                  placeholder="Enter new password"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Confirm Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground placeholder-muted-foreground outline-none"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(null)}
                className="flex-1 px-4 py-2 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
