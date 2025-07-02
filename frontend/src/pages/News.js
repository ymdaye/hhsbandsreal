import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, TrophyIcon, MusicalNoteIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const News = () => {
  const newsArticles = [
    {
      title: "Hickory Marching Hawks Achieve 2nd Place at BOA New Jersey Regional Championship",
      date: "November 15, 2024",
      category: "Competition Results",
      image: "https://hhsbands.org/wp-content/uploads/2024/11/BOA-New-Jersey-2024.jpg",
      excerpt: "The Hickory Marching Hawks delivered an outstanding performance at the BOA New Jersey Regional Championship, earning 2nd place overall out of 14 competing bands and 1st place in Class AA.",
      content: "In an incredible display of musical and visual excellence, the Hickory Marching Hawks achieved a remarkable 2nd place overall finish at the prestigious BOA New Jersey Regional Championship held at Rutgers University. Competing against 13 other talented bands from across the region, our students demonstrated months of dedication and hard work. The Hawks also claimed 1st place in their Class AA division, showcasing their superior technical execution and artistic expression.",
      icon: TrophyIcon
    },
    {
      title: "SEVMG 2025 Announcement - Save the Date!",
      date: "October 30, 2024", 
      category: "Upcoming Events",
      image: "https://images.pexels.com/photos/32751943/pexels-photo-32751943.jpeg",
      excerpt: "Mark your calendars for Saturday, September 27, 2025, as Hickory High School hosts the annual Southeastern Virginia Music Games.",
      content: "We are excited to announce that Hickory High School will once again host the Southeastern Virginia Music Games (SEVMG) on Saturday, September 27, 2025. This premier marching band competition brings together bands from across the region for a day of exceptional musical performances. Volunteer opportunities will be available through SignUpGenius, and we encourage all band families to participate in making this event a success.",
      icon: CalendarDaysIcon
    },
    {
      title: "Winter Guard and Indoor Percussion Season Begins",
      date: "January 15, 2025",
      category: "Program Updates",
      image: "https://images.pexels.com/photos/6966502/pexels-photo-6966502.jpeg", 
      excerpt: "Our Winter Guard and Indoor Percussion programs kick off another exciting competitive season with rehearsals and upcoming competitions.",
      content: "The Hickory Winter Guard and Indoor Percussion programs have begun their 2025 competitive season with intensive rehearsals and preparation for upcoming competitions throughout Virginia. Both ensembles continue to build on their traditions of excellence, combining technical precision with artistic expression. Students in these programs develop advanced performance skills while building lasting friendships and memories.",
      icon: UserGroupIcon
    },
    {
      title: "Concert Band Assessment Results - Superior Ratings Achieved",
      date: "March 20, 2024",
      category: "Academic Achievement", 
      image: "https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg",
      excerpt: "Our Concert Bands and Wind Ensemble continue their tradition of excellence with superior ratings at the annual Band Assessment.",
      content: "The Hickory High School Concert Bands and Wind Ensemble have once again achieved superior ratings at the annual Band Assessment, continuing our program's tradition of musical excellence. These ratings reflect the dedication of our students and the quality of instruction provided by our outstanding band directors. The assessment process allows our students to receive valuable feedback from expert adjudicators while demonstrating their musical growth and achievement.",
      icon: MusicalNoteIcon
    }
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
            Latest News
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Stay updated with the latest achievements, events, and announcements from the Hickory High School Band Program
          </motion.p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {newsArticles.map((article, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = "https://images.pexels.com/photos/32751943/pexels-photo-32751943.jpeg";
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary-500 rounded-lg mr-4">
                        <article.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full mr-3">
                          {article.category}
                        </span>
                        <span className="text-gray-500 text-sm">{article.date}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.content}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Don't miss any updates! Join our communication channels to stay informed about 
              concerts, competitions, and important announcements.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">BAND App</h3>
                <p className="text-primary-100 text-sm mb-4">Join our main communication platform</p>
                <a
                  href="https://band.us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Download App
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Cut Time</h3>
                <p className="text-primary-100 text-sm mb-4">Receive important email updates</p>
                <a
                  href="https://cuttime.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Sign Up
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Facebook Group</h3>
                <p className="text-primary-100 text-sm mb-4">Connect with other band families</p>
                <a
                  href="https://www.facebook.com/groups/143380672349133/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Join Group
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;