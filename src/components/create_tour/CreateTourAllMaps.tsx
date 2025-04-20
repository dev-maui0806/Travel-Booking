'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaRegMap } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// Import the same attractionsData from CreateTourAll.tsx
import { attractionsData } from './CreateTourAll';

const CreateTourAllMaps: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Islands");
    const [activeFilter, setActiveFilter] = useState("All");
    const [subCategories, setSubCategories] = useState<string[]>([]);
    const [selectedPlace, setSelectedPlace] = useState<any>(null);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [showFilters, setShowFilters] = useState(false); // Add this line


    // Extract subcategories when active tab changes
    useEffect(() => {
        const tabData = attractionsData.find(tab => tab.name === activeTab);
        if (tabData) {
            // Get unique categories from the current tab
            const categories = Array.from(new Set(tabData.items.map(item => item.category)));
            setSubCategories(categories);
            // Reset filter when changing tabs
            setActiveFilter("All");
        }
    }, [activeTab]);

    // Get all places from the current active tab
    const getPlacesForActiveTab = () => {
        const tabData = attractionsData.find(tab => tab.name === activeTab);
        if (!tabData) return [];
        return tabData.items.flatMap(item => item.childrens);
    };

    // Filter places based on category
    const allPlaces = getPlacesForActiveTab();
    const filteredPlaces = activeFilter === "All"
        ? allPlaces
        : allPlaces.filter(place => {
            const parentItem = attractionsData.find(tab => tab.name === activeTab)?.items.find(item =>
                item.childrens.some(child => child.id === place.id)
            );
            return parentItem?.category === activeFilter;
        });

    // Handle place selection
    const handlePlaceClick = (place: any) => {
        setSelectedPlace(place);
    };

    // Close detail panel
    const handleCloseDetail = () => {
        setSelectedPlace(null);
    };

    // Zoom controls
    const handleZoomIn = () => {
        setZoomLevel(prev => Math.min(prev + 0.2, 2));
    };

    const handleZoomOut = () => {
        setZoomLevel(prev => Math.max(prev - 0.2, 0.6));
    };

    return (
        <div className="container mx-auto min-h-screen bg-[#222629] text-white p-4">
            {/* Top Navigation Bar */}
            <div className="flex flex-col md:flex-row items-between md:items-center gap-2 justify-between mb-6">
                <div className="md:flex hidden space-x-2 bg-[#1C1F22] rounded-full p-1">
                    {attractionsData.map(tab => (
                        <button
                            key={tab.name}
                            className={`px-4 py-2 rounded-full ${activeTab === tab.name
                                ? 'bg-white text-black'
                                : 'text-gray-400'
                                }`}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
                <div className="flex items-center space-x-2 bg-[#1C1F22] rounded-full p-1 w-fit min-w-full md:min-w-0">
                    <div className="flex items-center space-x-2">
                        <span className="bg-[#222629] px-4 py-2 rounded-full">$ 0</span>
                        <span className="bg-[#222629] px-4 py-2 rounded-full">0 day</span>
                    </div>
                    <button className="bg-gradient-to-r from-[#bef264] to-[#06b6d4] text-white px-6 py-2 rounded-full">
                        Route details
                    </button>
                </div>
                <div className="flex  md:hidden space-x-2 bg-[#1C1F22] rounded-full p-1">
                    {attractionsData.map(tab => (
                        <button
                            key={tab.name}
                            className={`px-4 py-2 rounded-full ${activeTab === tab.name
                                ? 'bg-white text-black'
                                : 'text-gray-400'
                                }`}
                            onClick={() => setActiveTab(tab.name)}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Category Filters */}
            <div className="flex items-center justify-between mb-6">
                {/* Desktop filters - hidden on mobile */}
                <div className="hidden md:flex items-center space-x-2 bg-[#1C1F22] p-5 rounded-[10px] w-full">
                    <div className='flex item-start p-1'>
                        <button
                            className={`px-4 py-2 rounded-full ${activeFilter === "All"
                                    ? 'bg-white text-black'
                                    : 'text-gray-400'
                                }`}
                            onClick={() => setActiveFilter("All")}
                        >
                            All
                        </button>
                        {subCategories.map(category => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-full ${activeFilter === category
                                        ? 'bg-white text-black'
                                        : 'text-gray-400'
                                    }`}
                                onClick={() => setActiveFilter(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="ml-auto py-2 px-5 bg-[#222629] rounded-full">
                        <button className="text-[#06b6d4] flex items-center">
                            <FaRegMap/>
                            <span className="ml-1">Map</span>
                        </button>
                    </div>
                </div>
                
                {/* Mobile filters - shown only on mobile */}
                <div className="flex md:hidden items-center justify-between w-full bg-[#1C1F22] rounded-[10px] p-2">
                    <div className="relative">
                        <button 
                            onClick={() => setShowFilters && setShowFilters(!showFilters)}
                            className="flex items-center space-x-1 px-4 py-1.5 rounded-full bg-white text-black"
                        >
                            <span>All</span>
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {/* Dropdown for filters - add state if needed */}
                        {showFilters && (
                            <div className="absolute top-full left-0 mt-1 bg-[#1C1F22] rounded-lg shadow-lg z-10 w-40">
                                <button
                                    className={`w-full text-left px-3 py-2 ${activeFilter === "All" ? 'text-[#06b6d4]' : 'text-gray-400'}`}
                                    onClick={() => {
                                        setActiveFilter("All");
                                        setShowFilters && setShowFilters(false);
                                    }}
                                >
                                    All
                                </button>
                                {subCategories.map(category => (
                                    <button
                                        key={category}
                                        className={`w-full text-left px-3 py-2 ${activeFilter === category ? 'text-[#06b6d4]' : 'text-gray-400'}`}
                                        onClick={() => {
                                            setActiveFilter(category);
                                            setShowFilters && setShowFilters(false);
                                        }}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    
                    <div className="py-1.5 px-3 bg-[#222629] rounded-full">
                        <button className="text-[#06b6d4] flex items-center">
                            <FaRegMap />
                            <span className="ml-1">Map</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Map Container - Updated to match UnforgettablePlacesSection styling */}
            <div className="relative w-full lg:h-[700px] md:h-[600px] h-[300px] bg-[#cce4e7] rounded-xl overflow-hidden">
                {/* Map Background */}
                <div className="absolute inset-0 w-full h-full">
                    <Image 
                        src="/images/map-background.jpg" 
                        alt="Map"
                        fill
                        className="object-cover"
                        style={{ transform: `scale(${zoomLevel})` }}
                        priority
                    />
                </div>

                {/* Map Markers */}
                <div className="absolute inset-0 w-full h-full">
                    {filteredPlaces.map((place, index) => (
                        <div 
                            key={place.id}
                            className="absolute cursor-pointer"
                            style={{ 
                                top: `${30 + (index * 10) % 60}%`, 
                                left: `${20 + (index * 15) % 70}%`,
                                transform: `scale(${zoomLevel})`
                            }}
                            onClick={() => handlePlaceClick(place)}
                        >
                            {place.id === selectedPlace?.id ? (
                                <div className="bg-[#06b6d4] text-white p-1 rounded-full h-8 w-8 flex items-center justify-center">
                                    <HiOutlineShoppingBag size={18} />
                                </div>
                            ) : (
                                <div className="bg-white text-[#06b6d4] p-1 rounded-full h-8 w-8 flex items-center justify-center">
                                    <span className="text-xs font-bold">P</span>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Route Lines (Simplified) */}
                    <svg className="absolute inset-0 w-full h-full" style={{ transform: `scale(${zoomLevel})` }}>
                        <path 
                            d="M200,200 C300,250 400,300 500,350 C600,400 700,350 800,300" 
                            stroke="#888" 
                            strokeWidth="3" 
                            fill="none" 
                            strokeDasharray="5,5"
                        />
                        <path 
                            d="M500,350 C550,400 600,450 650,400" 
                            stroke="#888" 
                            strokeWidth="3" 
                            fill="none" 
                            strokeDasharray="5,5"
                        />
                    </svg>

                    {/* Numbered Markers */}
                    <div className="absolute top-[40%] left-[45%]" style={{ transform: `scale(${zoomLevel})` }}>
                        <div className="bg-[#f59e0b] text-white rounded-full h-6 w-6 flex items-center justify-center">
                            <span className="text-xs font-bold">4</span>
                        </div>
                    </div>
                    <div className="absolute top-[60%] left-[30%]" style={{ transform: `scale(${zoomLevel})` }}>
                        <div className="bg-[#f59e0b] text-white rounded-full h-6 w-6 flex items-center justify-center">
                            <span className="text-xs font-bold">4</span>
                        </div>
                    </div>
                </div>

                {/* Selected Place Detail Panel - Updated to match UnforgettablePlacesSection styling */}
                {selectedPlace && (
                    <div className="hidden md:block absolute top-[-30px] right-8 bg-[#222629]/90 backdrop-blur-sm rounded-2xl overflow-hidden w-[400px] shadow-lg">
                        <div className="p-5">
                            <h3 className="text-2xl font-light mb-3">{selectedPlace.name}</h3>
                            <div className="relative w-full h-[240px]">
                                <Image
                                    src={selectedPlace.image}
                                    alt={selectedPlace.name}
                                    fill
                                    className="object-cover rounded-lg"
                                />
                                <button 
                                    className="absolute top-2 right-2 bg-black/50 rounded-full p-1"
                                    onClick={handleCloseDetail}
                                >
                                    <IoClose size={20} />
                                </button>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {selectedPlace.description}
                                </p>
                            </div>
                            <div className="flex justify-between items-center px-6 pb-4">
                                <button className="text-[#06b6d4] rounded-full p-2 hover:bg-[#111827]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 16 16 12 12 8"></polyline>
                                        <line x1="8" y1="12" x2="16" y2="12"></line>
                                    </svg>
                                </button>
                                <button className="text-white bg-[#06b6d4] p-2 rounded-full border border-[#06b6d4] hover:border-white">
                                    <HiOutlineShoppingBag />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mobile Description Overlay - Added from UnforgettablePlacesSection */}
                {selectedPlace && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent pt-20 pb-16 px-4 md:hidden">
                        <h3 className="text-[28px] font-light mb-2">
                            {selectedPlace.name}
                        </h3>
                        <p className="text-[15px] text-gray-200 leading-snug opacity-80">
                            {selectedPlace.description}
                        </p>
                    </div>
                )}

                {/* Zoom Controls */}
                <div className="absolute bottom-6 right-6 flex flex-col space-y-2">
                    <button 
                        className="bg-white text-[#222629] rounded-full p-2 shadow-lg"
                        onClick={handleZoomIn}
                    >
                        <AiOutlinePlus size={20} />
                    </button>
                    <button 
                        className="bg-white text-[#222629] rounded-full p-2 shadow-lg"
                        onClick={handleZoomOut}
                    >
                        <AiOutlineMinus size={20} />
                    </button>
                </div>

                {/* Location Label */}
                <div className="absolute bottom-6 right-[50%] translate-x-1/2 bg-[#1C1F22]/80 px-4 py-2 rounded-full">
                    <span className="text-white font-medium">
                        {selectedPlace ? selectedPlace.name : "Corbyn's Cove Beach"}
                    </span>
                </div>

                {/* Navigation Controls - Added from UnforgettablePlacesSection */}
                <div className="absolute right-0 bottom-[20px] md:right-0 flex items-center space-x-3 md:space-x-4">
                    <span className="text-sm font-light text-[#06b6d4]">
                        {filteredPlaces.length > 0 && selectedPlace 
                            ? `${String(filteredPlaces.findIndex(p => p.id === selectedPlace.id) + 1).padStart(2, '0')}/${String(filteredPlaces.length).padStart(2, '0')}`
                            : `01/${String(filteredPlaces.length).padStart(2, '0')}`
                        }
                    </span>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => {
                                if (selectedPlace && filteredPlaces.length > 0) {
                                    const currentIndex = filteredPlaces.findIndex(p => p.id === selectedPlace.id);
                                    const prevIndex = currentIndex === 0 ? filteredPlaces.length - 1 : currentIndex - 1;
                                    setSelectedPlace(filteredPlaces[prevIndex]);
                                } else if (filteredPlaces.length > 0) {
                                    setSelectedPlace(filteredPlaces[filteredPlaces.length - 1]);
                                }
                            }}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                            aria-label="Previous"
                        >
                            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={() => {
                                if (selectedPlace && filteredPlaces.length > 0) {
                                    const currentIndex = filteredPlaces.findIndex(p => p.id === selectedPlace.id);
                                    const nextIndex = (currentIndex + 1) % filteredPlaces.length;
                                    setSelectedPlace(filteredPlaces[nextIndex]);
                                } else if (filteredPlaces.length > 0) {
                                    setSelectedPlace(filteredPlaces[0]);
                                }
                            }}
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
        </div>
    );
};

export default CreateTourAllMaps;