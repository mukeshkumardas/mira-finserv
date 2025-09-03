import React from 'react';
import Button from '../components/common/Button';
import ScreenTitle from '../components/common/ScreenTitle';
import { BanknotesIcon, SparklesIcon, ShieldCheckIcon } from '../components/icons/HeroIcons';

const SavingsAccountScreen: React.FC = () => {
    const features = [
        { icon: <BanknotesIcon className="w-6 h-6 text-blue-600" />, text: 'High interest rates up to 7%' },
        { icon: <SparklesIcon className="w-6 h-6 text-blue-600" />, text: 'Zero balance account option' },
        { icon: <ShieldCheckIcon className="w-6 h-6 text-blue-600" />, text: 'Insured by DICGC for up to ₹5 lakh' },
    ];

    return (
        <div className="p-6 flex flex-col h-full">
            <ScreenTitle 
                title="Open Savings Account"
                subtitle="Start your savings journey with Mira Finserv today."
            />
            
            <div className="my-6">
                <img src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=300&auto=format&fit=crop" 
                     alt="Savings" 
                     className="rounded-lg w-full h-40 object-cover" />
            </div>

            <div className="space-y-4 mb-8">
                <h3 className="font-bold text-lg text-gray-800">Key Features</h3>
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">{feature.icon}</div>
                        <span className="text-gray-700">{feature.text}</span>
                    </div>
                ))}
            </div>

            <div className="mt-auto">
                <Button>Open Account Now</Button>
            </div>
        </div>
    );
};

export default SavingsAccountScreen;
