'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoClose } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";

interface PlaceDetailPanelProps {
  place: {
    id: number;
    name: string;
    image: string;
    description: string;
  };
  onClose: () => void;
}

const PlaceDetailPanel: React.FC<PlaceDetailPanelProps> = ({ place, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 12; // Assuming 12 slides as shown in the image (01/12)

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 1 ? totalSlides : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === totalSlides ? 1 : prev + 1));
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="relative w-full max-w-5xl bg-[#222629] rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px]">
            <Image
              src={place.image}
              alt={place.name}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-1/2 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2">{place.name}</h2>
            <div className="h-[350px] overflow-y-auto pr-2 text-gray-300">
              <p className="mb-4">
                {place.description}
              </p>
              <p>
                The Cellular Jail, also known as "Kālā Pānī" (Black Water), was a British colonial prison in the Andaman and Nicobar Islands.
              </p>
              <p className="mt-4">
                Shortly after the rebellion was suppressed, captured prisoners were put on trial, with many of them being executed. Others were exiled for life to the Andamans to prevent them from re-offending. Two hundred rebels were transported to the islands under the custody of the jailer David Barry and Major James Pattison Walker, an Indian Medical Service (IMS) doctor who had been warden of the prison at Agra.
              </p>
            </div>
            
            <div className="flex items-center justify-between mt-4">
              <div className="text-[#06b6d4]">
                {String(currentSlide).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={handlePrevSlide}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNextSlide}
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <button className="w-10 h-10 bg-[#06b6d4] rounded-full flex items-center justify-center">
                <HiOutlineShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 w-8 h-8 bg-[#222629] rounded-full flex items-center justify-center text-white"
          onClick={onClose}
        >
          <IoClose size={20} />
        </button>
      </div>
    </div>
  );
};

export default PlaceDetailPanel;