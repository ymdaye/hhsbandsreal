import React from 'react';
import { motion } from 'framer-motion';
import { MusicalNoteIcon, TrophyIcon, UserGroupIcon, MicrophoneIcon } from '@heroicons/react/24/outline';

const PerformanceGroups = () => {
  const ensembles = [
    {
      title: "Marching Band - The Hickory Marching Hawks",
      description: "The Hickory Marching Hawks perform at all home football games, and enter multiple competitions each year. Our award-winning marching band has achieved superior ratings and championship performances.",
      highlights: [
        "2024 BOA New Jersey Regional Championship - 2nd Overall",
        "Performs at all home football games",
        "Multiple competition entries annually",
        "Superior ratings consistently achieved"
      ],
      icon: TrophyIcon,
      image: "https://images.pexels.com/photos/32751943/pexels-photo-32751943.jpeg",
      color: "from-primary-500 to-primary-700"
    },
    {
      title: "Concert Bands",
      description: "The Concert Bands put on several concerts and perform at Band Assessment each year. Our superior-rated concert bands focus on developing technical excellence and artistic expression.",
      highlights: [
        "Superior ratings at Band Assessment",
        "Multiple concerts throughout the year",
        "Technical excellence development",
        "Artistic expression focus",
        "Various skill levels accommodated"
      ],
      icon: MusicalNoteIcon,
      image: "https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Wind Ensemble",
      description: "The Hickory High School Band includes superior-rated Wind Ensemble. This advanced ensemble represents the pinnacle of musical achievement, featuring our most accomplished student musicians.",
      highlights: [
        "Superior ratings achieved",
        "Advanced musical repertoire",
        "Selective membership",
        "Highest level of performance",
        "Chamber music techniques"
      ],
      icon: UserGroupIcon,
      image: "https://images.pexels.com/photos/258846/pexels-photo-258846.jpeg",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const marchingShows = [
    { year: 2023, theme: "SPINphony" },
    { year: 2022, theme: "On a Wall" },
    { year: 2021, theme: "Dreamscapes" },
    { year: 2019, theme: "Life on a Wire" },
    { year: 2018, theme: "Monarch" },
    { year: 2017, theme: "Outside the Box" },
    { year: 2016, theme: "Full Steam Ahead" },
    { year: 2015, theme: "Transcending Orbits" },
    { year: 2014, theme: "When Winter Begins…" },
    { year: 2013, theme: "Hickory 3D" }
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
            Performance Groups
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Discover our diverse ensembles where students develop musical excellence and artistic expression
          </motion.p>
        </div>
      </section>

      {/* Ensembles Section */}
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
              Our Ensembles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From marching field to concert hall, our programs offer opportunities for every musician to excel
            </p>
          </motion.div>

          <div className="space-y-12">
            {ensembles.map((ensemble, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full">
                      <img
                        src={ensemble.image}
                        alt={ensemble.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 p-8">
                    <div className={`inline-flex items-center p-3 rounded-lg bg-gradient-to-r ${ensemble.color} mb-6`}>
                      <ensemble.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {ensemble.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {ensemble.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                      <ul className="space-y-2">
                        {ensemble.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marching Show History */}
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
              Recent Marching Show Themes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A journey through our creative and inspiring performances
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {marchingShows.map((show, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {show.year}
                </div>
                <div className="text-gray-900 font-medium">
                  "{show.theme}"
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white"
          >
            <MicrophoneIcon className="h-16 w-16 text-primary-200 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Whether you're a beginner or experienced musician, there's a place for you in our program. 
              Join us and become part of the Hickory Bands family!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/join"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Join the Band
              </a>
              <a
                href="/staff"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-200"
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

export default PerformanceGroups;