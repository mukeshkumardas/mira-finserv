
import React from 'react';

interface AppContainerProps {
    children: React.ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
    return (
        <div className="w-full max-w-sm h-[800px] max-h-[90vh] bg-gray-50 rounded-2xl shadow-2xl overflow-hidden flex flex-col relative border-4 border-gray-800">
            {children}
        </div>
    );
};

export default AppContainer;
