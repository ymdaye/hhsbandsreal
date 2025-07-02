import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LockClosedIcon, MusicalNoteIcon, UserGroupIcon, DocumentTextIcon, VideoCameraIcon, CalendarDaysIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline';
import studentsData from '../content/students.json';

const Students = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'HawksMusic2025') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  const studentSections = [
    {
      title: "Color Guard",
      description: "Access guard-specific resources, music, and performance materials",
      icon: UserGroupIcon,
      color: "from-pink-500 to-pink-600",
      resources: [
        "Performance music tracks",
        "Choreography videos", 
        "Equipment maintenance guides",
        "Competition schedules"
      ]
    },
    {
      title: "Percussion",
      description: "Drumline and percussion ensemble materials and resources",
      icon: MusicalNoteIcon,
      color: "from-red-500 to-red-600",
      resources: [
        "Percussion parts and music",
        "Practice tracks",
        "Technique videos",
        "Equipment information"
      ]
    },
    {
      title: "Winds",
      description: "Band music, parts, and resources for wind instruments",
      icon: MusicalNoteIcon,
      color: "from-blue-500 to-blue-600",
      resources: [
        "Concert and marching music",
        "Individual part files",
        "Practice recordings",
        "Fingering charts"
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Download Music",
      description: "Access current music files and individual parts",
      icon: CloudArrowDownIcon,
      link: "#music"
    },
    {
      title: "Video Resources",
      description: "Instructional videos and performance recordings",
      icon: VideoCameraIcon,
      link: "#videos"
    },
    {
      title: "Itinerary & Schedule",
      description: "Upcoming events, rehearsals, and important dates",
      icon: CalendarDaysIcon,
      link: "#schedule"
    },
    {
      title: "Important Documents",
      description: "Forms, handbooks, and essential information",
      icon: DocumentTextIcon,
      link: "#documents"
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full mx-4"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <LockClosedIcon className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Portal</h1>
              <p className="text-gray-600">Enter the password to access student resources</p>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter password"
                  required
                />
              </div>
              
              {error && (
                <div className="text-red-600 text-sm text-center">{error}</div>
              )}
              
              <button
                type="submit"
                className="w-full px-4 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
              >
                Access Portal
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Need the password? Contact your section leader or band directors.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Portal</h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Access your section resources, music, videos, and important information
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 block"
              >
                <link.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* hAwkward Ask Campaign Update */}
      <section className="py-12 bg-gradient-to-br from-primary-500 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">hAwkward Ask Campaign Update</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Thanks to the incredible support from our community, families, and friends, our hAwkward Ask campaign is making a real difference!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Total Amount Raised */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">$12,450</div>
                <div className="text-lg text-primary-100 mb-4">Total Amount Raised</div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full" style={{width: '62%'}}></div>
                </div>
                <div className="text-sm text-primary-100 mt-2">62% of $20,000 goal</div>
              </div>
              
              {/* Average Per Student */}
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">$78</div>
                <div className="text-lg text-primary-100 mb-4">Average Raised Per Student</div>
                <div className="text-sm text-primary-100">
                  Based on 160 participating students
                </div>
                <div className="mt-4 text-primary-100">
                  <span className="text-2xl font-bold text-yellow-300">🎵</span>
                  <span className="ml-2">Every dollar helps!</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="/hawkward-ask"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Learn More About Our Campaign
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Zeffy Donation Tracking */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Live Campaign Tracking</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our progress in real-time with live donation tracking and leaderboard updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Donation Thermometer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Campaign Progress</h3>
              <div 
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  paddingTop: "120px"
                }}
              >
                <iframe 
                  title='Donation thermometer powered by Zeffy' 
                  style={{
                    position: "absolute", 
                    border: 0, 
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "120px"
                  }} 
                  src='https://www.zeffy.com/embed/thermometer/marching-hawks-hawkward-ask'  
                  allowTransparency="true"
                />
              </div>
            </motion.div>

            {/* Donation Leaderboard */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Top Contributors</h3>
              <div 
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  paddingTop: "240px"
                }}
              >
                <iframe 
                  title='Donation leaderboard powered by Zeffy' 
                  style={{
                    position: "absolute", 
                    border: 0, 
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "100%"
                  }} 
                  src='https://www.zeffy.com/embed/leaderboard/marching-hawks-hawkward-ask'  
                  allowTransparency="true"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Resources */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Section Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access materials specific to your section and instrument group
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studentSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${section.color} p-6 text-center`}>
                  <section.icon className="h-12 w-12 text-white mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
                  <p className="text-white/90">{section.description}</p>
                </div>
                
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Available Resources:</h4>
                  <ul className="space-y-3">
                    {section.resources.map((resource, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{resource}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full mt-6 px-4 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200">
                    Access {section.title} Resources
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Itinerary */}
      <section id="schedule" className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Current Schedule</h2>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">This Week</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Tuesday - After School Rehearsal</h4>
                    <p className="text-gray-600">3:30 PM - 5:30 PM • Band Room</p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Wednesday - Section Rehearsals</h4>
                    <p className="text-gray-600">3:30 PM - 5:00 PM • Various Rooms</p>
                  </div>
                  <div className="border-l-4 border-primary-500 pl-4">
                    <h4 className="font-semibold text-gray-900">Thursday - Full Ensemble</h4>
                    <p className="text-gray-600">3:30 PM - 5:30 PM • Band Room</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900">Winter Concert</h4>
                    <p className="text-gray-600">February 15, 2025 • 7:00 PM</p>
                    <p className="text-sm text-primary-600">Dress rehearsal Feb 14</p>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900">SEVMG 2025</h4>
                    <p className="text-gray-600">September 27, 2025</p>
                    <p className="text-sm text-primary-600">Mark your calendars!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logout */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </section>
    </div>
  );
};

export default Students;