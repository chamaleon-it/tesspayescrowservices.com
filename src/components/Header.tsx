import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
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
        {
            name: 'Sectors',
            path: '/sectors',
            children: [
                { name: 'Corporate', path: '/corporate' },
                { name: 'Real Estate', path: '/real-estate' },
                { name: 'Legal', path: '/legal' },
                { name: 'Construction', path: '/construction' },
                { name: 'Specialist Projects', path: '/specialist' }
            ]
        },
        { name: 'How does escrow work ?', path: '/how-it-works' },
        { name: 'Contact us', path: '/contact' },
    ];

    const isActive = (path: string) => location.pathname === path;

    const toggleMobileDropdown = (name: string) => {
        if (mobileDropdownOpen === name) {
            setMobileDropdownOpen(null);
        } else {
            setMobileDropdownOpen(name);
        }
    };

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
                                <div key={link.name} className="relative group">
                                    <Link
                                        to={link.path}
                                        className={`font-medium transition-all duration-300 flex items-center gap-1 ${isActive(link.path)
                                            ? 'text-primary-blue'
                                            : 'text-gray-700 hover:text-primary-teal'
                                            }`}
                                    >
                                        {link.name}
                                        {link.children && <FaChevronDown className="text-xs group-hover:rotate-180 transition-transform duration-300" />}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    {link.children && (
                                        <div className="absolute top-full left-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.path}
                                                        to={child.path}
                                                        className={`block px-4 py-3 text-sm hover:bg-gray-50 transition-colors ${isActive(child.path)
                                                            ? 'text-primary-blue bg-gray-50'
                                                            : 'text-gray-700 hover:text-primary-teal'
                                                            }`}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
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
                                <div key={link.name}>
                                    <div className="flex items-center justify-between">
                                        <Link
                                            to={link.path}
                                            onClick={() => !link.children && setIsMobileMenuOpen(false)}
                                            className={`font-medium py-2 px-4 rounded-lg transition-colors flex-grow ${isActive(link.path)
                                                ? 'bg-primary-blue text-white'
                                                : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.children && (
                                            <button
                                                onClick={() => toggleMobileDropdown(link.name)}
                                                className="p-3 text-gray-500 hover:text-primary-teal focus:outline-none"
                                            >
                                                <FaChevronDown className={`transition-transform duration-300 ${mobileDropdownOpen === link.name ? 'rotate-180' : ''}`} />
                                            </button>
                                        )}
                                    </div>

                                    {/* Mobile Dropdown */}
                                    {link.children && (
                                        <div className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen === link.name ? 'max-h-40' : 'max-h-0'}`}>
                                            <div className="pl-8 pr-4 py-2 space-y-2 bg-gray-50 rounded-lg mt-1 mx-4">
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.path}
                                                        to={child.path}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className={`block py-2 text-sm ${isActive(child.path)
                                                            ? 'text-primary-blue font-medium'
                                                            : 'text-gray-600 hover:text-primary-teal'
                                                            }`}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn-primary text-center mx-4"
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

