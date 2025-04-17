import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  ...props
}) => {
  const baseStyle = "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary: "bg-secondary text-gray-900 hover:bg-secondary/90 focus:ring-secondary",
    outline: "border border-primary text-primary hover:bg-primary/10 focus:ring-primary",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 