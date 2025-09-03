import React from 'react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import ScreenTitle from '../components/common/ScreenTitle';

const LoanApplicationScreen: React.FC = () => {
    return (
        <div className="p-6">
            <ScreenTitle 
                title="Loan Application"
                subtitle="Please fill in the details below to apply for a loan."
            />
            <form className="space-y-6">
                <div>
                    <label htmlFor="loan-type" className="block text-sm font-medium text-gray-700 mb-1">
                        Loan Type
                    </label>
                    <select
                        id="loan-type"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option>Personal Loan</option>
                        <option>Home Loan</option>
                        <option>Car Loan</option>
                        <option>Education Loan</option>
                    </select>
                </div>

                <Input
                    label="Loan Amount (₹)"
                    id="loan-amount"
                    type="number"
                    placeholder="e.g., 500000"
                />

                <Input
                    label="Tenure (Months)"
                    id="tenure"
                    type="number"
                    placeholder="e.g., 24"
                />

                <div className="pt-4">
                     <Button type="submit">Proceed to KYC</Button>
                </div>
            </form>
        </div>
    );
};

export default LoanApplicationScreen;
