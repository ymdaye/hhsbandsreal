import React from 'react';
import { motion } from 'framer-motion';
import { UserGroupIcon, DocumentTextIcon, DevicePhoneMobileIcon, CalendarDaysIcon, HeartIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const Parents = () => {
  const documents = [
    {
      title: "HBPA Handbook",
      url: "http://hhsbands.org/wp-content/uploads/2024/09/Hickory-Band-Parent-Association-Handbook-v2.0.pdf",
      description: "Complete guide to the Hickory Band Parents Association"
    },
    {
      title: "HBPA Bylaws",
      url: "http://hhsbands.org/wp-content/uploads/2024/02/HBPA-Bylaws-updated-December-2023.docx-2.pdf",
      description: "Official bylaws and governance structure"
    }
  ];

  const communicationMethods = [
    {
      name: "BAND App",
      url: "https://band.us/",
      description: "Your go-to source for information, posts, events, subgroups, volunteer sign-ups, calendar, attachments and more.",
      icon: DevicePhoneMobileIcon,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Cut Time",
      url: "https://cuttime.net/index.cfm",
      description: "Used to send out important emails. Once your student fills out the commitment form, the band directors will send you an email invite to receive emails from Cut Time.",
      icon: DocumentTextIcon,
      color: "from-green-500 to-green-600"
    },
    {
      name: "HHS Band Website",
      url: "http://hhsbands.org/",
      description: "Official website with news, events, and important information.",
      icon: CalendarDaysIcon,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "HBPA Facebook Page",
      url: "https://www.facebook.com/groups/143380672349133/",
      description: "Community page for parent discussions and updates.",
      icon: UserGroupIcon,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const volunteerOpportunities = [
    {
      title: "Event Support",
      description: "Help with concerts, competitions, and special events throughout the year."
    },
    {
      title: "Fundraising",
      description: "Assist with fundraising activities that support our band program."
    },
    {
      title: "Transportation",
      description: "Help with chaperoning and transportation for band trips and competitions."
    },
    {
      title: "SEVMG Support",
      description: "Volunteer for our annual Southeastern Virginia Music Games competition."
    },
    {
      title: "Concessions",
      description: "Support game day and event concessions to fund band activities."
    },
    {
      title: "Equipment Management",
      description: "Help maintain and transport band equipment and instruments."
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
            Parents & HBPA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Hickory Band Parents Association - Supporting both band students and directors with many opportunities for parent involvement
          </motion.p>
        </div>
      </section>

      {/* HBPA Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary-500 rounded-lg">
                <HeartIcon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 ml-4">About HBPA</h2>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              HBPA is very involved with the band, supporting both band students and directors. 
              There are many opportunities for parents to be involved while their students are in high school. 
              We work together to create an exceptional musical experience for all our students.
            </p>
          </motion.div>

          {/* Documents Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Important Documents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <DocumentTextIcon className="h-8 w-8 text-primary-500 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{doc.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{doc.description}</p>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-500 text-white font-medium rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  >
                    Download PDF
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Communication Methods */}
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
              Stay Connected
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to stay informed about band activities, events, and important updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communicationMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <div className={`inline-flex items-center p-3 rounded-lg bg-gradient-to-r ${method.color} mb-6`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {method.name}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {method.description}
                </p>
                
                <a
                  href={method.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors duration-200"
                >
                  Visit {method.name}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Facebook Warning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-6"
          >
            <div className="flex items-center">
              <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600 mr-4" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800">Important Notice</h3>
                <p className="text-yellow-700 mt-1">
                  Please do not post video of the marching band performances on Facebook due to music copyrights.
                </p>
              </div>
            </div>
          </motion.div>
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
              Get involved and make a difference in our students' musical journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {opportunity.title}
                </h3>
                <p className="text-gray-600">
                  {opportunity.description}
                </p>
              </motion.div>
            ))}
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
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions? Get in Touch
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Have questions about HBPA or how to get involved? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/groups/143380672349133/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Join Facebook Group
              </a>
              <a
                href="mailto:contact@hhsbands.org"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-200"
              >
                Email HBPA
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Parents;