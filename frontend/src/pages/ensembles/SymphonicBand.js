import React from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon, MusicalNoteIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const SymphonicBand = () => {
  const highlights = [
    {
      title: "Advanced Repertoire",
      description: "Performing challenging works from the finest composers in wind band literature",
      icon: MusicalNoteIcon
    },
    {
      title: "Audition-Based",
      description: "Selective membership based on musical ability and commitment to excellence",
      icon: AcademicCapIcon
    },
    {
      title: "Competition Excellence",
      description: "Consistently earning superior ratings at district and state assessments",
      icon: TrophyIcon
    },
    {
      title: "Leadership Development",
      description: "Opportunities for student leadership and musical mentorship",
      icon: UserGroupIcon
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg"
            alt="Symphonic Band"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-blue-600/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Symphonic Band
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Our premier concert ensemble featuring advanced repertoire and the highest level of musical performance
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
            <TrophyIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Symphonic Band</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              The Hickory High School Symphonic Band represents the pinnacle of our concert band program. 
              This premier ensemble features advanced repertoire and requires audition-based placement. 
              Students in Symphonic Band demonstrate exceptional musical ability and commitment to excellence, 
              performing the most challenging works in the wind band literature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Program Highlights
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <highlight.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Audition Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white"
          >
            <AcademicCapIcon className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Audition Information</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Symphonic Band membership is determined through auditions held at the beginning of each school year. 
              Students are evaluated on technical proficiency, musicality, and commitment to excellence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Audition Requirements</h3>
                <p className="text-blue-100 text-sm">Prepared piece, scales, sight-reading</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">When</h3>
                <p className="text-blue-100 text-sm">Beginning of each school year</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Expectations</h3>
                <p className="text-blue-100 text-sm">High commitment and attendance</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="/staff"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Directors for More Information
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SymphonicBand;