import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, MapPinIcon, CurrencyDollarIcon, TrophyIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';

const SEVMG = () => {
  const judges = [
    { 
      name: "Andres Gonzalez", 
      category: "Music Ensemble",
      bio: "Andres Gonzalez brings extensive experience in marching band music ensemble judging with a focus on musical excellence and ensemble precision. His expertise helps bands achieve superior musical performance standards."
    },
    { 
      name: "Marc Whitlock", 
      category: "Music Effect",
      bio: "Marc Whitlock specializes in evaluating the overall musical impact and effect of marching band performances. His keen ear for musical interpretation and expression guides bands toward more compelling performances."
    },
    { 
      name: "Alex Kluttz", 
      category: "Percussion",
      bio: "Alex Kluttz is a respected percussion specialist with years of experience in marching percussion performance and instruction. His expertise in battery and front ensemble helps percussion sections achieve technical excellence."
    },
    { 
      name: "Lacie Knight", 
      category: "Color Guard",
      bio: "Lacie Knight brings professional expertise in color guard performance and instruction. Her background in movement, equipment, and visual design helps guard sections refine their artistic expression and technical skills."
    },
    { 
      name: "TBA", 
      category: "Visual Effect",
      bio: "Our Visual Effect judge evaluates the overall visual impact and artistic impression of the marching band performance, focusing on how all visual elements work together to create a compelling show."
    },
    { 
      name: "TBA", 
      category: "Visual Ensemble",
      bio: "The Visual Ensemble judge focuses on the precision, technique, and overall visual execution of the marching band's drill and movement, ensuring excellence in marching fundamentals."
    }
  ];

  const ticketInfo = [
    { type: "Adults (13+)", price: "$15" },
    { type: "Youth (6-12)", price: "$10" },
    { type: "Children (5 & under)", price: "Free" }
  ];

  const volunteerRoles = [
    {
      title: "Concessions",
      description: "Assisting with food preparation and sales during the event",
      icon: "🍕"
    },
    {
      title: "Pit Crew", 
      description: "Helping transport and set up equipment and props for performances",
      icon: "🔧"
    },
    {
      title: "Chaperones",
      description: "Supervising band members during the event", 
      icon: "👥"
    },
    {
      title: "Hospitality",
      description: "Providing support in the hospitality tent for directors, bus drivers, and staff",
      icon: "☕"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/32751943/pexels-photo-32751943.jpeg"
            alt="Marching Band Competition"
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
            SEVMG 2025
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-primary-100 mb-8"
          >
            Southeastern Virginia Music Games
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
              <CalendarDaysIcon className="h-6 w-6 text-white" />
              <span className="text-white font-semibold">Saturday, September 27, 2025</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg px-6 py-3">
              <MapPinIcon className="h-6 w-6 text-white" />
              <span className="text-white font-semibold">Hickory High School</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://competitionsuite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
            >
              Band Registration - Competition Suite
            </a>
            <a
              href="mailto:contact@hhsbands.org"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-200"
            >
              Volunteer Sign-Up
            </a>
            <a
              href="/tickets"
              className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              Buy Tickets
            </a>
          </div>
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
              Event Information
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The SEVMG is a Virginia Marching Band Cooperative (VMBC) sanctioned event, providing bands with 
              valuable feedback from a distinguished panel of adjudicators early in the season.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Location & Time */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-500 rounded-lg">
                  <MapPinIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Location</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Hickory High School</h4>
                  <p className="text-gray-600">1996 Hawk Blvd</p>
                  <p className="text-gray-600">Chesapeake, VA 23322</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon className="h-5 w-5 text-primary-500" />
                  <span className="text-gray-700">All Day Event</span>
                </div>
              </div>
            </motion.div>

            {/* Ticket Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-500 rounded-lg">
                  <CurrencyDollarIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Tickets</h3>
              </div>
              <div className="space-y-4">
                {ticketInfo.map((ticket, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{ticket.type}</span>
                    <span className="font-semibold text-primary-600">{ticket.price}</span>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-primary-700">
                    Tickets available online or at the gate
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Band Registration */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary-500 rounded-lg">
                  <UserGroupIcon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">Band Registration</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Registration Fee</span>
                  <span className="font-semibold text-primary-600">$150</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Payment To:</h4>
                  <p className="text-gray-600">Hickory Band Parents Association (HBPA)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mail To:</h4>
                  <p className="text-gray-600 text-sm">
                    Hickory High School Band<br />
                    Attn: Mitchell Reed<br />
                    1996 Hawk Blvd<br />
                    Chesapeake, VA 23322
                  </p>
                </div>
                <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                  <p className="text-sm text-primary-700">
                    Register via Competition Suite
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Judging Panel */}
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
              Distinguished Judging Panel
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our expert judges provide valuable feedback to help bands improve and excel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {judges.map((judge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="mb-4">
                  <TrophyIcon className="h-12 w-12 text-primary-500 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{judge.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{judge.category}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{judge.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
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
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The success of SEVMG heavily relies on volunteers. Join us in making this event exceptional!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">{role.icon}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm">{role.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Volunteer sign-ups are available through SignUpGenius. Specific links for SEVMG volunteer opportunities will be provided closer to the event date.
            </p>
            <a
              href="mailto:contact@hhsbands.org"
              className="inline-flex items-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
            >
              Contact Us About Volunteering
            </a>
          </motion.div>
        </div>
      </section>

      {/* Fundraising Impact */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Supporting Our Program</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              The SEVMG is the largest fundraiser of the year for the Marching Hawks. 
              Volunteers, including parents and students, are essential to its success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Volunteer Opportunities</h3>
                <p className="text-primary-100 mb-4">
                  Join our team of dedicated volunteers and help make SEVMG 2025 a success.
                </p>
                <a
                  href="mailto:contact@hhsbands.org"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Volunteer Information
                </a>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Sponsorship & Ads</h3>
                <p className="text-primary-100 mb-4">
                  Support our event through banner advertisements and program ads.
                </p>
                <a
                  href="mailto:contact@hhsbands.org"
                  className="inline-flex items-center px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Sponsorship Forms
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SEVMG;