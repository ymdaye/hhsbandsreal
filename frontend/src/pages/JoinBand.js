import React from 'react';
import { motion } from 'framer-motion';
import { MusicalNoteIcon, UserGroupIcon, TrophyIcon, HeartIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const JoinBand = () => {
  const benefits = [
    {
      icon: MusicalNoteIcon,
      title: "Musical Excellence",
      description: "Develop your musical skills with superior-rated ensembles and experienced directors"
    },
    {
      icon: UserGroupIcon,
      title: "Lifelong Friendships",
      description: "Build lasting relationships with dedicated students who share your passion for music"
    },
    {
      icon: TrophyIcon,
      title: "Competition Success",
      description: "Participate in award-winning programs with a history of championship performances"
    },
    {
      icon: HeartIcon,
      title: "Personal Growth",
      description: "Develop discipline, teamwork, and leadership skills that last a lifetime"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Choose Concert Band",
      description: "Select 'Concert Band' on your course selection sheet during January/February of your 8th Grade year"
    },
    {
      number: "2", 
      title: "Late Registration OK",
      description: "If you missed course selection, contact your guidance counselor or band directors - it's not too late!"
    },
    {
      number: "3",
      title: "Class Placement",
      description: "All 9th grade students will be enrolled in one of two Concert Band classes"
    },
    {
      number: "4",
      title: "Consider Marching Band",
      description: "Join the award-winning Marching Hawks for an incredible experience (commitment forms due May 23rd)"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/210764/pexels-photo-210764.jpeg"
            alt="Students playing music"
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
            Join the Band
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Welcome to one of the most incredible opportunities our school can offer your child
          </motion.p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-12 text-center"
          >
            <MusicalNoteIcon className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Hickory High School Band</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              It is with great excitement that we welcome you to a new year in the Hickory High School Band program! 
              Playing a musical instrument and acquiring the unique habits of mind that come with it is one of the 
              most incredible opportunities that our school can offer your child.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How to Join */}
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
              How to Join
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started in our band program is easier than you might think
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Band */}
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
              Why Join Band?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Music education is more than just playing an instrument – it's immersing your child in a culture of successful students and teachers who care about education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Information */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <ClockIcon className="h-12 w-12 text-primary-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Class Schedule</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  <strong>High School Band operates on an alternating day (A/B) schedule.</strong>
                </p>
                <p className="text-gray-600">
                  Students will have a 90 minute band class every other day during 1st block. 
                  Their first block on the alternating day will most likely be P.E.
                </p>
                <p className="text-gray-600">
                  All 9th grade students will be enrolled in one of two Concert Band classes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-xl p-8 text-white"
            >
              <TrophyIcon className="h-12 w-12 text-primary-200 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Marching Hawks</h3>
              <div className="space-y-4">
                <p className="text-primary-100">
                  The Hickory Marching Hawks have a long history of excellence and are one of the most 
                  dedicated and passionate organizations at Hickory High School.
                </p>
                <p className="text-primary-100">
                  <strong>Season:</strong> Begins with August Band Camp. When school begins, rehearsals are 
                  after school on Tuesday, Wednesday and Thursday.
                </p>
                <p className="text-primary-100">
                  <strong>Commitment forms due:</strong> May 23rd
                </p>
                <a
                  href="https://hhsbands.org/ensembles/marching-band/sign-up/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Sign Up for Marching Band
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl p-12"
          >
            <div className="text-center mb-8">
              <DocumentTextIcon className="h-16 w-16 text-primary-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">A Message from Our Directors</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We encourage parents to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-primary-50 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">Treasure the Escape</h4>
                  <p className="text-gray-600 text-sm">From 'high-stakes' studies</p>
                </div>
                <div className="text-center p-6 bg-primary-50 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">Embrace 'Offline' Time</h4>
                  <p className="text-gray-600 text-sm">Value time away from devices</p>
                </div>
                <div className="text-center p-6 bg-primary-50 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-2">Understand Importance</h4>
                  <p className="text-gray-600 text-sm">Music is crucial for growth</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 text-center italic">
                "Your child's instrumental music experience is just as crucial to their growth as human beings as any other subject."
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Have questions about joining our band program? Our directors are here to help you get started!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/staff"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Contact Our Directors
              </a>
              <a
                href="https://hhsbands.org/ensembles/marching-band/sign-up/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-200"
              >
                Sign Up for Marching Band
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JoinBand;