import React from 'react';
import { motion } from 'framer-motion';
import { TrophyIcon, CalendarDaysIcon, MusicalNoteIcon, StarIcon } from '@heroicons/react/24/outline';

const History = () => {
  const recentAchievements = [
    {
      year: "2024",
      achievement: "BOA New Jersey Regional Championship",
      details: "2nd Overall (out of 14 bands) • Piscataway, NJ (Rutgers University)",
      type: "Championship"
    },
    {
      year: "2024",
      achievement: "BOA New Jersey Regional Championship - Prelims",
      details: "1st Place Class AA (out of 4 bands)",
      type: "Competition"
    },
    {
      year: "2023",
      achievement: "Superior Ratings",
      details: "Concert Bands and Wind Ensemble",
      type: "Assessment"
    }
  ];

  const marchingShows = [
    { year: 2025, theme: "Passport to Adventure" },
    { year: 2024, theme: "The Type Writer" },
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

  const getAchievementIcon = (type) => {
    switch (type) {
      case 'Championship':
        return TrophyIcon;
      case 'Competition':
        return StarIcon;
      case 'Assessment':
        return MusicalNoteIcon;
      default:
        return CalendarDaysIcon;
    }
  };

  const getAchievementColor = (type) => {
    switch (type) {
      case 'Championship':
        return 'from-yellow-500 to-yellow-600';
      case 'Competition':
        return 'from-blue-500 to-blue-600';
      case 'Assessment':
        return 'from-green-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

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
            Our History
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Celebrating decades of musical excellence, achievements, and memorable performances that define the Hickory Band legacy
          </motion.p>
        </div>
      </section>

      {/* Recent Achievements */}
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
              Recent Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our latest accomplishments showcase the continued excellence of the Hickory Band Program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentAchievements.map((achievement, index) => {
              const IconComponent = getAchievementIcon(achievement.type);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl p-8 text-center"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getAchievementColor(achievement.type)} rounded-full mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {achievement.year}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {achievement.achievement}
                  </h3>
                  <p className="text-gray-600">
                    {achievement.details}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marching Show Timeline */}
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete timeline of our marching band show themes from 1996 to present
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {marchingShows.map((show, index) => (
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
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <TrophyIcon className="h-16 w-16 text-primary-200 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              A Legacy of Excellence
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              From our first performance in 1996 to our recent championship achievements, 
              the Hickory High School Band Program has consistently demonstrated musical excellence, 
              artistic innovation, and community pride. Our legacy continues to grow with each 
              performance, each student, and each year of dedication to the art of music.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">28+</div>
                <div className="text-primary-200">Years of Excellence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">28</div>
                <div className="text-primary-200">Marching Show Themes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">100s</div>
                <div className="text-primary-200">Students Impacted</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default History;