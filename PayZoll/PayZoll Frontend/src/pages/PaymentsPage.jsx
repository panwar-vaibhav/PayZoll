import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/dashboard/Sidebar';
import PaymentsHeader from '../components/payments/PaymentsHeader';
import PaymentsOverview from '../components/payments/PaymentsOverview';
import PaymentOptions from '../components/payments/PaymentOptions';
import ScheduledPayments from '../components/payments/ScheduledPayments';
import TransactionsLog from '../components/payments/TransactionsLog';
import PayrollBudget from '../components/payments/PayrollBudget';
import PayrollAnalytics from '../components/payments/PayrollAnalytics';
import QuickPayModal from '../components/payments/QuickPayModal';

export default function PaymentsPage() {
  const [showQuickPayModal, setShowQuickPayModal] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-crypto-dark text-white flex">
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

      {/* Sidebar */}
      <Sidebar 
        isWalletConnected={isWalletConnected} 
        onConnectWallet={() => setIsWalletConnected(true)} 
      />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 relative">
        <div className="max-w-[1600px] mx-auto space-y-6">
          {/* Header Section */}
          <PaymentsHeader onQuickPay={() => setShowQuickPayModal(true)} />

          {/* Overview Cards */}
          <PaymentsOverview />

          {/* Main Grid Layout */}
          <div className="grid grid-cols-12 gap-6">
            {/* Payment Options and Budget */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              <PaymentOptions />
              <TransactionsLog />
            </div>

            {/* Sidebar Content */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              <PayrollBudget />
              <ScheduledPayments />
            </div>
          </div>

          {/* Analytics Section */}
          <PayrollAnalytics />
        </div>
      </main>

      {/* Quick Pay Modal */}
      <QuickPayModal 
        isOpen={showQuickPayModal}
        onClose={() => setShowQuickPayModal(false)}
      />
    </div>
  );
}