import { Link } from 'react-router-dom';

interface HeroProps {
    title: string;
    subtitle: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
    showStats?: boolean;
    backgroundImage?: string;
}

const Hero = ({
    title,
    subtitle,
    primaryButtonText = 'Get Started',
    primaryButtonLink = '/contact',
    secondaryButtonText,
    secondaryButtonLink,
    showStats = true,
    backgroundImage,
}: HeroProps) => {
    const stats = [
        { value: '15+', label: 'Years Experience' },
        { value: '10K+', label: 'Transactions' },
        { value: '$2B+', label: 'Secured' },
        { value: '99.9%', label: 'Success Rate' },
    ];

    return (
        <section
            className="relative bg-gradient-primary text-white overflow-hidden"
            style={
                backgroundImage
                    ? {
                        backgroundImage: `linear-gradient(135deg, rgba(27, 94, 82, 0.95) 0%, rgba(44, 95, 141, 0.95) 100%), url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }
                    : undefined
            }
        >
            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom section-padding relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="heading-xl mb-6 animate-fade-in text-balance">
                        {title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 mb-8 animate-slide-up max-w-2xl mx-auto text-balance">
                        {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-200">
                        <Link to={primaryButtonLink} className="btn-primary">
                            {primaryButtonText}
                        </Link>
                        {secondaryButtonText && secondaryButtonLink && (
                            <Link to={secondaryButtonLink} className="btn-outline">
                                {secondaryButtonText}
                            </Link>
                        )}
                    </div>

                    {/* Stats */}
                    {showStats && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 animate-fade-in animation-delay-400">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm md:text-base text-gray-200">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
