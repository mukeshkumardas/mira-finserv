import React from 'react';
import ScreenTitle from '../components/common/ScreenTitle';
import ServiceIcon from '../components/common/ServiceIcon';
import { BoltIcon, PhoneIcon, CreditCardIcon } from '../components/icons/HeroIcons';

const BillPayScreen: React.FC = () => {
    const billers = [
        { label: 'Electricity', icon: <BoltIcon className="w-6 h-6" /> },
        { label: 'Mobile Postpaid', icon: <PhoneIcon className="w-6 h-6" /> },
        { label: 'Broadband', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.042A5.25 5.25 0 0112 13.5h.008a5.25 5.25 0 013.704 1.542M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg> },
        { label: 'DTH', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-1.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" /></svg> },
        { label: 'Gas Cylinder', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048l5.962-5.962a.75.75 0 011.06 0l2.298 2.298a.75.75 0 010 1.06l-5.459 5.459a.75.75 0 01-1.06 0l-2.298-2.298m0 0A3.742 3.742 0 015.25 6.75c0-1.56.963-2.87 2.287-3.443" /></svg> },
        { label: 'Water', icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 4.5c.348.006.69.043 1.026.112l-1.026 3.848-1.026-3.848A11.95 11.95 0 0112 4.5z" /></svg> },
        { label: 'Credit Card Bill', icon: <CreditCardIcon className="w-6 h-6" /> },
        { label: 'Loan Repayment', icon: <DocumentTextIcon className="w-6 h-6" /> },
    ];
    return (
        <div className="p-6">
            <ScreenTitle 
                title="Bill Payments"
                subtitle="Pay all your utility bills in one place."
            />
            <div className="grid grid-cols-4 gap-y-6">
                {billers.map(biller => <ServiceIcon key={biller.label} {...biller} />)}
            </div>
        </div>
    );
};

export default BillPayScreen;

// Dummy icon to resolve import error in this context
const DocumentTextIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
);