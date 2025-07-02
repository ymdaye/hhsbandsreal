import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, UserGroupIcon, CurrencyDollarIcon, StarIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const HAwkwardAsk = () => {
  const reasons = [
    {
      icon: HeartIcon,
      title: "Supporting Dreams",
      description: "Every contribution helps students pursue their musical passions and develop lifelong skills."
    },
    {
      icon: UserGroupIcon,
      title: "Building Community",
      description: "Music brings people together and creates lasting bonds within our school and community."
    },
    {
      icon: StarIcon,
      title: "Excellence Achievement",
      description: "Your support helps us maintain our high standards and achieve competition success."
    }
  ];

  const impactAreas = [
    { title: "Instrument Repairs", description: "Keeping our instruments in top playing condition", amount: "$50" },
    { title: "Uniform Cleaning", description: "Professional cleaning and maintenance", amount: "$25" },
    { title: "Sheet Music", description: "New arrangements and competition pieces", amount: "$75" },
    { title: "Transportation", description: "Getting to competitions and performances", amount: "$100" },
    { title: "Equipment", description: "Stands, cases, and performance accessories", amount: "$150" },
    { title: "Any Amount", description: "Every dollar makes a difference!", amount: "Your Choice" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/6869668/pexels-photo-6869668.jpeg"
            alt="Students asking for support"
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
            hAwkward Ask
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Sometimes asking for help feels awkward, but it's how we build community and support our students' musical journey
          </motion.p>
        </div>
      </section>

      {/* Why We Ask */}
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
              Why We Ask
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Music education goes beyond what school funding can provide. Your support helps us offer 
              exceptional opportunities for our students.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                  <reason.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
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
              Where Your Support Goes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every contribution, no matter the size, makes a real difference in our students' experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{area.title}</h3>
                  <span className="text-xl font-bold text-primary-600">{area.amount}</span>
                </div>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Message */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-12 text-center"
          >
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <HeartIcon className="h-12 w-12 text-primary-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Message from Our Students</h2>
            
            <blockquote className="text-xl text-gray-600 italic mb-8 max-w-3xl mx-auto leading-relaxed">
              "Music has taught us discipline, teamwork, and perseverance. When you support our band program, 
              you're not just helping us buy instruments or uniforms – you're investing in our futures and 
              helping us become better people. Thank you for believing in us."
            </blockquote>
            
            <p className="text-primary-600 font-semibold">- Hickory High School Band Students</p>
          </motion.div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <CurrencyDollarIcon className="h-16 w-16 text-primary-200 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ready to Support Our Students?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              There are several ways you can support the Hickory High School Band Program. 
              Choose the option that works best for you!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <CurrencyDollarIcon className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Direct Donation</h3>
                <p className="text-primary-100 text-sm">Make a one-time or recurring contribution</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <EnvelopeIcon className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Send a Check</h3>
                <p className="text-primary-100 text-sm">Mail to Hickory High School Band Program</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <UserGroupIcon className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Spread the Word</h3>
                <p className="text-primary-100 text-sm">Share our story with friends and family</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <EnvelopeIcon className="h-5 w-5 text-primary-200" />
                  <span>contact@hhsbands.org</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <PhoneIcon className="h-5 w-5 text-primary-200" />
                  <span>(757) 421-4400</span>
                </div>
                <div className="text-sm text-primary-100 mt-4">
                  Hickory High School Band Program<br />
                  1996 Hawk Blvd<br />
                  Chesapeake, VA 23322
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@hhsbands.org"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us to Donate
              </a>
              <a
                href="/payments"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-200"
              >
                View Other Payment Options
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HAwkwardAsk;