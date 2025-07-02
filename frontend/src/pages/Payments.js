import React from 'react';
import { motion } from 'framer-motion';
import { CreditCardIcon, EnvelopeIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline';

const Payments = () => {
  const paymentOptions = [
    {
      name: "Band Dues",
      description: "General band dues for the 2025 Marching Hawks season including uniforms, equipment, and basic expenses.",
      link: "https://my.cheddarup.com/c/2025marchinghawks/items",
      color: "from-primary-500 to-primary-600",
      icon: CreditCardIcon
    },
    {
      name: "Band Performance Essentials",
      description: "Essential items needed for band performances including accessories, music, and performance materials.",
      link: "https://my.cheddarup.com/c/2025bandessentials/items",
      color: "from-blue-500 to-blue-600",
      icon: ShieldCheckIcon
    },
    {
      name: "Color Guard Performance Essentials",
      description: "Specialized equipment and materials required for Color Guard performances and practices.",
      link: "https://my.cheddarup.com/c/2025guardessentials/items",
      color: "from-purple-500 to-purple-600",
      icon: ClockIcon
    }
  ];

  const paymentInfo = [
    {
      title: "Secure Online Payments",
      description: "All payments are processed securely through CheddarUp, ensuring your financial information is protected.",
      icon: ShieldCheckIcon
    },
    {
      title: "Multiple Payment Methods",
      description: "We accept credit cards, debit cards, and bank transfers for your convenience.",
      icon: CreditCardIcon
    },
    {
      title: "Payment Plans Available",
      description: "Many items offer payment plan options to help spread costs throughout the year.",
      icon: ClockIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Band Payments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Secure online payment options for band dues, performance essentials, and Color Guard equipment
          </motion.p>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Payment Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our available payment categories to complete your band-related payments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className={`p-6 bg-gradient-to-r ${option.color}`}>
                  <div className="flex items-center justify-center mb-4">
                    <option.icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center">
                    {option.name}
                  </h3>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center px-6 py-4 bg-gradient-to-r ${option.color} text-white font-semibold rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-200`}
                  >
                    Make Payment
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Payment Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about making secure payments for band activities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <info.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {info.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white"
          >
            <EnvelopeIcon className="h-16 w-16 text-primary-200 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Need Help with Payments?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              If you have questions about payments, need assistance with the online system, or want to discuss payment plan options, our HBPA Treasurer is here to help.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary-200">HBPA Treasurer</h4>
                  <a
                    href="mailto:Treasurer@hickorybands.org"
                    className="text-white hover:text-primary-200 transition-colors duration-200"
                  >
                    Treasurer@hickorybands.org
                  </a>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-200">General Inquiries</h4>
                  <a
                    href="mailto:contact@hhsbands.org"
                    className="text-white hover:text-primary-200 transition-colors duration-200"
                  >
                    contact@hhsbands.org
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Treasurer@hickorybands.org"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Email Treasurer
              </a>
              <a
                href="/parents"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-200"
              >
                Visit HBPA Page
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Important Payment Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Deadlines</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Check CheddarUp pages for specific due dates</li>
                  <li>• Early payment discounts may be available</li>
                  <li>• Payment plans must be completed by season end</li>
                  <li>• Contact treasurer for deadline extensions if needed</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Methods</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Credit and debit cards accepted</li>
                  <li>• Bank transfer options available</li>
                  <li>• Payment plans offered on most items</li>
                  <li>• Secure processing through CheddarUp</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Payments;