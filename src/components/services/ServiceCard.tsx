'use client'

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ServiceSlide } from '@/types/services';

interface ServiceCardProps {
  service: ServiceSlide;
}

// Placeholder Icon (adjust as needed)
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { id, title, description, image, className } = service;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/services/${id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className={`block group relative w-full h-full rounded-lg overflow-hidden cursor-pointer ${className || ''}`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard; 