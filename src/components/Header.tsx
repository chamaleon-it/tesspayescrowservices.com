import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaEnvelope } from 'react-icons/fa';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            {/* Top Bar */}
            <div className="bg-primary-teal text-white py-2 px-4 hidden md:block">
                <div className="container-custom flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
                            <FaPhone className="text-xs" />
                            <span>(123) 456-7890</span>
                        </a>
                        <a href="mailto:info@tesspayescrowservices.com" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
                            <FaEnvelope className="text-xs" />
                            <span>info@tesspayescrowservices.com</span>
                        </a>
                    </div>
                    <div className="text-xs">
                        Trusted Escrow Services Since 2010
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                        ? 'bg-white shadow-lg backdrop-blur-sm bg-opacity-95'
                        : 'bg-white shadow-md'
                    }`}
            >
                <nav className="container-custom py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img
                                src="/Tesspay Escrow logo.png"
                                alt="TessPay Escrow Services"
                                className="h-12 md:h-16 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`font-medium transition-all duration-300 relative group ${isActive(link.path)
                                            ? 'text-primary-blue'
                                            : 'text-gray-700 hover:text-primary-teal'
                                        }`}
                                >
                                    {link.name}
                                    <span
                                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-blue transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                            }`}
                                    />
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                className="btn-primary text-sm"
                            >
                                Get Started
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden text-primary-teal text-2xl focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div
                        className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
                            }`}
                    >
                        <div className="flex flex-col gap-4 py-4 border-t border-gray-200">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`font-medium py-2 px-4 rounded-lg transition-colors ${isActive(link.path)
                                            ? 'bg-primary-blue text-white'
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn-primary text-center"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
