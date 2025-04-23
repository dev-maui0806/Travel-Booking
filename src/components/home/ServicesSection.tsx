'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdLocalHotel } from "react-icons/md";
import { FaFerry } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
// Mock Data for Services
const servicesData = [
  {
    id: 1,
    title: "Game Fishing",
    description: "The Andaman Islands are very famous in the international community for their fishing. Fishing in the Andaman Islands is very popular and such fishing trips are conducted in both Port Blair and Havelock Island",
    image: "/images/services/game-fishing.png",
    link: "/services/game-fishing",
  },
  {
    id: 2,
    title: "Scuba Diving",
    description: "Experience the vibrant coral reefs and marine life with guided scuba diving tours...",
    image: "/images/services/scuba-diving.png",
    link: "/services/scuba-diving",
  },
  {
    id: 3,
    title: "Sea Walk",
    description: "Walk on the ocean floor and get up close with the underwater world without knowing how to swim...",
    image: "/images/services/sea-walk.png",
    link: "/services/sea-walk",
  },
  {
    id: 4,
    title: "Snorkeling",
    description: "Explore the shallow reefs teeming with colorful fish. Perfect for all ages...",
    image: "/images/services/snorkeling.png",
    link: "/services/snorkeling",
  },
  {
    id: 5,
    title: "Kayaking",
    description: "Paddle through serene mangrove creeks or explore hidden coves at your own pace...",
    image: "/images/services/kayaking.png",
    link: "/services/kayaking",
  },
  {
    id: 6,
    title: "Speed Boat Rides",
    description: "Feel the thrill of speed as you zip across the turquoise waters surrounding the islands...",
    image: "/images/services/speed-boat.png",
    link: "/services/speed-boat",
  },
  // Additional services for carousel rotation
  {
    id: 7,
    title: "Island Hopping",
    description: "Explore multiple islands in a day with our guided island hopping tours...",
    image: "/images/services/snorkeling.png",
    link: "/services/island-hopping",
  },
  {
    id: 8,
    title: "Beach Camping",
    description: "Experience the beauty of sleeping under the stars at pristine beaches...",
    image: "/images/services/sea-walk.png",
    link: "/services/beach-camping",
  },
  {
    id: 9,
    title: "Luxury Cruises",
    description: "Enjoy the islands from the comfort of a luxury cruise ship with all amenities...",
    image: "/images/services/kayaking.png",
    link: "/services/luxury-cruises",
  },
  {
    id: 10,
    title: "Jet Skiing",
    description: "Feel the adrenaline rush as you ride the waves on our powerful jet skis...",
    image: "/images/services/scuba-diving.png",
    link: "/services/jet-skiing",
  },
  {
    id: 11,
    title: "Sunset Cruises",
    description: "Witness breathtaking sunsets over the horizon while cruising the azure waters...",
    image: "/images/services/speed-boat.png",
    link: "/services/sunset-cruises",
  },
  {
    id: 12,
    title: "Parasailing",
    description: "Soar high above the ocean for a bird's eye view of the stunning islands...",
    image: "/images/services/game-fishing.png",
    link: "/services/parasailing",
  },
];

