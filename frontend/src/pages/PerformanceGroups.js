import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MusicalNoteIcon, TrophyIcon, UserGroupIcon, MicrophoneIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const PerformanceGroups = () => {
  const [showAllShows, setShowAllShows] = useState(false);

  const concertEnsembles = [
    {
      title: "Symphonic Band",
      description: "Our premier concert ensemble featuring advanced repertoire and the highest level of musical performance. Students audition for placement in this selective group.",
      highlights: [
        "Advanced musical repertoire",
        "Audition-based placement", 
        "Chamber music techniques",
        "Competition performances",
        "Leadership development"
      ],
      icon: TrophyIcon,
      image: "https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg",
      color: "from-blue-500 to-blue-700"
    },
    {
      title: "Concert Band",
      description: "The Concert Bands put on several concerts and perform at Band Assessment each year. Students develop technical excellence and artistic expression in a supportive environment.",
      highlights: [
        "Superior ratings at Band Assessment",
        "Multiple concerts throughout the year",
        "Technical excellence development",
        "Artistic expression focus",
        "Various skill levels accommodated"
      ],
      icon: MusicalNoteIcon,
      image: "https://images.pexels.com/photos/258846/pexels-photo-258846.jpeg",
      color: "from-green-500 to-green-700"
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
      image: "https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const specialtyGroups = [
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
      title: "Indoor Percussion",
      description: "Our competitive indoor percussion ensemble performs during the winter months, showcasing complex rhythms and dynamic performances in an indoor setting.",
      highlights: [
        "Winter competition season",
        "Advanced percussion techniques",
        "Choreographed performances",
        "State-level competitions",
        "Ensemble precision focus"
      ],
      icon: MicrophoneIcon,
      image: "https://images.pexels.com/photos/4709822/pexels-photo-4709822.jpeg",
      color: "from-red-500 to-red-700"
    },
    {
      title: "Winter Guard",
      description: "The Winter Guard combines dance, flag work, and performance artistry in an indoor competitive environment during the winter season.",
      highlights: [
        "Winter performance season",
        "Flag and dance techniques",
        "Artistic expression",
        "Regional competitions",
        "Performance choreography"
      ],
      icon: UserGroupIcon,
      image: "https://images.pexels.com/photos/6966502/pexels-photo-6966502.jpeg",
      color: "from-pink-500 to-pink-700"
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
    { year: 2013, theme: "Hickory 3D" },
    { year: 2012, theme: "That's the Key" },
    { year: 2011, theme: "Fix You" },
    { year: 2010, theme: "Haiku of Life" },
    { year: 2009, theme: "Faces of Water" },
    { year: 2008, theme: "The Great Space Race" },
    { year: 2007, theme: "South American Sketches" },
    { year: 2006, theme: "The 1002nd Arabian Night" },
    { year: 2005, theme: "Phantom of the Opera" },
    { year: 2004, theme: "Windows Into War" },
    { year: 2003, theme: "Jailbreak" },
    { year: 2002, theme: "West Side Story" },
    { year: 2001, theme: "A Legendary Tale" },
    { year: 2000, theme: "Zorro" },
    { year: 1999, theme: "Egyptian Sketches" },
    { year: 1998, theme: "Emotions" },
    { year: 1997, theme: "Aladdin" },
    { year: 1996, theme: "On Broadway" }
  ];

  const recentShows = marchingShows.slice(0, 6);
  const allShows = marchingShows;

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

      {/* Concert Ensembles Section */}
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
              Concert Ensembles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our concert programs offer opportunities for musical growth in traditional band repertoire
            </p>
          </motion.div>

          <div className="space-y-12">
            {concertEnsembles.map((ensemble, index) => (
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
                      <ul className="space-y-2 mb-6">
                        {ensemble.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to={`/ensembles/${ensemble.title.toLowerCase().replace(/\s+/g, '-').replace('---', '-')}`}
                        className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Groups Section */}
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
              Specialty Performance Groups
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Competitive ensembles that showcase specialized skills and artistry
            </p>
          </motion.div>

          <div className="space-y-12">
            {specialtyGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="md:flex">
                  {/* Content */}
                  <div className="md:w-1/2 p-8">
                    <div className={`inline-flex items-center p-3 rounded-lg bg-gradient-to-r ${group.color} mb-6`}>
                      <group.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {group.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {group.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                      <ul className="space-y-2 mb-6">
                        {group.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      
                      <Link
                        to={
                          group.title.includes('Marching Band') ? '/ensembles/marching-band' :
                          group.title.includes('Indoor Percussion') ? '/ensembles/percussion-ensemble' :
                          group.title.includes('Winter Guard') ? '/ensembles/guard' :
                          '#'
                        }
                        className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full">
                      <img
                        src={group.image}
                        alt={group.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marching Show History */}
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
              Marching Show History
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A creative journey through our marching band show themes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAllShows ? allShows : recentShows).map((show, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-500"
              >
                <div className="text-2xl font-bold text-primary-600 mb-2">
                  {show.year}
                </div>
                <div className="text-gray-900 font-medium leading-tight">
                  "{show.theme}"
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllShows(!showAllShows)}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
            >
              <span>{showAllShows ? 'Show Recent Shows' : 'Show All Shows (1996-2023)'}</span>
              {showAllShows ? (
                <ChevronUpIcon className="h-5 w-5" />
              ) : (
                <ChevronDownIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Join Information */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
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