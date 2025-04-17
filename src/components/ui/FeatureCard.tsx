import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode; // Allow passing SVG or other elements as icon
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-primary transition-colors duration-300 flex flex-col items-start text-left">
      <div className="mb-4 text-primary"> 
        {/* Icon container - adjust size as needed */} 
        <div className="w-10 h-10"> 
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard; 