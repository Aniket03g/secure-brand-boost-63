
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="font-bold text-vtech-blue text-2xl animate-fade-in hover:text-vtech-darkBlue transition-colors duration-300">
        V TECHNOLOGIES
      </span>
    </div>
  );
};

export default Logo;
