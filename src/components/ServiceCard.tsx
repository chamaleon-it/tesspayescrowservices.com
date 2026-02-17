import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    link?: string;
}

const ServiceCard = ({ icon, title, description, link = '/services' }: ServiceCardProps) => {
    return (
        <div className="card group hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-3xl group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <h3 className="heading-sm text-gray-900">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
                <Link
                    to={link}
                    className="text-primary-blue font-semibold hover:text-primary-teal transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                    Learn More
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;
