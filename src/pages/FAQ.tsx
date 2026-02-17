import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import FAQItem from '../components/FAQItem';
import CTASection from '../components/CTASection';

const FAQ = () => {
    const faqCategories = [
        {
            category: 'General Escrow Questions',
            questions: [
                {
                    question: 'What is escrow?',
                    answer: 'Escrow is a financial arrangement where a neutral third party (the escrow company) holds and regulates payment of funds and documents required for a transaction. The escrow company releases the funds only when all terms of the agreement are met, protecting both the buyer and seller.',
                },
                {
                    question: 'Why do I need an escrow service?',
                    answer: 'Escrow services provide security and peace of mind for both parties in a transaction. They ensure that funds are only released when all conditions are met, protect against fraud, verify documentation, and provide a neutral party to handle the complex details of closing a transaction.',
                },
                {
                    question: 'Who pays for escrow services?',
                    answer: 'The payment of escrow fees is typically negotiable between the buyer and seller. In some regions, it\'s customary for the buyer to pay, while in others, the seller pays or the cost is split. The specific arrangement should be outlined in your purchase agreement.',
                },
                {
                    question: 'How long does the escrow process take?',
                    answer: 'The typical escrow period ranges from 30 to 60 days, depending on the type of transaction and complexity. Simple transactions may close faster, while complex commercial deals or those requiring extensive documentation may take longer. We work efficiently to close your escrow as quickly as possible while ensuring accuracy.',
                },
            ],
        },
        {
            category: 'Process & Timeline',
            questions: [
                {
                    question: 'What happens after escrow is opened?',
                    answer: 'Once escrow is opened, we provide you with detailed instructions and a list of required documents. We then coordinate with all parties, conduct title searches, review documents, and ensure all conditions are met. Throughout the process, we keep you informed of progress and any requirements.',
                },
                {
                    question: 'What documents do I need to provide?',
                    answer: 'Required documents vary by transaction type but typically include: purchase agreement, identification, proof of funds or loan approval, property disclosures, and any relevant contracts. We provide a comprehensive checklist specific to your transaction when escrow is opened.',
                },
                {
                    question: 'Can escrow be extended if needed?',
                    answer: 'Yes, escrow can be extended if both parties agree. Extensions may be necessary due to financing delays, inspection issues, or other unforeseen circumstances. Any extension must be agreed upon in writing by all parties involved.',
                },
                {
                    question: 'What happens if the deal falls through?',
                    answer: 'If a transaction doesn\'t close, the escrow is cancelled according to the terms of the purchase agreement. Earnest money deposits are handled according to the contract terms and any applicable laws. We ensure all parties receive proper documentation of the cancellation.',
                },
            ],
        },
        {
            category: 'Fees & Costs',
            questions: [
                {
                    question: 'How are escrow fees calculated?',
                    answer: 'Escrow fees are typically based on the transaction amount and complexity. Our fees include the basic escrow service, document preparation, notary services, and recording fees. We provide a detailed breakdown of all costs upfront with no hidden fees.',
                },
                {
                    question: 'Are there any additional fees I should expect?',
                    answer: 'Additional fees may include title insurance, recording fees, wire transfer fees, and any special services requested. We provide a complete estimate of all anticipated costs at the beginning of the escrow process so there are no surprises.',
                },
                {
                    question: 'When do I pay the escrow fees?',
                    answer: 'Escrow fees are typically paid at closing and are deducted from the proceeds of the transaction. The specific payment arrangement is outlined in your escrow instructions and closing documents.',
                },
            ],
        },
        {
            category: 'Security & Protection',
            questions: [
                {
                    question: 'How are my funds protected?',
                    answer: 'All escrow funds are held in separate, insured trust accounts and are never commingled with company operating funds. We maintain strict accounting procedures and are fully licensed and bonded. Your funds are protected by industry regulations and our comprehensive insurance coverage.',
                },
                {
                    question: 'Is my personal information secure?',
                    answer: 'Yes, we take data security very seriously. We use industry-standard encryption, secure document transfer systems, and strict privacy protocols. All personal information is handled in compliance with privacy laws and regulations.',
                },
                {
                    question: 'What if there\'s a dispute during escrow?',
                    answer: 'As a neutral third party, we follow the instructions outlined in the escrow agreement. If a dispute arises, we hold the funds and documents until the parties reach an agreement or until we receive instructions from a court. We cannot take sides or make decisions on behalf of either party.',
                },
                {
                    question: 'Are you licensed and insured?',
                    answer: 'Yes, TessPay Escrow Services is fully licensed, bonded, and insured. We maintain all required licenses and carry comprehensive errors and omissions insurance, as well as fidelity bond coverage to protect our clients.',
                },
            ],
        },
    ];

    return (
        <div>
            <Helmet>
                <title>FAQ | TessPay Escrow Services - Common Questions Answered</title>
                <meta name="description" content="Find answers to frequently asked questions about escrow services, process, fees, security, and more. Get expert answers from TessPay Escrow Services." />
                <meta name="keywords" content="escrow FAQ, escrow questions, escrow process, escrow fees, escrow security, how escrow works" />
                <meta property="og:title" content="FAQ | TessPay Escrow Services" />
                <meta property="og:description" content="Find answers to frequently asked questions about escrow services." />
                <meta property="og:url" content="https://tesspayescrowservices.com/faq" />
                <link rel="canonical" href="https://tesspayescrowservices.com/faq" />
            </Helmet>

            <Hero
                title="Frequently Asked Questions"
                subtitle="Find answers to common questions about our escrow services, process, and policies."
                primaryButtonText="Contact Us"
                primaryButtonLink="/contact"
                showStats={false}
            />

            {/* FAQ Sections */}
            <section className="section-padding">
                <div className="container-custom max-w-4xl">
                    <div className="space-y-12">
                        {faqCategories.map((category, categoryIndex) => (
                            <div key={categoryIndex}>
                                <h2 className="heading-md mb-6 text-primary-blue">{category.category}</h2>
                                <div className="space-y-4">
                                    {category.questions.map((faq, faqIndex) => (
                                        <FAQItem key={faqIndex} {...faq} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom max-w-3xl text-center">
                    <h2 className="heading-lg mb-4">Still Have Questions?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Our team is here to help. Contact us today and we'll be happy to answer any questions you may have about our escrow services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="btn-primary">
                            Contact Us
                        </a>
                        <a href="tel:+1234567890" className="btn-secondary">
                            Call (123) 456-7890
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Ready to Get Started?"
                description="Let us handle your escrow needs with professionalism and care."
                buttonText="Open Escrow"
            />
        </div>
    );
};

export default FAQ;
