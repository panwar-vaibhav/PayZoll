import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, UserPlus, Building2, Calendar,
  DollarSign, ArrowRight, Search, X, AlertTriangle
} from 'lucide-react';

// Sample data for departments and employees
const departments = [
  { id: 1, name: 'Engineering', employeeCount: 45 },
  { id: 2, name: 'Marketing', employeeCount: 25 },
  { id: 3, name: 'Sales', employeeCount: 35 },
  { id: 4, name: 'HR', employeeCount: 15 }
];

const employees = [
  { id: 1, name: 'John Doe', department: 'Engineering', salary: '5.5 ETH' },
  { id: 2, name: 'Jane Smith', department: 'Marketing', salary: '4.8 ETH' },
  { id: 3, name: 'Mike Johnson', department: 'Sales', salary: '6.2 ETH' },
  { id: 4, name: 'Sarah Wilson', department: 'Engineering', salary: '5.2 ETH' }
];

const options = [
  {
    title: 'Pay All Employees',
    description: 'Process payments for all active employees',
    icon: Users,
    color: 'from-indigo-600 to-purple-600',
    amount: '$145,678',
    employees: 156
  },
  {
    title: 'Pay Selected Employees',
    description: 'Choose specific employees to pay',
    icon: UserPlus,
    color: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'Pay by Department',
    description: 'Process payments by department',
    icon: Building2,
    color: 'from-purple-600 to-pink-600',
    departments: ['Engineering', 'Marketing', 'Sales']
  },
  {
    title: 'Schedule Payment',
    description: 'Set up future dated payments',
    icon: Calendar,
    color: 'from-green-600 to-emerald-600',
    scheduled: 3
  }
];

// Modal Components
const PayAllModal = ({ onClose, totalAmount, totalEmployees }) => (
  <div className="space-y-6">
    <div className="bg-crypto-dark rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold">Payment Summary</h3>
          <p className="text-gray-400 text-sm">Review payment details before proceeding</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">{totalAmount}</div>
          <div className="text-sm text-gray-400">{totalEmployees} employees</div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Gas Fee (Est.)</span>
          <span className="text-green-400">$12.50</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Processing Time</span>
          <span>~2 hours</span>
        </div>
      </div>
    </div>

    <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
      <div className="flex items-start space-x-3">
        <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
        <p className="text-sm text-yellow-200/80">
          This action will process payments for all active employees. Please ensure you have
          sufficient funds in your wallet before proceeding.
        </p>
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
        Confirm & Pay
      </button>
    </div>
  </div>
);

const PaySelectedModal = ({ onClose }) => {
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  
  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search employees..."
          className="w-full bg-crypto-dark border border-gray-800 rounded-xl py-2 pl-10 pr-4
                   focus:outline-none focus:border-indigo-500 transition-colors"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>

      <div className="space-y-2 max-h-[300px] overflow-y-auto custom-scrollbar">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="flex items-center justify-between p-4 bg-crypto-dark rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all"
          >
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={selectedEmployees.includes(employee.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedEmployees([...selectedEmployees, employee.id]);
                  } else {
                    setSelectedEmployees(selectedEmployees.filter(id => id !== employee.id));
                  }
                }}
                className="rounded border-gray-700 text-indigo-600 focus:ring-indigo-500"
              />
              <div>
                <div className="font-semibold">{employee.name}</div>
                <div className="text-sm text-gray-400">{employee.department}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">{employee.salary}</div>
            </div>
          </div>
        ))}
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
          Continue
        </button>
      </div>
    </div>
  );
};