const ServicesSection = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const totalSets = Math.ceil(servicesData.length / 6);
  const [mobileExperienceSet, setMobileExperienceSet] = useState(0);
  const totalMobileExperienceSets = Math.ceil(servicesData.length / 4);
  const handleNext = () => {
    setCurrentSet((prev) => (prev + 1) % totalSets);
  };

  const handlePrev = () => {
    setCurrentSet((prev) => (prev === 0 ? totalSets - 1 : prev - 1));
  };

  // Get 6 services for the current carousel set
  const getCurrentServices = () => {
    const startIndex = currentSet * 6;
    return servicesData.slice(startIndex, startIndex + 6);
  };

  // Format current slide number with leading zero
  const formatSetNumber = (num: number) => {
    return num < 10 ? `0${num + 1}` : `${num + 1}`;
  };

  const currentServices = getCurrentServices();

  const getMobileExperienceServices = () => {
    const startIndex = mobileExperienceSet * 4;
    return servicesData.slice(startIndex, startIndex + 4);
  };

  const handleMobileNext = () => {
    setMobileExperienceSet((prev) => (prev + 1) % totalMobileExperienceSets);
  };

  const handleMobilePrev = () => {
    setMobileExperienceSet((prev) => (prev === 0 ? totalMobileExperienceSets - 1 : prev - 1));
  };

  const currentMobileServices = getMobileExperienceServices();

  return (
    <section className="bg-black text-white py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-light mb-4">Services</h2>
          <p className="text-xl md:text-3xl text-gray-400 max-w-2xl mb-6">
            On our website you can order transport, buy a ferry ticket,
            book a hotel and buy yourself an exciting adventure
          </p>
          
          <button className="hidden md:flex items-center px-4 text-base py-3 rounded-full bg-gradient-to-r from-[#bef264] to-[#06b6d4] text-white font-medium transition-all w-[120px] h-[44px] duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]">
                View all
                <div className="-rotate-45 ml-2 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#06b6d4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
        </div>

        {/* Desktop Grid Layout with 4-column grid */}
        <div className="flex flex-col gap-[20px] hidden md:block">
          <div className="grid grid-cols-4 gap-5">
            {/* First row - 2:1:1 ratio */}
            {/* First item - takes 2 columns */}
            <div className="col-span-2">
              <div className="relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src={currentServices[0]?.image || "/images/placeholder.png"}
                  alt={currentServices[0]?.title || "Service"}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">{currentServices[0]?.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-3">{currentServices[0]?.description}</p>
                  
                  <Link href={currentServices[0]?.link || "#"} className="absolute right-4 bottom-4 bg-white rounded-full p-2 inline-flex items-center justify-center -rotate-45">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 10H15M15 10L10 5M15 10L10 15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Second item - takes 1 column */}
            <div className="col-span-1">
              <div className="relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src={currentServices[1]?.image || "/images/placeholder.png"}
                  alt={currentServices[1]?.title || "Service"}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">{currentServices[1]?.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-3">{currentServices[1]?.description}</p>
                </div>
              </div>
            </div>
            
            {/* Third item - takes 1 column */}
            <div className="col-span-1">
              <div className="relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src={currentServices[2]?.image || "/images/placeholder.png"}
                  alt={currentServices[2]?.title || "Service"}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">{currentServices[2]?.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-3">{currentServices[2]?.description}</p>
                </div>
              </div>
            </div>
            
            {/* Second row - 1:1:2 ratio */}
            {/* First item of second row - takes 1 column */}
            <div className="col-span-1">
              <div className="relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src={currentServices[3]?.image || "/images/placeholder.png"}
                  alt={currentServices[3]?.title || "Service"}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">{currentServices[3]?.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-3">{currentServices[3]?.description}</p>
                </div>
              </div>
            </div>
            
            {/* Second item of second row - takes 1 column */}
            <div className="col-span-1">
              <div className="relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src={currentServices[4]?.image || "/images/placeholder.png"}
                  alt={currentServices[4]?.title || "Service"}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">{currentServices[4]?.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-3">{currentServices[4]?.description}</p>
                </div>
              </div>
            </div>
            
            {/* Third item of second row - takes 2 columns */}
            <div className="col-span-2">
              <div className="relative h-[350px] rounded-xl overflow-hidden">
                <Image
                  src={currentServices[5]?.image || "/images/placeholder.png"}
                  alt={currentServices[5]?.title || "Service"}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold mb-2">{currentServices[5]?.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-3">{currentServices[5]?.description}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <div className="display: flex w-full justify-end right-0 bottom-4 flex items-center gap-2">
            <span className="text-sm mr-2">{formatSetNumber(currentSet)}/{formatSetNumber(totalSets - 1)}</span>
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Essentials Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Essentials</h3>
            <p className="text-sm text-gray-400 mb-6">For your convenience in getting around and staying comfortably.</p>
            
            <div className="grid grid-rows-2 sm:grid-cols-1 gap-1">
              <div className="grid grid-cols-2 gap-1">
                <Link href="/services/ferry" className=" flex flex-col gap-3 justify-between items-center px-1 border-[1px] border-[#00ACB1] py-2 rounded-[5px]">
                  <div className="w-12 h-12 bg-[#222629] rounded-full flex items-center justify-center">
                  <FaFerry width = {24} height={24} className="text-[#00ACB1]"/>
                  </div>
                  <span className="text-xs text-center">Ferry</span>
                  <button className ="w-full text-xs text-center bg-gradient-to-r px-2 py-1 from-[#bef264] to-[#06b6d4] rounded-[5px]">Book Now</button>
                </Link>
                <Link href="/services/hotel" className=" flex flex-col gap-3 justify-between items-center px-1 border-[1px] border-[#00ACB1] py-2 rounded-[5px]">
                  <div className="w-12 h-12 bg-[#222629] rounded-full flex items-center justify-center">
                    <MdLocalHotel width = {24} height={24} className="text-[#00ACB1]"/>
                  </div>
                  <span className="text-xs text-center">Hotel</span>
                  <button className ="w-full text-xs text-center bg-gradient-to-r px-2 py-1 from-[#bef264] to-[#06b6d4] rounded-[5px]">Book Now</button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <Link href="/services/cab" className=" flex flex-col gap-3 justify-between items-center px-1 border-[1px] border-[#00ACB1] py-2 rounded-[5px]">
                  <div className="w-12 h-12 bg-[#222629] rounded-full flex items-center justify-center">
                    <FaCarRear width={24} height={24}  className="text-[#00ACB1]"/>
                  </div>
                  <span className="text-xs text-center">Cab</span>
                  <button className ="w-full text-xs text-center bg-gradient-to-r px-2 py-1 from-[#bef264] to-[#06b6d4] rounded-[5px]">Book Now</button>
                </Link>
                <Link href="/services/airport-pickup" className=" flex flex-col gap-3 justify-between items-center px-1 border-[1px] border-[#00ACB1] py-2 rounded-[5px]">
                  <div className="w-12 h-12 bg-[#222629] rounded-full flex items-center justify-center">
                    <PiAirplaneTakeoffLight width={24} height={24} className='text-[#00ACB1]'/>
                  </div>
                  <span className="text-xs text-center">Airport Pickup</span>
                  <button className ="w-full text-xs text-center bg-gradient-to-r px-2 py-1 from-[#bef264] to-[#06b6d4] rounded-[5px]">Book Now</button>
                </Link>
              </div>
          <button className='text-sm mt-4 text-white bg-gradient-to-r from-[#bef264] to-[#06b6d4] w-full px-3 py-4 rounded-full hover:bg-[#00ACB1]'>View All Essentials</button>


            </div>
          </div>

          {/* Experiences Section */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium">Experiences</h3>
              <div className="flex items-center gap-2">
              <span className="text-sm mr-2 text-[#00ACB1]">{formatSetNumber(mobileExperienceSet)}/{formatSetNumber(totalMobileExperienceSets - 1)}</span>
                <button 
                  onClick={handleMobilePrev}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#00ACB1]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19L8 12L15 5" stroke="#00ACB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button 
                  onClick={handleMobileNext}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-[#00ACB1]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="#00ACB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6">Make your trip unforgettable with these limited adventures.</p>
            
            <div className="grid grid-cols-2 gap-4">
              {currentMobileServices.map((service) => (
                <Link href={service.link} key={service.id} className="block">
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">{service.title}</h4>
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-white"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = service.link;
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Book Now Button */}
          <div className="pt-1 w-full flex justify-end item-center">
            <Link href="/services" className='text-center text-sm text-white bg-gradient-to-r from-[#bef264] to-[#06b6d4] w-full px-3 py-4 rounded-full hover:bg-[#00ACB1]'>View All Services</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 