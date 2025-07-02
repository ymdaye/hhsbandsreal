import React from 'react';
import { motion } from 'framer-motion';
import { MusicalNoteIcon, MicrophoneIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';

const JazzBand = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-yellow-600 to-orange-600">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4709822/pexels-photo-4709822.jpeg"
            alt="Jazz Band"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-800/90 to-orange-600/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Jazz Band
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-yellow-100 max-w-3xl mx-auto"
          >
            Exploring the art of improvisation and the rich tradition of American jazz music
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
            <MusicalNoteIcon className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Jazz Band</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              The Hickory High School Jazz Band provides students with the opportunity to explore the rich 
              tradition of American jazz music. Students develop improvisation skills, learn jazz theory, 
              and perform classic and contemporary jazz repertoire in a variety of styles.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-yellow-50 rounded-xl p-6">
                <MicrophoneIcon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Improvisation</h3>
                <p className="text-gray-600 text-sm">Develop creative musical expression</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <MusicalNoteIcon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Jazz Theory</h3>
                <p className="text-gray-600 text-sm">Learn chord progressions and jazz harmony</p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <UserGroupIcon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ensemble Playing</h3>
                <p className="text-gray-600 text-sm">Collaborate in small and large groups</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jazz Styles */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Jazz Styles We Explore
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Swing", description: "Classic big band era style" },
              { title: "Bebop", description: "Fast-paced improvisation" },
              { title: "Latin Jazz", description: "Fusion of jazz and Latin rhythms" },
              { title: "Contemporary", description: "Modern jazz expressions" }
            ].map((style, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <StarIcon className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{style.title}</h3>
                <p className="text-gray-600 text-sm">{style.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Information */}
      <section className="py-20 bg-gradient-to-br from-yellow-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <MusicalNoteIcon className="h-16 w-16 text-yellow-200 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Join Jazz Band</h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
              Discover the freedom and creativity of jazz music. Develop your improvisation skills 
              and become part of America's greatest musical art form.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join"
                className="inline-flex items-center px-8 py-4 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Join Our Program
              </a>
              <a
                href="/staff"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-yellow-700 transition-all duration-200"
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

export default JazzBand;