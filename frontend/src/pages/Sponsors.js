import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, StarIcon, TrophyIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const Sponsors = () => {
  const sponsorshipLevels = [
    {
      title: "Platinum Sponsor",
      amount: "$5,000+",
      benefits: [
        "Logo prominently displayed on website",
        "Recognition at all concerts and events",
        "Program advertisement space",
        "Social media recognition",
        "Banner at SEVMG competition",
        "Season tickets to all performances"
      ],
      color: "from-gray-400 to-gray-600"
    },
    {
      title: "Gold Sponsor",
      amount: "$2,500 - $4,999",
      benefits: [
        "Logo displayed on website",
        "Recognition at major events",
        "Program advertisement",
        "Social media mentions",
        "Banner placement"
      ],
      color: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Silver Sponsor",
      amount: "$1,000 - $2,499",
      benefits: [
        "Name listed on website",
        "Recognition in programs",
        "Social media acknowledgment",
        "Event announcements"
      ],
      color: "from-gray-300 to-gray-500"
    },
    {
      title: "Bronze Sponsor",
      amount: "$500 - $999",
      benefits: [
        "Name listed on website",
        "Recognition in programs",
        "Thank you acknowledgment"
      ],
      color: "from-orange-400 to-orange-600"
    }
  ];

  const currentSponsors = [
    {
      name: "Ocean Storage",
      level: "Platinum Sponsor",
      logo: "https://hhsbands.org/wp-content/uploads/2024/03/Ocean-Storage-Logo-1.png",
      description: "Ocean Storage has been a proud supporter of the Hickory High School Band Program, helping us achieve excellence in musical education."
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
            Our Sponsors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Thank you to our generous sponsors who make our musical excellence possible
          </motion.p>
        </div>
      </section>

      {/* Current Sponsors */}
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
              Current Sponsors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are grateful for the support of these outstanding community partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center"
              >
                <div className="mb-6">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="h-20 w-auto mx-auto"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{ display: 'none' }}>
                    <BuildingOfficeIcon className="h-20 w-20 text-primary-500 mx-auto" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{sponsor.name}</h3>
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full mb-4">
                  {sponsor.level}
                </span>
                <p className="text-gray-600 leading-relaxed">{sponsor.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
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
              Sponsorship Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to support music education and gain valuable community exposure
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
                <div className={`bg-gradient-to-r ${level.color} p-6 text-center`}>
                  <h3 className="text-xl font-bold text-white mb-2">{level.title}</h3>
                  <div className="text-2xl font-bold text-white">{level.amount}</div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3">
                    {level.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <StarIcon className="h-4 w-4 text-primary-500 mr-3 mt-1 flex-shrink-0" />
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

      {/* Why Sponsor */}
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
              Why Sponsor Our Program?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <HeartIcon className="h-16 w-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Support music education and help students develop discipline, teamwork, and artistic expression 
                that will benefit them throughout their lives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <TrophyIcon className="h-16 w-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence Recognition</h3>
              <p className="text-gray-600 leading-relaxed">
                Associate your business with our award-winning program that consistently achieves superior ratings 
                and championship-level performances.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <BuildingOfficeIcon className="h-16 w-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Exposure</h3>
              <p className="text-gray-600 leading-relaxed">
                Gain valuable exposure to the Chesapeake community and Hampton Roads region through our events, 
                competitions, and performances.
              </p>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Become a Sponsor</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Ready to support music education and gain valuable community exposure? 
              Contact us to discuss sponsorship opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@hhsbands.org"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us About Sponsorship
              </a>
              <a
                href="/fundraisers"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-200"
              >
                View Fundraising Opportunities
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;