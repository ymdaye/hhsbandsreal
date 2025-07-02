import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, MapPinIcon, ClockIcon, CurrencyDollarIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const GolfTournament = () => {
  const eventDetails = [
    { icon: CalendarDaysIcon, label: "Date", value: "TBD - Spring 2025" },
    { icon: ClockIcon, label: "Format", value: "Shotgun Start" },
    { icon: MapPinIcon, label: "Location", value: "Local Golf Course" },
    { icon: CurrencyDollarIcon, label: "Entry Fee", value: "$125 per golfer" }
  ];

  const sponsorshipLevels = [
    {
      title: "Presenting Sponsor",
      amount: "$2,500",
      benefits: [
        "Tournament naming rights",
        "Logo on all materials",
        "4 golfer spots included",
        "Tee box signage",
        "Recognition at awards ceremony"
      ]
    },
    {
      title: "Gold Sponsor", 
      amount: "$1,000",
      benefits: [
        "2 golfer spots included",
        "Tee box signage",
        "Logo on event materials",
        "Recognition at ceremony"
      ]
    },
    {
      title: "Silver Sponsor",
      amount: "$500", 
      benefits: [
        "1 golfer spot included",
        "Tee box signage",
        "Logo on select materials"
      ]
    },
    {
      title: "Tee Sponsor",
      amount: "$150",
      benefits: [
        "Tee box signage",
        "Recognition in program"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-800">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg"
            alt="Golf Course"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-800/90 to-green-600/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Golf Tournament
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-green-100 max-w-3xl mx-auto"
          >
            Join us for a day on the course supporting music education at Hickory High School
          </motion.p>
        </div>
      </section>

      {/* Event Details */}
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
              Tournament Information
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventDetails.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <detail.icon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{detail.label}</h3>
                <p className="text-gray-600">{detail.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What's Included
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <TrophyIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">18 Holes of Golf</h3>
              <p className="text-gray-600">Full round with cart included</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <UserGroupIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lunch & Dinner</h3>
              <p className="text-gray-600">Meals and refreshments provided</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <TrophyIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Prizes & Awards</h3>
              <p className="text-gray-600">Competition prizes and giveaways</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
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
              Sponsorship Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to support music education while gaining valuable community exposure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipLevels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{level.title}</h3>
                  <div className="text-3xl font-bold text-white">{level.amount}</div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <TrophyIcon className="h-16 w-16 text-green-200 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Register your foursome or become a sponsor. Every participation helps fund 
              our students' musical education and performance opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@hhsbands.org"
                className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Register to Play
              </a>
              <a
                href="mailto:contact@hhsbands.org"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-700 transition-all duration-200"
              >
                Become a Sponsor
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GolfTournament;