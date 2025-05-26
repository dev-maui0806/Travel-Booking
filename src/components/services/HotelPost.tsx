'use client'

import React, { useState } from 'react';
import CalendarCard from './calenderCard';

const HotelSection: React.FC = () => {
    const [adults, setAdults] = useState(1);
    const [infants, setInfants] = useState(0);
    const [selectedPickupDate, setSelectedPickupDate] = useState<number | null>(null);
    const [selectedDropoffDate, setSelectedDropoffDate] = useState<number | null>(null);
    const [currentPickupMonth, setCurrentPickupMonth] = useState('January');
    const [currentDropoffMonth, setCurrentDropoffMonth] = useState('January');
    const [currentPickupYear, setCurrentPickupYear] = useState(2024);
    const [currentDropoffYear, setCurrentDropoffYear] = useState(2024);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const handleMonthChange = (direction: 'prev' | 'next', type: 'pickup' | 'dropoff') => {
        const currentMonth = type === 'pickup' ? currentPickupMonth : currentDropoffMonth;
        const setMonth = type === 'pickup' ? setCurrentPickupMonth : setCurrentDropoffMonth;
        const currentYear = type === 'pickup' ? currentPickupYear : currentDropoffYear;
        const setYear = type === 'pickup' ? setCurrentPickupYear : setCurrentDropoffYear;

        const currentMonthIndex = months.indexOf(currentMonth);
        if (direction === 'next') {
            if (currentMonthIndex === 11) {
                setMonth(months[0]);
                setYear(currentYear + 1);
            } else {
                setMonth(months[currentMonthIndex + 1]);
            }
        } else {
            if (currentMonthIndex === 0) {
                setMonth(months[11]);
                setYear(currentYear - 1);
            } else {
                setMonth(months[currentMonthIndex - 1]);
            }
        }
    };

    return (
        <div className="container mx-auto p-6 bg-[#1C1C1E] text-white max-h-screen relative">
            <h1 className="text-[2.5rem] font-light mb-6">Hotel</h1>
            
            {/* Find Button */}
            <div className="absolute top-6 right-6">
                <button 
                    className="px-8 py-2 rounded-full bg-gradient-to-r from-[#9FE860] to-[#2BCBBA] text-white font-normal hover:opacity-95 transition-opacity"
                    style={{ fontSize: '15px' }}
                >
                    Find
                </button>
            </div>

            <div className="grid grid-cols-[1fr,2fr] gap-6">
                <div className="space-y-4">
                    {/* Island Selection */}
                    <div className="bg-[#2C2C2E]/80 p-4 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#00C2B3]" />
                            <span className="text-gray-400 text-sm">Island</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                            <span>Havelock</span>
                            <button className="text-gray-500 text-xs">▼</button>
                        </div>
                    </div>

                    {/* Passenger Counter */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between bg-[#2C2C2E]/80 p-4 rounded-lg">
                            <span className="text-gray-300">Adults (2+ years)</span>
                            <div className="flex items-center gap-6">
                                <button 
                                    className="text-2xl text-gray-500 w-4"
                                    onClick={() => setAdults(Math.max(0, adults - 1))}
                                >
                                    -
                                </button>
                                <span className="w-4 text-center">{adults}</span>
                                <button 
                                    className="text-2xl text-gray-500 w-4"
                                    onClick={() => setAdults(adults + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-[#2C2C2E]/80 p-4 rounded-lg">
                            <span className="text-gray-300">Infants (0-2 years)</span>
                            <div className="flex items-center gap-6">
                                <button 
                                    className="text-2xl text-gray-500 w-4"
                                    onClick={() => setInfants(Math.max(0, infants - 1))}
                                >
                                    -
                                </button>
                                <span className="w-4 text-center">{infants}</span>
                                <button 
                                    className="text-2xl text-gray-500 w-4"
                                    onClick={() => setInfants(infants + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Type Selection */}
                    <div className="bg-[#2C2C2E]/80 p-4 rounded-lg">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#00C2B3]" />
                            <span className="text-gray-400 text-sm">Type</span>
                        </div>
                        <div className="flex items-center justify-between mt-1">
                            <span>Rest</span>
                            <button className="text-gray-500 text-xs">▼</button>
                        </div>
                    </div>
                </div>

                {/* Calendar Section */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-gray-400 mb-2">Pick-up date</div>
                        <CalendarCard
                            currentMonth={currentPickupMonth}
                            currentYear={currentPickupYear}
                            selectedDate={selectedPickupDate}
                            onDateSelect={setSelectedPickupDate}
                            onMonthChange={(direction) => handleMonthChange(direction, 'pickup')}
                        />
                    </div>
                    <div>
                        <div className="text-gray-400 mb-2">Drop-off date</div>
                        <CalendarCard
                            currentMonth={currentDropoffMonth}
                            currentYear={currentDropoffYear}
                            selectedDate={selectedDropoffDate}
                            onDateSelect={setSelectedDropoffDate}
                            onMonthChange={(direction) => handleMonthChange(direction, 'dropoff')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelSection;