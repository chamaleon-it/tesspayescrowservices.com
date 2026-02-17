import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import { FaHome, FaBriefcase, FaExchangeAlt, FaShieldAlt, FaCheckCircle, FaClock } from 'react-icons/fa';

const Home = () => {
    const services = [
        {
            icon: <FaHome />,
            title: 'Real Estate Escrow',
            description: 'Secure and efficient escrow services for residential and commercial real estate transactions.',
        },
        {
            icon: <FaBriefcase />,
            title: 'Business Escrow',
            description: 'Professional escrow solutions for business acquisitions, mergers, and asset transfers.',
        },
        {
            icon: <FaExchangeAlt />,
            title: 'Exchange Escrow (1031)',
            description: 'Specialized services for tax-deferred 1031 exchanges with expert guidance.',
        },
        {
            icon: <FaShieldAlt />,
            title: 'Bulk Sale Escrow',
            description: 'Comprehensive escrow services for bulk sales and inventory transactions.',
        },
    ];

    const benefits = [
        {
            icon: <FaShieldAlt />,
            title: 'Secure Transactions',
            description: 'Your funds are protected with industry-leading security measures and compliance standards.',
        },
        {
            icon: <FaCheckCircle />,
            title: 'Expert Guidance',
            description: 'Our experienced team provides personalized support throughout the entire escrow process.',
        },
        {
            icon: <FaClock />,
            title: 'Fast Processing',
            description: 'Streamlined procedures ensure quick turnaround times without compromising accuracy.',
        },
    ];

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Real Estate Investor',
            content: 'TessPay made our property transaction incredibly smooth. Their attention to detail and professionalism is unmatched. Highly recommended!',
            rating: 5,
        },
        {
            name: 'Michael Chen',
            role: 'Business Owner',
            content: 'The team at TessPay handled our business acquisition with expertise and care. They made a complex process feel simple and secure.',
            rating: 5,
        },
        {
            name: 'Emily Rodriguez',
            role: 'First-Time Home Buyer',
            content: 'As a first-time buyer, I was nervous about the escrow process. TessPay guided me every step of the way with patience and clarity.',
            rating: 5,
        },
    ];

    return (
        <div>
            <Helmet>
                <title>TessPay Escrow Services | Trusted Escrow Solutions</title>
                <meta name="description" content="Professional escrow services for real estate, business transactions, and more. Secure, reliable, and transparent escrow solutions with 15+ years of experience." />
                <meta name="keywords" content="escrow services, real estate escrow, business escrow, 1031 exchange, escrow company, secure transactions" />
                <meta property="og:title" content="TessPay Escrow Services | Trusted Escrow Solutions" />
                <meta property="og:description" content="Professional escrow services for real estate, business transactions, and more. Secure, reliable, and transparent escrow solutions." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tesspayescrowservices.com" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="TessPay Escrow Services | Trusted Escrow Solutions" />
                <meta name="twitter:description" content="Professional escrow services for real estate, business transactions, and more." />
                <link rel="canonical" href="https://tesspayescrowservices.com" />
            </Helmet>

            <Hero
                title="Trusted Escrow Services for Your Peace of Mind"
                subtitle="Secure, professional, and reliable escrow solutions for real estate, business transactions, and more. Your trusted partner in protecting what matters most."
                primaryButtonText="Get Started"
                primaryButtonLink="/contact"
                secondaryButtonText="Our Services"
                secondaryButtonLink="/services"
            />

            {/* Services Overview */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Our Escrow Services</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Comprehensive escrow solutions tailored to your specific needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Why Choose TessPay?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Experience the difference of working with a trusted escrow partner
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="heading-sm mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">How It Works</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Simple, transparent process from start to finish
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {[
                            { step: '01', title: 'Open Escrow', description: 'Contact us to initiate your escrow account' },
                            { step: '02', title: 'Submit Documents', description: 'Provide necessary documentation and information' },
                            { step: '03', title: 'Review & Verify', description: 'We verify all details and ensure compliance' },
                            { step: '04', title: 'Close Escrow', description: 'Funds are securely transferred and escrow closes' },
                        ].map((item, index) => (
                            <div key={index} className="relative z-10">
                                <div className="text-6xl font-bold text-primary-teal opacity-10 mb-4">{item.step}</div>
                                <h3 className="heading-sm mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                        {/* Connecting line for desktop */}
                        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-primary opacity-20 -z-0" style={{ width: '85%', left: '7.5%' }}></div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">What Our Clients Say</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Don't just take our word for it - hear from our satisfied clients
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Ready to Get Started?"
                description="Contact us today to learn more about our escrow services and how we can help protect your transaction."
            />
        </div>
    );
};

export default Home;
