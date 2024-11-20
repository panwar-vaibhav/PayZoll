import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, ArrowUpRight, Clock } from 'lucide-react';

const upcomingPayments = [
  {
    date: 'Jan 31, 2024',
    amount: '$12,500',
    type: 'Monthly Salary',
    status: 'scheduled'
  },
  {
    date: 'Feb 15, 2024',
    amount: '$2,500',
    type: 'Performance Bonus',
    status: 'pending'
  }
];

const paymentHistory = [
  {
    date: 'Dec 31, 2023',
    amount: '$12,500',
    type: 'Monthly Salary',
    status: 'completed',
    txHash: '0x1234...5678'
  },
  {
    date: 'Dec 15, 2023',
    amount: '$5,000',
    type: 'Year-end Bonus',
    status: 'completed',
    txHash: '0x8765...4321'
  },
   {
    date: 'Nov 30, 2023',
    amount: '$12,500',
    type: 'Monthly Salary',
    status: 'completed',
    txHash: '0x1234...5678'
  },
  {
    date: 'Nov 15, 2023',
    amount: '$7,000',
    type: 'Performance Bonus',
    status: 'completed',
    txHash: '0x8765...4321'
  },
  {
    date: 'Oct 31, 2023',
    amount: '$12,500',
    type: 'Monthly Salary',
    status: 'completed',
    txHash: '0x1234...5678'
   }
];

export default function PaymentSection() {
  return (
    <div className="bg-crypto-card border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all">
      <h2 className="text-xl font-bold mb-6">Payments</h2>

      {/* Upcoming Payments */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-indigo-400 mb-4">Upcoming Payments</h3>
        <div className="space-y-4">
          {upcomingPayments.map((payment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-crypto-dark rounded-xl p-4 border border-gray-800"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 
                                flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">{payment.type}</div>
                    <div className="text-sm text-gray-400">{payment.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{payment.amount}</div>
                  <div className={`text-sm ${
                    payment.status === 'scheduled' ? 'text-green-400' : 'text-yellow-400'
                  }`}>
                    {payment.status}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Payment History */}
      <div>
        <h3 className="text-lg font-semibold text-indigo-400 mb-4">Payment History</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-crypto-dark/90 backdrop-blur-sm">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Type</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {paymentHistory.map((payment, index) => (
                <tr key={index} className="group hover:bg-crypto-dark/30 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{payment.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{payment.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">{payment.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-400/10 text-green-400">
                      {payment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}