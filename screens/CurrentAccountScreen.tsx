import React from 'react';
import Button from '../components/common/Button';
import ScreenTitle from '../components/common/ScreenTitle';
import { BuildingLibraryIcon, ArrowsRightLeftIcon, ShieldCheckIcon } from '../components/icons/HeroIcons';

const CurrentAccountScreen: React.FC = () => {
    const features = [
        { icon: <ArrowsRightLeftIcon className="w-6 h-6 text-blue-600" />, text: 'Unlimited transactions' },
        { icon: <BuildingLibraryIcon className="w-6 h-6 text-blue-600" />, text: 'Overdraft facility available' },
        { icon: <ShieldCheckIcon className="w-6 h-6 text-blue-600" />, text: 'Dedicated relationship manager' },
    ];

    return (
        <div className="p-6 flex flex-col h-full">
            <ScreenTitle 
                title="Open Current Account"
                subtitle="Empower your business with our feature-rich current account."
            />
            
            <div className="my-6">
                <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=300&auto=format&fit=crop"
                     alt="Business" 
                     className="rounded-lg w-full h-40 object-cover" />
            </div>

            <div className="space-y-4 mb-8">
                <h3 className="font-bold text-lg text-gray-800">Business Benefits</h3>
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">{feature.icon}</div>
                        <span className="text-gray-700">{feature.text}</span>
                    </div>
                ))}
            </div>

            <div className="mt-auto">
                <Button>Get Started</Button>
            </div>
        </div>
    );
};

export default CurrentAccountScreen;
