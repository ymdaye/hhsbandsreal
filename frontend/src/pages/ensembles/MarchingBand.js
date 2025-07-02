import React from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon, CalendarDaysIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';

const MarchingBand = () => {
  const achievements = [
    "2024 BOA New Jersey Regional Championship - 2nd Overall",
    "2024 BOA New Jersey Regional Championship - 1st Place Class AA",
    "Superior ratings consistently achieved",
    "Multiple competition entries annually"
  ];

  const schedule = [
    { title: "August Band Camp", description: "Intensive summer training to prepare for the season" },
    { title: "Tuesday Rehearsals", description: "After-school practice sessions" },
    { title: "Wednesday Rehearsals", description: "After-school practice sessions" },
    { title: "Thursday Rehearsals", description: "After-school practice sessions" },
    { title: "Friday Night Games", description: "Performances at all home football games" },
    { title: "Competition Season", description: "Regional and state competitions" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32751943/pexels-photo-32751943.jpeg"
            alt="Hickory Marching Hawks"
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
            Hickory Marching Hawks
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Award-winning marching band with superior ratings and championship performances
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
            <TrophyIcon className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Marching Hawks</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-8">
              The Hickory Marching Hawks have a long history of excellence and are one of the most dedicated 
              and passionate organizations at Hickory High School. The Hickory Marching Hawks perform at all 
              home football games, and enter multiple competitions each year with consistently superior results.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Achievements</h3>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <StarIcon className="h-5 w-5 text-primary-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <img
                  src="https://hhsbands.org/wp-content/uploads/2024/11/BOA-New-Jersey-2024.jpg"
                  alt="BOA Championship 2024"
                  className="rounded-xl shadow-lg"
                  onError={(e) => {
                    e.target.src = "https://images.pexels.com/photos/32751939/pexels-photo-32751939.jpeg";
                  }}
                />
                <p className="text-sm text-gray-600 mt-2">2024 BOA New Jersey Championship</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Season Schedule */}
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
              Season Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The marching season begins with August Band Camp and continues through the fall
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <CalendarDaysIcon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-sm text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white"
          >
            <UserGroupIcon className="h-16 w-16 text-primary-200 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Join the Marching Hawks</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Become part of this dedicated and passionate organization. The marching season begins with 
              August Band Camp and includes rehearsals on Tuesday, Wednesday, and Thursday after school.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4">Important Dates</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary-200 mb-2">Commitment Forms Due</h4>
                  <p className="text-white">May 23rd</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-200 mb-2">Band Camp</h4>
                  <p className="text-white">August (before school starts)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-200 mb-2">Rehearsal Schedule</h4>
                  <p className="text-white">Tuesday, Wednesday, Thursday after school</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://hhsbands.org/ensembles/marching-band/sign-up/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Sign Up for Marching Band
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

export default MarchingBand;