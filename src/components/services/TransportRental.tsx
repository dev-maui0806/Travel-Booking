'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import CalendarCard from './calenderCard';

const RentalSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Ferry tickets');
    const [adults, setAdults] = useState(1);
    const [infants, setInfants] = useState(0);
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [currentMonth, setCurrentMonth] = useState('January');
    const [currentYear, setCurrentYear] = useState(2024);

    const tabs = ['Ferry tickets', 'Taxi', 'Scooter rental', 'Water transport rental'];
    const trips = ['Trip 1', 'Trip 2', 'Trip +'];

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const handleMonthChange = (direction: 'prev' | 'next') => {
        const currentMonthIndex = months.indexOf(currentMonth);
        if (direction === 'next') {
            if (currentMonthIndex === 11) {
                setCurrentMonth(months[0]);
                setCurrentYear(currentYear + 1);
            } else {
                setCurrentMonth(months[currentMonthIndex + 1]);
            }
        } else {
            if (currentMonthIndex === 0) {
                setCurrentMonth(months[11]);
                setCurrentYear(currentYear - 1);
            } else {
                setCurrentMonth(months[currentMonthIndex - 1]);
            }
        }
    };

    return (
        <div className="container mx-auto p-6 bg-[#1C1C1E] text-white max-h-screen relative">
            <h1 className="text-[2.5rem] font-light mb-6">Transport rental</h1>
            
            {/* Find Button - Positioned absolutely with exact styling */}
            <div className="absolute top-24 right-6">
                <button 
                    className="px-8 py-2 rounded-full bg-gradient-to-r from-[#9FE860] to-[#2BCBBA] text-white font-normal hover:opacity-95 transition-opacity"
                    style={{ fontSize: '15px' }}
                >
                    Find
                </button>
            </div>

            {/* Navigation Tabs - Updated styling to match design */}
            <div className="flex bg-[#2C2C2E]/80 rounded-full w-fit p-1">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-1.5 rounded-full transition-colors ${
                            activeTab === tab 
                                ? 'bg-white text-black' 
                                : 'text-gray-400 hover:text-gray-300'
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-[2fr,1fr] mt-6 gap-6">
                <div className="space-y-4">
                    {/* Trip Selection - Updated styling to match design */}
                    <div className="flex items-center gap-2 mt-4 bg-[#222629]/80 p-1.5 rounded-full w-fit">
                        <button className="text-[#00C2B3] px-2">←</button>
                        {trips.map((trip, index) => (
                            <button
                                key={trip}
                                className={`px-4 py-1.5 rounded-full ${
                                    index === 0 
                                        ? 'text-[#00C2B3]' 
                                        : 'text-gray-500'
                                }`}
                            >
                                {trip}
                            </button>
                        ))}
                        <button className="text-gray-500 px-2">→</button>
                    </div>

                    {/* Passenger Counter - Adjusted spacing and colors */}
                    <div className="flex gap-4">
                        <div className="flex items-center justify-between bg-[#2C2C2E]/80 p-4 rounded-lg flex-1">
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
                        <div className="flex items-center justify-between bg-[#2C2C2E]/80 p-4 rounded-lg flex-1">
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

                    {/* Location Selection - Updated styling */}
                    <div className="flex gap-4">
                        <div className="flex-1 bg-[#2C2C2E]/80 p-4 rounded-lg">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#00C2B3]" />
                                <span className="text-gray-400 text-sm">From</span>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <span>Port Blair</span>
                                <button className="text-gray-500 text-xs">▼</button>
                            </div>
                        </div>
                        <div className="flex-1 bg-[#2C2C2E]/80 p-4 rounded-lg">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#00C2B3]" />
                                <span className="text-gray-400 text-sm">To</span>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <span>Havelock (Swaraj Dweep)</span>
                                <button className="text-gray-500 text-xs">▼</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Calendar Section */}
                <CalendarCard
                    currentMonth={currentMonth}
                    currentYear={currentYear}
                    selectedDate={selectedDate}
                    onDateSelect={setSelectedDate}
                    onMonthChange={handleMonthChange}
                />
            </div>
        </div>
    );
};

export default RentalSection;