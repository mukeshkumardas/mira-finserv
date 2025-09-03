import React from 'react';

interface ServiceIconProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ icon, label, onClick }) => {
    return (
        <button onClick={onClick} className="flex flex-col items-center space-y-2 text-center group w-20">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 transition-colors duration-200 group-hover:bg-blue-200">
                {icon}
            </div>
            <span className="text-xs font-medium text-gray-700 leading-tight">{label}</span>
        </button>
    );
};

export default ServiceIcon;
