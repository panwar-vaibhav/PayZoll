import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, Wallet, DollarSign, ArrowUpRight, 
  ArrowDownRight, Repeat, PiggyBank, Landmark
} from 'lucide-react';
import QuickPanel from '../components/employee/QuickPanel';
import EmployeeOverview from '../components/employee/EmployeeOverview';
import PaymentSection from '../components/employee/PaymentSection';
import ESOPSection from '../components/employee/ESOPSection';
import AnalyticsSection from '../components/employee/AnalyticsSection';
import RecentActivity from '../components/employee/RecentActivity';

export default function EmployeeDashboard() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="min-h-screen bg-crypto-dark text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-indigo-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[500px] h-[500px] rounded-full"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: `radial-gradient(circle, ${
                i === 0 ? 'rgba(99,102,241,0.1)' :
                i === 1 ? 'rgba(139,92,246,0.1)' :
                'rgba(168,85,247,0.1)'
              } 0%, transparent 70%)`,
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-crypto-dark/80 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Profile Section */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 
                              flex items-center justify-center">
                  JD
                </div>
                <div>
                  <h1 className="text-xl font-bold">Welcome back, John Doe!</h1>
                  <p className="text-sm text-gray-400">Software Engineer</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-4">
                {/* Notifications */}
                <div className="relative">
                  <button 
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="p-2 rounded-lg bg-crypto-card hover:bg-crypto-card/70 transition-colors relative"
                  >
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-indigo-500 rounded-full"></span>
                  </button>
                </div>

                {/* Wallet Connection */}
                {isWalletConnected ? (
                  <div className="px-4 py-2 rounded-lg bg-crypto-card border border-gray-800">
                    <div className="text-sm text-gray-400">Connected Wallet</div>
                    <div className="font-mono text-sm">0x1234...5678</div>
                  </div>
                ) : (
                  <button
                    onClick={() => setIsWalletConnected(true)}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 
                             hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          {/* Quick Panel */}
          <QuickPanel isWalletConnected={isWalletConnected} />

          {/* Main Grid Layout */}
          <div className="grid grid-cols-12 gap-6">
            {/* Employee Overview */}
            <div className="col-span-12 lg:col-span-8">
              <EmployeeOverview />
            </div>

            {/* Recent Activity */}
            <div className="col-span-12 lg:col-span-4">
              <RecentActivity />
            </div>

            {/* Payment Section */}
            <div className="col-span-12 lg:col-span-6">
              <PaymentSection />
            </div>

            {/* ESOP Section */}
            <div className="col-span-12 lg:col-span-6">
              <ESOPSection />
            </div>

            {/* Analytics Section */}
            <div className="col-span-12">
              <AnalyticsSection />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}