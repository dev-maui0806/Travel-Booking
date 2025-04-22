'use client'; // Need client-side state for tabs

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

// Mock data for places
const placesData = [
  {
    id: 'diglipur',
    name: "Diglipur",
    image: "/images/places/corbyns.png",
    description: "The Cellular Jail, also known as 'Kālā Pānī' (Black Water), was a British colonial prison in the Andaman and Nicobar Islands.",
  },
  {
    id: 'long',
    name: "Long",
    image: "/images/places/long.png",
    description: "Description for Long Island...",
  },
  {
    id: 'mayabandar',
    name: "Mayabandar",
    image: "/images/places/mayabunder.png",
    description: "Description for Mayabandar...",
  },
  {
    id: 'havelock',
    name: "Havelock",
    image: "/images/places/havelock.png",
    description: "Description for Havelock...",
  },
  {
    id: 'portblair',
    name: "Port Blair",
    image: "/images/places/port.png",
    description: "Description for Port Blair...",
  },
  {
    id: 'neil',
    name: "Neil",
    image: "/images/places/neil.png",
    description: "Description for Neil...",
  }
];

const UnforgettablePlacesSection: React.FC = () => {
  const router = useRouter();
  const [activeTabId, setActiveTabId] = useState(placesData[4].id);
  const [currentIndex, setCurrentIndex] = useState(4);
  const activePlace = placesData.find(place => place.id === activeTabId);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % placesData.length;
    setCurrentIndex(nextIndex);
    setActiveTabId(placesData[nextIndex].id);
  };

  const handlePrev = () => {
    const prevIndex = currentIndex === 0 ? placesData.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setActiveTabId(placesData[prevIndex].id);
  };
  const goToCreateTour = () =>{
    router.push(`/createTour/`);
  }
  return (
    <section className="bg-[#1a1d1f] text-white pt-[50px] pb-[50px]">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="pt-6 md:pt-16 pb-4 md:pb-8">
          <h2 className="text-[32px] leading-[1.2] md:text-5xl font-extralight">
            Unforgettable places of{' '}
            <span className="block md:inline">the islands</span>
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="relative mb-4 md:mb-8">
          <div className="overflow-x-auto">
            <div className="flex items-center space-x-2 bg-[#222629] rounded-full p-1 w-fit min-w-full md:min-w-0">
              {placesData.map((place) => (
                <button
                  key={place.id}
                  onClick={() => {
                    setActiveTabId(place.id);
                    setCurrentIndex(placesData.findIndex(p => p.id === place.id));
                  }}
                  className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full whitespace-nowrap transition-colors text-sm md:text-base ${
                    activeTabId === place.id
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  {place.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        {activePlace && (
          <div className="relative lg:h-[700px] md:h-[600px] h-[600px] bg-gradient-to-t from-black via-black/60 to-transparent rounded-[10px]">
            {/* Main Image */}
            <div className="relative w-full md:rounded-2xl overflow-hidden h-[300px]">
              <Image
                src={activePlace.image}
                alt={activePlace.name}
                fill
                className="lg:object-cover"
                priority
              />
            </div>

            {/* Mobile Description Overlay */}
            <div className=" bottom-0 left-0 right-0 py-10 md:pt-20 md:pb-16 px-4 md:hidden">
              <h3 className="text-[28px] font-light mb-2">
                {activePlace.name}
              </h3>
              <p className="text-[15px] text-gray-200 pb-3 leading-snug opacity-80">
                {activePlace.description}
              </p>
              <button onClick={goToCreateTour} className="flex items-center justify-center px-4 py-3 rounded-full bg-gradient-to-r from-[#bef264] to-[#06b6d4] text-white font-medium w-full">
                Start Exploring Port Blair
            </button>
            </div>

            {/* Desktop Preview Card */}
            <div className="hidden md:block absolute top-[-30px] p-5 right-8 bg-[#222629]/90 backdrop-blur-sm rounded-2xl overflow-hidden w-[400px]">

                <h3 className="text-2xl font-light mb-3">{activePlace.name}</h3>
              <div className="relative w-full h-[240px] p-4">
                <Image
                  src={activePlace.image}
                  alt={`${activePlace.name} preview`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {activePlace.description}
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="relative md:absolute right-0 bottom-[20px] md:right-0 flex px-4 justify-end items-center space-x-3 md:space-x-4">
              <span className="text-sm font-light text-[#06b6d4]">
                {String(currentIndex + 1).padStart(2, '0')}/{String(placesData.length).padStart(2, '0')}
              </span>
              <div className="flex space-x-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Previous"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label="Next"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default UnforgettablePlacesSection; 