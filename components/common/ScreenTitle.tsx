import React from 'react';

interface ScreenTitleProps {
    title: string;
    subtitle?: string;
}

const ScreenTitle: React.FC<ScreenTitleProps> = ({ title, subtitle }) => {
    return (
        <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
        </div>
    );
};

export default ScreenTitle;
