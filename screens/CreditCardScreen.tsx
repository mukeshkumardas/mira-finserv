import React from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import ScreenTitle from '../components/common/ScreenTitle';

const cards = [
    {
        name: 'Mira Platinum Card',
        bg: 'bg-gray-800',
        features: ['5x Rewards on Dining', 'Airport Lounge Access', 'Zero Forex Markup'],
    },
    {
        name: 'Mira Cashback Card',
        bg: 'bg-blue-600',
        features: ['5% Cashback on Bills', '1% on all other spends', 'No Joining Fee'],
    },
    {
        name: 'Mira Fuel Card',
        bg: 'bg-red-600',
        features: ['Fuel Surcharge Waiver', 'Bonus points at IOCL pumps', 'Redeem points for fuel'],
    },
];

const CreditCardScreen: React.FC = () => {
    return (
        <div className="p-6">
            <ScreenTitle
                title="Apply for Credit Card"
                subtitle="Choose the card that best suits your lifestyle."
            />
            <div className="space-y-6">
                {cards.map((card) => (
                    <Card key={card.name} className="space-y-4">
                        <div className={`h-40 rounded-lg p-4 flex flex-col justify-end text-white ${card.bg}`}>
                           <h3 className="text-xl font-bold">{card.name}</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
                            {card.features.map(f => <li key={f}>{f}</li>)}
                        </ul>
                        <Button variant="secondary">Apply Now</Button>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CreditCardScreen;
