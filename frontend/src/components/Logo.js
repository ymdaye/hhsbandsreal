import React from 'react';

const Logo = ({ variant = 'default', className = '', size = 'medium' }) => {
  // Logo variants for different use cases
  const logoVariants = {
    // For light backgrounds - use dark/black logos
    default: {
      primary: "https://drive.google.com/uc?export=view&id=1y_NWLdD2aYq8Len7p7xXuh_x8FDAnHRT", // Black logo
      alt: "Hickory High School Bands Logo"
    },
    // For dark backgrounds - use white/light logos  
    light: {
      primary: "https://drive.google.com/uc?export=view&id=1y_NWLdD2aYq8Len7p7xXuh_x8FDAnHRT", // White logo (to be updated)
      alt: "Hickory High School Bands Logo - Light"
    },
    // For teal backgrounds - use white logos
    onTeal: {
      primary: "https://drive.google.com/uc?export=view&id=1y_NWLdD2aYq8Len7p7xXuh_x8FDAnHRT", // White logo (to be updated)
      alt: "Hickory High School Bands Logo - On Teal"
    }
  };

  const sizeClasses = {
    small: 'h-8 w-auto',
    medium: 'h-10 w-auto', 
    large: 'h-16 w-auto',
    hero: 'h-20 w-auto'
  };

  const currentLogo = logoVariants[variant] || logoVariants.default;

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={currentLogo.primary}
        alt={currentLogo.alt}
        className={`${sizeClasses[size]} object-contain`}
        onError={(e) => {
          // Fallback to text logo if image fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      {/* Fallback text logo */}
      <div 
        className="hidden bg-primary-500 rounded-lg px-3 py-2"
        style={{ display: 'none' }}
      >
        <span className="text-white font-bold text-lg">HHS</span>
      </div>
    </div>
  );
};

export default Logo;