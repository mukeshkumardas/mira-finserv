import React from 'react';
import Card from '../components/common/Card';
import ScreenTitle from '../components/common/ScreenTitle';

interface LoanStatus {
    id: string;
    type: string;
    amount: string;
    status: 'Approved' | 'Pending' | 'Rejected';
    date: string;
}

const loanApplications: LoanStatus[] = [
    { id: 'LAI-10234', type: 'Personal Loan', amount: '₹5,00,000', status: 'Approved', date: '15 Jul 2024' },
    { id: 'LAI-10198', type: 'Car Loan', amount: '₹8,50,000', status: 'Pending', date: '02 Jul 2024' },
    { id: 'LAI-09872', type: 'Home Loan', amount: '₹45,00,000', status: 'Rejected', date: '10 Jun 2024' },
];

const statusColors = {
    Approved: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Rejected: 'bg-red-100 text-red-800',
};


const LoanStatusScreen: React.FC = () => {
    return (
        <div className="p-6">
            <ScreenTitle
                title="Loan Status"
                subtitle="Track your loan applications here."
            />
            <div className="space-y-4">
                {loanApplications.map(loan => (
                    <Card key={loan.id} className="flex items-center justify-between">
                        <div>
                            <p className="font-bold text-gray-800">{loan.type}</p>
                            <p className="text-sm text-gray-600">{loan.amount}</p>
                            <p className="text-xs text-gray-400 mt-1">{loan.id} &bull; {loan.date}</p>
                        </div>
                        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${statusColors[loan.status]}`}>
                            {loan.status}
                        </span>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default LoanStatusScreen;
