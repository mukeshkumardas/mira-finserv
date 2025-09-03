import React, { useState, useMemo } from 'react';
import ScreenTitle from '../components/common/ScreenTitle';
import Card from '../components/common/Card';

const EMICalculatorScreen: React.FC = () => {
    const [amount, setAmount] = useState(500000);
    const [rate, setRate] = useState(10.5);
    const [tenure, setTenure] = useState(24);

    const emi = useMemo(() => {
        // Fix: The type of `emi` was `string | 0`, causing a TypeScript error
        // when passed to `parseFloat`. Returning '0.00' ensures `emi` is always
        // a string, resolving the error and improving currency display.
        if (amount <= 0 || rate <= 0 || tenure <= 0) return '0.00';
        const monthlyRate = rate / (12 * 100);
        const numerator = amount * monthlyRate * Math.pow(1 + monthlyRate, tenure);
        const denominator = Math.pow(1 + monthlyRate, tenure) - 1;
        return (numerator / denominator).toFixed(2);
    }, [amount, rate, tenure]);
    
    const totalPayable = (parseFloat(emi) * tenure).toFixed(2);
    const totalInterest = (parseFloat(totalPayable) - amount).toFixed(2);

    return (
        <div className="p-6">
            <ScreenTitle
                title="EMI Calculator"
                subtitle="Estimate your Equated Monthly Installment (EMI)."
            />
            <div className="space-y-6">
                <div>
                    <label className="font-semibold">Loan Amount: ₹{amount.toLocaleString()}</label>
                    <input type="range" min="10000" max="5000000" step="10000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>
                <div>
                    <label className="font-semibold">Interest Rate: {rate}%</label>
                    <input type="range" min="5" max="20" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>
                <div>
                    <label className="font-semibold">Tenure: {tenure} months</label>
                    <input type="range" min="6" max="120" step="1" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                </div>
            </div>

            <Card className="mt-8 text-center bg-blue-50">
                <p className="text-gray-600">Your Monthly EMI</p>
                <p className="text-3xl font-bold text-blue-600 my-2">₹{emi}</p>
                <div className="text-sm text-gray-500 grid grid-cols-2 gap-2 mt-4">
                  <p>Principal: ₹{amount.toLocaleString()}</p>
                  <p>Interest: ₹{parseFloat(totalInterest).toLocaleString()}</p>
                  <p className="col-span-2 font-semibold">Total: ₹{parseFloat(totalPayable).toLocaleString()}</p>
                </div>
            </Card>
        </div>
    );
};

export default EMICalculatorScreen;
