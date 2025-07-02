import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, MusicalNoteIcon, UserGroupIcon, TrophyIcon } from '@heroicons/react/24/outline';

const WindEnsemble = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-600 to-purple-800">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/258846/pexels-photo-258846.jpeg"
            alt="Wind Ensemble"
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
            Wind Ensemble
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-purple-100 max-w-3xl mx-auto"
          >
            Superior-rated advanced ensemble featuring our most accomplished student musicians
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-12 text-center"
          >
            <StarIcon className="h-16 w-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Wind Ensemble</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              The Hickory High School Band includes superior-rated Wind Ensemble. This advanced ensemble 
              represents the pinnacle of musical achievement, featuring our most accomplished student musicians. 
              The Wind Ensemble performs sophisticated repertoire and maintains the highest standards of musical excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-purple-50 rounded-xl p-6">
                <TrophyIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Superior Ratings</h3>
                <p className="text-gray-600 text-sm">Consistently achieved at state assessments</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <MusicalNoteIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Advanced Repertoire</h3>
                <p className="text-gray-600 text-sm">Challenging works from master composers</p>
              </div>
              <div className="bg-purple-50 rounded-xl p-6">
                <UserGroupIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Selective Membership</h3>
                <p className="text-gray-600 text-sm">Most accomplished student musicians</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chamber Music Focus */}
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
              Chamber Music Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Wind Ensemble emphasizes chamber music techniques and intimate musical communication
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Musical Philosophy</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Wind Ensemble focuses on one-on-a-part chamber music techniques, allowing for greater 
                  musical transparency and individual responsibility. Students develop advanced listening 
                  skills and musical sensitivity while performing sophisticated repertoire.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Chamber music techniques</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Individual musical responsibility</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Advanced listening skills</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Sophisticated repertoire</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg"
                  alt="Chamber Music"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Information */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <StarIcon className="h-16 w-16 text-purple-200 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Excellence in Performance</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Wind Ensemble represents the highest level of achievement in our concert band program. 
              Join us in pursuing musical excellence through advanced repertoire and chamber music techniques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Join Our Program
              </a>
              <a
                href="/staff"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-700 transition-all duration-200"
              >
                Contact Directors
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WindEnsemble;