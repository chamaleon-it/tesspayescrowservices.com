import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200 text-left"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-gray-900 pr-4">{question}</span>
                <span className="text-primary-blue flex-shrink-0">
                    {isOpen ? <FaMinus /> : <FaPlus />}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
            >
                <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed border-t border-gray-200">
                    {answer}
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
