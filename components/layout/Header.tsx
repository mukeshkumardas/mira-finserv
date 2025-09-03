
import React from 'react';
import { Screen } from '../../types';
import { BellIcon, UserCircleIcon, ChevronLeftIcon } from '../icons/HeroIcons';

interface HeaderProps {
    currentScreen: Screen;
    onBack: () => void;
    showBackButton: boolean;
    navigateTo: (screen: Screen) => void;
}

const screenTitles: Record<Screen, string> = {
    [Screen.Home]: "Mira Finserv",
    [Screen.LoanApplication]: "Apply for Loan",
    [Screen.LoanStatus]: "Loan Status",
    [Screen.SavingsAccount]: "Open Savings Account",
    [Screen.CurrentAccount]: "Open Current Account",
    [Screen.CreditCard]: "Apply for Credit Card",
    [Screen.Recharge]: "Mobile/DTH Recharge",
    [Screen.BillPay]: "Utility Bill Payment",
    [Screen.Transactions]: "Transactions",
    [Screen.FundTransfer]: "Fund Transfer",
    [Screen.Investments]: "Investments",
    [Screen.Insurance]: "Insurance",
    [Screen.EMICalculator]: "EMI Calculator",
    [Screen.CreditScore]: "Credit Score",
    [Screen.Support]: "Customer Support",
    [Screen.Profile]: "Profile",
    [Screen.Notifications]: "Notifications",
};


const Logo: React.FC = () => (
    <div className="flex items-center space-x-2">
        <div className="bg-blue-600 p-2 rounded-full">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <span className="text-xl font-bold text-gray-800">Mira Finserv</span>
    </div>
);


const Header: React.FC<HeaderProps> = ({ currentScreen, onBack, showBackButton, navigateTo }) => {
    const title = screenTitles[currentScreen] || "Mira Finserv";
    
    return (
        <header className="bg-white shadow-sm p-4 flex items-center justify-between z-10 shrink-0">
            {showBackButton ? (
                <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-100">
                    <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
                </button>
            ) : (
                currentScreen === Screen.Home ? <Logo /> : <div className="w-8"></div>
            )}
            
            {currentScreen !== Screen.Home && <h1 className="text-lg font-semibold text-gray-800 absolute left-1/2 -translate-x-1/2">{title}</h1>}

            <div className="flex items-center space-x-4">
                <button onClick={() => navigateTo(Screen.Notifications)} className="relative p-2 rounded-full hover:bg-gray-100">
                    <BellIcon className="w-6 h-6 text-gray-700" />
                    <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
                </button>
                <button onClick={() => navigateTo(Screen.Profile)} className="p-1 rounded-full hover:bg-gray-100">
                     <UserCircleIcon className="w-7 h-7 text-gray-700" />
                </button>
            </div>
        </header>
    );
};

export default Header;
