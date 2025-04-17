import React from 'react';

interface TabButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ children, className, isActive, ...props }) => {
  const baseStyle = "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 focus:outline-none";
  const activeStyle = "bg-primary text-white";
  const inactiveStyle = "bg-gray-700 text-gray-300 hover:bg-gray-600";

  return (
    <button
      className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default TabButton; 