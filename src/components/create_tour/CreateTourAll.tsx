'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaRegMap } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import MapView from './MapView';
import PlaceDetailPanel from './PlaceDetailPanel';

export const attractionsData = [
    {
        id: 1,
        name: "Islands",
        items: [
            {
                id: 11,
                category: "Archtecture",
                childrens: [
                    {
                        id: 111,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 112,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 113,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 114,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 115,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 116,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 117,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 118,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },

                ]
            },
            {
                id: 12,
                category: "Beaches",
                childrens: [
                    {
                        id: 121,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 122,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 123,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 124,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 125,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 126,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 127,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 128,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },

                ]
            },
            {
                id: 13,
                category: "Corals",
                childrens: [
                    {
                        id: 131,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 132,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 133,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 134,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 135,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 136,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 137,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 138,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                ]
            },
            {
                id: 14,
                category: "Monuments",
                childrens: [
                    {
                        id: 141,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 142,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 143,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 144,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 145,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 146,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 147,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 148,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                ]
            },
            {
                id: 15,
                category: "Waterfulls",
                childrens: [
                    {
                        id: 151,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 152,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 153,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 154,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 155,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 156,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    }
                ]
            },
        ]
    }
];

const CreateTourAll: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Islands");
    const [activeFilter, setActiveFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const  [showAllItems, setShowAllItems] = useState(false);



    const [subCategories, setSubCategories] = useState<string[]>([]);
    const [showFilters, setShowFilters] = useState(false); // Add this line
    const [maps, setMaps] = useState(false);
    const [showDetailPanel, setShowDetailPanel] = useState(false);
    const [selectedDetailPlace, setSelectedDetailPlace] = useState<any>(null);
    
    // Extract subcategories when active tab changes

    useEffect(() => {
        const tabData = attractionsData.find(tab => tab.name === activeTab);
        if (tabData) {
            // Get unique categories from the current tab
            const categories = Array.from(new Set(tabData.items.map(item => item.category)));
            setSubCategories(categories);
            // Reset filter when changing tabs
            setActiveFilter("All");
            setCurrentPage(1);
        }
    }, [activeTab]);
    // Update the showMapData function to properly toggle the map view
    const showMapData = () => {
        setMaps(!maps);
    }
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

    // Pagination
    const itemsPerPage = 4;
    const totalPages = Math.ceil(filteredPlaces.length / itemsPerPage);
    const currentPlaces = filteredPlaces.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const displayedPlaces = showAllItems?filteredPlaces:filteredPlaces.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleViewAllClick = () => {
        setShowAllItems(!showAllItems);
        window.scrollTo({
            top:window.scrollY + 200, 
            behavior:"smooth"
        })
    }

    const handleAddToTour = (place: Object)  => {
        return <></>;
    }

    return (
        <div className="container mx-auto min-h-screen bg-[#222629] text-white px-4 py-8">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="bg-[#06b6d4] rounded-full p-3">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h2 className="text-2xl md:text-4xl">Explore Port Blair – Add Locations to Your Tour</h2>
                </div>
                {/* <button className="flex items-center gap-2 bg-[#1C1F22] hover:bg-[#2A2E32] px-4 py-2 rounded-full">
                    <span>Add to Tour</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button> */}
            </div>

            {/* Filter Section */}
            <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center gap-4 mb-8">
                <div className="relative w-full md:w-1/2 md:w-64">
                    <select
                        className="w-full bg-[#1C1F22] text-white px-4 py-3 rounded-lg appearance-none cursor-pointer"
                        onChange={(e) => setActiveFilter(e.target.value)}
                        value={activeFilter}
                    >
                        <option value="All">Browse by Experience</option>
                        {subCategories.map((category) => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Places Grid */}
        {/* Places Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {displayedPlaces.map((place) => (
                <div key={place.id} className="bg-[#1C1F22] rounded-[10px] flex flex-col justify-between gap-1 items-center overflow-hidden">
                    {/* Title */}
                    <div className='w-full p-2 flex justify-center pt-4'>
                        <h3 className=" text-sm md:text-xl font-medium">
                            {place.name}
                        </h3>
                    </div>
                    <div className=" w-full relative">
                        {/* Image */}
                        <div className="relative h-[150px] sm:h-[200px] w-full">
                            <Image
                                src={place.image}
                                alt={place.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        
                    </div>
                        {/* Add to Tour Button */}
                        <div className="w-full p-2">
                            <button 
                                className="w-full text-xs md:text-xl bg-white hover:bg-[#004E64] text-black py-2 px-4 rounded-[10px] transition-colors duration-200 flex items-center justify-center gap-2"
                                onClick={() => handleAddToTour(place)}
                            >
                                Add to Tour
                                <svg 
                                    className="w-3 h-3 md:w-4 md:h-4" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                </div>
            ))}
        </div>

            {/* View All Button */}
            {
                !showAllItems && filteredPlaces.length > itemsPerPage && (
                    <div className="flex justify-center sm:justify-end md:justify-end w-full mb-8">
                        <div className='flex w-full justify-center md:w-[300px]'>
                            <button 
                                onClick={handleViewAllClick}
                                className="w-full bg-gradient-to-r from-[#bef264] to-[#06b6d4] text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg flex justify-center items-center gap-2"
                            >
                                {showAllItems ? 'Show Less' : 'View All'}
                                <svg 
                                    className={`w-4 h-4 transition-transform ${showAllItems ? 'rotate-180' : ''}`} 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                    >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )
            }
             {/* Show Less Button (when showing all items) */}
             {showAllItems && (
                <div className="flex justify-center mb-8">
                    <button 
                        onClick={handleViewAllClick}
                        className="bg-gradient-to-r from-[#bef264] to-[#06b6d4] text-white px-8 py-3 rounded-full text-lg font-medium hover:opacity-90 transition-opacity shadow-lg flex items-center gap-2"
                    >
                        Show Less
                        <svg 
                            className="w-4 h-4 rotate-180" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            )}

            {/* Bottom Info Section */}
            <div className="flex flex-col md:flex-row items-start justify-start md:items-center gap-4 md:justify-between bg-[#1C1F22] rounded-lg p-4">
                <div className="flex items-center gap-3">
                    <div className="bg-[#06b6d4] rounded-full p-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p className="text-xs md:text-sm">You've selected 3 locations in Port Blair. Don't forget to plan your stay, car/ferry.</p>
                </div>
                <button className="text-[#06b6d4] w-full text-right hover:text-[#0891b2] font-medium">
                    Plan Essentials
                </button>
            </div>
        </div>
    );
};

export default CreateTourAll;