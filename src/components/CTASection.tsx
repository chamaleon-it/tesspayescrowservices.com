import { Link } from 'react-router-dom';

interface CTASectionProps {
    title: string;
    description: string;
    buttonText?: string;
    buttonLink?: string;
}

const CTASection = ({
    title,
    description,
    buttonText = 'Get Started Today',
    buttonLink = '/contact',
}: CTASectionProps) => {
    return (
        <section className="bg-gradient-primary text-white section-padding">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="heading-lg mb-6 text-balance">{title}</h2>
                    <p className="text-lg md:text-xl text-gray-100 mb-8 text-balance">
                        {description}
                    </p>
                    <Link to={buttonLink} className="btn-outline inline-block">
                        {buttonText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
