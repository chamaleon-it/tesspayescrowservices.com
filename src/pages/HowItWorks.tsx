import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaHandshake, FaMoneyBillWave, FaTruck, FaSearch, FaCheckCircle } from 'react-icons/fa';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: 'Buyer and Seller Agree to Terms',
            icon: <FaHandshake className="text-3xl text-white" />,
            description: 'Both parties agree to the terms of the transaction, including price, shipping, and inspection period.',
            color: 'bg-blue-500',
        },
        {
            id: 2,
            title: 'Buyer Pays TessPay',
            icon: <FaMoneyBillWave className="text-3xl text-white" />,
            description: 'The buyer submits payment to our secure escrow account. We verify the payment and notify the seller.',
            color: 'bg-teal-500',
        },
        {
            id: 3,
            title: 'Seller Ships Merchandise',
            icon: <FaTruck className="text-3xl text-white" />,
            description: 'Upon payment verification, the seller is authorized to ship the merchandise and submit tracking information.',
            color: 'bg-indigo-500',
        },
        {
            id: 4,
            title: 'Buyer Inspects Merchandise',
            icon: <FaSearch className="text-3xl text-white" />,
            description: 'The buyer has a set number of days to inspect the merchandise and accept or reject it.',
            color: 'bg-purple-500',
        },
        {
            id: 5,
            title: 'TessPay Releases Funds',
            icon: <FaCheckCircle className="text-3xl text-white" />,
            description: 'Once the buyer accepts the merchandise, we release the funds to the seller. The transaction is complete!',
            color: 'bg-green-500',
        },
    ];

    return (
        <>
            <Helmet>
                <title>How Verification Escrow Works | TessPay Escrow Services</title>
                <meta name="description" content="Learn step-by-step how TessPay Escrow Services protects both buyers and sellers with our secure 5-step process." />
            </Helmet>

            <div className="bg-white min-h-screen py-16">
                <div className="container-custom">

                    {/* Header */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        >
                            How Does Escrow Work?
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-xl text-gray-600"
                        >
                            Our simple 5-step process ensures that you never have to worry about fraud or misrepresentation.
                        </motion.p>
                    </div>

                    {/* Steps Grid - Flexible Layout for Better Spacing */}
                    <div className="relative max-w-7xl mx-auto px-4">

                        <div className="flex flex-wrap justify-center gap-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative flex flex-col items-center text-center group w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-sm"
                                >
                                    {/* Step Number Circle */}
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg z-10 transition-transform duration-300 transform group-hover:scale-110 ${step.color} text-white`}>
                                        {step.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="bg-gray-50 p-8 rounded-xl w-full h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                                        <span className={`self-center inline-block px-4 py-1.5 text-xs font-bold text-white rounded-full mb-4 ${step.color}`}>
                                            Step {step.id}
                                        </span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed flex-grow">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-24 text-center bg-primary-teal text-white rounded-2xl p-12 shadow-2xl mx-auto max-w-5xl"
                    >
                        <h2 className="text-3xl font-bold mb-6">Ready to Start a Transaction?</h2>
                        <p className="text-lg mb-8 max-w-2xl mx-auto text-teal-100">
                            Join thousands of satisfied customers who trust TessPay for their secure transactions.
                        </p>
                        <a href="/contact" className="inline-block bg-white text-primary-teal font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 transform hover:-translate-y-1">
                            Start Escrow Now
                        </a>
                    </motion.div>

                </div>
            </div>
        </>
    );
};

export default HowItWorks;
