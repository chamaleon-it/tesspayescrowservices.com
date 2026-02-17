import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import {
    FaHome,
    FaBriefcase,
    FaStore,
    FaCaravan,
    FaBuilding,
    FaExchangeAlt,
    FaFileContract,
    FaHandshake
} from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaHome />,
            title: 'Real Estate Escrow',
            description: 'Comprehensive escrow services for residential property transactions. We handle all aspects of the escrow process, ensuring a smooth closing for buyers and sellers.',
        },
        {
            icon: <FaBriefcase />,
            title: 'Business Escrow',
            description: 'Professional escrow solutions for business acquisitions, mergers, and asset transfers. We protect both parties throughout complex business transactions.',
        },
        {
            icon: <FaStore />,
            title: 'Bulk Sale Escrow',
            description: 'Specialized services for bulk sales and inventory transactions. We ensure compliance with all legal requirements and protect creditor interests.',
        },
        {
            icon: <FaCaravan />,
            title: 'Mobile Home Escrow',
            description: 'Expert handling of mobile home and manufactured housing transactions. We navigate the unique requirements of mobile home sales.',
        },
        {
            icon: <FaBuilding />,
            title: 'Commercial Escrow',
            description: 'Full-service escrow for commercial real estate transactions. From office buildings to retail spaces, we handle complex commercial deals.',
        },
        {
            icon: <FaExchangeAlt />,
            title: 'Exchange Escrow (1031)',
            description: 'Qualified intermediary services for tax-deferred 1031 exchanges. We ensure compliance with IRS regulations for successful exchanges.',
        },
        {
            icon: <FaFileContract />,
            title: 'Refinance Escrow',
            description: 'Streamlined escrow services for property refinancing. We make the refinance process quick and hassle-free.',
        },
        {
            icon: <FaHandshake />,
            title: 'For Sale By Owner (FSBO)',
            description: 'Support for private party sales without real estate agents. We provide guidance and security for FSBO transactions.',
        },
    ];

    const processSteps = [
        {
            title: 'Initial Contact',
            description: 'Reach out to us via phone, email, or our contact form. We\'ll discuss your escrow needs and answer any questions.',
        },
        {
            title: 'Open Escrow',
            description: 'We open your escrow account and provide you with all necessary instructions and documentation requirements.',
        },
        {
            title: 'Document Collection',
            description: 'Submit all required documents and information. Our team reviews everything for accuracy and completeness.',
        },
        {
            title: 'Title Search & Review',
            description: 'We conduct thorough title searches and review all documentation to ensure clear title and proper compliance.',
        },
        {
            title: 'Coordination',
            description: 'We coordinate with all parties involved, including lenders, agents, attorneys, and other stakeholders.',
        },
        {
            title: 'Final Review',
            description: 'All documents are reviewed one final time. We ensure all conditions are met before closing.',
        },
        {
            title: 'Closing',
            description: 'Funds are disbursed, documents are recorded, and your transaction is successfully completed.',
        },
        {
            title: 'Post-Closing',
            description: 'We provide you with all final documents and remain available for any post-closing questions or needs.',
        },
    ];

    return (
        <div>
            <Helmet>
                <title>Escrow Services | TessPay - Real Estate, Business & More</title>
                <meta name="description" content="Comprehensive escrow services including real estate, business, 1031 exchange, commercial, and bulk sale escrow. Professional, secure, and reliable solutions." />
                <meta name="keywords" content="real estate escrow, business escrow, 1031 exchange, commercial escrow, bulk sale escrow, refinance escrow, FSBO escrow" />
                <meta property="og:title" content="Escrow Services | TessPay" />
                <meta property="og:description" content="Comprehensive escrow services for all your transaction needs." />
                <meta property="og:url" content="https://tesspayescrowservices.com/services" />
                <link rel="canonical" href="https://tesspayescrowservices.com/services" />
            </Helmet>

            <Hero
                title="Comprehensive Escrow Services"
                subtitle="From real estate to business transactions, we provide secure, professional escrow solutions tailored to your needs."
                primaryButtonText="Get Started"
                primaryButtonLink="/contact"
                secondaryButtonText="Contact Us"
                secondaryButtonLink="/contact"
                showStats={false}
            />

            {/* Services Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Our Services</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Professional escrow solutions for every type of transaction
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} link="/contact" />
                        ))}
                    </div>
                </div>
            </section>

            {/* The Escrow Process */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">The Escrow Process</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A step-by-step guide to how we handle your escrow transaction
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, index) => (
                            <div key={index} className="card">
                                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="heading-sm mb-3 text-primary-blue">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's Included */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">What's Included</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Every escrow service includes these essential features
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Secure Fund Holding', description: 'Your funds are held in secure, insured accounts until all conditions are met.' },
                            { title: 'Document Management', description: 'Professional handling and review of all transaction documents.' },
                            { title: 'Title Search', description: 'Comprehensive title searches to ensure clear property ownership.' },
                            { title: 'Coordination Services', description: 'We coordinate with all parties to ensure smooth communication.' },
                            { title: 'Compliance Verification', description: 'Ensuring all legal and regulatory requirements are met.' },
                            { title: 'Disbursement Services', description: 'Accurate and timely distribution of funds to all parties.' },
                            { title: 'Recording Services', description: 'Proper recording of all necessary documents with county offices.' },
                            { title: 'Post-Closing Support', description: 'Continued assistance even after your transaction closes.' },
                            { title: 'Detailed Reporting', description: 'Clear, comprehensive reports throughout the escrow process.' },
                        ].map((item, index) => (
                            <div key={index} className="card">
                                <h3 className="heading-sm mb-3 text-primary-teal">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Information */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-8">
                        <h2 className="heading-lg mb-4">Transparent Pricing</h2>
                        <p className="text-lg text-gray-600">
                            We believe in fair, transparent pricing with no hidden fees
                        </p>
                    </div>
                    <div className="card">
                        <div className="space-y-4 text-gray-700">
                            <p className="leading-relaxed">
                                Our escrow fees are competitive and based on the transaction value and complexity.
                                We provide detailed fee quotes upfront, so you know exactly what to expect.
                            </p>
                            <p className="leading-relaxed">
                                Typical escrow fees include:
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Basic escrow fee (based on transaction amount)</li>
                                <li>Title search and examination</li>
                                <li>Document preparation and recording</li>
                                <li>Wire transfer fees (if applicable)</li>
                            </ul>
                            <p className="leading-relaxed font-semibold text-primary-blue">
                                Contact us today for a personalized quote for your specific transaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Ready to Start Your Escrow?"
                description="Contact us today to discuss your escrow needs and receive a personalized quote."
                buttonText="Request a Quote"
            />
        </div>
    );
};

export default Services;
