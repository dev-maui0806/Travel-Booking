"use client" 
import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';

const slides = [
  {
    id: 1,
    title: "Creating your own holiday tour",
    image: "/images/video/video1.png",
    hasButton: true,
    buttonText: "More"
  },
  {
    id: 2,
    title: "The best conditions for cooperation",
    image: "/images/video/video2.png",
    hasButton: true,
    buttonText: "More",
  },
  {
    id: 3,
    title: "The best conditions for cooperation",
    content: "We are proud to offer a convenient, easy and transparent contract execution to provide our customers with the most comfortable and understandable process",
    hasButton: true,
    buttonText: "Download",
    buttonIcon: <FiDownload size={18} />,
    isDark: true
  }
];

const VideoSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4">
        {/* Intro Text */}
        <div className=" mb-16 text-left mt-[100px] w-full">
          <h2  className="text-white text-3xl md:text-4xl w-full md:w-2/3">
              We have been giving our customers unforgettable trips for 15 years
          </h2>
          <p className="text-gray-400 text-base w-full pt-4 w-full md:w-2/3">
            Your window to the world of exciting travel and incredible experiences on
            magical islands. Our company will provide you with an unforgettable
            vacation, where comfort and adventure merge into one unique journey
          </p>
        </div>

        {/* Desktop Version - Three Panel Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {/* First Panel - Creating your own holiday tour */}
          <div className="relative h-[540px] rounded-2xl overflow-hidden">
            <img 
              src="/images/video/video1.png" 
              alt="Ocean view with boats" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-start justify-start">
              <div className="p-8">
                <h2 className="text-white text-3xl">
                  Creating your own<br />
                  holiday tour
                </h2>
              </div>
            </div>
          </div>

          {/* Second Panel - The best conditions for cooperation */}
          <div className="relative h-[540px] rounded-2xl overflow-hidden">
            <img 
              src="/images/video/video2.png" 
              alt="Beach with rocks" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-start justify-start">
              <div className="p-8">
                <h2 className="text-white text-3xl">
                  The best conditions<br />
                  for cooperation
                </h2>
              </div>
            </div>
          </div>

          {/* Third Panel - Text and Download */}
          <div className="bg-[#1A1D1F] h-[540px] rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-white text-3xl mb-6">
                The best conditions<br />
                for cooperation
              </h2>
              <p className="text-gray-300">
                We are proud to offer a convenient, easy and
                transparent contract execution to provide our
                customers with the most comfortable and
                understandable process
              </p>
            </div>
            
            <div className="mb-8">
              <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors">
                <span>Download</span>
                <FiDownload size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Version - Carousel */}
        <div className="md:hidden">
          <div className="relative h-[540px] rounded-2xl overflow-hidden">
            {/* Carousel Slides */}
            {slides.map((slide, index) => (
              <div 
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                {slide.isDark ? (
                  <div className="bg-[#1A1D1F] h-full w-full p-8 flex flex-col justify-between">
                    <div>
                      <h2 className="text-white text-3xl mb-6">
                        {slide.title.split('<br />').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < slide.title.split('<br />').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </h2>
                      {slide.content && <p className="text-gray-300">{slide.content}</p>}
                    </div>
                    
                    {slide.hasButton && (
                      <div className="mb-8">
                        <button className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-full w-full">
                          <span>{slide.buttonText}</span>
                          {slide.buttonIcon}
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-between p-8">
                      <div>
                        <h2 className="text-white text-3xl">
                          {slide.title.split('<br />').map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < slide.title.split('<br />').length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </h2>
                      </div>
                      
                      {slide.hasButton && (
                        <button className="border border-white text-white rounded-full py-3 px-6 w-full text-center">
                          {slide.buttonText}
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === activeSlide ? 'bg-[#00B6B1]' : 'bg-white bg-opacity-50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

