import React from 'react';
import Card from '../components/common/Card';
import ScreenTitle from '../components/common/ScreenTitle';

interface Transaction {
    id: string;
    description: string;
    date: string;
    amount: string;
    type: 'credit' | 'debit';
}

const transactions: Transaction[] = [
    { id: '1', description: 'Salary Credit', date: '2024-07-31', amount: '+ ₹85,000.00', type: 'credit' },
    { id: '2', description: 'Zomato Order', date: '2024-07-30', amount: '- ₹450.00', type: 'debit' },
    { id: '3', description: 'Electricity Bill', date: '2024-07-28', amount: '- ₹1,250.00', type: 'debit' },
    { id: '4', description: 'Fund Transfer to John', date: '2024-07-27', amount: '- ₹5,000.00', type: 'debit' },
    { id: '5', description: 'FD Interest', date: '2024-07-25', amount: '+ ₹2,100.00', type: 'credit' },
    { id: '6', description: 'Netflix Subscription', date: '2024-07-25', amount: '- ₹649.00', type: 'debit' },
];

const TransactionItem: React.FC<{ tx: Transaction }> = ({ tx }) => {
    const isCredit = tx.type === 'credit';
    return (
        <Card className="flex items-center justify-between">
            <div>
                <p className="font-semibold text-gray-800">{tx.description}</p>
                <p className="text-sm text-gray-500">{tx.date}</p>
            </div>
            <p className={`font-bold ${isCredit ? 'text-green-600' : 'text-red-600'}`}>
                {tx.amount}
            </p>
        </Card>
    );
};

const TransactionsScreen: React.FC = () => {
    return (
        <div className="p-6">
            <ScreenTitle
                title="Transaction History"
                subtitle="Your recent transactions."
            />
            <div className="space-y-3">
                {transactions.map(tx => <TransactionItem key={tx.id} tx={tx} />)}
            </div>
        </div>
    );
};

export default TransactionsScreen;
