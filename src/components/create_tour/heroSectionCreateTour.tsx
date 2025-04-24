import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import CreateTourAll from "./CreateTourAll";
import HotelSearchForm from "./All/HotelSearchForm";
import HotelParkList from "./All/HotelParkList";
import { FaChevronLeft } from 'react-icons/fa';

// Define types for our data
interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  mapImage: string;
}

interface Category {
  id: number;
  name: string;
  items: Slide[];
}

const HeroSectionCreateTour: React.FC = () => {
  const router = useRouter();
  const { tab } = router.query;

  // Navigation tabs
  const navTabs = [
    { id: 'islands', label: 'Islands' },
    { id: 'attractions', label: 'Attractions' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'transport', label: 'Transport' },
    { id: 'adventures', label: 'Adventures and entertainment' },
  ];

  // Island slides data
  const islandSlides = [
    {
      id: 1,
      MapImage: "/images/maps/create_tour/google-map-port_blair.png",
      title: "Port Blair",
      description: "The fascinating town of Port Blair is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
      image: [
        {
          id: 11,
          imagePath: "/images/places/corbyns.png",
        },
        {
          id: 12,
          imagePath: "/images/places/havelock.png",
        },
        {
          id: 13,
          imagePath: "/images/places/long.png",
        },
        {
          id: 14,
          imagePath: "/images/places/neil.png",
        },
        {
          id: 15,
          imagePath: "/images/places/port.png",
        },
        {
          id: 16,
          imagePath: "/images/places/mayabunder.png",
        },
      ]
    },
    {
      id: 2,
      MapImage: "/images/maps/create_tour/google-map-havelock.png",
      title: "Havelock",
      description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
      image: [
        {
          id: 21,
          imagePath: "/images/places/havelock.png",
        },
        {
          id: 22,
          imagePath: "/images/places/corbyns.png",
        },
        {
          id: 23,
          imagePath: "/images/places/port.png",
        },
        {
          id: 24,
          imagePath: "/images/places/neil.png",
        },
        {
          id: 25,
          imagePath: "/images/places/mayabunder.png",
        },
        {
          id: 26,
          imagePath: "/images/places/long.png",
        },
        {
          id: 27,
          imagePath: "/images/places/corbyns.png",
        },
      ]
    },
    {
      id: 3,
      MapImage: "/images/maps/create_tour/google-map-long.png",
      title: "Long",
      description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
      image: [
        {
          id: 31,
          imagePath: "/images/places/long.png",
        },
        {
          id: 32,
          imagePath: "/images/places/corbyns.png",
        },
        {
          id: 33,
          imagePath: "/images/places/mayabunder.png",
        },
        {
          id: 34,
          imagePath: "/images/places/neil.png",
        },
        {
          id: 35,
          imagePath: "/images/places/long.png",
        },
        {
          id: 36,
          imagePath: "/images/places/port.png",
        },
        {
          id: 37,
          imagePath: "/images/places/corbyns.png",
        },
      ]
    },
    {
      id: 4,
      MapImage: "/images/maps/create_tour/google-map-neil.png",
      title: "Neil",
      description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
      image: [
        {
          id: 41,
          imagePath: "/images/places/neil.png",
        },
        {
          id: 42,
          imagePath: "/images/places/long.png",
        },
        {
          id: 43,
          imagePath: "/images/places/corbyns.png",
        },
        {
          id: 44,
          imagePath: "/images/places/neil.png",
        },
        {
          id: 45,
          imagePath: "/images/places/port.png",
        },
        {
          id: 46,
          imagePath: "/images/places/mayabunder.png",
        },
        {
          id: 47,
          imagePath: "/images/places/corbyns.png",
        },
      ]
    },
    {
      id: 5,
      MapImage: "/images/maps/create_tour/google-map-diglipur.png",
      title: "Diglipur",
      description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
      image: [
        {
          id: 51,
          imagePath: "/images/places/corbyns.png",
        },
        {
          id: 52,
          imagePath: "/images/places/neil.png",
        },
        {
          id: 53,
          imagePath: "/images/places/long.png",
        },
        {
          id: 54,
          imagePath: "/images/places/port.png",
        },
        {
          id: 55,
          imagePath: "/images/places/mayabunder.png",
        },
      ]
    },
    {
      id: 6,
      MapImage: "/images/maps/create_tour/google-map-mayabandar.png",
      title: "MayaBandar",
      description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
      image: [
        {
          id: 51,
          imagePath: "/images/places/mayabunder.png",
        },
        {
          id: 52,
          imagePath: "/images/places/corbyns.png",
        },
        {
          id: 53,
          imagePath: "/images/places/neil.png",
        },
        {
          id: 54,
          imagePath: "/images/places/port.png",
        },
        {
          id: 55,
          imagePath: "/images/places/long.png",
        },
      ]
    },
  ];

  // Attraction categories
  const attractionCategories: Category[] = [
    {
      id: 1,
      name: "Beaches",
      items: [
        {
          id: 1,
          image: "/images/places/beaches/radhanagar.png",
          title: "Radhanagar Beach",
          description: "Radhanagar Beach is famous for its pristine white sand and crystal clear waters. It's been voted as Asia's best beach and offers stunning sunset views.",
          mapImage: "/images/maps/create_tour/google-map-radhanagar.png"
        },
        {
          id: 2,
          image: "/images/places/beaches/elephant.png",
          title: "Elephant Beach",
          description: "Elephant Beach is known for its coral reefs and amazing snorkeling opportunities. The clear waters make it perfect for underwater activities.",
          mapImage: "/images/maps/create_tour/google-map-elephant.png"
        },
        {
          id: 3,
          image: "/images/places/beaches/kalapathar.png",
          title: "Kalapathar Beach",
          description: "Kalapathar Beach gets its name from the black rocks (Kalapathar) that adorn the shoreline. It's a serene beach perfect for relaxation.",
          mapImage: "/images/maps/create_tour/google-map-kalapathar.png"
        },
        {
          id: 4,
          image: "/images/places/beaches/corbyn.png",
          title: "Corbyn's Cove",
          description: "Corbyn's Cove is a serene beach located just a few kilometers from Port Blair. It's ideal for swimming and sunbathing.",
          mapImage: "/images/maps/create_tour/google-map-corbyn.png"
        },
      ]
    },
    {
      id: 2,
      name: "Historical Sites",
      items: [
        {
          id: 1,
          image: "/images/places/historical/cellular-jail.png",
          title: "Cellular Jail",
          description: "The Cellular Jail, also known as Kālā Pānī, was a colonial prison used by the British to exile political prisoners during India's struggle for independence.",
          mapImage: "/images/maps/create_tour/google-map-cellular-jail.png"
        },
        {
          id: 2,
          image: "/images/places/historical/ross-island.png",
          title: "Ross Island",
          description: "Ross Island was the administrative headquarters for the British during their rule of the Andaman and Nicobar Islands. Now it's home to ruins and wildlife.",
          mapImage: "/images/maps/create_tour/google-map-ross-island.png"
        },
      ]
    },
    {
      id: 3,
      name: "Nature & Wildlife",
      items: [
        {
          id: 1,
          image: "/images/places/nature/chidiya-tapu.png",
          title: "Chidiya Tapu",
          description: "Chidiya Tapu is a bird watcher's paradise with many endemic species. It also offers one of the most spectacular sunsets in Andaman.",
          mapImage: "/images/maps/create_tour/google-map-chidiya-tapu.png"
        },
        {
          id: 2,
          image: "/images/places/nature/limestone-caves.png",
          title: "Limestone Caves",
          description: "The Limestone Caves in Baratang are natural wonders formed by the deposition of calcium carbonate over thousands of years.",
          mapImage: "/images/maps/create_tour/google-map-limestone-caves.png"
        },
      ]
    },
  ];

  // State management
  const [activeTab, setActiveTab] = useState<string>('islands');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeIslandId, setActiveIslandId] = useState(islandSlides[0].id);
  const [activeCategoryId, setActiveCategoryId] = useState<number | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Slide | null>(null);
  const [selectedItems, setSelectedItems] = useState<Slide[]>([]);
  const [showHotelList, setShowHotelList] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentMapIndex, setCurrentMapIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayDelay = 3000;
  const exploreIslandRef = useRef<HTMLDivElement>(null);
  //   Function to handle search action
  const handleSearch = () => {
    setShowHotelList(true);
  }

  // Function to go back to search form
  const handleBackToSearch = () => {
    setShowHotelList(false);
  }


  // Set initial active tab based on URL query
  useEffect(() => {
    if (tab) {
      setActiveTab(tab as string);
    }
  }, [tab]);


  useEffect(() => {
    let autoplayTimer: NodeJS.Timeout;
    if (isAutoplay && activeTab === 'islands') {
      autoplayTimer = setInterval(() => {
        const currentIsland = islandSlides[currentSlide];
        const nextImageIndex = (currentImageIndex + 1) % currentIsland.image.length;
        setCurrentImageIndex(nextImageIndex);
      }, autoplayDelay);
    }
    return () => {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
      }
    };
  }, [currentImageIndex, currentSlide, activeTab, isAutoplay]);


  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    router.push(`/createTour/All?tab=${tabId}`, undefined, { shallow: true });

    // Reset states when changing tabs
    setShowMap(false);
    setSelectedItem(null);
    if (tabId !== 'hotels') {
      setShowHotelList(false);
    }
    if (tabId === 'islands') {
      setCurrentSlide(0);
      setActiveIslandId(islandSlides[0].id);
    } else if (tabId === 'attractions') {
      setActiveCategoryId(attractionCategories[0].id);
    }
  };

  // Handle island selection
  const handleIslandSelect = (islandId: number) => {
    setActiveIslandId(islandId);
    const index = islandSlides.findIndex(island => island.id === islandId);
    if (index >= 0) {
      setCurrentSlide(index);
      setCurrentImageIndex(0);
      setIsAutoplay(true);
      
      // Smooth scroll to explore section
      exploreIslandRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleMapLocationClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Define clickable areas for each island (coordinates are relative to the map container)
    const islandAreas = {
      'Port Blair': { x1: 100, y1: 300, x2: 150, y2: 350 },
      'Havelock': { x1: 200, y1: 250, x2: 250, y2: 300 },
      'Neil': { x1: 180, y1: 280, x2: 230, y2: 330 },
      'Long': { x1: 160, y1: 200, x2: 210, y2: 250 },
      'Diglipur': { x1: 120, y1: 50, x2: 170, y2: 100 },
      'Mayabandar': { x1: 140, y1: 150, x2: 190, y2: 200 }
    };

    // Find which island was clicked
    for (const [islandName, area] of Object.entries(islandAreas)) {
      if (x >= area.x1 && x <= area.x2 && y >= area.y1 && y <= area.y2) {
        const island = islandSlides.find(i => i.title === islandName);
        if (island) {
          handleIslandSelect(island.id);
        }
        break;
      }
    }
  };

  // Handle navigation
  const handleNext = () => {
    if (activeTab === 'islands') {
      const currentIsland = islandSlides[currentSlide];
      const nextImageIndex = (currentImageIndex + 1) % currentIsland.image.length;
      setCurrentImageIndex(nextImageIndex);
    }
  };

  const handlePrev = () => {
    if (activeTab === 'islands') {
      const currentIsland = islandSlides[currentSlide];
      const prevImageIndex = (currentImageIndex - 1 + currentIsland.image.length) % currentIsland.image.length;
      setCurrentImageIndex(prevImageIndex);
    }
  };

  

  return (
    <section className="bg-[#222629] text-white py-[20px] md:py-[50px] h-auto">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Navigation Tabs */}
        <div className="relative mb-6 flex flex-col gap-4 py-3">
          <div className="flex flex-col justify-start items-start w-full gap-5">
            <h2 className="w-full text-3xl md:text-4xl lg:text-4xl">Select an Island to Begin Your Custom Tour</h2>
            <h3 className="w-full text-xl md:text-2xl lg:text-2xl">Click on any island from the map to view highlights and start exploring locations.
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 items-align w-full justify-end overflow-x-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between items-start gap-2 bg-[#1C1F22] rounded-[10px] sm:rounded-full p-1 min-w-full">
              {/* Island Dropdown */}
              <div className="relative w-full sm:w-1/2 md:2/5 h-full">
                <select
                  value={activeIslandId}
                  onChange={(e) => handleIslandSelect(Number(e.target.value))}
                  className="w-full bg-[#222629] text-white px-4 py-2 rounded-full appearance-none cursor-pointer text-center"
                >
                  {islandSlides.map((island) => (
                    <option key={island.id} value={island.id}>
                      {island.title}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <div className="text-xs w-full h-full sm:w-1/2 md:w-2/5 md:text-base">
                <button className="bg-gradient-to-r w-full h-full from-[#bef264] to-[#06b6d4] text-white px-6 py-2 rounded-full">Tour Summary</button>
              </div>
            </div>

            {/* Main Navigation Tabs */}
            {/* <div className="flex items-center space-x-2 bg-[#1C1F22] rounded-full p-1 w-fit min-w-full md:min-w-0 overflow-x-auto">
              {navTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full whitespace-nowrap transition-colors text-sm md:text-base ${activeTab === tab.id
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-gray-300'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div> */}
          </div>
        </div>

        {/* Islands Tab Content */}
        {activeTab === 'islands' && (
          <div className="flex flex-col gap-6">
            {/* Island Selection Tabs */}
            {/* <div className="flex items-center space-x-2 bg-[#1C1F22] rounded-full p-1 overflow-x-auto">
              {islandSlides.map((island) => (
                <button
                  key={island.id}
                  onClick={() => handleIslandSelect(island.id)}
                  className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full whitespace-nowrap transition-colors text-sm md:text-base ${activeIslandId === island.id
                      ? 'bg-white text-black'
                      : 'text-gray-400 hover:text-gray-300'
                    }`}
                >
                  {island.title}
                </button>
              ))}
            </div> */}

            {/* Island Content */}
            <div className="flex flex-col md:flex-row gap-4 lg:h-[550px] md:h-[500px]">
              {/* Left Section: Map */}
              <div className="w-full md:w-1/3 bg-[#1C1F22] rounded-[10px] flex flex-col justify-between items-center p-4">
                <div className="relative w-full h-[70%]">
                  <Image
                    src={islandSlides[currentSlide].MapImage}
                    alt={`${islandSlides[currentSlide].title} Map`}
                    width={500}
                    height={500}
                    className="w-full h-full object-contain"
                  />
                  {/* Interactive Island Points */}
                  <div className="absolute inset-0">
                    {/* Diglipur */}
                    <div 
                      className="absolute top-[14%] right-[40%] flex flex-col items-center cursor-pointer group"
                      onClick={() => handleIslandSelect(5)}
                    >
                      <div className="w-[100px] h-5 rounded-[5px] bg-[#06b6d4] opacity-0 group-hover:opacity-0 transition-opacity"></div>
                    </div>
                    
                    {/* Mayabandar */}
                    <div 
                      className="absolute top-[30%] sm:top-[30%] md:top-[30%] left-[24%] flex flex-col items-center cursor-pointer group"
                      onClick={() => handleIslandSelect(6)}
                    >
                      <div className="w-[100px] h-5 sm:h-8 md:h-5 rounded-[5px] bg-[#06b6d4] opacity-0 group-hover:opacity-0 transition-opacity"></div>
                    </div>
                    
                    {/* Long */}
                    <div 
                      className="absolute top-[43%] right-[18%] flex flex-col items-center cursor-pointer group"
                      onClick={() => handleIslandSelect(3)}
                    >
                      <div className="w-[100px] h-5 rounded-[5px] bg-[#06b6d4] opacity-0 group-hover:opacity-0 transition-opacity"></div>
                    </div>
                    
                    {/* Port Blair */}
                    <div 
                      className="absolute top-[53%] left-[16%] flex flex-col items-center cursor-pointer group"
                      onClick={() => handleIslandSelect(1)}
                    >
                      <div className="w-[100px] h-10 md:h-5 md:w-[80px] rounded-[5px] bg-[#06b6d4] opacity-0 group-hover:opacity-0 transition-opacity"></div>
                    </div>
                    
                    {/* Havelock */}
                    <div 
                      className="absolute top-[56%] sm:top-[57%] md:top-[55%] right-[10%] sm:right-[10%] md:right-[5%] flex flex-col items-center cursor-pointer group"
                      onClick={() => handleIslandSelect(2)}
                    >
                      <div className="w-[100px] h-6 sm:w-[120px] md:w-[90px] md:h-4 rounded-[5px] bg-[#06b6d4] opacity-0 group-hover:opacity-0 transition-opacity"></div>
                    </div>
                    
                    {/* Neil */}
                    <div 
                      className="absolute top-[63%] right-[25%] flex flex-col items-center cursor-pointer group"
                      onClick={() => handleIslandSelect(4)}
                    >
                      <div className="w-[100px] h-5 rounded-[5px] bg-[#06b6d4] opacity-0 group-hover:opacity-0 transition-opacity"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section: Island Image and Description */}
              <div className="bg-[#1C1F22] w-full relative md:w-2/3 flex flex-col gap-4 justify-between rounded-[10px] overflow-hidden">
                <div className="relative w-full h-[250px] md:h-[350px]">
                  <Image
                    src={islandSlides[currentSlide].image[currentImageIndex].imagePath}
                    alt={islandSlides[currentSlide].title}
                    width={500}
                    height={350}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/30 px-4 py-2 rounded-[10px]">
                    <h4 className="text-xl md:text-2xl font-medium">{islandSlides[currentSlide].title}</h4>
                  </div>
                </div>

                <div className="px-6 pb-6 flex flex-col sm:flex-row justify-between items-end gap-4">
                  <p className="text-sm text-white/80 w-full sm:w-3/5 line-clamp-3">
                    {islandSlides[currentSlide].description}
                  </p>
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-end">
                    <span className="text-sm font-light text-[#06b6d4]">
                      {String(currentImageIndex + 1).padStart(2, '0')}/{String(islandSlides[currentSlide].image.length).padStart(2, '0')}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                        aria-label="Previous"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                        aria-label="Next"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex text-center w-full px-6 pb-4">
                  <button className="h-[50px] w-full rounded-[10px] text-md bg-gradient-to-r from-[#bef264] to-[#06b6d4] ">Start Exploring Locations in {islandSlides[currentSlide].title} </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Attractions Tab Content */}
        {activeTab === 'attractions' && (
          <CreateTourAll />
        )}

        {/* Hotels Tab Content */}
        {activeTab === 'hotels' && (
          <>
            {!showHotelList ? (<HotelSearchForm onSearch={handleSearch} />) : (
              <HotelParkList onBackToSearch={handleBackToSearch} />
            )}
          </>
        )}

        {/* Transport Tab Content */}
        {activeTab === 'transport' && (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl">Transport options will be displayed here</p>
          </div>
        )}

        {/* Adventures Tab Content */}
        {activeTab === 'adventures' && (
          <div className="flex justify-center items-center h-64">
            <p className="text-xl">Adventures and entertainment options will be displayed here</p>
          </div>
        )}

        {/* Selected Items Section */}
        {selectedItems.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Your Selected Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedItems.map((item) => (
                <div key={item.id} className="bg-[#1C1F22] rounded-[10px] overflow-hidden">
                  <div className="relative h-32">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-md font-medium">{item.title}</h3>
                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => setSelectedItems(selectedItems.filter(i => i.id !== item.id))}
                        className="px-2 py-1 bg-red-500 rounded-full text-white text-xs"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSectionCreateTour;