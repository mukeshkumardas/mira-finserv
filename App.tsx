
import React, { useState, useCallback } from 'react';
import { Screen } from './types';
import AppContainer from './components/layout/AppContainer';
import Header from './components/layout/Header';
import BottomNav from './components/layout/BottomNav';
import HomeScreen from './screens/HomeScreen';
import LoanApplicationScreen from './screens/LoanApplicationScreen';
import LoanStatusScreen from './screens/LoanStatusScreen';
import SavingsAccountScreen from './screens/SavingsAccountScreen';
import CurrentAccountScreen from './screens/CurrentAccountScreen';
import CreditCardScreen from './screens/CreditCardScreen';
import RechargeScreen from './screens/RechargeScreen';
import BillPayScreen from './screens/BillPayScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import FundTransferScreen from './screens/FundTransferScreen';
import InvestmentsScreen from './screens/InvestmentsScreen';
import InsuranceScreen from './screens/InsuranceScreen';
import EMICalculatorScreen from './screens/EMICalculatorScreen';
import CreditScoreScreen from './screens/CreditScoreScreen';
import SupportScreen from './screens/SupportScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationsScreen from './screens/NotificationsScreen';

const App: React.FC = () => {
    const [activeScreen, setActiveScreen] = useState<Screen>(Screen.Home);
    const [screenHistory, setScreenHistory] = useState<Screen[]>([Screen.Home]);

    const navigateTo = useCallback((screen: Screen) => {
        setScreenHistory(prev => [...prev, screen]);
        setActiveScreen(screen);
    }, []);

    const goBack = useCallback(() => {
        if (screenHistory.length > 1) {
            const newHistory = [...screenHistory];
            newHistory.pop();
            setScreenHistory(newHistory);
            setActiveScreen(newHistory[newHistory.length - 1]);
        }
    }, [screenHistory]);

    const renderScreen = () => {
        switch (activeScreen) {
            case Screen.Home:
                return <HomeScreen navigateTo={navigateTo} />;
            case Screen.LoanApplication:
                return <LoanApplicationScreen />;
            case Screen.LoanStatus:
                return <LoanStatusScreen />;
            case Screen.SavingsAccount:
                return <SavingsAccountScreen />;
            case Screen.CurrentAccount:
                return <CurrentAccountScreen />;
            case Screen.CreditCard:
                return <CreditCardScreen />;
            case Screen.Recharge:
                return <RechargeScreen />;
            case Screen.BillPay:
                return <BillPayScreen />;
            case Screen.Transactions:
                return <TransactionsScreen />;
            case Screen.FundTransfer:
                return <FundTransferScreen />;
            case Screen.Investments:
                return <InvestmentsScreen />;
            case Screen.Insurance:
                return <InsuranceScreen />;
            case Screen.EMICalculator:
                return <EMICalculatorScreen />;
            case Screen.CreditScore:
                return <CreditScoreScreen />;
            case Screen.Support:
                return <SupportScreen />;
            case Screen.Profile:
                return <ProfileScreen />;
            case Screen.Notifications:
                return <NotificationsScreen />;
            default:
                return <HomeScreen navigateTo={navigateTo} />;
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <AppContainer>
                <Header 
                    currentScreen={activeScreen} 
                    onBack={goBack} 
                    showBackButton={activeScreen !== Screen.Home && activeScreen !== Screen.Transactions && activeScreen !== Screen.Investments && activeScreen !== Screen.Profile}
                    navigateTo={navigateTo}
                />
                <main className="flex-grow overflow-y-auto pb-16 bg-white">
                    {renderScreen()}
                </main>
                <BottomNav activeScreen={activeScreen} setActiveScreen={navigateTo} />
            </AppContainer>
        </div>
    );
};

export default App;
