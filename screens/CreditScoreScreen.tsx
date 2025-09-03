import React from 'react';
import ScreenTitle from '../components/common/ScreenTitle';
import Button from '../components/common/Button';

const CreditScoreScreen: React.FC = () => {
    const score = 780;
    const scorePercentage = (score - 300) / 600;

    return (
        <div className="p-6 text-center">
            <ScreenTitle
                title="Credit Score"
                subtitle="Last updated: 1 Aug 2024"
            />

            <div className="relative w-48 h-24 mx-auto mb-6">
                <svg viewBox="0 0 36 18" className="w-full h-full">
                    <path className="text-gray-200" strokeWidth="3" fill="none" stroke="currentColor" d="M 3 15 A 15 15 0 0 1 33 15" />
                    <path className="text-green-500" strokeWidth="3" fill="none" stroke="currentColor" strokeDasharray={`${scorePercentage * 56.5}, 100`} d="M 3 15 A 15 15 0 0 1 33 15" />
                </svg>
                <div className="absolute bottom-0 w-full">
                    <span className="text-4xl font-bold text-gray-800">{score}</span>
                    <p className="text-sm font-semibold text-green-600">Excellent</p>
                </div>
            </div>

            <div className="text-left bg-green-50 p-4 rounded-lg mb-6">
                <p className="font-semibold text-green-800">Great job! Your score is well above average. Lenders view you as a responsible borrower.</p>
            </div>
            
            <div className="text-left space-y-3 mb-8">
                <h3 className="font-bold">Credit Summary</h3>
                <p className="flex justify-between"><span>Payment History:</span> <span className="font-semibold text-green-600">100%</span></p>
                <p className="flex justify-between"><span>Credit Utilization:</span> <span className="font-semibold text-yellow-600">35%</span></p>
                <p className="flex justify-between"><span>Age of Credit:</span> <span className="font-semibold">4 years</span></p>
            </div>

            <Button variant="secondary">Refresh Score</Button>
        </div>
    );
};

export default CreditScoreScreen;
