import { FaStar } from 'react-icons/fa';

interface TestimonialCardProps {
    name: string;
    role: string;
    content: string;
    rating?: number;
    image?: string;
}

const TestimonialCard = ({ name, role, content, rating = 5, image }: TestimonialCardProps) => {
    return (
        <div className="card h-full flex flex-col">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        className={index < rating ? 'text-accent-gold' : 'text-gray-300'}
                    />
                ))}
            </div>

            {/* Quote */}
            <blockquote className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                "{content}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-semibold">
                        {name.charAt(0)}
                    </div>
                )}
                <div>
                    <div className="font-semibold text-gray-900">{name}</div>
                    <div className="text-sm text-gray-600">{role}</div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
