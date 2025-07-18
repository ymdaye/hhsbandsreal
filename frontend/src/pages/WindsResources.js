import React from 'react';
import { motion } from 'framer-motion';
import { DocumentArrowDownIcon, VideoCameraIcon, MusicalNoteIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';

const WindsResources = () => {
  const resources = [
    {
      title: "Practice Videos",
      description: "Video recordings of techniques and performances",
      icon: VideoCameraIcon,
      items: [
        "Marching Technique Videos",
        "Breathing Exercise Demos",
        "Section Rehearsal Recordings",
        "Solo Performance Examples"
      ]
    },
    {
      title: "Music Files",
      description: "Audio files and sheet music for practice",
      icon: MusicalNoteIcon,
      items: [
        "Individual Part Audio",
        "Full Band Recordings",
        "Sectional Practice Tracks",
        "Scale and Warm-up Audio"
      ]
    },
    {
      title: "Documents",
      description: "Important forms and reference materials",
      icon: DocumentArrowDownIcon,
      items: [
        "Instrument Care Guide",
        "Fingering Charts",
        "Practice Logs",
        "Uniform Care Instructions"
      ]
    },
    {
      title: "Schedule",
      description: "Rehearsal times and important dates",
      icon: CalendarDaysIcon,
      items: [
        "Sectional Rehearsals",
        "Private Lesson Slots",
        "Performance Calendar",
        "Chair Audition Dates"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg"
            alt="Wind instruments"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-800/90 to-primary-600/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Winds Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Access all your Winds materials, videos, music, and important information
          </motion.p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6">
                  <div className="flex items-center space-x-4">
                    <resource.icon className="h-8 w-8 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{resource.title}</h3>
                      <p className="text-primary-100">{resource.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
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
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact the band directors for assistance with any resources or questions.
            </p>
            
            <a
              href="mailto:directors@hickorybands.org"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Band Directors
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WindsResources;