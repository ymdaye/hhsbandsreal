import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, HeartIcon, TrophyIcon, GiftIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';

const Fundraisers = () => {
  const activeFundraisers = [
    {
      title: "Annual Craft Fair",
      description: "Join us for our popular annual craft fair featuring local artisans, vendors, and delicious food. A family-friendly event that supports our band program.",
      image: "https://images.pexels.com/photos/6966502/pexels-photo-6966502.jpeg",
      link: "/fundraisers/craft-show",
      status: "Active",
      icon: GiftIcon,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Golf Tournament",
      description: "Annual golf tournament for band supporters. Enjoy a day on the course while supporting musical education at Hickory High School.",
      image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg",
      link: "/fundraisers/golf",
      status: "Planning",
      icon: TrophyIcon,
      color: "from-green-500 to-green-600"
    },
    {
      title: "hAwkward Ask",
      description: "Our unique fundraising initiative where students reach out to family and friends for support. Every contribution makes a difference!",
      image: "https://images.pexels.com/photos/6869668/pexels-photo-6869668.jpeg",
      link: "/hawkward-ask",
      status: "Ongoing",
      icon: HeartIcon,
      color: "from-primary-500 to-primary-600"
    }
  ];

  const fundraisingGoals = [
    { title: "Instrument Maintenance", amount: "$5,000", description: "Professional maintenance and repairs for school instruments" },
    { title: "Uniforms & Equipment", amount: "$8,000", description: "Marching band uniforms and performance equipment" },
    { title: "Competition Travel", amount: "$12,000", description: "Transportation and lodging for competitions" },
    { title: "Music & Materials", amount: "$3,000", description: "Sheet music, stands, and educational materials" }
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
            Band Fundraisers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Supporting musical excellence through community partnership and engagement
          </motion.p>
        </div>
      </section>

      {/* Active Fundraisers */}
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
              Current Fundraisers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover ways to support our band program and help students achieve musical excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeFundraisers.map((fundraiser, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={fundraiser.image}
                    alt={fundraiser.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center p-2 rounded-lg bg-gradient-to-r ${fundraiser.color}`}>
                      <fundraiser.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      fundraiser.status === 'Active' ? 'bg-green-100 text-green-800' :
                      fundraiser.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {fundraiser.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {fundraiser.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {fundraiser.description}
                  </p>
                  
                  <Link
                    to={fundraiser.link}
                    className={`block w-full text-center px-6 py-3 bg-gradient-to-r ${fundraiser.color} text-white font-semibold rounded-lg hover:opacity-90 transform hover:scale-105 transition-all duration-200`}
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fundraising Goals */}
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
              Our Fundraising Goals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every dollar raised goes directly toward enhancing our students' musical education experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundraisingGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {goal.amount}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {goal.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white"
          >
            <CurrencyDollarIcon className="h-16 w-16 text-primary-200 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Ways to Support</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              There are many ways to support the Hickory High School Band Program. 
              Every contribution, no matter the size, makes a meaningful difference in our students' lives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <UserGroupIcon className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Volunteer</h3>
                <p className="text-primary-100 text-sm">Join our events and activities</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <HeartIcon className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Donate</h3>
                <p className="text-primary-100 text-sm">Make a direct contribution</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <GiftIcon className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Sponsor</h3>
                <p className="text-primary-100 text-sm">Support specific programs</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a
                href="mailto:contact@hhsbands.org"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Us About Supporting
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Fundraisers;