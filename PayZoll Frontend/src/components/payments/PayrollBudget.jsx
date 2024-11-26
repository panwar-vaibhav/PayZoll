import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, ArrowUpRight, Plus, RefreshCcw,
  X, AlertTriangle, DollarSign, ArrowDownRight
} from 'lucide-react';

const cryptoCurrencies = [
  { symbol: 'ETH', name: 'Ethereum', balance: '45.5 ETH', value: '$89,500' },
  { symbol: 'USDC', name: 'USD Coin', balance: '50,000 USDC', value: '$50,000' },
  { symbol: 'USDT', name: 'Tether', balance: '35,000 USDT', value: '$35,000' }
];

const AddFundsModal = ({ onClose }) => {
  const [selectedCrypto, setSelectedCrypto] = useState('ETH');
  const [amount, setAmount] = useState('');

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Select Currency</label>
          <select
            value={selectedCrypto}
            onChange={(e) => setSelectedCrypto(e.target.value)}
            className="w-full bg-crypto-dark border border-gray-800 rounded-xl py-2 px-4
                     focus:outline-none focus:border-indigo-500 transition-colors"
          >
            {cryptoCurrencies.map((crypto) => (
              <option key={crypto.symbol} value={crypto.symbol}>
                {crypto.name} ({crypto.symbol})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Amount</label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-crypto-dark border border-gray-800 rounded-xl py-2 pl-10 pr-4
                       focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="0.00"
            />
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-crypto-dark rounded-xl p-4 border border-gray-800">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Gas Fee (Est.)</span>
            <span className="text-green-400">$12.50</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Processing Time</span>
            <span>~2 minutes</span>
          </div>
        </div>

        <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
            <p className="text-sm text-yellow-200/80">
              Please ensure you have sufficient funds in your wallet before proceeding.
              The transaction cannot be reversed once confirmed.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onClose}
          className="px-6 py-2 rounded-xl border border-gray-800 text-gray-400
                   hover:text-white hover:border-gray-700 transition-colors"
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600
                   text-white hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
        >
          Add Funds
        </button>
      </div>
    </div>
  );
};

const WithdrawModal = ({ onClose }) => {
  const [selectedCrypto, setSelectedCrypto] = useState('ETH');
  const [amount, setAmount] = useState('');

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Select Currency</label>
          <select
            value={selectedCrypto}
            onChange={(e) => setSelectedCrypto(e.target.value)}
            className="w-full bg-crypto-dark border border-gray-800 rounded-xl py-2 px-4
                     focus:outline-none focus:border-indigo-500 transition-colors"
          >
            {cryptoCurrencies.map((crypto) => (
              <option key={crypto.symbol} value={crypto.symbol}>
                {crypto.name} ({crypto.symbol}) - {crypto.balance}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Amount</label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-crypto-dark border border-gray-800 rounded-xl py-2 pl-10 pr-4
                       focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="0.00"
            />
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-crypto-dark rounded-xl p-4 border border-gray-800">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Available Balance</span>
            <span className="font-semibold">$248,500</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Gas Fee (Est.)</span>
            <span className="text-green-400">$12.50</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Processing Time</span>
            <span>~2 minutes</span>
          </div>
        </div>

        <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
            <div className="space-y-2 text-sm text-yellow-200/80">
              <p>Please ensure:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>You maintain sufficient balance for upcoming payroll</li>
                <li>The withdrawal amount doesn't affect scheduled payments</li>
                <li>You have confirmed the withdrawal address</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={onClose}
          className="px-6 py-2 rounded-xl border border-gray-800 text-gray-400
                   hover:text-white hover:border-gray-700 transition-colors"
        >
          Cancel
        </button>
        <button
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600
                   text-white hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
        >
          Withdraw Funds
        </button>
      </div>
    </div>
  );
};

export default function PayrollBudget() {
  const [activeModal, setActiveModal] = useState(null);

  const renderModal = () => {
    if (!activeModal) return null;

    const modalContent = {
      'add': <AddFundsModal onClose={() => setActiveModal(null)} />,
      'withdraw': <WithdrawModal onClose={() => setActiveModal(null)} />
    };

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-crypto-card w-full max-w-xl mx-4 rounded-2xl border border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">
                {activeModal === 'add' ? 'Add Funds' : 'Withdraw Funds'}
              </h2>
              <button
                onClick={() => setActiveModal(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="p-6">
            {modalContent[activeModal]}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-crypto-card border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-all">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Payroll Budget</h2>
        <button className="text-gray-400 hover:text-white transition-colors">
          <RefreshCcw className="w-5 h-5" />
        </button>
      </div>

      {/* Wallet Balance */}
      <div className="bg-crypto-dark rounded-xl p-6 border border-gray-800 mb-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 
                        flex items-center justify-center">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Available Balance</div>
            <div className="text-2xl font-bold text-white">$248,500</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-crypto-card/50 rounded-lg p-3">
            <div className="text-gray-400">Required</div>
            <div className="font-semibold text-indigo-400">$145,678</div>
          </div>
          <div className="bg-crypto-card/50 rounded-lg p-3">
            <div className="text-gray-400">Surplus</div>
            <div className="font-semibold text-green-400">+$102,822</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => setActiveModal('add')}
          className="group bg-crypto-dark hover:bg-crypto-dark/70 border border-gray-800 
                   hover:border-indigo-500/50 rounded-xl p-4 transition-all"
        >
          <div className="flex items-center justify-center space-x-2">
            <Plus className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
            <span className="text-gray-400 group-hover:text-white transition-colors">Add Funds</span>
          </div>
        </button>
        
        <button
          onClick={() => setActiveModal('withdraw')}
          className="group bg-crypto-dark hover:bg-crypto-dark/70 border border-gray-800 
                   hover:border-indigo-500/50 rounded-xl p-4 transition-all"
        >
          <div className="flex items-center justify-center space-x-2">
            <ArrowUpRight className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
            <span className="text-gray-400 group-hover:text-white transition-colors">Withdraw</span>
          </div>
        </button>
      </div>

      {/* Connected Wallet */}
      <div className="mt-6 p-4 bg-crypto-dark/50 rounded-xl border border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-400">Connected Wallet</div>
            <div className="font-mono text-sm mt-1">0x1234...5678</div>
          </div>
          <button className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
            Change
          </button>
        </div>
      </div>

      {/* Modals */}
      {renderModal()}
    </div>
  );
}