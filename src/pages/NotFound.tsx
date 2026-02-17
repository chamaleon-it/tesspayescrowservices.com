import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div>
            <Helmet>
                <title>404 - Page Not Found | TessPay Escrow Services</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <div className="min-h-screen flex items-center justify-center bg-gradient-light px-4">
                <div className="text-center max-w-2xl">
                    <div className="mb-8">
                        <FaExclamationTriangle className="text-8xl text-primary-teal mx-auto mb-6 animate-bounce" />
                        <h1 className="text-9xl font-bold text-primary-teal mb-4">404</h1>
                        <h2 className="heading-lg mb-4">Page Not Found</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/" className="btn-primary inline-flex items-center justify-center gap-2">
                            <FaHome />
                            Back to Home
                        </Link>
                        <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
                            Contact Support
                        </Link>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-300">
                        <p className="text-gray-600 mb-4">Looking for something specific?</p>
                        <div className="flex flex-wrap gap-4 justify-center text-sm">
                            <Link to="/services" className="text-primary-blue hover:underline">Our Services</Link>
                            <Link to="/about" className="text-primary-blue hover:underline">About Us</Link>
                            <Link to="/faq" className="text-primary-blue hover:underline">FAQ</Link>
                            <Link to="/contact" className="text-primary-blue hover:underline">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
