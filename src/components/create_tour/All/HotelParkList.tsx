'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar, FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { BsWifi } from 'react-icons/bs';
import { TbAirConditioning } from 'react-icons/tb';
import { MdOutlineLocalParking, MdOutlineBreakfastDining } from 'react-icons/md';
import HotelDetailModal from './HotelDetailModal';

// Sample hotel data
const hotelData = [
    {
        id: 1,
        name: 'Zone Connect by The Park',
        rating: 4,
        description: 'Zone Connect by The Park Port Blair is a 4-star hotel managed by Apeejay Surendra Park Hotels Limited, surrounded by backwaters and offering sophisticated views',
        price: 44,
        currency: 'USD',
        image: '/images/hotels/hotel1.png',
        amenities: [
            { icon: MdOutlineLocalParking, text: 'Free parking' },
            { icon: BsWifi, text: 'Free high speed internet' },
            { icon: TbAirConditioning, text: 'Air conditioner' },
            { icon: IoLocationOutline, text: 'Sea view' },
            { icon: MdOutlineBreakfastDining, text: 'Free breakfast' },
            { icon: IoLocationOutline, text: '55 km from the center' },
        ],
        score: 9.4,
        occupancy: 'Two adults',
        duration: 'For two nights',
        location: 'Port Blair',
        checkInTime: '11:00 to 22:00',
        checkOutTime: 'until 12:00',
        images: ['/images/hotels/hotel1.png', '/images/hotels/hotel2.png', '/images/hotels/hotel3.png'],
        rooms: [
            {
                id: 101,
                name: 'Classic Double Room',
                price: 44,
                currency: 'USD',
                image: '/images/parks/1.png',
                amenities: [
                    { icon: MdOutlineLocalParking, text: 'Free parking' },
                    { icon: BsWifi, text: 'Free high speed internet' },
                    { icon: TbAirConditioning, text: 'Air conditioner' },
                    { icon: IoLocationOutline, text: 'Sea view' },
                    { icon: MdOutlineBreakfastDining, text: 'Free breakfast' },
                ],
                occupancy: 'Two adults',
                duration: 'For two nights',
                bedType: 'One double bed',
                size: '28 m²',
                smoking: false
            },
            {
                id: 102,
                name: 'Deluxe Suite',
                price: 68,
                currency: 'USD',
                image: '/images/parks/2.png',
                amenities: [
                    { icon: MdOutlineLocalParking, text: 'Free parking' },
                    { icon: BsWifi, text: 'Free high speed internet' },
                    { icon: TbAirConditioning, text: 'Air conditioner' },
                    { icon: IoLocationOutline, text: 'Sea view' },
                    { icon: MdOutlineBreakfastDining, text: 'Free breakfast' },
                ],
                occupancy: 'Two adults, one child',
                duration: 'For two nights',
                bedType: 'One king bed',
                size: '42 m²',
                smoking: false
            },
            {
                id: 103,
                name: 'Family Room',
                price: 82,
                currency: 'USD',
                image: '/images/parks/3.png',
                amenities: [
                    { icon: MdOutlineLocalParking, text: 'Free parking' },
                    { icon: BsWifi, text: 'Free high speed internet' },
                    { icon: TbAirConditioning, text: 'Air conditioner' },
                    { icon: IoLocationOutline, text: 'Sea view' },
                    { icon: MdOutlineBreakfastDining, text: 'Free breakfast' },
                ],
                occupancy: 'Four adults',
                duration: 'For two nights',
                bedType: 'Two double beds',
                size: '55 m²',
                smoking: false
            }
        ]
    },
    {
        id: 2,
        name: 'Zone Connect by The Park',
        rating: 4,
        description: 'Zone Connect by The Park Port Blair is a 4-star hotel managed by Apeejay Surendra Park Hotels Limited, surrounded by backwaters and offering sophisticated views',
        price: 44,
        currency: 'USD',
        image: '/images/hotels/hotel2.png',
        amenities: [
            { icon: MdOutlineLocalParking, text: 'Free parking' },
            { icon: BsWifi, text: 'Free high speed internet' },
            { icon: TbAirConditioning, text: 'Air conditioner' },
            { icon: IoLocationOutline, text: 'Sea view' },
            { icon: MdOutlineBreakfastDining, text: 'Free breakfast' },
            { icon: IoLocationOutline, text: '55 km from the center' },
        ],
        score: 9.4,
        occupancy: 'Two adults',
        duration: 'For two nights',
        location: 'Port Blair',
        checkInTime: '11:00 to 22:00',
        checkOutTime: 'until 12:00',
        images: ['/images/hotels/hotel2.png', '/images/hotels/hotel1.png', '/images/hotels/hotel3.png'],
        rooms: [
            {
                id: 201,
                name: 'Classic Double Room',
                price: 44,
                currency: 'USD',
                image: '/images/parks/1.png',
                amenities: [
                    { icon: MdOutlineLocalParking, text: 'Free parking' },
                    { icon: BsWifi, text: 'Free high speed internet' },
                    { icon: TbAirConditioning, text: 'Air conditioner' },
                    { icon: IoLocationOutline, text: 'Sea view' },
                    { icon: MdOutlineBreakfastDining, text: 'Free breakfast' },
                ],
                occupancy: 'Two adults',
                duration: 'For two nights',
                bedType: 'One double bed',
                size: '28 m²',
                smoking: false
            },
            {
                id: 202,
                name: 'Premium Room with Balcony',
                price: 56,
                currency: 'USD',
                image: '/images/parks/2.png',
                amenities: [
                    { icon: MdOutlineLocalParking, text: 'Free parking' },
                    { icon: BsWifi, text: 'Free high speed internet' },
                    { icon: TbAirConditioning, text: 'Air conditioner' },
                    { icon: IoLocationOutline, text: 'Sea view' },
                    { icon: MdOutlineBreakfastDining, text: 'Free breakfast' },
                ],
                occupancy: 'Two adults',
                duration: 'For two nights',
                bedType: 'One queen bed',
                size: '32 m²',
                smoking: false
            }
        ]
    },
    {
        id: 3,
        name: 'Zone Connect by The Park',
        rating: 4,
        description: 'Zone Connect by The Park Port Blair is a 4-star hotel managed by Apeejay Surendra Park Hotels Limited, surrounded by backwaters and offering sophisticated views',
        price: 44,
        currency: 'USD',
        image: '/images/parks/3.png',
        amenities: [
            { icon: MdOutlineLocalParking, text: 'Free parking' },
            { icon: BsWifi, text: 'Free high speed internet' },
            { icon: TbAirConditioning, text: 'Air conditioner' },
            { icon: IoLocationOutline, text: 'Sea view' },
            { icon: MdOutlineBreakfastDining, text: 'Free breakfast' },
            { icon: IoLocationOutline, text: '55 km from the center' },
        ],
        score: 9.4,
        occupancy: 'Two adults',
        duration: 'For two nights',
        location: 'Port Blair',
        checkInTime: '11:00 to 22:00',
        checkOutTime: 'until 12:00',
        images: ['/images/hotels/hotel3.png', '/images/hotels/hotel1.png', '/images/hotels/hotel2.png'],
        rooms: [
            {
                id: 301,
                name: 'Classic Double Room',
                price: 44,
                currency: 'USD',
                image: '/images/parks/1.png',
                amenities: [
                    { icon: MdOutlineLocalParking, text: 'Free parking' },
                    { icon: BsWifi, text: 'Free high speed internet' },
                    { icon: TbAirConditioning, text: 'Air conditioner' },
                    { icon: IoLocationOutline, text: 'Sea view' },
                    { icon: MdOutlineBreakfastDining, text: 'Free breakfast' },
                ],
                occupancy: 'Two adults',
                duration: 'For two nights',
                bedType: 'One double bed',
                size: '28 m²',
                smoking: false
            },
            {
                id: 302,
                name: 'Executive Suite',
                price: 78,
                currency: 'USD',
                image: '/images/parks/3.png',
                amenities: [
                    { icon: MdOutlineLocalParking, text: 'Free parking' },
                    { icon: BsWifi, text: 'Free high speed internet' },
                    { icon: TbAirConditioning, text: 'Air conditioner' },
                    { icon: IoLocationOutline, text: 'Sea view' },
                    { icon: MdOutlineBreakfastDining, text: 'Free breakfast' },
                ],
                occupancy: 'Two adults',
                duration: 'For two nights',
                bedType: 'One king bed',
                size: '48 m²',
                smoking: false
            },
            {
                id: 303,
                name: 'Luxury Penthouse',
                price: 120,
                currency: 'USD',
                image: '/images/parks/2.png',
                amenities: [
                    { icon: MdOutlineLocalParking, text: 'Free parking' },
                    { icon: BsWifi, text: 'Free high speed internet' },
                    { icon: TbAirConditioning, text: 'Air conditioner' },
                    { icon: IoLocationOutline, text: 'Sea view' },
                    { icon: MdOutlineBreakfastDining, text: 'Free breakfast' },
                ],
                occupancy: 'Four adults',
                duration: 'For two nights',
                bedType: 'Two king beds',
                size: '75 m²',
                smoking: false
            }
        ]
    }
];

