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

      {/* HBPA Contacts */}
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
              HBPA Leadership & Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our dedicated parent volunteers who make the magic happen
            </p>
          </motion.div>

          {/* Officers */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">HBPA Officers</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-xl font-bold text-primary-600 mb-2">Amy Paris</h4>
                <p className="text-gray-900 font-semibold">President</p>
                <a href="mailto:president@hickorybands.org" className="text-primary-600 hover:text-primary-700 text-sm">
                  president@hickorybands.org
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-xl font-bold text-primary-600 mb-2">Misty Leslie</h4>
                <p className="text-gray-900 font-semibold">Vice President</p>
                <a href="mailto:vicepresident@hickorybands.org" className="text-primary-600 hover:text-primary-700 text-sm">
                  vicepresident@hickorybands.org
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-xl font-bold text-primary-600 mb-2">Jessica Geffers</h4>
                <p className="text-gray-900 font-semibold">2nd Vice President</p>
                <a href="mailto:vicepresident2@hickorybands.org" className="text-primary-600 hover:text-primary-700 text-sm">
                  vicepresident2@hickorybands.org
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-xl font-bold text-primary-600 mb-2">Jason Darish</h4>
                <p className="text-gray-900 font-semibold">Treasurer</p>
                <a href="mailto:treasurer@hickorybands.org" className="text-primary-600 hover:text-primary-700 text-sm">
                  treasurer@hickorybands.org
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-xl font-bold text-primary-600 mb-2">Jennifer Wilhite</h4>
                <p className="text-gray-900 font-semibold">Vice Treasurer</p>
                <a href="mailto:vicetreasurer@hickorybands.org" className="text-primary-600 hover:text-primary-700 text-sm">
                  vicetreasurer@hickorybands.org
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-xl font-bold text-primary-600 mb-2">Shauna Bowen</h4>
                <p className="text-gray-900 font-semibold">Secretary</p>
                <a href="mailto:secretary@hickorybands.org" className="text-primary-600 hover:text-primary-700 text-sm">
                  secretary@hickorybands.org
                </a>
              </motion.div>
            </div>
          </div>

          {/* Key Committee Chairs */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Committee Chairs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">SEVMG</h4>
                <p className="text-primary-600 font-semibold">MariSara Butts</p>
                <p className="text-primary-600 font-semibold">Ryan Jones</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Craft Fair</h4>
                <p className="text-primary-600 font-semibold">Melissa Jones</p>
                <a href="mailto:craftshowhickory@gmail.com" className="text-primary-600 hover:text-primary-700 text-sm block">
                  craftshowhickory@gmail.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Corporate Sponsorships</h4>
                <p className="text-primary-600 font-semibold">Alizabeth Lee</p>
                <a href="mailto:sponsorships@hickorybands.org" className="text-primary-600 hover:text-primary-700 text-sm block">
                  sponsorships@hickorybands.org
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Chaperones</h4>
                <p className="text-primary-600 font-semibold">Jessica Getters</p>
                <p className="text-primary-600 font-semibold">Jennifer Wilhite</p>
                <a href="mailto:chaperones@hickorybands.org" className="text-primary-600 hover:text-primary-700 text-sm block">
                  chaperones@hickorybands.org
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">RaiseRight Gift Cards</h4>
                <p className="text-primary-600 font-semibold">Tammy Walters</p>
                <a href="mailto:hbpascrip@gmail.com" className="text-primary-600 hover:text-primary-700 text-sm block">
                  hbpascrip@gmail.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Communications</h4>
                <p className="text-primary-600 font-semibold">Misty Leslie</p>
                <a href="mailto:communcations@hickorybands.org" className="text-primary-600 hover:text-primary-700 text-sm block">
                  communcations@hickorybands.org
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Concessions</h4>
                <p className="text-primary-600 font-semibold">Christy Lucas</p>
                <p className="text-primary-600 font-semibold">Michelle Tibbit</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Band Banquet</h4>
                <p className="text-primary-600 font-semibold">Laura Rouse</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Pit Crew</h4>
                <p className="text-primary-600 font-semibold">Jason Reed</p>
                <p className="text-primary-600 font-semibold">Jason Butts</p>
                <p className="text-primary-600 font-semibold">Scott Brooks</p>
                <p className="text-primary-600 font-semibold">Ryan Jones</p>
              </motion.div>
            </div>
          </div>

          {/* Vacant Positions */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Volunteer Opportunities - Open Positions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Concessions</h4>
                <p className="text-primary-600 font-semibold">Christy Lucas</p>
                <p className="text-primary-600 font-semibold">Michelle Tibbit</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Band Banquet</h4>
                <p className="text-primary-600 font-semibold">Laura Rouse</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Pit Crew</h4>
                <p className="text-primary-600 font-semibold">Jason Reed</p>
                <p className="text-primary-600 font-semibold">Jason Butts</p>
                <p className="text-primary-600 font-semibold">Scott Brooks</p>
                <p className="text-primary-600 font-semibold">Ryan Jones</p>
              </motion.div>
            </div>
          </div>

          {/* Vacant Positions */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Volunteer Opportunities - Open Positions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-yellow-800 mb-2">Golf Tournament Chair</h4>
                <p className="text-yellow-700 font-semibold">OPEN - Volunteer Needed!</p>
                <p className="text-sm text-yellow-600 mt-2">Help organize our annual golf tournament fundraiser</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-yellow-800 mb-2">Virtual 5K Chair</h4>
                <p className="text-yellow-700 font-semibold">OPEN - Volunteer Needed!</p>
                <p className="text-sm text-yellow-600 mt-2">Coordinate our virtual 5K fundraising event</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-yellow-800 mb-2">Spirit Wear Chair</h4>
                <p className="text-yellow-700 font-semibold">OPEN - Volunteer Needed!</p>
                <p className="text-sm text-yellow-600 mt-2">Manage spirit wear sales and inventory</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-yellow-800 mb-2">Travel Chair</h4>
                <p className="text-yellow-700 font-semibold">OPEN - Volunteer Needed!</p>
                <p className="text-sm text-yellow-600 mt-2">Coordinate band travel arrangements</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-yellow-800 mb-2">Uniform Washing Chair</h4>
                <p className="text-yellow-700 font-semibold">OPEN - Volunteer Needed!</p>
                <p className="text-sm text-yellow-600 mt-2">Organize uniform cleaning efforts</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-yellow-800 mb-2">Website Chair</h4>
                <p className="text-yellow-700 font-semibold">OPEN - Volunteer Needed!</p>
                <p className="text-sm text-yellow-600 mt-2">Help maintain the band website</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-yellow-800 mb-2">Nominating Committee</h4>
                <p className="text-yellow-700 font-semibold">OPEN - Volunteer Needed!</p>
                <p className="text-sm text-yellow-600 mt-2">Help nominate future HBPA officers</p>
              </motion.div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-primary-50 rounded-2xl p-6 max-w-2xl mx-auto">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Ready to Volunteer?</h4>
                <p className="text-gray-600 mb-4">
                  Interested in taking on one of these leadership roles? Contact the HBPA President for more information.
                </p>
                <a
                  href="mailto:president@hickorybands.org"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  Contact HBPA President
                </a>
              </div>
            </div>
          </div>

          {/* Section Liaisons */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Section Parent Liaisons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Flute</h4>
                <p className="text-primary-600">Kristin Belfield</p>
                <p className="text-primary-600">Sam Belfield</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Clarinet</h4>
                <p className="text-primary-600">Jolynn Roush</p>
                <p className="text-primary-600">Samantha Emmert</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Saxophone</h4>
                <p className="text-primary-600">Laura Rouse</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Trumpet & Mellophone</h4>
                <p className="text-primary-600">Diane Schneider</p>
                <p className="text-primary-600">Amy Paris</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Low Brass</h4>
                <p className="text-primary-600">Jason Reed</p>
                <p className="text-primary-600">Alicia Reed</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Battery</h4>
                <p className="text-primary-600">Michelle Brooks</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Front Ensemble</h4>
                <p className="text-primary-600">Shauna Bowen</p>
                <p className="text-primary-600">Marie Dyer</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-2">Color Guard</h4>
                <p className="text-primary-600">Misty Leslie</p>
              </motion.div>
            </div>
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