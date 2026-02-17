import { useState, FormEvent } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <FaUser />
                    </div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field pl-12"
                        placeholder="John Doe"
                    />
                </div>
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <FaEnvelope />
                    </div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field pl-12"
                        placeholder="john@example.com"
                    />
                </div>
            </div>

            {/* Phone */}
            <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <FaPhone />
                    </div>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field pl-12"
                        placeholder="(123) 456-7890"
                    />
                </div>
            </div>

            {/* Service Type */}
            <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input-field"
                >
                    <option value="">Select a service</option>
                    <option value="real-estate">Real Estate Escrow</option>
                    <option value="business">Business Escrow</option>
                    <option value="bulk-sale">Bulk Sale Escrow</option>
                    <option value="mobile-home">Mobile Home Escrow</option>
                    <option value="commercial">Commercial Escrow</option>
                    <option value="exchange">Exchange Escrow (1031)</option>
                    <option value="refinance">Refinance Escrow</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                </label>
                <div className="relative">
                    <div className="absolute top-4 left-0 pl-4 pointer-events-none text-gray-400">
                        <FaComment />
                    </div>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="input-field pl-12 resize-none"
                        placeholder="Tell us about your escrow needs..."
                    />
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Success Message */}
            {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg animate-fade-in">
                    <p className="font-semibold">Thank you for your message!</p>
                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg animate-fade-in">
                    <p className="font-semibold">Oops! Something went wrong.</p>
                    <p className="text-sm">Please try again or contact us directly.</p>
                </div>
            )}
        </form>
    );
};

export default ContactForm;
