import React from 'react';
import ScreenTitle from '../components/common/ScreenTitle';

interface Notification {
    id: string;
    title: string;
    message: string;
    time: string;
    read: boolean;
}

const notifications: Notification[] = [
    { id: '1', title: 'Loan Approved!', message: 'Your personal loan of ₹5,00,000 has been approved.', time: '2 hours ago', read: false },
    { id: '2', title: 'Payment Due', message: 'Your credit card bill of ₹12,345 is due tomorrow.', time: '1 day ago', read: false },
    { id: '3', title: 'New Offer', message: 'Get 10% off on your next bill payment.', time: '3 days ago', read: true },
    { id: '4', title: 'Security Alert', message: 'New device logged in. If this wasn\'t you, secure your account.', time: '5 days ago', read: true },
];

const NotificationsScreen: React.FC = () => {
    return (
        <div className="p-6">
            <ScreenTitle
                title="Notifications"
            />
            <div className="space-y-4">
                {notifications.map(notif => (
                    <div key={notif.id} className={`p-4 rounded-lg flex space-x-3 ${notif.read ? 'bg-gray-50' : 'bg-blue-50'}`}>
                        {!notif.read && <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 shrink-0"></div>}
                        <div>
                            <p className="font-bold text-gray-800">{notif.title}</p>
                            <p className="text-sm text-gray-600">{notif.message}</p>
                            <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationsScreen;
