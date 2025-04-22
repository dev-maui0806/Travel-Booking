'use client'

import FeatureCard from "@/components/ui/FeatureCard";
import Button from "@/components/ui/Button";
import { useState, useEffect } from "react";

const CreateDreamTripSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const features = [
    {
      icon: <HeartIcon />,
      title: "Create Your Own Tour",
      description: "Choose locations, stays, and transport",
      CTA: "Start"
    },
    {
      icon: <ClockIcon />,
      title: " Select a Ready-Made Tour",
      description: "Explore curated itineraries",
      CTA: "Browse Tours"

    },
    {
      icon: <HomeIcon />,
      title: "Book Services Only",
      description: "Just need ferries, hotels, or adventures?",
      CTA: "Book Now"

    },
    {
      icon: <SmileIcon />,
      title: "Need Help Planning?",
      description: "Not sure where to start? Let us assist you in crafting the perfect trip.",
      CTA: "Request a Call Back"
    }
  ];
  console.log(features);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Mobile Carousel View
  if (isMobile) {
    return (
      <section className="bg-[#1C1F22] py-12 px-6 text-white relative overflow-hidden min-h-screen flex flex-col justify-between">
        <div className="container mx-auto flex flex-col h-full">
          {/* Top content */}
          <div className="mb-6">
            <h2 className="text-4xl font-bold mb-4">
              Create your dream trip yourself
            </h2>
            <p className="text-base text-gray-300">
              We invite you to use our site to create your own tour to the Andaman Islands. Now you have the opportunity to choose and customize your ideal trip directly online
            </p>
          </div>

          {/* Carousel */}
          <div className="flex-grow relative h-[300px]">
            <div className="h-full">
              <div className="bg-[#222629] p-6 rounded-2xl h-full flex flex-col justify-between">
                <div className="text-cyan-400 mb-auto">
                  {features[currentSlide].icon}
                </div>
                <div className="mt-auto">
                  <h3 className="text-xl font-semibold mb-2">
                    {features[currentSlide].title}
                  </h3>
                  <p className="text-gray-400">
                    {features[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mt-6 mb-6">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all ${currentSlide === index ? "w-8 bg-[#06b6d4]" : "w-2 bg-gray-500"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-auto">
            <button className="flex items-center justify-center px-4 py-3 rounded-full bg-gradient-to-r from-[#bef264] to-[#06b6d4] text-white font-medium w-full">
                {features[currentSlide].CTA}
            </button>

            <div className="relative inline-block w-full">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FAFF00] to-[#00ACB1] p-[1px]">
                <div className="absolute inset-[1px] rounded-full bg-[#1a1d1f]"></div>
              </div>
              <button className="relative w-full px-6 py-3 text-center rounded-full">
                Request assistance
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop View
  return (
    <section className="bg-[#1C1F22] py-20 px-6 text-white relative gap-12 overflow-hidden">
      <div className="container mx-auto flex lg:flex-row flex-col justify-between lg:grid-cols-4 gap-6">
        {/* Left Section */}
        <div className="col-span-3 flex flex-col grid grid-rows-1 gap-3 lg:grid-rows-4 space-y-6">
          <div className="row-span-1 space-x-3 flex flex-col gap-6">
            <h2 className="text-4xl font-bold leading-snug">
              Create your dream trip yourself
            </h2>
            <p className="text-lg text-gray-300 w-auto md:w-[528px]">
              We invite you to use our site to create your own tour to the Andaman Islands.
              Now you have the opportunity to choose and customize your ideal trip directly online
            </p>
          </div>
          <div className=" relative row-span-3 flex flex-row gap-6 grid grid-cols-1 lg:grid-cols-3 justify-center">
            <div className="flex flex-col gap-6 justify-between ">
              <button className=" flex items-center px-4 text-base py-3 rounded-full bg-gradient-to-r from-[#bef264] to-[#06b6d4] text-white font-medium transition-all w-[160px] h-[44px] duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]">
                Create a tour
                <div className="-rotate-45 ml-2 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#06b6d4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
              <div className="flex flex-col justify-between row-span-4 p-6 rounded-xl shadow-md h-[375px] bg-[#222629] rounded-[12px]">
                <div className="text-cyan-400 mb-2"><HeartIcon /></div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold mb-2">Create Your Own Tour</h3>
                  <p className="text-gray-400">
                    Choose locations, stays, and transport
                  </p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex flex-col gap-6 justify-start  rounded-[12px]">
              <div className="flex flex-col justify-between lg:justify-end p-6 rounded-xl shadow-md h-[375px] bg-[#222629] relative ">
                <div className="lg:bg-[#1C1F22] bg-none lg:p-2 p-0 rounded-full relative lg:absolute top-[-35px] left-[30px]">
                  <div className="text-cyan-400 w-12 h-12"><ClockIcon /></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Select a Ready-Made Tour</h3>
                <p className="text-gray-400">
                  Explore curated itineraries.
                </p>
              </div>
            </div>
            <div className="lg:hidden flex flex-col gap-6 justify-end rounded-[12px]">
              <div className="flex flex-col justify-between p-6 rounded-xl shadow-md h-[375px] bg-[#222629]" >
                <div className="text-cyan-400 mb-2"><ClockIcon /></div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold mb-2">Select a Ready-Made Tour</h3>
                  <p className="text-gray-400">
                    Explore curated itineraries.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 justify-end rounded-[12px]">
              <div className="flex flex-col justify-between p-6 rounded-xl shadow-md h-[375px] bg-[#222629]" >
                <div className="text-cyan-400 mb-2"><HomeIcon /></div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold mb-2">Book Services Only</h3>
                  <p className="text-gray-400">
                    Just need ferries, hotels, or adventures?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="col-span-1 flex flex-col justify-between gap-12">
          <div className="bg-[#1E293B] flex flex-col justify-between p-6 rounded-xl shadow-md h-[375px] bg-[#222629] rounded-[12px]">
            <div className="text-cyan-400 mb-2"><SmileIcon /></div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Need Help Planning?</h3>
              <p className="text-gray-400">
                Not sure where to start? Let us assist you in crafting the perfect trip.
              </p>

            </div>
          </div>
          <div className="flex justify-end">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FAFF00] to-[#00ACB1] p-[1px]">
                <div className="absolute inset-[1px] rounded-full bg-[#1a1d1f]"></div>
              </div>
              <div className="relative px-6 py-3 text-lg rounded-full">
                Request assistance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeartIcon = () => (
  <div className="w-12 h-12 text-[#2dd4bf] bg-[#292E32] rounded-full flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.9904 4.49399C12.1913 1.2174 7.52364 0.336004 4.01657 3.33638C0.509502 6.33675 0.015755 11.3532 2.76988 14.9018C5.05974 17.8522 11.9897 24.0748 14.2609 26.0888C14.515 26.3141 14.6421 26.4268 14.7903 26.471C14.9196 26.5097 15.0612 26.5097 15.1905 26.471C15.3387 26.4268 15.4658 26.3141 15.7199 26.0888C17.9911 24.0748 24.9211 17.8522 27.2109 14.9018C29.9651 11.3532 29.5316 6.30519 25.9642 3.33638C22.3969 0.367564 17.7895 1.2174 14.9904 4.49399Z" stroke="#00ACB1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const ClockIcon = () => (
  <div className="w-12 h-12 text-[#2dd4bf] bg-[#292E32] rounded-full flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="22" viewBox="0 0 16 22" fill="none">
      <path d="M1 1H15M1 21H15M2 1V5C2 8.31371 4.68629 11 8 11M14 21V17C14 13.6863 11.3137 11 8 11M8 11C4.68629 11 2 13.6863 2 17V21M8 11C11.3137 11 14 8.31371 14 5V1M11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5M5 18H11" stroke="#00ACB1" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

const HomeIcon = () => (
  <div className="w-12 h-12 text-[#2dd4bf] bg-[#292E32] rounded-full flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
      <path d="M1 8.77778L10.3492 1.54479C11.3202 0.818403 12.6798 0.818403 13.6508 1.54479L23 8.77778M3.93333 6.50841V18.4137C3.93333 19.8421 5.13719 21 6.62222 21H7.96667H16.0333H17.3778C18.8628 21 20.0667 19.8421 20.0667 18.4137V6.50841M9.31111 21V13.2412C9.31111 12.527 9.91304 11.948 10.6556 11.948H13.3444C14.087 11.948 14.6889 12.527 14.6889 13.2412V21" stroke="#00ACB1" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

const SmileIcon = () => (
  <div className="w-12 h-12 text-[#2dd4bf] bg-[#292E32] rounded-full flex justify-center items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M8.31238 8.31247H8.68738M8.31238 8.68747H8.68738M15.3124 8.31247H15.6874M15.3124 8.68747H15.6874M7 15C7.41667 16 9 18 12 18C15 18 16.5833 16 17 15M9 8.5C9 8.77614 8.77614 9 8.5 9C8.22386 9 8 8.77614 8 8.5C8 8.22386 8.22386 8 8.5 8C8.77614 8 9 8.22386 9 8.5ZM16 8.5C16 8.77614 15.7761 9 15.5 9C15.2239 9 15 8.77614 15 8.5C15 8.22386 15.2239 8 15.5 8C15.7761 8 16 8.22386 16 8.5ZM23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" stroke="#00ACB1" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);

export default CreateDreamTripSection;