// Filter options
const filterOptions = [
    { id: 'best', label: 'Best options' },
    { id: 'ascending', label: 'Ascending price' },
    { id: 'descending', label: 'Descending price' },
    { id: 'hot', label: 'Hot offer' },
    { id: 'map', label: 'Map' },
];

// Amenity icons for the filter bar
const amenityFilters = [
    { id: 'parking', icon: MdOutlineLocalParking },
    { id: 'wifi', icon: BsWifi },
    { id: 'ac', icon: TbAirConditioning },
    { id: 'mountain', icon: IoLocationOutline },
    { id: 'pool', icon: IoLocationOutline },
    { id: 'breakfast', icon: MdOutlineBreakfastDining },
];



interface HotelParkListProps {
    onBackToSearch: () => void;
}
const HotelParkList: React.FC<HotelParkListProps> = ({ onBackToSearch }) => {
    const [activeFilter, setActiveFilter] = useState('best');
    const [currentPage, setCurrentPage] = useState(1);
    const [priceRange, setPriceRange] = useState(12398);
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
    const [selectedHotel, setSelectedHotel] = useState(null);
    // Navigation tabs
    const tabs = ['Islands', 'Attractions', 'Hotels', 'Transport', 'Adventures and entertainment'];
    const [activeTab, setActiveTab] = useState('Hotels');



    const setinitialHotalData = (id:Number) => {
        setSelectedHotel(hotelData[0] as any);
    }
    const toggleAmenity = (id: string) => {
        if (selectedAmenities.includes(id)) {
            setSelectedAmenities(selectedAmenities.filter(item => item !== id));
        } else {
            setSelectedAmenities([...selectedAmenities, id]);
        }
    };

    return (
        <div className="container mx-auto bg-[#222629] min-h-screen text-white">

            {/* Tags */}
            <div className="px-4 mb-4">
                <span className="bg-[#06b6d4] text-white text-xs px-3 py-1 rounded-full">free parking</span>
            </div>

            {/* Filter Options */}
            <div className="px-4 mb-6">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                    {filterOptions.map(option => (
                        <button
                            key={option.id}
                            className={`px-4 py-2 rounded-full text-sm ${activeFilter === option.id ? 'bg-white text-black' : 'bg-[#1C1F22] text-gray-400'
                                }`}
                            onClick={() => setActiveFilter(option.id)}
                        >
                            {option.label}
                        </button>
                    ))}

                    {/* Amenity filters */}
                    {amenityFilters.map(filter => (
                        <button
                            key={filter.id}
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedAmenities.includes(filter.id) ? 'bg-[#06b6d4]' : 'bg-[#1C1F22]'
                                }`}
                            onClick={() => toggleAmenity(filter.id)}
                        >
                            <filter.icon className="text-white" size={16} />
                        </button>
                    ))}

                    {/* Rating filter */}
                    <div className="flex items-center ml-auto">
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map(star => (
                                <FaStar key={star} className="text-[#06b6d4]" />
                            ))}
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="20000"
                            value={priceRange}
                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                            className="ml-2 w-32 accent-[#06b6d4]"
                        />
                        <span className="ml-2 text-sm">{priceRange}$</span>
                    </div>
                </div>
            </div>

            {/* Hotel Listings */}
            <div className="px-4 space-y-4">
                {hotelData.map(hotel => (
                    <div key={hotel.id} className="bg-[#1C1F22] rounded-xl overflow-hidden flex flex-col md:flex-row">
                        {/* Hotel Image */}
                        <div className="relative h-64 md:h-auto md:w-1/3">
                            <Image
                                src={hotel.image}
                                alt={hotel.name}
                                fill
                                className="object-cover rounded-[10px]"
                            />
                        </div>

                        {/* Hotel Details */}
                        <div className="p-4 flex flex-col flex-grow">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-semibold">{hotel.name}</h3>
                                    <div className="flex mt-1">
                                        {Array.from({ length: hotel.rating }).map((_, i) => (
                                            <FaStar key={i} className="text-[#06b6d4] text-sm" />
                                        ))}
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-[#06b6d4]">{hotel.price}{hotel.currency}</div>
                                    <button className="bg-[#06b6d4] text-white p-2 rounded-full mt-1" onClick={() =>{setinitialHotalData(hotel.id)}}>
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 mt-2">{hotel.description}</p>

                            {/* Amenities */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                                {hotel.amenities.map((amenity, index) => (
                                    <div key={index} className="flex items-center text-sm">
                                        <amenity.icon className="mr-2 text-gray-400" />
                                        <span className="text-gray-300">{amenity.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom row */}
                            <div className="flex justify-between items-center mt-auto pt-4">
                                <div className="text-sm text-gray-400">
                                    <div>{hotel.occupancy}</div>
                                    <div>{hotel.duration}</div>
                                </div>
                                <div className="bg-[#06b6d4] text-white text-sm w-8 h-8 rounded-full flex items-center justify-center">
                                    {hotel.score}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center p-4 mt-4">
                <div className="text-[#06b6d4] text-sm">
                    {String(currentPage).padStart(2, '0')}/12
                </div>
                <div className="flex space-x-2">
                    <button
                        className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    >
                        <FaChevronLeft size={14} />
                    </button>
                    <button
                        className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, 12))}
                    >
                        <FaChevronRight size={14} />
                    </button>
                </div>
            </div>
            
                {/* Hotel Detail Modal */}
                {selectedHotel && (
                    <HotelDetailModal 
                        hotel={selectedHotel} 
                        allHotels={hotelData} 
                        onClose={() => setSelectedHotel(null)} 
                    />
                )}
            
        </div>
    );
};

export default HotelParkList;