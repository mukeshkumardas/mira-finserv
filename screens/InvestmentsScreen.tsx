import React, { useState } from 'react';
import ScreenTitle from '../components/common/ScreenTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const InvestmentsScreen: React.FC = () => {
    const [activeTab, setActiveTab] = useState('mf');

    const TabButton = ({ tab, label }: { tab: string; label: string }) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
                activeTab === tab ? 'bg-blue-600 text-white' : 'text-gray-600'
            }`}
        >
            {label}
        </button>
    );

    return (
        <div className="p-6">
            <ScreenTitle title="Investments" />
            
            <Card className="mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500">Portfolio Value</p>
                        <p className="text-2xl font-bold text-gray-800">₹2,50,000</p>
                    </div>
                     <p className="text-lg font-semibold text-green-600">+5.2%</p>
                </div>
            </Card>

            <div className="flex space-x-2 mb-6">
                <TabButton tab="mf" label="Mutual Funds" />
                <TabButton tab="fd" label="Fixed Deposits" />
                <TabButton tab="rd" label="Recurring Deposits" />
            </div>

            <div>
                {activeTab === 'mf' && (
                     <div className="space-y-4">
                        <h3 className="text-lg font-bold">Top Mutual Funds</h3>
                        <Card>Mira Bluechip Fund - 24.5% (1Y)</Card>
                        <Card>Mira Midcap Fund - 32.1% (1Y)</Card>
                        <Button variant="ghost">Explore More Funds</Button>
                    </div>
                )}
                {activeTab === 'fd' && (
                     <div className="space-y-4">
                        <h3 className="text-lg font-bold">Fixed Deposits</h3>
                        <Card>FD for 1 year - 7.5% p.a.</Card>
                        <Card>Tax Saver FD (5 years) - 7.75% p.a.</Card>
                        <Button>Create New FD</Button>
                    </div>
                )}
                {activeTab === 'rd' && (
                     <div className="space-y-4">
                        <h3 className="text-lg font-bold">Recurring Deposits</h3>
                        <Card>Flexible RD - 7.25% p.a.</Card>
                        <Button>Start New RD</Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InvestmentsScreen;
