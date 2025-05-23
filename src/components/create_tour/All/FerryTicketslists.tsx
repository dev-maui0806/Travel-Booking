'use client'

import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoSnow } from "react-icons/io5";
import { MdSpeed } from "react-icons/md";

const FerryTickets = [
    {
        id: 1,
        price: "From 20 USD",
        company: "Makruzz",
        rating: 4,
        features: ["Air conditioner", "Express"],
        departure: "7:00 am",
        arrival: "8:30 am",
        duration: "1 h 30 min",
        image: "/images/ferry/ferry1.png",
    },
    {
        id: 2,
        price: "From 20 USD",
        company: "Makruzz",
        rating: 4,
        features: ["Air conditioner", "Express"],
        departure: "7:30 am",
        arrival: "9:00 am",
        duration: "1 h 30 min",
        image: "/images/ferry/ferry2.png",
    },
    {
        id: 3,
        price: "From 20 USD",
        company: "Makruzz",
        rating: 4,
        features: ["Air conditioner", "Express"],
        departure: "8:00 am",
        arrival: "10:00 am",
        duration: "1 h 30 min",
        image: "/images/ferry/ferry3.png",
    },
    {
        id: 4,
        price: "From 20 USD",
        company: "Makruzz",
        rating: 4,
        features: ["Air conditioner", "Express"],
        departure: "8:30 am",
        arrival: "10:30 am",
        duration: "1 h 30 min",
        image: "/images/ferry/ferry3.png",
    },
    
];

interface FerryTicketListProps {
    onBackToSearch: () => void;
}

const FerryTicketLists: React.FC<FerryTicketListProps> = ({ onBackToSearch }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTicket, setSelectedTicket] = useState<number | null>(null);
    const [activeTrip, setActiveTrip] = useState(1);
    
    const itemsPerPage = 3;
    const totalPages = Math.ceil(FerryTickets.length / itemsPerPage);

    const getCurrentPageItems = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return FerryTickets.slice(startIndex, endIndex);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const handleTripChange = (tripNumber: number) => {
        setActiveTrip(tripNumber);
        setCurrentPage(1); // Reset to first page when changing trips
    };

    return (
        <div className="w-full container mx-auto">
            {/* Navigation */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex gap-4">
                    <div 
                        className={`px-4 py-2 rounded-full cursor-pointer ${activeTrip === 1 ? 'bg-[#00B6B1] text-white' : 'text-gray-400'}`}
                        onClick={() => handleTripChange(1)}
                    >
                        Trip 1
                    </div>
                    <div 
                        className={`px-4 py-2 rounded-full cursor-pointer ${activeTrip === 2 ? 'bg-[#00B6B1] text-white' : 'text-gray-400'}`}
                        onClick={() => handleTripChange(2)}
                    >
                        Trip 2
                    </div>
                </div>
            </div>

            {/* Ferry Tickets List */}
            <div className="space-y-4">
                {getCurrentPageItems().map((ticket) => (
                    <div key={ticket.id} 
                         className="bg-[#222629] rounded-2xl overflow-hidden cursor-pointer hover:bg-[#2a2f32] transition-colors"
                         onClick={() => setSelectedTicket(ticket.id)}>
                        <div className="flex justify-between">
                            {/* Left Content */}
                            <div className="flex-1 p-8">
                                {/* Price and Company Row */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[#00B6B1] text-lg font-medium">{ticket.price}</span>
                                    <div className="flex flex-col items-end">
                                        <span className="text-white text-lg font-semibold">{ticket.company}</span>
                                        <div className="flex items-center gap-1">
                                            {[...Array(ticket.rating)].map((_, i) => (
                                                <FaStar key={i} className="text-[#00B6B1]" size={14} />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Features Row */}
                                <div className="flex gap-6 flex-col justify-center items-end mb-6">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400 text-sm">Air conditioner</span>
                                        <IoSnow size={20} className="text-gray-400" />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-400 text-sm">Express</span>
                                        <MdSpeed size={20} className="text-gray-400" />
                                    </div>
                                </div>

                                {/* Time and Duration Row */}
                                <div className="flex items-center justify-between">
                                    <div className="text-center">
                                        <span className="text-2xl font-bold text-white block">{ticket.departure}</span>
                                    </div>
                                    <div className="flex flex-col items-center px-4">
                                        <span className="text-sm text-gray-400 mb-3">{ticket.duration}</span>
                                        <div className="relative w-32">
                                            <div className="w-full h-[2px] bg-gray-600"></div>
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                                <Image src="/images/ferry/ferry-line.png" alt="ferry-line" width={64} height={32} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-2xl font-bold text-gray-400 block">{ticket.arrival}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Image */}
                            <div className="w-[400px]">
                                <img
                                    src={ticket.image}
                                    alt={`${ticket.company} ferry`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-400">{currentPage}/{totalPages}</span>
                <div className="flex gap-2">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                            currentPage === 1 
                            ? 'bg-[#1D2021] text-[#666666] cursor-not-allowed' 
                            : 'bg-[#222629] text-white hover:bg-[#00B6B1]'
                        }`}
                    >
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 9L1 5L5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                            currentPage === totalPages 
                            ? 'bg-[#1D2021] text-[#666666] cursor-not-allowed' 
                            : 'bg-[#222629] text-white hover:bg-[#00B6B1]'
                        }`}
                    >
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FerryTicketLists;

