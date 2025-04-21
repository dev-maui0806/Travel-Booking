'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IoClose } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Define the Place interface
export interface Place {
  id: number;
  image: string;
  name: string;
  description: string;
  mapImage?: string;
}

// Sample data for places
export const places: Place[] = [
  {
    id: 1,
    image: "/images/places/corbyns.png",
    name: "Diglipur",
    description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
    mapImage: "/images/maps/create_tour/google-map-diglipur.png"
  },
  {
    id: 2,
    image: "/images/places/havelock.png",
    name: "HaveLock",
    description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
    mapImage: "/images/maps/create_tour/google-map-havelock.png"
  },
  {
    id: 3,
    image: "/images/places/long.png",
    name: "Long",
    description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
    mapImage: "/images/maps/create_tour/google-map-long.png"
  },
  {
    id: 4,
    image: "/images/places/neil.png",
    name: "Neil",
    description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
    mapImage: "/images/maps/create_tour/google-map-neil.png"
  },
  {
    id: 5,
    image: "/images/places/port.png",
    name: "Port",
    description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
    mapImage: "/images/maps/create_tour/google-map-port_blair.png"
  },
];

interface CreateTourIntroProps {
  placesData?: Place[];
  initialIndex?: number;
  onClose?: () => void;
  onAddToCart?: (place: Place) => void;
  isVisible?: boolean;
}

const CreateTourIntro: React.FC<CreateTourIntroProps> = ({
  placesData = places,
  initialIndex = 0,
  onClose = () => {},
  onAddToCart = () => {},
  isVisible = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const currentPlace = placesData[currentIndex];

  if (!isVisible || !currentPlace) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === placesData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? placesData.length - 1 : prev - 1));
  };

  const handleAddToCart = () => {
    onAddToCart(currentPlace);
  };

  return (
    <div className="container mx-auto inset-0 bg-[#222629] z-50 flex flex-col">
      {/* Image Container */}
      <div className="relative flex-1">
        <Image
          src={currentPlace.image}
          alt={currentPlace.name}
          fill
          className="object-cover"
          priority
        />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 rounded-full p-2 text-white"
        >
          <IoClose size={24} />
        </button>
      </div>

      {/* Content Section */}
      <div className="bg-[#222629] p-6 relative">
        {/* Title and Description */}
        <h1 className="text-2xl font-medium text-white mb-2">{currentPlace.name}</h1>
        <p className="text-white/80 text-sm mb-6 max-h-[120px] overflow-y-auto">
          {currentPlace.description}
        </p>

        {/* Navigation and Pagination */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-[#06b6d4] font-medium">
              {String(currentIndex + 1).padStart(2, '0')}/{String(placesData.length).padStart(2, '0')}
            </span>
            <div className="flex space-x-2">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
              >
                <IoIosArrowBack size={20} className="text-white" />
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10"
              >
                <IoIosArrowForward size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
            onClick={handleAddToCart}
            className="bg-[#06b6d4] text-white p-3 rounded-full shadow-lg"
          >
            <HiOutlineShoppingBag size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTourIntro;