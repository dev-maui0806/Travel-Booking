'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaRegMap } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";

// Mock data for attractions
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
        ]
    },
    {
        id: 2,
        name: "Monuments",
        items: [
            {
                id: 21,
                category: "Archtecture",
                childrens: [
                    {
                        id: 211,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 212,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 213,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 214,
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
                id: 13,
                category: "Monuments",
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

                ]
            },
        ]
    },
    {
        id: 5,
        name: "Adventuresand entertainment",
        items: [
            {
                id: 51,
                category: "Archtecture",
                childrens: [
                    {
                        id: 511,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 512,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 513,
                        name: "Corbyn's Cove Beach",
                        image: "/images/places/corbyns.png",
                        description: "Corbyn's Cove Beach is a picturesque beach located on the eastern coast of South Andaman Island, near Port Blair. It is known for its serene beauty, clear waters, and lush coconut palms lining the shore. The beach"
                    },
                    {
                        id: 514,
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

                ]
            },
        ]
    },
];

const CreateTourAll: React.FC = () => {
    const [activeTab, setActiveTab] = useState("Islands");
    const [activeFilter, setActiveFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [subCategories, setSubCategories] = useState<string[]>([]);
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
            setCurrentPage(1);
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

    // Pagination
    const itemsPerPage = 4;
    const totalPages = Math.ceil(filteredPlaces.length / itemsPerPage);
    const currentPlaces = filteredPlaces.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className="container mx-auto min-h-screen bg-[#222629] text-white p-4">
            {/* Top Navigation Bar */}
            <div className="flex items-center flex-col md:flex-row justify-between mb-6">
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
                <div className="flex md:hidden overflow-hidden space-x-2 bg-[#1C1F22] rounded-full p-1">
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

            {/* Places Grid */}
            <div className="grid grid-cols-2 gap-6 mb-6">
                {currentPlaces.map((place) => (
                    <div key={place.id} className="bg-[#1C1F22] rounded-xl overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                src={place.image}
                                alt={place.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1">{place.name}</h3>
                            <p className="text-sm text-gray-400 line-clamp-2">
                                {place.description}
                            </p>
                        </div>
                        <div className="flex justify-between items-center p-4">
                            <button className="text-[#06b6d4] rounded-full p-2 hover:bg-[#111827]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 16 16 12 12 8"></polyline>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </button>
                            <button className="text-white bg-[#06b6d4] p-2 rounded-full border border-[#06b6d4] hover:border-white">
                                <HiOutlineShoppingBag/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-end space-x-3 md:space-x-4">
                <div className="text-sm font-light text-[#06b6d4]">
                    {String(currentPage).padStart(2, '0')}/{String(totalPages).padStart(2, '0')}
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    >
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateTourAll;