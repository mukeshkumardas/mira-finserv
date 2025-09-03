import React from 'react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import ScreenTitle from '../components/common/ScreenTitle';

const RechargeScreen: React.FC = () => {
    const [activeTab, setActiveTab] = React.useState<'mobile' | 'dth'>('mobile');

    const TabButton: React.FC<{ tab: 'mobile' | 'dth'; label: string }> = ({ tab, label }) => (
        <button
            onClick={() => setActiveTab(tab)}
            className={`w-full py-2.5 text-sm font-medium leading-5 rounded-lg
                ${activeTab === tab ? 'bg-blue-600 text-white shadow' : 'text-blue-700 hover:bg-white/[0.5] hover:text-blue-800'}`}
        >
            {label}
        </button>
    );

    return (
        <div className="p-6">
            <ScreenTitle title="Recharge" />

            <div className="flex space-x-1 rounded-xl bg-blue-100 p-1 mb-6">
                <TabButton tab="mobile" label="Mobile" />
                <TabButton tab="dth" label="DTH" />
            </div>

            {activeTab === 'mobile' ? (
                <form className="space-y-6">
                    <Input label="Mobile Number" id="mobile-number" type="tel" placeholder="Enter 10-digit number" />
                    <Input label="Operator" id="operator" placeholder="Select Operator" />
                    <Input label="Amount (₹)" id="recharge-amount" type="number" placeholder="Enter amount" />
                    <Button type="submit">Proceed to Recharge</Button>
                </form>
            ) : (
                <form className="space-y-6">
                    <Input label="Subscriber ID" id="subscriber-id" placeholder="Enter Subscriber ID" />
                    <Input label="Operator" id="dth-operator" placeholder="Select DTH Operator" />
                    <Input label="Amount (₹)" id="dth-amount" type="number" placeholder="Enter amount" />
                    <Button type="submit">Proceed to Recharge</Button>
                </form>
            )}
        </div>
    );
};

export default RechargeScreen;
