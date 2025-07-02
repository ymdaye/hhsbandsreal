import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import Calendar from '../components/Calendar';
import { Link } from 'react-router-dom';
import { TrophyIcon, MusicalNoteIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const heroData = {
    title: "Hickory High School Bands",
    subtitle: "Excellence in Musical Education • Superior-Rated Concert Bands • Award-Winning Marching Band",
    backgroundImage: "https://hhsbands.org/wp-content/uploads/2024/11/BOA-New-Jersey-2024.jpg",
    ctaText: "Join the Band",
    ctaUrl: "/join"
  };

  const features = [
    {
      title: "Award-Winning Marching Band",
      description: "2024 BOA New Jersey Regional Championship - 2nd Overall out of 14 bands. Our marching band consistently achieves superior ratings and championship performances.",
      icon: TrophyIcon,
      image: "https://images.pexels.com/photos/32751943/pexels-photo-32751943.jpeg"
    },
    {
      title: "Superior-Rated Concert Bands",
      description: "Our concert bands maintain superior ratings through dedicated practice and exceptional musical education, developing technical excellence and artistic expression.",
      icon: MusicalNoteIcon,
      image: "https://images.pexels.com/photos/269140/pexels-photo-269140.jpeg"
    },
    {
      title: "Winter Guard & Indoor Percussion",
      description: "Our Winter Guard and Indoor Percussion programs thrive during the winter and spring months as they perform at competitions throughout Virginia, showcasing artistic excellence and technical precision.",
      icon: UserGroupIcon,
      image: "https://images.pexels.com/photos/6966502/pexels-photo-6966502.jpeg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero {...heroData} />
      
      {/* Sponsors Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Proud Sponsor</h2>
          </div>
          <div className="flex justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <img
                src="https://hhsbands.org/wp-content/uploads/2024/03/Ocean-Storage-Logo-1.png"
                alt="Ocean Storage - Proud Sponsor"
                className="h-16 w-auto mx-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div style={{ display: 'none' }} className="text-center">
                <span className="text-lg font-bold text-primary-600">Ocean Storage</span>
                <p className="text-sm text-gray-600">Proud Sponsor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Empowering Students Through Music
            </h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Located in Chesapeake, Virginia, The Hickory High School Band is a multi-faceted program that includes not only superior-rated Concert Bands and Wind Ensemble, but also an award-winning Marching Band. The Hickory Marching Hawks perform at all home football games, and enter multiple competitions each year. The Concert Bands put on several concerts and perform at Band Assessment each year. The Hickory Winter Guard and Indoor Percussion programs thrive during the winter and spring months as they perform at competitions throughout Virginia.
            </p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-4 leading-relaxed">
              Located in the Hampton Roads area of Southeast Virginia, Hickory High School is located 25 miles from downtown Norfolk with easy access to Naval Station Norfolk, NAS Oceana, Virginia Beach Oceanfront and other popular Virginia destinations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                {/* Background Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary-500 rounded-lg">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest News
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2024 BOA Championship Success!</h3>
              <p className="text-gray-600 mb-6">
                The Hickory Marching Hawks achieved an incredible 2nd place overall finish at the BOA New Jersey Regional Championship, 
                showcasing months of dedication and hard work from our students and staff.
              </p>
              <Link
                to="/news"
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                Read More News
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl shadow-xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">SEVMG 2025</h3>
              <p className="text-primary-100 mb-6">
                Mark your calendars! The Southeastern Virginia Music Games will be held on 
                Saturday, September 27, 2025 at Hickory High School. Join us for this incredible 
                marching band competition.
              </p>
              <Link
                to="/sevmg"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Gallery title="Performance Gallery" />
      <Calendar title="Upcoming Events" />
    </div>
  );
};

export default Home;