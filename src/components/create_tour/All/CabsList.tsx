'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import EssentialsTabsBar, { Tab } from './EssentialsTabsBar';

interface CabsListProps {
  onBackToSearch: () => void;
  tabs: Tab[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
}

// Sample cabs data
const cabsData = [
  {
    id: 1,
    name: 'Premium SUV',
    rating: 4,
    description: 'Comfortable SUV with professional driver, perfect for family trips and group tours',
    price: 65,
    currency: 'USD',
    image: '/images/cabs/cab1.png',
    features: [
      { icon: IoLocationOutline, text: 'Up to 6 passengers' },
      { icon: IoLocationOutline, text: 'Air conditioned' },
      { icon: IoLocationOutline, text: 'Professional driver' },
      { icon: IoLocationOutline, text: 'Free cancellation' },
    ],
    score: 9.2,
    duration: 'Per day',
  },
  {
    id: 2,
    name: 'Premium SUV',
    rating: 4,
    description: 'Comfortable SUV with professional driver, perfect for family trips and group tours',
    price: 65,
    currency: 'USD',
    image: '/images/cabs/cab2.png',
    features: [
      { icon: IoLocationOutline, text: 'Up to 6 passengers' },
      { icon: IoLocationOutline, text: 'Air conditioned' },
      { icon: IoLocationOutline, text: 'Professional driver' },
      { icon: IoLocationOutline, text: 'Free cancellation' },
    ],
    score: 9.2,
    duration: 'Per day',
  },
  {
    id: 3,
    name: 'Premium SUV',
    rating: 4,
    description: 'Comfortable SUV with professional driver, perfect for family trips and group tours',
    price: 65,
    currency: 'USD',
    image: '/images/cabs/cab3.png',
    features: [
      { icon: IoLocationOutline, text: 'Up to 6 passengers' },
      { icon: IoLocationOutline, text: 'Air conditioned' },
      { icon: IoLocationOutline, text: 'Professional driver' },
      { icon: IoLocationOutline, text: 'Free cancellation' },
    ],
    score: 9.2,
    duration: 'Per day',
  },
];

const CabsList: React.FC<CabsListProps> = ({
  onBackToSearch,
  tabs,
  activeTabId,
  onTabChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState(200);

  return (
    <div className="container mx-auto bg-[#222629] min-h-screen text-white">
      <EssentialsTabsBar tabs={tabs} activeTabId={activeTabId} onTabChange={onTabChange} />
      {/* Filter Options */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map(star => (
              <FaStar key={star} className="text-[#06b6d4]" />
            ))}
          </div>
          <input
            type="range"
            min="0"
            max="500"
            value={priceRange}
            onChange={(e) => setPriceRange(parseInt(e.target.value))}
            className="w-32 accent-[#06b6d4]"
          />
          <span className="text-sm">{priceRange}$</span>
        </div>
      </div>

      {/* Cabs Listings */}
      <div className="px-4 space-y-4">
        {cabsData.map(cab => (
          <div key={cab.id} className="bg-[#1C1F22] rounded-xl overflow-hidden flex flex-col md:flex-row">
            {/* Cab Image */}
            <div className="relative h-64 md:h-auto md:w-1/3">
              <Image
                src={cab.image}
                alt={cab.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Cab Details */}
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{cab.name}</h3>
                  <div className="flex mt-1">
                    {Array.from({ length: cab.rating }).map((_, i) => (
                      <FaStar key={i} className="text-[#06b6d4] text-sm" />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#06b6d4]">
                    {cab.price}{cab.currency}
                  </div>
                  <span className="text-sm text-gray-400">{cab.duration}</span>
                </div>
              </div>

              <p className="text-sm text-gray-400 mt-2">{cab.description}</p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                {cab.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <feature.icon className="mr-2 text-gray-400" />
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Book button */}
              <div className="mt-4">
                <button className="bg-[#06b6d4] text-white px-6 py-2 rounded-full">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4 mt-4">
        <div className="text-[#06b6d4] text-sm">
          {String(currentPage).padStart(2, '0')}/05
        </div>
        <div className="flex space-x-2">
          <button
            className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, 5))}
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CabsList; 