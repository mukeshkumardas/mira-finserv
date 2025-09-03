import React from 'react';
import Card from '../components/common/Card';
import ScreenTitle from '../components/common/ScreenTitle';
import Button from '../components/common/Button';
import { ShieldCheckIcon, UserIcon } from '../components/icons/HeroIcons';

const InsuranceScreen: React.FC = () => {
    const insuranceTypes = [
        {
            title: 'Health Insurance',
            description: 'Protect yourself and your family from medical emergencies.',
            icon: <ShieldCheckIcon className="w-8 h-8 text-green-500" />
        },
        {
            title: 'Life Insurance',
            description: 'Secure your family\'s financial future.',
            icon: <UserIcon className="w-8 h-8 text-blue-500" />
        },
        {
            title: 'Vehicle Insurance',
            description: 'Get comprehensive cover for your car or bike.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-500"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h15.75" /></svg>
        },
    ];

    return (
        <div className="p-6">
            <ScreenTitle
                title="Insurance"
                subtitle="Secure your future with our range of insurance products."
            />
            <div className="space-y-6">
                {insuranceTypes.map(type => (
                    <Card key={type.title} className="space-y-3">
                        <div className="flex items-center space-x-4">
                            {type.icon}
                            <h3 className="text-lg font-bold text-gray-800">{type.title}</h3>
                        </div>
                        <p className="text-gray-600">{type.description}</p>
                        <Button variant="secondary">View Plans</Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default InsuranceScreen;
