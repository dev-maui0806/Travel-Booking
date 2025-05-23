'use client'

import React, { useState } from 'react';
import Image from 'next/image';

// Island data with content for each tab
const islandsData = [
  {
    id: 'general',
    name: 'General information',
    paragraphs: [
      "Andaman is not just one breathtaking island destination, but a group of 572 gorgeous islands in the Bay of Bengal. With around 37 inhabited islands, each island has something unique to offer. What these islands do have in common though are miles and miles of stunning beaches, endless greenery, amazing hidden treasures and plenty of mouth-watering seafood",
      "Simply put, the Andamans is a tropical paradise that's straight out of a postcard. Relaxing beach strolls, the best scuba-diving spots in all of India, lovely historical sites and exotic marine life are all yours to enjoy"
    ],
    images: [
      {
        src: "/images/places/general.png",
        alt: "Aerial view of Andaman island with bridge and boats"
      },
      {
        src: "/images/places/general.png",
        alt: "Beautiful beach in Andaman"
      },
      {
        src: "/images/places/general.png",
        alt: "Marine life in Andaman"
      }
    ]
  },
  {
    id: 'diglipur',
    name: 'Diglipur',
    paragraphs: [
      "Diglipur is the northernmost town in the Andamans, known for its pristine beaches and lush mangrove forests. It's home to the highest peak in the Andamans, Saddle Peak, which offers breathtaking views of the surrounding islands.",
      "The area is also famous for Kalipur Beach, where you can witness the rare spectacle of turtles nesting. Ross and Smith Islands, connected by a natural sand bar, are another highlight of Diglipur."
    ],
    images: [
      {
        src: "/images/places/mayabunder.png",
        alt: "Diglipur beach view"
      },
      {
        src: "/images/places/mayabunder.png",
        alt: "Saddle Peak in Diglipur"
      }
    ]
  },
  {
    id: 'havelock',
    name: 'Havelock',
    paragraphs: [
      "Havelock Island, now officially known as Swaraj Dweep, is the most popular destination in the Andamans. It's renowned for its pristine beaches, particularly Radhanagar Beach, which has been rated as one of Asia's best beaches.",
      "The island offers excellent opportunities for snorkeling and scuba diving, with vibrant coral reefs and diverse marine life. The laid-back atmosphere and beautiful landscapes make it a perfect getaway for nature lovers."
    ],
    images: [
      {
        src: "/images/places/havelock.png",
        alt: "Radhanagar Beach in Havelock"
      },
      {
        src: "/images/places/havelock.png",
        alt: "Scuba diving in Havelock"
      }
    ]
  },
  {
    id: 'long',
    name: 'Long',
    paragraphs: [
      "Long Island is one of the lesser-explored gems of the Andamans, offering a more secluded experience away from the tourist crowds. The island is known for its serene beaches and the famous Lalaji Bay Beach.",
      "The journey to Long Island itself is an adventure, passing through dense mangrove creeks. It's an ideal destination for those seeking tranquility and untouched natural beauty."
    ],
    images: [
      {
        src: "/images/places/long.png",
        alt: "Lalaji Bay Beach on Long Island"
      },
      {
        src: "/images/places/long.png",
        alt: "Mangrove forest near Long Island"
      }
    ]
  },
  {
    id: 'mayabandar',
    name: 'Mayabandar',
    paragraphs: [
      "Mayabunder is a small town located in the northern part of Middle Andaman. It's known for its unique culture, as it's home to the Karen community, descendants of Burmese settlers brought by the British.",
      "The area offers beautiful mangrove creeks, turtle nesting grounds, and the nearby Interview Island, which is a wildlife sanctuary home to feral elephants and diverse bird species."
    ],
    images: [
      {
        src: "/images/places/mayabunder.png",
        alt: "View of Mayabunder"
      },
      {
        src: "/images/places/mayabunder.png",
        alt: "Interview Island near Mayabunder"
      }
    ]
  },
  {
    id: 'neil',
    name: 'Neil',
    paragraphs: [
      "Neil Island, officially renamed as Shaheed Dweep, is a small but beautiful island known for its laid-back atmosphere and agricultural landscapes. It's often called the 'vegetable bowl' of the Andamans.",
      "The island features stunning beaches named after mythological characters - Bharatpur, Laxmanpur, and Sitapur. The natural bridge formation of coral, known as the Howrah Bridge, is a major attraction here."
    ],
    images: [
      {
        src: "/images/places/neil.png",
        alt: "Beach on Neil Island"
      },
      {
        src: "/images/places/neil.png",
        alt: "Natural Howrah Bridge on Neil Island"
      }
    ]
  },
  {
    id: 'portblair',
    name: 'Port Blair',
    paragraphs: [
      "Port Blair is the capital city of the Andaman and Nicobar Islands. It serves as the gateway to the islands and is rich in colonial history. The infamous Cellular Jail, a former colonial prison, stands as a somber reminder of India's struggle for independence.",
      "The city offers various attractions including the Anthropological Museum, Samudrika Naval Marine Museum, and Corbyn's Cove Beach. It's also the starting point for excursions to nearby islands like Ross Island and North Bay Island."
    ],
    images: [
      {
        src: "/images/places/port.png",
        alt: "Cellular Jail in Port Blair"
      },
      {
        src: "/images/places/port.png",
        alt: "Ross Island near Port Blair"
      },
      {
        src: "/images/places/port.png",
        alt: "Corbyn's Cove Beach in Port Blair"
      }
    ]
  }
];

const GeneralInfo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentSlide(0); // Reset to first slide when changing tabs
  };

  const activeIsland = islandsData.find(island => island.id === activeTab) || islandsData[0];
  const totalSlides = activeIsland.images.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === totalSlides - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Format the current slide number with leading zero
  const formattedSlideNumber = (currentSlide + 1).toString().padStart(2, '0');
  const formattedTotalSlides = totalSlides.toString().padStart(2, '0');

  return (
    <div className="w-full container mx-auto py-[100px] flex flex-col gap-4">
      {/* Tabs Navigation */}
      <div className="overflow-x-auto no-scrollbar w-rull flex justify-start items-start">
        <div className="flex whitespace-nowrap gap-2 md:gap-4 bg-[#1C1F22] rounded-full max-w-fit">
          {islandsData.map((island) => (
            <button
              key={island.id}
              onClick={() => handleTabChange(island.id)}
              className={`px-6 py-4 rounded-full transition-colors ${
                activeTab === island.id
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              {island.name}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden">
          {activeIsland.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-400 mb-4">
              {paragraph}
            </p>
          ))}
          
          {/* Mobile Carousel */}
          <div className="relative mt-6 rounded-2xl overflow-hidden">
            {activeIsland.images.map((image, index) => (
              <div
                key={index}
                className={`transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 hidden'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[300px] object-cover rounded-2xl"
                />
              </div>
            ))}
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {activeIsland.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-[#00B6B1]' : 'bg-white bg-opacity-50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex md:gap-8 md:items-start">
          <div className="md:w-1/2">
            {activeIsland.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-400 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="md:w-1/2">
            <img
              src={activeIsland.images[currentSlide].src}
              alt={activeIsland.images[currentSlide].alt}
              className="w-full h-[500px] object-cover rounded-2xl"
            />
          </div>
        </div>
        
        {/* Pagination */}
        <div className="flex justify-end items-center mt-4 gap-2">
          <span className="text-gray-400 text-sm">{formattedSlideNumber}/{formattedTotalSlides}</span>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-gray-800"
            >
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 9L1 5L5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:bg-gray-800"
            >
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
