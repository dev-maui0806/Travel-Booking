'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoClose } from "react-icons/io5";
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdOutlineLocalParking, MdOutlineBreakfastDining, MdOutlinePool } from 'react-icons/md';
import { BsWifi } from 'react-icons/bs';
import { TbAirConditioning } from 'react-icons/tb';
import { BiTimeFive } from 'react-icons/bi';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { FiShoppingBag } from 'react-icons/fi';
import { GiCarSeat } from 'react-icons/gi';
import { IoMdBed } from 'react-icons/io';
import { FaSmokingBan } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

// Room interface
interface RoomAmenity {
    icon: React.ElementType;
    text: string;
}

interface Room {
    id: number;
    name: string;
    price: number;
    currency: string;
    image: string;
    amenities: RoomAmenity[];
    occupancy: string;
    duration: string;
    bedType?: string;
    size?: string;
    smoking?: boolean;
}

// Hotel interface
interface Amenity {
    icon: React.ElementType;
    text: string;
}

interface Hotel {
    id: number;
    name: string;
    rating: number;
    description: string;
    location: string;
    price: number;
    currency: string;
    image: string;
    images: string[];
    amenities: Amenity[];
    score: number;
    occupancy: string;
    duration: string;
    checkInTime: string;
    checkOutTime: string;
    rooms: Room[];
}

interface HotelDetailModalProps {
    onClose: () => void;
    hotel: Hotel;
    allHotels: Hotel[]; // Add this to access all hotels
}

const HotelDetailModal: React.FC<HotelDetailModalProps> = ({ onClose, hotel, allHotels }) => {
    // Track the current hotel index instead of just the slide
    const [currentHotelIndex, setCurrentHotelIndex] = useState(() => {
        return allHotels.findIndex(h => h.id === hotel.id);
    });

    // Get the current hotel based on the index
    const currentHotel = allHotels[currentHotelIndex];

    // For image slideshow within the current hotel
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const totalHotels = allHotels.length;
    const totalImages = currentHotel?.images?.length || 0;
    const [currentRoomPage, setCurrentRoomPage] = useState(1);
    const roomsPerPage = 2; // Number of rooms to display per page

    // Calculate total pages for rooms
    const totalRoomPages = Math.ceil((currentHotel?.rooms?.length || 0) / roomsPerPage);


    // Navigate to previous hotel
    const handlePrevHotel = () => {
        setCurrentHotelIndex(prev => (prev === 0 ? totalHotels - 1 : prev - 1));
        setCurrentImageIndex(0); // Reset image index when changing hotels
    };

    // Navigate to next hotel
    const handleNextHotel = () => {
        setCurrentHotelIndex(prev => (prev === totalHotels - 1 ? 0 : prev + 1));
        setCurrentImageIndex(0); // Reset image index when changing hotels
    };

    // Navigate images within the current hotel
    const handlePrevImage = () => {
        setCurrentImageIndex(prev => (prev === 0 ? totalImages - 1 : prev - 1));
    };

    const handleNextImage = () => {
        setCurrentImageIndex(prev => (prev === totalImages - 1 ? 0 : prev + 1));
    };

    // Add state to track active amenity filter
    const [activeAmenity, setActiveAmenity] = useState<string | null>('pool');

    // Function to toggle amenity selection
    const toggleAmenity = (amenityId: string) => {
        if (activeAmenity === amenityId) {
            setActiveAmenity(null);
        } else {
            setActiveAmenity(amenityId);
        }
    };

    // Get current rooms to display
    const getCurrentRooms = () => {
        const startIndex = (currentRoomPage - 1) * roomsPerPage;
        const endIndex = startIndex + roomsPerPage;
        return currentHotel?.rooms?.slice(startIndex, endIndex) || [];
    };

    // Navigate to previous room page
    const handlePrevRoomPage = () => {
        setCurrentRoomPage(prev => (prev === 1 ? totalRoomPages : prev - 1));
    };

    // Navigate to next room page
    const handleNextRoomPage = () => {
        setCurrentRoomPage(prev => (prev === totalRoomPages ? 1 : prev + 1));
    };

    // Reset room pagination when hotel changes
    React.useEffect(() => {
        setCurrentRoomPage(1);
    }, [currentHotelIndex]);


    return (
        <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto">
            <div className="container mx-auto py-4 px-4">

                {/* Hotel Detail Modal */}
                <div className="bg-[#222629] rounded-xl overflow-hidden relative mb-6">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 bg-[#222629]/70 rounded-full p-2 text-white"
                    >
                        <IoClose size={20} />
                    </button>

                    <div className="flex flex-col md:flex-row">
                        {/* Left side - Image */}
                        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
                            {currentHotel.images && currentHotel.images.length > 0 && (
                                <Image
                                    src={currentHotel.images[currentImageIndex % currentHotel.images.length]}
                                    alt={currentHotel.name}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>

                        {/* Right side - Content */}
                        <div className="p-6 w-full md:w-1/2 text-white">
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-bold">{currentHotel.name}</h2>
                                <div className="flex mt-1 mb-3">
                                    {Array.from({ length: currentHotel.rating }).map((_, i) => (
                                        <FaStar key={i} className="text-[#06b6d4] text-sm" />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-300 mb-4">
                                    {currentHotel.description}
                                </p>

                                <h3 className="text-lg font-semibold mb-2">Hotel amenities</h3>

                                <div className="grid grid-cols-2 gap-y-3 mb-6">
                                    {currentHotel.amenities.map((amenity, index) => (
                                        <div key={index} className="flex items-center text-sm text-gray-300">
                                            <amenity.icon className="mr-2 text-gray-400" size={18} />
                                            <span>{amenity.text}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center text-sm text-[#06b6d4]">
                                        <BiTimeFive className="mr-2" size={18} />
                                        <span>Check-in time: from {currentHotel.checkInTime}</span>
                                    </div>
                                    <div className="flex items-center text-sm text-[#06b6d4]">
                                        <BiTimeFive className="mr-2" size={18} />
                                        <span>Check out time is {currentHotel.checkOutTime}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-auto">
                                <div className="text-[#06b6d4] text-sm">
                                    {String(currentHotelIndex + 1).padStart(2, '0')}/{String(totalHotels).padStart(2, '0')}
                                </div>
                                <div className="flex space-x-3">
                                    <button
                                        onClick={handlePrevHotel}
                                        className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center"
                                    >
                                        <FaChevronLeft size={14} />
                                    </button>
                                    <button
                                        onClick={handleNextHotel}
                                        className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center"
                                    >
                                        <FaChevronRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Amenity Icon Group */}
                <div className="flex justify-start space-x-4 mb-6">
                    <button
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-[#06b6d4]/70 ${activeAmenity === 'parking' ? 'bg-[#06b6d4]' : 'bg-[#1C1F22]'}`}
                        onClick={() => toggleAmenity('parking')}
                    >
                        <MdOutlineLocalParking className={`${activeAmenity === 'parking' ? 'text-white' : 'text-[#06b6d4]'}`} size={20} />
                    </button>
                    <button
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-[#06b6d4]/70 ${activeAmenity === 'wifi' ? 'bg-[#06b6d4]' : 'bg-[#1C1F22]'}`}
                        onClick={() => toggleAmenity('wifi')}
                    >
                        <BsWifi className={`${activeAmenity === 'wifi' ? 'text-white' : 'text-[#06b6d4]'}`} size={20} />
                    </button>
                    <button
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-[#06b6d4]/70 ${activeAmenity === 'pool' ? 'bg-[#06b6d4]' : 'bg-[#1C1F22]'}`}
                        onClick={() => toggleAmenity('pool')}
                    >
                        <MdOutlinePool className={`${activeAmenity === 'pool' ? 'text-white' : 'text-[#06b6d4]'}`} size={20} />
                    </button>
                    <button
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-[#06b6d4]/70 ${activeAmenity === 'location' ? 'bg-[#06b6d4]' : 'bg-[#1C1F22]'}`}
                        onClick={() => toggleAmenity('location')}
                    >
                        <IoLocationOutline className={`${activeAmenity === 'location' ? 'text-white' : 'text-[#06b6d4]'}`} size={20} />
                    </button>
                    <button
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-[#06b6d4]/70 ${activeAmenity === 'building' ? 'bg-[#06b6d4]' : 'bg-[#1C1F22]'}`}
                        onClick={() => toggleAmenity('building')}
                    >
                        <HiOutlineOfficeBuilding className={`${activeAmenity === 'building' ? 'text-white' : 'text-[#06b6d4]'}`} size={20} />
                    </button>
                    <button
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-[#06b6d4]/70 ${activeAmenity === 'car' ? 'bg-[#06b6d4]' : 'bg-[#1C1F22]'}`}
                        onClick={() => toggleAmenity('car')}
                    >
                        <GiCarSeat className={`${activeAmenity === 'car' ? 'text-white' : 'text-[#06b6d4]'}`} size={20} />
                    </button>
                    <button
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-[#06b6d4]/70 ${activeAmenity === 'bed' ? 'bg-[#06b6d4]' : 'bg-[#1C1F22]'}`}
                        onClick={() => toggleAmenity('bed')}
                    >
                        <IoMdBed className={`${activeAmenity === 'bed' ? 'text-white' : 'text-[#06b6d4]'}`} size={20} />
                    </button>
                </div>

                {/* Room Options */}
                <div className="space-y-4">
                    {currentHotel.rooms.map((room) => (
                        <div key={room.id} className="bg-[#1C1F22] rounded-xl overflow-hidden flex flex-col md:flex-row">
                            {/* Room Image */}
                            <div className="relative h-48 md:h-auto md:w-1/4">
                                <Image
                                    src={room.image}
                                    alt={room.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Room Details */}
                            <div className="p-4 flex flex-col md:flex-row flex-grow">
                                <div className="md:w-2/3">
                                    <h3 className="text-xl font-semibold text-white">{room.name}</h3>

                                    {/* Amenities */}
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                                        {room.amenities.map((amenity, index) => (
                                            <div key={index} className="flex items-center text-sm text-gray-300">
                                                <amenity.icon className="mr-2 text-gray-400" size={16} />
                                                <span>{amenity.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Additional room details */}
                                    {room.bedType && (
                                        <div className="flex items-center text-sm text-gray-300 mt-2">
                                            <IoMdBed className="mr-2 text-gray-400" size={16} />
                                            <span>{room.bedType}</span>
                                        </div>
                                    )}

                                    {room.size && (
                                        <div className="flex items-center text-sm text-gray-300 mt-1">
                                            <IoLocationOutline className="mr-2 text-gray-400" size={16} />
                                            <span>{room.size}</span>
                                        </div>
                                    )}

                                    {room.smoking !== undefined && (
                                        <div className="flex items-center text-sm text-gray-300 mt-1">
                                            <FaSmokingBan className="mr-2 text-gray-400" size={16} />
                                            <span>{room.smoking ? 'Smoking allowed' : 'Non-smoking'}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="md:w-1/3 flex flex-col items-end justify-between mt-4 md:mt-0">
                                    <div className="text-2xl font-bold text-[#06b6d4]">{room.price}{room.currency}</div>
                                    <div className="text-sm text-gray-400 mt-1">
                                        <div>{room.occupancy}</div>
                                        <div>{room.duration}</div>
                                    </div>
                                    <button className="mt-4 bg-[#06b6d4] text-white p-2 rounded-full">
                                        <FiShoppingBag size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Room Pagination */}
                <div className="flex justify-between items-center mt-6">
                    <div className="text-[#06b6d4] text-sm">
                        {String(currentRoomPage).padStart(2, '0')}/{String(totalRoomPages).padStart(2, '0')}
                    </div>
                    <div className="flex space-x-2">
                        <button
                            onClick={handlePrevRoomPage}
                            className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-white"
                        >
                            <FaChevronLeft size={14} />
                        </button>
                        <button
                            onClick={handleNextRoomPage}
                            className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-white"
                        >
                            <FaChevronRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetailModal;