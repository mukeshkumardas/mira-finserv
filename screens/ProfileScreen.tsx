import React from 'react';
import Card from '../components/common/Card';
import { ChevronRightIcon, Cog6ToothIcon, UserCircleIcon, ArrowRightOnRectangleIcon, ShieldCheckIcon, BellIcon } from '../components/icons/HeroIcons';

const ListItem: React.FC<{ icon: React.ReactNode; label: string; onClick?: () => void }> = ({ icon, label, onClick }) => (
    <button onClick={onClick} className="flex items-center justify-between w-full p-3 hover:bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-4">
            {icon}
            <span className="text-gray-800 font-medium">{label}</span>
        </div>
        <ChevronRightIcon className="w-5 h-5 text-gray-400" />
    </button>
);

const ProfileScreen: React.FC = () => {
    const menuItems = [
        { icon: <UserCircleIcon className="w-6 h-6 text-gray-600" />, label: 'Manage Profile' },
        { icon: <ShieldCheckIcon className="w-6 h-6 text-gray-600" />, label: 'Security Settings' },
        { icon: <BellIcon className="w-6 h-6 text-gray-600" />, label: 'Notification Preferences' },
        { icon: <Cog6ToothIcon className="w-6 h-6 text-gray-600" />, label: 'App Settings' },
    ];

    return (
        <div className="p-6 bg-gray-50 h-full">
            <div className="flex flex-col items-center mb-8">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                     <UserCircleIcon className="w-16 h-16 text-blue-500" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">John Doe</h2>
                <p className="text-gray-500">john.doe@example.com</p>
            </div>
            
            <Card className="p-2">
                {menuItems.map(item => <ListItem key={item.label} {...item} />)}
            </Card>

            <div className="mt-6">
                 <ListItem icon={<ArrowRightOnRectangleIcon className="w-6 h-6 text-red-500" />} label="Logout" />
            </div>
        </div>
    );
};

export default ProfileScreen;
