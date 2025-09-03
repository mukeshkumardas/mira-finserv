import React from 'react';
import { Screen } from '../types';
import Card from '../components/common/Card';
import ServiceIcon from '../components/common/ServiceIcon';
import Button from '../components/common/Button';
import { 
    ArrowUpRightIcon, BoltIcon, PhoneIcon, DocumentTextIcon, ClockIcon, BuildingLibraryIcon,
    CreditCardIcon, ShieldCheckIcon, ChartPieIcon, CalculatorIcon, SparklesIcon, ChatBubbleLeftRightIcon
} from '../components/icons/HeroIcons';

interface HomeScreenProps {
    navigateTo: (screen: Screen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigateTo }) => {

    const coreServices = [
        { screen: Screen.LoanApplication, label: 'Apply Loan', icon: <DocumentTextIcon className="w-6 h-6" /> },
        { screen: Screen.LoanStatus, label: 'Loan Status', icon: <ClockIcon className="w-6 h-6" /> },
        { screen: Screen.SavingsAccount, label: 'Savings A/C', icon: <BuildingLibraryIcon className="w-6 h-6" /> },
        { screen: Screen.CreditCard, label: 'Credit Card', icon: <CreditCardIcon className="w-6 h-6" /> },
    ];

    const moreServices = [
        { screen: Screen.Insurance, label: 'Insurance', icon: <ShieldCheckIcon className="w-6 h-6" /> },
        { screen: Screen.Investments, label: 'Investments', icon: <ChartPieIcon className="w-6 h-6" /> },
        { screen: Screen.EMICalculator, label: 'EMI Calculator', icon: <CalculatorIcon className="w-6 h-6" /> },
        { screen: Screen.CreditScore, label: 'Credit Score', icon: <SparklesIcon className="w-6 h-6" /> },
        { screen: Screen.Support, label: 'Support', icon: <ChatBubbleLeftRightIcon className="w-6 h-6" /> },
        { screen: Screen.CurrentAccount, label: 'Current A/C', icon: <BuildingLibraryIcon className="w-6 h-6" /> },
    ];

    return (
        <div className="p-4 space-y-6 bg-gray-50">
            {/* Account Overview Card */}
            <Card className="bg-blue-600 text-white">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="text-sm text-blue-200">Total Balance</p>
                        <p className="text-3xl font-bold mt-1">₹1,23,456.78</p>
                    </div>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Savings A/C</span>
                </div>
                <div className="mt-4 text-sm text-blue-200">
                    A/C: **** **** **** 1234
                </div>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center" onClick={() => navigateTo(Screen.FundTransfer)}>
                     <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-2">
                        <ArrowUpRightIcon className="w-6 h-6 text-blue-600"/>
                    </button>
                    <span className="text-sm font-medium text-gray-700">Transfer</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => navigateTo(Screen.BillPay)}>
                     <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-2">
                        <BoltIcon className="w-6 h-6 text-blue-600"/>
                    </button>
                    <span className="text-sm font-medium text-gray-700">Bill Pay</span>
                </div>
                <div className="flex flex-col items-center" onClick={() => navigateTo(Screen.Recharge)}>
                     <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md mb-2">
                        <PhoneIcon className="w-6 h-6 text-blue-600"/>
                    </button>
                    <span className="text-sm font-medium text-gray-700">Recharge</span>
                </div>
            </div>

            {/* Core Services */}
            <Card>
                <h2 className="font-bold text-lg text-gray-800 mb-4">Services</h2>
                <div className="grid grid-cols-4 gap-y-4">
                    {coreServices.map(service => (
                        <ServiceIcon key={service.screen} {...service} onClick={() => navigateTo(service.screen)} />
                    ))}
                </div>
            </Card>

             {/* More Services */}
             <Card>
                <h2 className="font-bold text-lg text-gray-800 mb-4">Tools & More</h2>
                <div className="grid grid-cols-4 gap-y-4">
                    {moreServices.slice(0, 4).map(service => (
                        <ServiceIcon key={service.screen} {...service} onClick={() => navigateTo(service.screen)} />
                    ))}
                </div>
                 <div className="grid grid-cols-4 gap-y-4 mt-4">
                    {moreServices.slice(4).map(service => (
                        <ServiceIcon key={service.screen} {...service} onClick={() => navigateTo(service.screen)} />
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default HomeScreen;
