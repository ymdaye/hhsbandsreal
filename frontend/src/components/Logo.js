import React from 'react';
import { LOGO_CONFIG } from '../config/logos';

const Logo = ({ variant = 'default', className = '', size = 'medium', showText = true }) => {
  // Select appropriate logo based on variant
  const getLogoConfig = () => {
    switch (variant) {
      case 'short':
        return LOGO_CONFIG.short;
      case 'full':
        return LOGO_CONFIG.full;
      case 'white':
        return LOGO_CONFIG.white;
      case 'light':
        return LOGO_CONFIG.light;
      case 'navigation':
        // Use full logo on desktop, short on mobile
        return window.innerWidth >= 768 ? LOGO_CONFIG.full : LOGO_CONFIG.short;
      default:
        return LOGO_CONFIG.full;
    }
  };

  const sizeClasses = {
    small: 'h-8 w-auto',
    medium: 'h-10 w-auto', 
    large: 'h-16 w-auto',
    hero: 'h-20 w-auto'
  };

  const logoConfig = getLogoConfig();

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoConfig.url}
        alt={logoConfig.alt}
        className={`${sizeClasses[size]} object-contain transition-opacity duration-200`}
        onError={(e) => {
          // Fallback to text logo if image fails to load
          console.error('Logo failed to load:', logoConfig.url);
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      {/* Fallback text logo */}
      <div 
        className="hidden bg-primary-500 rounded-lg px-3 py-2 items-center justify-center"
        style={{ display: 'none' }}
      >
        <span className="text-white font-bold text-lg">HHS</span>
      </div>
      {/* Optional text next to logo */}
      {showText && variant !== 'full' && (
        <span className="ml-3 text-xl font-bold text-gray-900 hidden sm:block">
          Hickory Bands
        </span>
      )}
    </div>
  );
};

export default Logo;