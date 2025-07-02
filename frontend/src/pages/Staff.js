import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Band Directors - Side by Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="md:flex md:flex-col">
                {/* Image */}
                <div className="w-full">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={staffData.members[0].image}
                      alt={staffData.members[0].name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{staffData.members[0].name}</h3>
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full">
                      {staffData.members[0].role}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">
                    {member.bio}
                  </p>
                  
                  {member.highlights && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 text-center">Key Qualifications:</h4>
                      <ul className="space-y-2">
                        {member.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-gray-700 text-sm">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {staffData.members[0].email && (
                    <div className="text-center">
                      <a
                        href={`mailto:${staffData.members[0].email}`}
                        className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                      >
                        <EnvelopeIcon className="h-5 w-5" />
                        <span>{staffData.members[0].email}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="md:flex md:flex-col">
                {/* Image */}
                <div className="w-full">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={staffData.members[1].image}
                      alt={staffData.members[1].name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{staffData.members[1].name}</h3>
                    <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full">
                      {staffData.members[1].role}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">
                    {staffData.members[1].bio}
                  </p>
                  
                  {staffData.members[1].email && (
                    <div className="text-center">
                      <a
                        href={`mailto:${staffData.members[1].email}`}
                        className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                      >
                        <EnvelopeIcon className="h-5 w-5" />
                        <span>{staffData.members[1].email}</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Assistant Directors */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {staffData.members.slice(2).map((member, index) => (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="md:flex md:flex-col">
                  {/* Image */}
                  <div className="w-full">
                    <div className="h-64 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                      <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full">
                        {member.role}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-center">
                      {member.bio}
                    </p>
                    
                    {member.email && (
                      <div className="text-center">
                        <a
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                        >
                          <EnvelopeIcon className="h-5 w-5" />
                          <span>{member.email}</span>
                        </a>
                      </div>
                    )}
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