import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, MapPinIcon, ClockIcon, CurrencyDollarIcon, UserGroupIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const CraftFair = () => {
  const eventDetails = [
    { icon: CalendarDaysIcon, label: "Date", value: "Saturday, November 16, 2024" },
    { icon: ClockIcon, label: "Time", value: "9:00 AM - 4:00 PM" },
    { icon: MapPinIcon, label: "Location", value: "Hickory High School Cafeteria" },
    { icon: CurrencyDollarIcon, label: "Admission", value: "Free Entry" }
  ];

  const vendorInfo = [
    { title: "Handmade Crafts", description: "Unique handcrafted items from local artisans" },
    { title: "Holiday Gifts", description: "Perfect gifts for the upcoming holiday season" },
    { title: "Food & Treats", description: "Delicious homemade food and seasonal treats" },
    { title: "Band Merchandise", description: "Official Hickory Band spirit wear and items" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6966502/pexels-photo-6966502.jpeg"
            alt="Craft Fair"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/90 to-purple-600/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Annual Craft Fair
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-purple-100 max-w-3xl mx-auto"
          >
            Join us for a wonderful day of local crafts, delicious food, and community support for our band program
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
            {eventDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                  <detail.icon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{detail.label}</h3>
                <p className="text-gray-600">{detail.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What to Expect
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vendorInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-12 text-center text-white"
          >
            <ShoppingBagIcon className="h-16 w-16 text-purple-200 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Interested in Being a Vendor?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join our annual craft fair and reach hundreds of community members while supporting music education. 
              We welcome artisans, crafters, and local businesses.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4">Vendor Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Table Fee</h4>
                  <p className="text-white">$25 per 8ft table</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Setup Time</h4>
                  <p className="text-white">8:00 AM - 8:45 AM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">What's Included</h4>
                  <p className="text-white">Table, chairs, electricity access</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-200 mb-2">Application Deadline</h4>
                  <p className="text-white">November 1st</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@hhsbands.org"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Apply to be a Vendor
              </a>
              <a
                href="mailto:contact@hhsbands.org"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition-all duration-200"
              >
                Get More Information
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CraftFair;