import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link, useParams } from 'react-router-dom';
import staffData from '../content/staff.json';

const StaffMember = () => {
  const { staffSlug } = useParams();
  
  // Find the staff member based on the slug
  const member = staffData.members.find(
    (m) => m.name.toLowerCase().replace(/\s+/g, '-') === staffSlug
  );

  if (!member) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Staff Member Not Found</h1>
          <Link
            to="/staff"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Staff
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-shrink-0"
            >
              <div className="w-64 h-64 rounded-2xl overflow-hidden border-4 border-primary-400 shadow-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 text-white text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{member.name}</h1>
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-lg font-semibold rounded-full mb-6">
                {member.role}
              </div>
              
              {member.email && (
                <div className="mb-6">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    <EnvelopeIcon className="h-5 w-5" />
                    <span>{member.email}</span>
                  </a>
                </div>
              )}
              
              <Link
                to="/staff"
                className="inline-flex items-center space-x-2 text-primary-300 hover:text-white transition-colors duration-200"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                <span>Back to All Staff</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">Biography</h2>
              <div className="w-24 h-1 bg-primary-200 mx-auto rounded-full"></div>
            </div>
            
            <div className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {member.bio}
                </p>
              </div>
              
              {member.highlights && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Qualifications & Achievements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {member.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3 p-4 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl"
                      >
                        <div className="w-3 h-3 bg-primary-500 rounded-full mt-1 flex-shrink-0"></div>
                        <span className="text-gray-800 font-medium">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              
              {member.logo && (
                <div className="mt-12 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Affiliations</h3>
                  <img
                    src={member.logo}
                    alt="Professional Logo"
                    className="h-20 w-auto mx-auto"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Have questions about our band program or want to connect with {member.name.split(' ')[0]}? 
              We're here to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              )}
              <Link
                to="/staff"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-200"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                View All Staff
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StaffMember;