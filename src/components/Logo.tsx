
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/lovable-uploads/6c24bed7-8c07-4330-8f92-070d97bc0b10.png" 
        alt="V Technologies Logo" 
        className="h-12"
      />
      <span className="font-bold text-vtech-blue text-2xl">V TECHNOLOGIES</span>
    </div>
  );
};

export default Logo;
