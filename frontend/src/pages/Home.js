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
    backgroundImage: "https://images.pexels.com/photos/343683/pexels-photo-343683.jpeg",
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
      title: "Elite Wind Ensemble",
      description: "Our advanced wind ensemble represents the pinnacle of musical achievement at Hickory High School, featuring our most accomplished student musicians.",
      icon: UserGroupIcon,
      image: "https://images.pexels.com/photos/258846/pexels-photo-258846.jpeg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero {...heroData} />
      
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Program Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in Chesapeake, Virginia, The Hickory High School Band is a multi-faceted program that includes superior-rated Concert Bands, Wind Ensemble, and an award-winning Marching Band.
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Spirit Wear Store Open!</h3>
              <p className="text-gray-600 mb-6">
                Our HHS Bands Spirit Wear store is open! Check out our new section specific shirts!!! 
                Be sure and click details on each item to see all the options.
              </p>
              <Link
                to="/spirit-wear"
                className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
              >
                Shop Now
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