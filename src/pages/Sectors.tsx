import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaHome, FaGem, FaCar, FaLaptopCode, FaGavel, FaBoxOpen } from 'react-icons/fa';

const Sectors = () => {
  const sectors = [
    {
      id: 1,
      title: 'Real Estate',
      icon: <FaHome className="text-4xl text-primary-teal" />,
      description: 'Secure transactions for buying and selling property. We handle deposits, down payments, and full purchase amounts with ease and security.',
    },
    {
      id: 2,
      title: 'Luxury Goods',
      icon: <FaGem className="text-4xl text-primary-teal" />,
      description: 'Safely buy and sell high-value items like jewelry, watches, and art. Verify authenticity before releasing funds.',
    },
    {
      id: 3,
      title: 'Vehicles',
      icon: <FaCar className="text-4xl text-primary-teal" />,
      description: 'Trustworthy escrow for cars, boats, and motorcycles. Ensure the vehicle meets your expectations before payment is final.',
    },
    {
      id: 4,
      title: 'Digital Assets',
      icon: <FaLaptopCode className="text-4xl text-primary-teal" />,
      description: 'Secure transfers for domains, websites, and software code. Protect your intellectual property and payments.',
    },
    {
      id: 5,
      title: 'Legal Services',
      icon: <FaGavel className="text-4xl text-primary-teal" />,
      description: 'Escrow services for legal settlements and retainers. Neutral third-party handling of sensitive financial transactions.',
    },
    {
      id: 6,
      title: 'General Merchandise',
      icon: <FaBoxOpen className="text-4xl text-primary-teal" />,
      description: 'For any other high-value transactions. Electronics, machinery, and more, handled with the same level of security.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sectors We Serve | TessPay Escrow Services</title>
        <meta name="description" content="Explore the diverse sectors TessPay Escrow Services covers, including Real Estate, Luxury Goods, Vehicles, Digital Assets, and more." />
      </Helmet>

      <div className="bg-gray-50 min-h-screen py-12">
        <div className="container-custom">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Sectors We Serve
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Tailored escrow solutions for a wide range of industries, ensuring security and peace of mind for every transaction.
            </motion.p>
          </div>

          {/* Sectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center border border-gray-100"
              >
                <div className="bg-teal-50 p-4 rounded-full mb-6">
                  {sector.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{sector.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {sector.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sectors;
