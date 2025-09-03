
import React from 'react';
import { Screen } from '../../types';
import { HomeIcon, ArrowsRightLeftIcon, ChartPieIcon, UserIcon } from '../icons/HeroIcons';

interface BottomNavProps {
    activeScreen: Screen;
    setActiveScreen: (screen: Screen) => void;
}

const mainScreens = [Screen.Home, Screen.Transactions, Screen.Investments, Screen.Profile];

const NavItem: React.FC<{
    screen: Screen;
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: (screen: Screen) => void;
}> = ({ screen, label, icon, isActive, onClick }) => {
    const activeClass = isActive ? 'text-blue-600' : 'text-gray-500';
    return (
        <button
            onClick={() => onClick(screen)}
            className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ${activeClass} hover:text-blue-600`}
        >
            {icon}
            <span className="text-xs mt-1">{label}</span>
        </button>
    );
};

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
    const isMainScreen = mainScreens.includes(activeScreen);

    return (
        <nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-t-lg flex justify-around">
            <NavItem
                screen={Screen.Home}
                label="Home"
                icon={<HomeIcon className="w-6 h-6" />}
                isActive={activeScreen === Screen.Home}
                onClick={setActiveScreen}
            />
            <NavItem
                screen={Screen.Transactions}
                label="History"
                icon={<ArrowsRightLeftIcon className="w-6 h-6" />}
                isActive={activeScreen === Screen.Transactions}
                onClick={setActiveScreen}
            />
            <NavItem
                screen={Screen.Investments}
                label="Invest"
                icon={<ChartPieIcon className="w-6 h-6" />}
                isActive={activeScreen === Screen.Investments}
                onClick={setActiveScreen}
            />
            <NavItem
                screen={Screen.Profile}
                label="Profile"
                icon={<UserIcon className="w-6 h-6" />}
                isActive={activeScreen === Screen.Profile}
                onClick={setActiveScreen}
            />
        </nav>
    );
};

export default BottomNav;
