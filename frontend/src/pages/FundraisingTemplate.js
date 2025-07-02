import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, MapPinIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/outline';

const FundraisingTemplate = ({ 
  title = "Fundraiser Title",
  subtitle = "Supporting music education at Hickory High School",
  backgroundImage = "https://images.pexels.com/photos/6869668/pexels-photo-6869668.jpeg",
  primaryColor = "primary",
  eventDetails = [],
  content = {},
  customSections = []
}) => {
  
  const defaultEventDetails = [
    { icon: CalendarDaysIcon, label: "Date", value: "TBD" },
    { icon: ClockIcon, label: "Time", value: "TBD" },
    { icon: MapPinIcon, label: "Location", value: "TBD" },
    { icon: CurrencyDollarIcon, label: "Cost", value: "TBD" }
  ];

  const details = eventDetails.length > 0 ? eventDetails : defaultEventDetails;

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Fundraiser Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-800/90 to-primary-600/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
      </section>

      {/* Event Details */}
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
              Event Information
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
                  <detail.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{detail.label}</h3>
                <p className="text-gray-600">{detail.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      {content.description && (
        <section className="py-20 bg-primary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-12 text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {content.title || "About This Event"}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                {content.description}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Custom Sections */}
      {customSections.map((section, index) => (
        <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-12">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items && section.items.map((item, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    {item.price && (
                      <div className="mt-4 text-2xl font-bold text-primary-600">{item.price}</div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <HeartIcon className="h-16 w-16 text-primary-200 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Support the Hickory High School Band Program and help our students achieve musical excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@hhsbands.org"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Learn More
              </a>
              <a
                href="/fundraisers"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-200"
              >
                View All Fundraisers
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FundraisingTemplate;