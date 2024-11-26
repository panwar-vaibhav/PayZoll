import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PiggyBank, TrendingUp, History, Wallet,
  ChevronDown, ArrowRight, AlertTriangle, Search
} from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';

const assets = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    lendingRate: '3.5%',
    borrowingRate: '5.2%',
    totalSupply: '1,234.56 ETH',
    totalBorrowed: '789.12 ETH',
    walletBalance: '2.5 ETH'
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    lendingRate: '8.2%',
    borrowingRate: '10.5%',
    totalSupply: '2,500,000 USDC',
    totalBorrowed: '1,800,000 USDC',
    walletBalance: '5,000 USDC'
  },
  {
    symbol: 'DAI',
    name: 'Dai',
    lendingRate: '7.8%',
    borrowingRate: '9.8%',
    totalSupply: '1,800,000 DAI',
    totalBorrowed: '1,200,000 DAI',
    walletBalance: '3,000 DAI'
  }
];

export default function LendingPage() {
  const [activeTab, setActiveTab] = useState('lend');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-crypto-dark text-white flex">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-indigo-900/20 via-transparent to-transparent"></div>
      </div>

      {/* Sidebar */}
      <Sidebar 
        isWalletConnected={isWalletConnected} 
        onConnectWallet={() => setIsWalletConnected(true)} 
      />

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8 relative">
        <div className="max-w-[1600px] mx-auto space-y-6">
          {/* Hero Section */}
          <div className="bg-crypto-card border border-gray-800 rounded-xl p-8 hover:border-indigo-500/50 transition-all">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Lend & Borrow Seamlessly
                </h1>
                <p className="text-gray-400 mt-2">
                  Put your assets to work or access funds instantly, powered by blockchain
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setActiveTab('lend')}
                  className={`px-6 py-2 rounded-xl transition-all ${
                    activeTab === 'lend'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                      : 'bg-crypto-dark border border-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  Start Lending
                </button>
                <button
                  onClick={() => setActiveTab('borrow')}
                  className={`px-6 py-2 rounded-xl transition-all ${
                    activeTab === 'borrow'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                      : 'bg-crypto-dark border border-gray-800 text-gray-400 hover:text-white'
                  }`}
                >
                  Start Borrowing
                </button>
              </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-crypto-dark rounded-xl p-6 border border-gray-800">
                <div className="flex items-center space-x-3 mb-2">
                  <PiggyBank className="w-5 h-5 text-indigo-400" />
                  <span className="text-gray-400">Total Assets Lent</span>
                </div>
                <div className="text-2xl font-bold">$125,000</div>
                <div className="text-green-400 text-sm">+12.5% this month</div>
              </div>

              <div className="bg-crypto-dark rounded-xl p-6 border border-gray-800">
                <div className="flex items-center space-x-3 mb-2">
                  <Wallet className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">Total Assets Borrowed</span>
                </div>
                <div className="text-2xl font-bold">$75,000</div>
                <div className="text-red-400 text-sm">-5.2% this month</div>
              </div>

              <div className="bg-crypto-dark rounded-xl p-6 border border-gray-800">
                <div className="flex items-center space-x-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400">Total Interest Earned</span>
                </div>
                <div className="text-2xl font-bold">$3,250</div>
                <div className="text-green-400 text-sm">+8.3% this month</div>
              </div>
            </div>
          </div>

          {/* Assets Panel */}
          <div className="bg-crypto-card border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Available Assets</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search assets..."
                  className="bg-crypto-dark border border-gray-800 rounded-xl py-2 pl-10 pr-4
                           focus:outline-none focus:border-indigo-500 transition-all w-64"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-crypto-dark/90 backdrop-blur-sm">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Asset</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Lending APY</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Borrowing APY</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Total Supply</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Total Borrowed</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Your Balance</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {assets.map((asset) => (
                    <tr key={asset.symbol} className="group hover:bg-crypto-dark/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 
                                        flex items-center justify-center">
                            {asset.symbol.charAt(0)}
                          </div>
                          <div>
                            <div className="font-semibold">{asset.name}</div>
                            <div className="text-sm text-gray-400">{asset.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-green-400">{asset.lendingRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-purple-400">{asset.borrowingRate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-400">{asset.totalSupply}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-400">{asset.totalBorrowed}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-400">{asset.walletBalance}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => setSelectedAsset(asset)}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600
                                   text-white hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
                        >
                          {activeTab === 'lend' ? 'Lend' : 'Borrow'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Portfolio Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Lending Portfolio */}
            <div className="bg-crypto-card border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4">Your Lending Portfolio</h3>
              <div className="space-y-4">
                <div className="bg-crypto-dark rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Total Value Locked</span>
                    <span className="font-bold">$50,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Interest Earned</span>
                    <span className="text-green-400">$1,250</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Borrowing Portfolio */}
            <div className="bg-crypto-card border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all">
              <h3 className="text-xl font-bold mb-4">Your Borrowing Portfolio</h3>
              <div className="space-y-4">
                <div className="bg-crypto-dark rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Total Debt</span>
                    <span className="font-bold">$25,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Interest Owed</span>
                    <span className="text-red-400">$450</span>
                  </div>
                </div>

                {/* Health Factor */}
                <div className="bg-crypto-dark rounded-xl p-4 border border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400">Health Factor</span>
                    <span className="text-green-400">1.85</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[85%] bg-gradient-to-r from-green-600 to-emerald-600 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-crypto-card border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Transaction History</h3>
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab('lend')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'lend'
                      ? 'bg-indigo-500/10 text-indigo-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Lending
                </button>
                <button
                  onClick={() => setActiveTab('borrow')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'borrow'
                      ? 'bg-indigo-500/10 text-indigo-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Borrowing
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-crypto-dark/90 backdrop-blur-sm">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Date & Time</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Asset</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Amount</th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {/* Sample transaction rows */}
                  <tr className="group hover:bg-crypto-dark/30 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-400">2024-01-20 14:30</td>
                    <td className="px-6 py-4 whitespace-nowrap">ETH</td>
                    <td className="px-6 py-4 whitespace-nowrap text-indigo-400">Lend</td>
                    <td className="px-6 py-4 whitespace-nowrap">2.5 ETH</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-500/10 text-green-400">
                        Completed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}