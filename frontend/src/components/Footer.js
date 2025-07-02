import React from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'HBPA', path: '/parents' },
    { name: 'Sponsors', path: '/sponsors' }
  ];

  const parentLinks = [
    { name: 'Staff', path: '/staff' },
    { name: 'Payments', path: '/payments' },
    { name: 'Performance Groups', path: '/groups' },
    { name: 'Join the Band', path: '/join' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center lg:justify-items-start">
          {/* Logo and Description */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <Logo variant="white" size="large" showText={false} />
              <div>
                <h3 className="text-xl font-bold">Hickory High School</h3>
                <p className="text-gray-300">Band Program</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md mx-auto lg:mx-0">
              Excellence in Musical Education • Superior-Rated Concert Bands • Award-Winning Marching Band
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <MapPinIcon className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">1996 Hawk Blvd, Chesapeake, VA 23322</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <PhoneIcon className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">(757) 421-4400</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">contact@hhsbands.org</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Parents & Students */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-6">Band Program</h4>
            <ul className="space-y-3">
              {parentLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Hickory High School Band Program. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-200"
              >
                Terms of Use
              </Link>
              <div className="text-gray-500 text-sm">
                Built with ♪ for music education
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;