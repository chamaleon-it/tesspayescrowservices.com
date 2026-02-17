import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFax } from 'react-icons/fa';

const Contact = () => {
    const contactInfo = [
        {
            icon: <FaPhone />,
            title: 'Phone',
            details: ['Main: (123) 456-7890', 'Toll-Free: (800) 123-4567'],
            link: 'tel:+1234567890',
        },
        {
            icon: <FaEnvelope />,
            title: 'Email',
            details: ['info@tesspayescrowservices.com', 'support@tesspayescrowservices.com'],
            link: 'mailto:info@tesspayescrowservices.com',
        },
        {
            icon: <FaMapMarkerAlt />,
            title: 'Address',
            details: ['123 Escrow Street', 'Los Angeles, CA 90001'],
            link: 'https://maps.google.com',
        },
        {
            icon: <FaFax />,
            title: 'Fax',
            details: ['(123) 456-7891'],
            link: null,
        },
    ];

    return (
        <div>
            <Helmet>
                <title>Contact Us | TessPay Escrow Services - Get in Touch</title>
                <meta name="description" content="Contact TessPay Escrow Services for professional escrow solutions. Call (123) 456-7890 or visit our office in Los Angeles. We're here to help!" />
                <meta name="keywords" content="contact escrow company, escrow services contact, tesspay contact, escrow consultation, get quote" />
                <meta property="og:title" content="Contact Us | TessPay Escrow Services" />
                <meta property="og:description" content="Contact TessPay Escrow Services for professional escrow solutions." />
                <meta property="og:url" content="https://tesspayescrowservices.com/contact" />
                <link rel="canonical" href="https://tesspayescrowservices.com/contact" />
            </Helmet>

            <Hero
                title="Get in Touch"
                subtitle="Have questions about our escrow services? We're here to help. Contact us today and let's discuss how we can assist with your transaction."
                primaryButtonText="Call Us Now"
                primaryButtonLink="tel:+1234567890"
                showStats={false}
            />

            {/* Contact Information Cards */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="card text-center">
                                <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                                    {info.icon}
                                </div>
                                <h3 className="font-semibold text-lg mb-3 text-gray-900">{info.title}</h3>
                                <div className="space-y-1">
                                    {info.details.map((detail, idx) => (
                                        <p key={idx} className="text-gray-600 text-sm">
                                            {info.link && idx === 0 ? (
                                                <a
                                                    href={info.link}
                                                    target={info.link.startsWith('http') ? '_blank' : undefined}
                                                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                    className="hover:text-primary-blue transition-colors"
                                                >
                                                    {detail}
                                                </a>
                                            ) : (
                                                detail
                                            )}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Office Info */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <h2 className="heading-md mb-6">Send Us a Message</h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we'll get back to you within 24 hours.
                            </p>
                            <ContactForm />
                        </div>

                        {/* Office Information */}
                        <div>
                            <h2 className="heading-md mb-6">Office Information</h2>

                            {/* Business Hours */}
                            <div className="card mb-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                                        <FaClock />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-3">Business Hours</h3>
                                        <div className="space-y-2 text-gray-700">
                                            <div className="flex justify-between gap-4">
                                                <span className="font-medium">Monday - Friday:</span>
                                                <span>9:00 AM - 6:00 PM</span>
                                            </div>
                                            <div className="flex justify-between gap-4">
                                                <span className="font-medium">Saturday:</span>
                                                <span>10:00 AM - 4:00 PM</span>
                                            </div>
                                            <div className="flex justify-between gap-4">
                                                <span className="font-medium">Sunday:</span>
                                                <span>Closed</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="card">
                                <h3 className="font-semibold text-lg mb-4">Our Location</h3>
                                <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                                    <a
                                        href="https://maps.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-blue hover:text-primary-teal font-semibold flex items-center gap-2"
                                    >
                                        <FaMapMarkerAlt />
                                        View on Google Maps
                                    </a>
                                </div>
                                <div className="mt-4 text-gray-700">
                                    <p className="font-medium">TessPay Escrow Services</p>
                                    <p>123 Escrow Street</p>
                                    <p>Los Angeles, CA 90001</p>
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <div className="card mt-6 bg-primary-teal text-white">
                                <h3 className="font-semibold text-lg mb-2">Emergency Contact</h3>
                                <p className="text-gray-100 mb-3 text-sm">
                                    For urgent matters outside business hours:
                                </p>
                                <a
                                    href="tel:+1234567899"
                                    className="text-accent-gold font-semibold text-lg hover:underline"
                                >
                                    (123) 456-7899
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Additional Contact Methods */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-8">
                        <h2 className="heading-lg mb-4">Other Ways to Reach Us</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="card text-center">
                            <h3 className="font-semibold text-lg mb-3 text-primary-blue">Schedule a Consultation</h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                Book a free consultation to discuss your escrow needs.
                            </p>
                            <a href="/contact" className="text-primary-teal font-semibold hover:underline">
                                Schedule Now →
                            </a>
                        </div>
                        <div className="card text-center">
                            <h3 className="font-semibold text-lg mb-3 text-primary-blue">Live Chat</h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                Chat with our team in real-time during business hours.
                            </p>
                            <button className="text-primary-teal font-semibold hover:underline">
                                Start Chat →
                            </button>
                        </div>
                        <div className="card text-center">
                            <h3 className="font-semibold text-lg mb-3 text-primary-blue">Request a Quote</h3>
                            <p className="text-gray-600 mb-4 text-sm">
                                Get a personalized quote for your escrow transaction.
                            </p>
                            <a href="/contact" className="text-primary-teal font-semibold hover:underline">
                                Get Quote →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
