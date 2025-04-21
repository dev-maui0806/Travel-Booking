'use client'

import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BsWhatsapp } from 'react-icons/bs';
import { FiPhone } from 'react-icons/fi';

interface Location {
  name: string;
  angle: number;
  isActive: boolean;
  description: string;
  locationSrc: string;
}

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({title, subtitle}) => {
  const [locationsMap, setLocationsMap] = useState("/images/maps/herosections/hero-map-diglipur.png");
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(-120); // Initial rotation for Neil
  const [isRotating, setIsRotating] = useState(false);
  const [locations, setLocations] = useState<Location[]>([
    {
      name: "Diglipur",
      angle: 0,
      isActive: false,
      description: "Experience the northernmost part of the Andamans",
      locationSrc:"/images/maps/herosections/hero-map-diglipur.png"
    },
    {
      name: "Mayabandar",
      angle: 60,
      isActive: false,
      description: "Discover the historic Mayabandar region",
      locationSrc:"/images/maps/herosections/hero-map-mayabandar.png"

    },
    {
      name: "Neil",
      angle: 120,
      isActive: true,
      description: "Experience the pristine Neil Island",
      locationSrc:"/images/maps/herosections/hero-map-neil.png"

    },
    {
      name: "Havelock",
      angle: 180,
      isActive: false,
      description: "Discover pristine beaches and vibrant marine life",
      locationSrc:"/images/maps/herosections/hero-map-havelock.png"

    },
    {
      name: "Port Blair",
      angle: 240,
      isActive: false,
      description: "Explore the capital city of Andaman",
      locationSrc:"/images/maps/herosections/hero-map-port_blair.png"

    },
    {
      name: "Long",
      angle: 300,
      isActive: false,
      description: "Explore the serene Long Island",
      locationSrc:"/images/maps/herosections/hero-map-long.png"

    }
  ]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    locations.find(loc => loc.name === "Neil") || null
  );
  const [displayedLocation, setDisplayedLocation] = useState<Location | null>(
    locations.find(loc => loc.name === "Neil") || null
  );
  // const calculatePosition = (angle: number, radius: number = 200) => {
  //   const radian = (angle + 10) * (Math.PI / 180); // Removed +8 adjustment
  //   const x = 250 + radius * Math.cos(radian);
  //   const y = 250 + radius * Math.sin(radian);
  //   return { x, y };
  // };
  const calculatePosition = (angle: number, radius: number = 200) => {
    // Calculate position based on current rotation + location angle
    const totalAngle = angle + rotationAngle;
    const radian = (totalAngle+10) * (Math.PI / 180);
    return {
      x: 250 + radius * Math.cos(radian),
      y: 250 + radius * Math.sin(radian)
    };
  };
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const handleLocationClick = (clickedLocation: Location) => {
    if (isRotating) return;

    setIsRotating(true);
    const targetAngle = 180 - clickedLocation.angle;

    setRotationAngle(targetAngle);

    setLocations(prevLocations =>
      prevLocations.map(location => ({
        ...location,
        isActive: location.name === clickedLocation.name
      }))
    );
    setLocationsMap(clickedLocation.locationSrc);
    setSelectedLocation(clickedLocation);

    setTimeout(() => {
      setDisplayedLocation(clickedLocation);
      setIsRotating(false);
    }, 1000);
  };

  return (
    <>
      <section
        className="relative w-full text-white bg-cover bg-center bg-no-repeat flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/ocean-bg.png')",
          height: isMobile ? "500px" : isTablet ? "700px" : "800px"
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 z-0" style={{
          background: "linear-gradient(180deg, rgba(0, 29, 32, 0.81) 0%, rgba(7, 146, 149, 0) 38.01%)"
        }}></div>

        {/* Map Section */}
        <div className="absolute right-0 top-0 bottom-0 z-10 overflow-hidden hidden md:block" style={{ right: "-265px" }}>
          <div className="relative h-full w-[600px] flex items-center justify-center">
            {/* Static Map Elements */}
            <svg className="absolute" width="500" height="500" viewBox="0 0 500 500">
              <circle
                cx="250"
                cy="250"
                r="200"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="4 4"
                className="opacity-60"
              />

              {/* Boat Icon */}
              <g transform="translate(250, 250)">
                <image
                  href="/images/icon/boat.png"
                  x="-190"
                  y="-120"
                  width="30"
                  height="40"
                  className="opacity-90"
                />
              </g>

              {/* Plane Icon */}
              <g transform="translate(250, 250)">
                <image
                  href="/images/icon/flight.png"
                  x="-220"
                  y="-12"
                  width="40"
                  height="40"
                  className="opacity-90"
                  style={{ transform: 'rotate(-10deg)' }}
                />
              </g>

              {/* Central Map Image */}
              <image
                href={locationsMap}
                x="100"
                y="120"
                width="250"
                height="250"
                className="opacity-100"
              />
            </svg>

            {/* Rotating Locations */}
            <svg
              className="absolute transition-all duration-1000 ease-in-out"
              width="600"
              height="500"
              viewBox="0 0 500 500"
              style={{
                // transform: `rotate(${rotationAngle}deg)`,
                // transformOrigin: 'center'
              }}
            >
              {locations.map((location) => {
                const pos = calculatePosition(location.angle);

                return (
                  <g
                    key={location.name}
                    transform={`translate(${pos.x}, ${pos.y})`}
                    className="cursor-pointer transition-all duration-1000 ease-in-out"
                    onClick={() => handleLocationClick(location)}
                  >
                    {/* Location Dot */}
                    {location.isActive && (
                      <>
                        <circle
                          cx="0"
                          cy="0"
                          r="12"
                          fill="#00ACB1"
                          fillOpacity="0.15"
                        />
                        <circle
                          cx="0"
                          cy="0"
                          r="8"
                          fill="#00ACB1"
                          fillOpacity="0.3"
                        />
                      </>
                    )}
                    <circle
                      cx="0"
                      cy="0"
                      r="4"
                      fill={location.isActive ? "#00ACB1" : "white"}
                    />

                    {/* Location Label */}
                    <text
                      x="-10"
                      y="5"
                      fill="white"
                      className="text-sm"
                      textAnchor="end"
                      dominantBaseline="middle"
                    >
                      {location.name}
                    </text>

                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Content Section */}
        <div className="container flex flex-col gap-5 justify-between mx-auto px-4 sm:px-6 relative z-10">
          {/* Search Bar (Desktop/Tablet) */}
          {!isMobile && !isTablet && (
            <div className="mb-8">
              <div className="relative w-64">
                <div className="relative bg-white bg-opacity-30 rounded-[10px] shadow-lg overflow-hidden flex items-center">
                  <input
                    type="text"
                    placeholder="Search for flights"
                    className="w-full py-3 pl-4 pr-12 bg-transparent text-sm text-white placeholder-white focus:outline-none"
                  />
                  <Link href="/" className="absolute right-0 w-10 h-10 flex items-center justify-center rotate-45">
                    <Image src={'/images/icon/flight.png'} alt="flight" width={50} height={50} priority className="" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Weather (Mobile) */}
          {isMobile && (
            <div className="flex gap-5 items-center text-white">
              <div className="mr-1">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="#FFFF00" />
                  <path d="M12 1V3M12 21V23M1 12H3M21 12H23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-medium text-3xl">23°</span>
            </div>
          )}

          {/* Search Bar (Mobile) */}
          {isMobile && (
            <div className="relative w-[200px]">
              <Link href="/" className="relative flex items-center pl-4 pr-12 py-3 shadow-lg">
                <span className="text-white text-md">Search for flights</span>
                <div className="absolute right-1 w-10 h-10 flex items-center justify-center rotate-45">
                  <Image src={'/images/icon/flight.png'} alt="flight" width={50} height={50} priority className="" />
                </div>
              </Link>
            </div>
          )}

          {/* Main Content */}
          <div className={`flex flex-col ${isMobile ? 'w-full' : 'w-1/2'} ${isTablet ? 'pl-6' : ''}`}>
            <h1 className={`font-bold leading-tight w-full mb-4 ${isMobile ? 'text-4xl' : isTablet ? 'text-5xl' : 'text-6xl'}`}>
             {title || "Your travel agent is you"}
            </h1>
            <p className={`mb-8 ${isMobile ? 'text-base' : 'text-xl'}`}>
              {subtitle || "Create your own unique Andaman Islands tour and discover the charm of this paradise on Earth!"}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/createTour/All" className="flex gap-1 border hover:border-white items-center justify-center bg-white hover:bg-teal-500 hover:text-white text-teal-500 rounded-full px-6 py-3 font-medium">
                <span className="text-[14px] lg:text-base">Create a tour</span>
                {!isMobile && (<div className="bg-teal-500 hover:bg-white ml-3 rounded-full w-7 h-7 flex justify-center items-center">
                  <svg className="hidden sm:block w-5 h-5 text-white hover:text-teal-500 -rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>)}
              </Link>

              <Link href="/select-tour" className="flex items-center justify-center border border-white hover:border-teal-500 text-white hover:text-teal-500 hover:bg-white rounded-full px-6 py-3 font-medium">
                <span className="text-[14px] lg:text-base">Select a tour</span>
                {!isMobile && (<div className="flex justify-center items-center bg-white hover:bg-teal-500 ml-3 rounded-full w-7 h-7">
                  <svg className="hidden sm:block w-5 h-5 text-teal-500 bg:text-white -rotate-45" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>)}
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="absolute bottom-8 right-8 flex-col gap-4 z-20 hidden lg:flex">
          <Link
            href="tel:+000000000"
            className="w-12 h-12 bg-[#001D20] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all"
          >
            <FiPhone size={24} className="text-[#FAFF00]" />
          </Link>
          <Link
            href="https://wa.me/+000000000"
            className="w-12 h-12 bg-[#001D20] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all"
          >
            <BsWhatsapp size={24} className="text-[#FAFF00]" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;