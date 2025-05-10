
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/lovable-uploads/b366e089-fdf9-4e83-83de-3be554d38592.png"
        alt="V Technologies Logo" 
        className="h-12 w-auto filter brightness-125"
      />
      <span className="font-bold text-accent text-2xl hover:text-accent/90 transition-colors duration-300 gradient-text">
        V TECHNOLOGIES
      </span>
    </div>
  );
};

export default Logo;
