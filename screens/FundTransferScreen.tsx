import React from 'react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import ScreenTitle from '../components/common/ScreenTitle';

const FundTransferScreen: React.FC = () => {
    return (
        <div className="p-6">
            <ScreenTitle
                title="Fund Transfer"
                subtitle="Send money securely and instantly."
            />
            <form className="space-y-6">
                 <div>
                    <label htmlFor="transfer-type" className="block text-sm font-medium text-gray-700 mb-1">
                        Transfer Type
                    </label>
                    <select
                        id="transfer-type"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                        <option>IMPS (Instant)</option>
                        <option>NEFT</option>
                        <option>RTGS</option>
                    </select>
                </div>
                <Input label="Beneficiary Account Number" id="acc-number" placeholder="Enter Account Number" />
                <Input label="Confirm Account Number" id="confirm-acc-number" placeholder="Re-enter Account Number" />
                <Input label="IFSC Code" id="ifsc" placeholder="Enter IFSC Code" />
                <Input label="Beneficiary Name" id="name" placeholder="Enter Beneficiary Name" />
                <Input label="Amount (₹)" id="amount" type="number" placeholder="Enter Amount" />
                
                <div className="pt-4">
                    <Button type="submit">Transfer Now</Button>
                </div>
            </form>
        </div>
    );
};

export default FundTransferScreen;
