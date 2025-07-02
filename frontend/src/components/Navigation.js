import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      dropdown: [
        { name: 'History', path: '/history' },
        { name: 'Staff', path: '/staff' },
        { name: 'Performance Groups', path: '/groups' },
        { name: 'Upcoming Events', path: '/#upcoming-events' }
      ]
    },
    { 
      name: 'Parents', 
      dropdown: [
        { name: 'HBPA Parent Info', path: '/parents' },
        { name: 'Payments', path: '/payments' },
        { name: 'Fundraising', path: '/fundraisers' }
      ]
    },
    { 
      name: 'Students', 
      dropdown: [
        { name: 'Performance Groups', path: '/groups' },
        { name: 'Students Login Page', path: '/students' }
      ]
    },
    { name: 'News', path: '/news' },
    { name: 'Fundraisers', path: '/fundraisers' },
    { name: 'SEVMG', path: '/sevmg' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (itemName) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const isActiveDropdown = (dropdown) => {
    return dropdown.some(item => location.pathname === item.path);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <Logo variant="navigation" size="medium" showText={false} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1 min-w-[100px] justify-center ${
                          isActiveDropdown(item.dropdown)
                            ? 'bg-primary-500 text-white'
                            : 'text-gray-800 hover:bg-primary-500/10 hover:text-primary-600'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDownIcon className="h-4 w-4" />
                      </button>
                      
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50"
                          >
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                  location.pathname === subItem.path
                                    ? 'bg-primary-500 text-white'
                                    : 'text-gray-700 hover:bg-primary-500/10 hover:text-primary-600'
                                }`}
                                onClick={() => setOpenDropdown(null)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 min-w-[100px] text-center inline-block ${
                        location.pathname === item.path
                          ? 'bg-primary-500 text-white'
                          : 'text-gray-800 hover:bg-primary-500/10 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors duration-200"
              aria-label="Open main menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md rounded-lg mt-2 mb-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.name)}
                          className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-200 flex items-center justify-between ${
                            isActiveDropdown(item.dropdown)
                              ? 'bg-primary-500 text-white'
                              : 'text-gray-700 hover:bg-primary-500/10 hover:text-primary-600'
                          }`}
                        >
                          <span>{item.name}</span>
                          <ChevronDownIcon 
                            className={`h-4 w-4 transition-transform duration-200 ${
                              openDropdown === item.name ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 space-y-1">
                                {item.dropdown.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                      location.pathname === subItem.path
                                        ? 'bg-primary-500 text-white'
                                        : 'text-gray-600 hover:bg-primary-500/10 hover:text-primary-600'
                                    }`}
                                    onClick={closeMenu}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                          location.pathname === item.path
                            ? 'bg-primary-500 text-white'
                            : 'text-gray-700 hover:bg-primary-500/10 hover:text-primary-600'
                        }`}
                        onClick={closeMenu}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;