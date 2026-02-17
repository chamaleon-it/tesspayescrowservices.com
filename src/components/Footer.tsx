import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        'Real Estate Escrow',
        'Business Escrow',
        'Bulk Sale Escrow',
        'Mobile Home Escrow',
        'Commercial Escrow',
        'Exchange Escrow (1031)',
    ];

    return (
        <footer className="bg-gradient-primary text-white">
            {/* Main Footer Content */}
            <div className="container-custom section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <img
                            src="/Tesspay Escrow logo.png"
                            alt="TessPay Escrow Services"
                            className="h-14 w-auto brightness-0 invert"
                        />
                        <p className="text-gray-100 text-sm leading-relaxed">
                            Your trusted partner in secure escrow services. We provide professional, reliable, and transparent escrow solutions for all your transaction needs.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-accent-gold transition-colors duration-300"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-accent-gold transition-colors duration-300"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-accent-gold transition-colors duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-accent-gold transition-colors duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-100 hover:text-accent-gold transition-colors duration-300 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link
                                        to="/services"
                                        className="text-gray-100 hover:text-accent-gold transition-colors duration-300 text-sm"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-sm">
                                <FaMapMarkerAlt className="text-accent-gold mt-1 flex-shrink-0" />
                                <span className="text-gray-100">
                                    123 Escrow Street<br />
                                    Los Angeles, CA 90001
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <FaPhone className="text-accent-gold flex-shrink-0" />
                                <a href="tel:+1234567890" className="text-gray-100 hover:text-accent-gold transition-colors">
                                    (123) 456-7890
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-sm">
                                <FaEnvelope className="text-accent-gold flex-shrink-0" />
                                <a href="mailto:info@tesspayescrowservices.com" className="text-gray-100 hover:text-accent-gold transition-colors break-all">
                                    info@tesspayescrowservices.com
                                </a>
                            </li>
                        </ul>
                        <div className="mt-4 text-sm text-gray-100">
                            <p className="font-semibold">Business Hours:</p>
                            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                            <p>Sat: 10:00 AM - 4:00 PM</p>
                            <p>Sun: Closed</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white border-opacity-20">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-100">
                        <p>
                            © {currentYear} TessPay Escrow Services. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <Link to="/privacy-policy" className="hover:text-accent-gold transition-colors">
                                Privacy Policy
                            </Link>
                            <Link to="/terms-conditions" className="hover:text-accent-gold transition-colors">
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