const PayDepartmentModal = ({ onClose }) => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {departments.map((dept) => (
          <button
            key={dept.id}
            onClick={() => setSelectedDepartment(dept.id)}
            className={`p-4 rounded-xl border transition-all text-left ${
              selectedDepartment === dept.id
                ? 'bg-indigo-500/10 border-indigo-500/50'
                : 'bg-crypto-dark border-gray-800 hover:border-indigo-500/50'
            }`}
          >
            <div className="font-semibold">{dept.name}</div>
            <div className="text-sm text-gray-400">{dept.employeeCount} employees</div>
          </button>
        ))}
      </div>

      {selectedDepartment && (
        <div className="bg-crypto-dark rounded-xl p-4 border border-gray-800">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Total Amount</span>
            <span className="font-bold">$45,678</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Employees</span>
            <span>{departments.find(d => d.id === selectedDepartment)?.employeeCount}</span>
          </div>
        </div>
      )}

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
          Continue
        </button>
      </div>
    </div>
  );
};

const SchedulePaymentModal = ({ onClose }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Payment Date</label>
          <input
            type="date"
            className="w-full bg-crypto-dark border border-gray-800 rounded-xl py-2 px-4
                     focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Payment Type</label>
          <select
            className="w-full bg-crypto-dark border border-gray-800 rounded-xl py-2 px-4
                     focus:outline-none focus:border-indigo-500 transition-colors"
          >
            <option value="all">All Employees</option>
            <option value="department">By Department</option>
            <option value="selected">Selected Employees</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2">Recurring Payment</label>
        <select
          className="w-full bg-crypto-dark border border-gray-800 rounded-xl py-2 px-4
                   focus:outline-none focus:border-indigo-500 transition-colors"
        >
          <option value="none">One-time Payment</option>
          <option value="weekly">Weekly</option>
          <option value="biweekly">Bi-weekly</option>
          <option value="monthly">Monthly</option>
        </select>
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
          Schedule Payment
        </button>
      </div>
    </div>
  );
};

export default function PaymentOptions() {
  const [activeModal, setActiveModal] = useState(null);

  const renderModal = () => {
    if (!activeModal) return null;

    const modalContent = {
      'Pay All Employees': <PayAllModal onClose={() => setActiveModal(null)} totalAmount="$145,678" totalEmployees={156} />,
      'Pay Selected Employees': <PaySelectedModal onClose={() => setActiveModal(null)} />,
      'Pay by Department': <PayDepartmentModal onClose={() => setActiveModal(null)} />,
      'Schedule Payment': <SchedulePaymentModal onClose={() => setActiveModal(null)} />
    };

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-crypto-card w-full max-w-xl mx-4 rounded-2xl border border-gray-800 overflow-hidden">
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{activeModal}</h2>
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
      <h2 className="text-xl font-bold mb-6">Payment Options</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option, index) => (
          <motion.button
            key={option.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setActiveModal(option.title)}
            className="group bg-crypto-dark hover:bg-crypto-dark/70 border border-gray-800 hover:border-indigo-500/50 
                     rounded-xl p-6 transition-all text-left"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${option.color} 
                            flex items-center justify-center transform transition-transform 
                            group-hover:scale-110`}>
                <option.icon className="w-6 h-6 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold mb-1 group-hover:text-white transition-colors">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  {option.description}
                </p>
                
                {option.amount && (
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold text-indigo-400">
                        {option.amount}
                      </div>
                      <div className="text-sm text-gray-400">
                        {option.employees} employees
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center
                                group-hover:bg-indigo-500 transition-colors">
                      <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                )}

                {option.departments && (
                  <div className="flex flex-wrap gap-2">
                    {option.departments.map((dept) => (
                      <span
                        key={dept}
                        className="px-2 py-1 text-xs rounded-full bg-indigo-500/10 text-indigo-400
                                border border-indigo-500/20"
                      >
                        {dept}
                      </span>
                    ))}
                  </div>
                )}

                {option.scheduled && (
                  <div className="text-sm text-gray-400">
                    {option.scheduled} payments scheduled
                  </div>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 p-4 bg-crypto-dark/50 rounded-xl border border-gray-800">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-400">Next Payroll Date</div>
            <div className="font-semibold">January 31, 2024</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Processing Time</div>
            <div className="font-semibold">~2 hours</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Gas Fees (Est.)</div>
            <div className="font-semibold text-green-400">$12.50</div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {renderModal()}
    </div>
  );
}