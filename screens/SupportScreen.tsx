import React from 'react';
import Card from '../components/common/Card';
import ScreenTitle from '../components/common/ScreenTitle';
import { ChatBubbleLeftRightIcon } from '../components/icons/HeroIcons';

const SupportScreen: React.FC = () => {
    return (
        <div className="p-6">
            <ScreenTitle
                title="Customer Support"
                subtitle="We're here to help you."
            />
            <div className="space-y-6">
                <Card className="text-center">
                    <ChatBubbleLeftRightIcon className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold text-lg">Chat with us</h3>
                    <p className="text-sm text-gray-500 mb-3">Get instant answers from our support team.</p>
                    <button className="font-semibold text-blue-600">Start Chat</button>
                </Card>

                <Card>
                    <h3 className="font-bold mb-2">Contact Us</h3>
                    <p className="text-gray-700"><strong>Email:</strong> support@mirafinserv.com</p>
                    <p className="text-gray-700"><strong>Phone:</strong> 1800-123-4567</p>
                </Card>

                <Card>
                    <h3 className="font-bold mb-2">Frequently Asked Questions</h3>
                    <ul className="list-disc list-inside text-blue-600 space-y-1">
                        <li><a href="#" className="hover:underline">How to apply for a loan?</a></li>
                        <li><a href="#" className="hover:underline">What are the interest rates?</a></li>
                        <li><a href="#" className="hover:underline">How to reset my PIN?</a></li>
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default SupportScreen;
