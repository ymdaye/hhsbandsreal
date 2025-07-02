import React from 'react';
import { motion } from 'framer-motion';
import { DocumentArrowDownIcon, ClipboardDocumentListIcon, UserGroupIcon, CreditCardIcon, CalendarDaysIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

const ImportantDocuments = () => {
  const documentCategories = [
    {
      title: "Band Forms",
      description: "Required forms for band participation",
      icon: ClipboardDocumentListIcon,
      color: "from-blue-500 to-blue-600",
      documents: [
        { name: "Band Handbook", type: "PDF", description: "Complete guide to band policies and procedures" },
        { name: "Student Information Form", type: "PDF", description: "Required student and parent information" },
        { name: "Medical Form", type: "PDF", description: "Medical information and emergency contacts" },
        { name: "Transportation Permission", type: "PDF", description: "Permission for band trips and events" }
      ]
    },
    {
      title: "Payment Information",
      description: "Fee schedules and payment forms",
      icon: CreditCardIcon,
      color: "from-green-500 to-green-600",
      documents: [
        { name: "Band Fee Schedule", type: "PDF", description: "Complete breakdown of all band fees" },
        { name: "Payment Plan Options", type: "PDF", description: "Flexible payment arrangements available" },
        { name: "Fundraising Credit Form", type: "PDF", description: "Apply fundraising credits to fees" },
        { name: "Financial Aid Application", type: "PDF", description: "Need-based assistance information" }
      ]
    },
    {
      title: "HBPA Documents",
      description: "Parent association information and forms",
      icon: UserGroupIcon,
      color: "from-purple-500 to-purple-600",
      documents: [
        { name: "HBPA Membership Form", type: "PDF", description: "Join the Hickory Band Parents Association" },
        { name: "Volunteer Opportunities", type: "PDF", description: "Ways to support the band program" },
        { name: "Parent Meeting Minutes", type: "PDF", description: "Latest HBPA meeting notes" },
        { name: "Committee Sign-up", type: "PDF", description: "Join HBPA committees and activities" }
      ]
    },
    {
      title: "Performance Information",
      description: "Concert and competition details",
      icon: CalendarDaysIcon,
      color: "from-red-500 to-red-600",
      documents: [
        { name: "Performance Calendar", type: "PDF", description: "Complete schedule of all performances" },
        { name: "Uniform Guidelines", type: "PDF", description: "Proper uniform care and requirements" },
        { name: "Competition Rules", type: "PDF", description: "Rules and procedures for competitions" },
        { name: "Concert Etiquette", type: "PDF", description: "Guidelines for audience members" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/159656/document-agreement-documents-sign-159656.jpeg"
            alt="Important documents"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-800/90 to-primary-600/90"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Important Documents
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Access all essential forms, handbooks, and information for band participation
          </motion.p>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {documentCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <div className="flex items-center space-x-4">
                    <category.icon className="h-8 w-8 text-white" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                      <p className="text-white/90">{category.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {category.documents.map((doc, docIndex) => (
                      <div key={docIndex} className="border-l-4 border-primary-500 pl-4 py-2">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{doc.name}</h4>
                            <p className="text-sm text-gray-600">{doc.description}</p>
                          </div>
                          <span className="ml-3 px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded">
                            {doc.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Need a Specific Document?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact the band directors for assistance with any forms or documents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:directors@hickorybands.org"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
                Contact Directors
              </a>
              <a
                href="/parents"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-700 transition-all duration-200"
              >
                <InformationCircleIcon className="h-5 w-5 mr-2" />
                HBPA Information
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ImportantDocuments;