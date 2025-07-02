import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import staffData from '../content/staff.json';

const Staff = () => {
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
            Meet Our Staff
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Dedicated educators committed to excellence in musical education and student development
          </motion.p>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {staffData.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-900 to-black rounded-xl sm:rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  {/* Image */}
                  <div className="h-40 sm:h-48 md:h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  {/* Teal accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-400 to-primary-600"></div>
                </div>
                
                {/* Content */}
                <div className="p-3 sm:p-4 lg:p-6 text-white">
                  <div className="text-center mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{member.name}</h3>
                    <span className="inline-block px-2 sm:px-3 lg:px-4 py-1 sm:py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs sm:text-sm font-semibold rounded-full">
                      {member.role}
                    </span>
                  </div>
                  
                  {member.highlights && (
                    <div className="mb-3 sm:mb-4 lg:mb-6">
                      <h4 className="font-semibold text-primary-300 mb-2 sm:mb-3 text-center text-xs sm:text-sm">Key Qualifications:</h4>
                      <ul className="space-y-1 sm:space-y-2">
                        {member.highlights.slice(0, 2).map((highlight, i) => (
                          <li key={i} className="flex items-start text-gray-300 text-xs sm:text-sm">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-400 rounded-full mr-2 sm:mr-3 flex-shrink-0 mt-1"></div>
                            <span className="leading-tight">{highlight}</span>
                          </li>
                        ))}
                        {member.highlights.length > 2 && (
                          <li className="flex items-center text-primary-300 text-xs sm:text-sm font-medium">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                            And {member.highlights.length - 2} more...
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                  
                  {member.logo && (
                    <div className="text-center mb-3 sm:mb-4 lg:mb-6">
                      <img
                        src={member.logo}
                        alt="Professional Logo"
                        className="h-8 sm:h-10 lg:h-12 w-auto mx-auto opacity-80"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  <div className="flex flex-col gap-2 sm:gap-3">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200 text-xs sm:text-sm"
                      >
                        <span>Email</span>
                      </a>
                    )}
                    <Link
                      to={`/staff/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center justify-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-200 text-xs sm:text-sm"
                    >
                      <span>Full Bio</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Have questions about our band program? Our staff is here to help you succeed.
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                <div>
                  <h3 className="font-semibold mb-2">Band Office</h3>
                  <p className="text-primary-100">
                    Hickory High School<br />
                    1996 Hawk Blvd<br />
                    Chesapeake, VA 23322
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">General Contact</h3>
                  <p className="text-primary-100">
                    Email: contact@hhsbands.org<br />
                    Phone: (757) 421-4400
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Staff;