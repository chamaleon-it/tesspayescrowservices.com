import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import CTASection from '../components/CTASection';
import { FaAward, FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa';

const About = () => {
    const values = [
        {
            icon: <FaHandshake />,
            title: 'Integrity',
            description: 'We operate with the highest ethical standards, ensuring transparency and honesty in every transaction.',
        },
        {
            icon: <FaAward />,
            title: 'Excellence',
            description: 'We strive for excellence in everything we do, delivering superior service and results.',
        },
        {
            icon: <FaUsers />,
            title: 'Client-Focused',
            description: 'Your success is our priority. We tailor our services to meet your unique needs.',
        },
        {
            icon: <FaChartLine />,
            title: 'Innovation',
            description: 'We embrace technology and innovation to provide efficient, modern escrow solutions.',
        },
    ];

    const milestones = [
        { year: '2010', event: 'TessPay Escrow Services founded' },
        { year: '2013', event: 'Reached 1,000 successful transactions' },
        { year: '2016', event: 'Expanded to commercial escrow services' },
        { year: '2019', event: 'Achieved $1 billion in secured transactions' },
        { year: '2022', event: 'Launched digital escrow platform' },
        { year: '2024', event: 'Celebrating 10,000+ satisfied clients' },
    ];

    return (
        <div>
            <Helmet>
                <title>About Us | TessPay Escrow Services</title>
                <meta name="description" content="Learn about TessPay Escrow Services - your trusted partner since 2010. We provide professional, secure escrow solutions with integrity and expertise." />
                <meta name="keywords" content="about tesspay, escrow company history, professional escrow services, trusted escrow partner" />
                <meta property="og:title" content="About Us | TessPay Escrow Services" />
                <meta property="og:description" content="Learn about TessPay Escrow Services - your trusted partner since 2010." />
                <meta property="og:url" content="https://tesspayescrowservices.com/about" />
                <link rel="canonical" href="https://tesspayescrowservices.com/about" />
            </Helmet>

            <Hero
                title="About TessPay Escrow Services"
                subtitle="Your trusted partner in secure escrow solutions since 2010. We're committed to protecting your transactions with professionalism, integrity, and expertise."
                primaryButtonText="Contact Us"
                primaryButtonLink="/contact"
                secondaryButtonText="Our Services"
                secondaryButtonLink="/services"
                showStats={false}
            />

            {/* Our Story */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="heading-lg mb-6">Our Story</h2>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    Founded in 2010, TessPay Escrow Services was born from a simple vision: to provide transparent,
                                    secure, and client-focused escrow services that people can trust. What started as a small team
                                    of dedicated professionals has grown into one of the region's most respected escrow companies.
                                </p>
                                <p>
                                    Over the years, we've facilitated thousands of successful transactions, from residential real
                                    estate deals to complex commercial acquisitions. Our commitment to excellence and innovation
                                    has earned us the trust of clients, real estate professionals, and business owners alike.
                                </p>
                                <p>
                                    Today, we continue to uphold the values that founded our company while embracing modern
                                    technology to serve our clients better. Every transaction we handle receives the same level
                                    of attention, care, and expertise that has become our hallmark.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                            <p className="text-lg leading-relaxed mb-6">
                                To provide secure, efficient, and transparent escrow services that protect our clients'
                                interests and facilitate successful transactions with integrity and professionalism.
                            </p>
                            <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                            <p className="text-lg leading-relaxed">
                                To be the most trusted and innovative escrow service provider, setting the standard for
                                excellence in the industry while maintaining our commitment to personalized service.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Our Core Values</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div key={index} className="card text-center">
                                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="heading-sm mb-3">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Our Journey</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Key milestones in our company's history
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {milestones.map((milestone, index) => (
                                <div key={index} className="flex gap-6 items-start">
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg">
                                            {milestone.year}
                                        </div>
                                    </div>
                                    <div className="flex-grow pt-5">
                                        <div className="card">
                                            <p className="text-gray-700 font-medium">{milestone.event}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="heading-lg mb-4">Why Choose TessPay?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Licensed & Insured', description: 'Fully licensed and insured for your protection and peace of mind.' },
                            { title: 'Experienced Team', description: 'Our team brings decades of combined experience in escrow services.' },
                            { title: 'Technology-Driven', description: 'Modern digital tools for efficient, secure transactions.' },
                            { title: 'Personalized Service', description: 'Dedicated support tailored to your specific needs.' },
                            { title: 'Competitive Rates', description: 'Fair, transparent pricing with no hidden fees.' },
                            { title: 'Fast Turnaround', description: 'Efficient processing without compromising accuracy.' },
                        ].map((item, index) => (
                            <div key={index} className="card">
                                <h3 className="heading-sm mb-3 text-primary-blue">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                title="Let's Work Together"
                description="Experience the TessPay difference. Contact us today to discuss your escrow needs."
                buttonText="Get in Touch"
            />
        </div>
    );
};

export default About;
