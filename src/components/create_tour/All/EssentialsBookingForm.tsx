'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import HotelParkList from './HotelParkList';
import CabsList from './CabsList';

interface EssentialsBookingFormProps {
  onSearch: () => void;
  selectedIsland: string;
}

const EssentialsBookingForm: React.FC<EssentialsBookingFormProps> = ({ onSearch, selectedIsland }) => {
  // Get selected island from Redux store
  const selectedIslandFromRedux = useSelector((state: RootState) => state.island.selectedIsland);
  
  // Date selection state
  const [checkInDate, setCheckInDate] = useState<Date>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date>(() => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  });

  // Calendar display state
  const [checkInDisplayDate, setCheckInDisplayDate] = useState<Date>(new Date());
  const [checkOutDisplayDate, setCheckOutDisplayDate] = useState<Date>(new Date());
  const [showMobileCalendar, setShowMobileCalendar] = useState(false);
  const [mobileCalendarType, setMobileCalendarType] = useState<'checkin' | 'checkout'>('checkin');
  
  // Traveler state
  const [adults, setAdults] = useState(1);
  const [infants, setInfants] = useState(0);
  const [roomType, setRoomType] = useState('Rest');
  const [activeTabId, setActiveTabId] = useState('Hotels');
  const [showContent, setShowContent] = useState(false);
  
  // Constants
  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const roomTypes = ['Rest', 'Deluxe', 'Suite', 'Villa'];
  
  // Essential services data with images
  const essentialTabs = [
    { id: 'Hotels', name: 'Hotels', icon: '🏨', image: '/images/services/hotels.png' },
    { id: 'Cabs', name: 'Cabs', icon: '🚕', image: '/images/services/cabs.png' },
    { id: 'Scooters', name: 'Scooters', icon: '🛵', image: '/images/services/scooters.png' },
    { id: 'Ferries', name: 'Ferries', icon: '⛴️', image: '/images/services/ferries.png' },
    { id: 'Water Transport', name: 'Water Transport', icon: '🚤', image: '/images/services/water-transport.png' },
  ];

  // Initialize display dates
  useEffect(() => {
    setCheckInDisplayDate(new Date(checkInDate));
    setCheckOutDisplayDate(new Date(checkOutDate));
  }, []);

  // Calendar helper functions
  const getMonthName = useCallback((date: Date): string => {
    return date.toLocaleString('default', { month: 'long' });
  }, []);

  const getMonthYearDisplay = useCallback((date: Date): string => {
    return `${getMonthName(date)} ${date.getFullYear()}`;
  }, [getMonthName]);

  const generateCalendarData = useCallback((date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const firstDayAdjusted = firstDay === 0 ? 6 : firstDay - 1;
    const lastDay = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 0; i < firstDayAdjusted; i++) {
      days.push(null);
    }

    for (let i = 1; i <= lastDay; i++) {
      days.push(i);
    }

    return days;
  }, []);

  // Memoized calendar days
  const checkInCalendarDays = useMemo(() => 
    generateCalendarData(checkInDisplayDate), 
    [checkInDisplayDate, generateCalendarData]
  );
  
  const checkOutCalendarDays = useMemo(() => 
    generateCalendarData(checkOutDisplayDate), 
    [checkOutDisplayDate, generateCalendarData]
  );

  // Date selection handlers
  const handleDateSelect = useCallback((day: number | null, isCheckIn: boolean) => {
    if (day === null) return;

    if (isCheckIn) {
      const newCheckIn = new Date(checkInDisplayDate);
      newCheckIn.setDate(day);

      // If the new check-in is after or same as current check-out, set check-out to next day
      if (newCheckIn >= checkOutDate) {
        const nextDay = new Date(newCheckIn);
        nextDay.setDate(newCheckIn.getDate() + 1);
        setCheckOutDate(nextDay);
        setCheckOutDisplayDate(new Date(nextDay));
      }

      setCheckInDate(newCheckIn);
      setCheckInDisplayDate(new Date(newCheckIn));
    } else {
      const newCheckOut = new Date(checkOutDisplayDate);
      newCheckOut.setDate(day);

      // Only allow check-out after check-in
      if (newCheckOut > checkInDate) {
        setCheckOutDate(newCheckOut);
        setCheckOutDisplayDate(new Date(newCheckOut));
      }
    }
  }, [checkInDisplayDate, checkOutDisplayDate, checkInDate, checkOutDate]);

  const navigateMonth = useCallback((increment: boolean) => {
    const newDate = new Date(checkInDisplayDate);
    newDate.setMonth(newDate.getMonth() + (increment ? 1 : -1));
    setCheckInDisplayDate(newDate);
    setCheckOutDisplayDate(newDate);
  }, [checkInDisplayDate]);

  // Check if a date is disabled (for checkout calendar)
  const isDateDisabled = useCallback((day: number | null, isCheckIn: boolean): boolean => {
    if (day === null || isCheckIn) return false;

    // For checkout calendar, disable dates before check-in date
    const date = new Date(checkOutDisplayDate);
    date.setDate(day);

    const checkInYear = checkInDate.getFullYear();
    const checkInMonth = checkInDate.getMonth();
    const checkOutYear = date.getFullYear();
    const checkOutMonth = date.getMonth();

    // If checkout year/month is before checkin year/month, disable
    if (checkOutYear < checkInYear ||
        (checkOutYear === checkInYear && checkOutMonth < checkInMonth)) {
        return true;
    }

    // If same year and month, check day
    if (checkOutYear === checkInYear && checkOutMonth === checkInMonth) {
        return day <= checkInDate.getDate();
    }
    return false;
  }, [checkInDate, checkOutDisplayDate]);

  // Check if a date is selected
  const isDateSelected = useCallback((day: number | null, isCheckIn: boolean): boolean => {
    if (day === null) return false;

    const date = isCheckIn ? checkInDate : checkOutDate;
    const displayDate = isCheckIn ? checkInDisplayDate : checkOutDisplayDate;

    return date.getDate() === day &&
        date.getMonth() === displayDate.getMonth() &&
        date.getFullYear() === displayDate.getFullYear();
  }, [checkInDate, checkOutDate, checkInDisplayDate, checkOutDisplayDate]);

  // Traveler handlers
  const incrementAdults = useCallback(() => setAdults(prev => prev + 1), []);
  const decrementAdults = useCallback(() => setAdults(prev => (prev > 0 ? prev - 1 : 0)), []);
  const incrementInfants = useCallback(() => setInfants(prev => prev + 1), []);
  const decrementInfants = useCallback(() => setInfants(prev => (prev > 0 ? prev - 1 : 0)), []);

  // Search handler
  const showHotelList = useCallback(() => {
    onSearch();
  }, [onSearch]);

  // Calendar grid renderer
  const renderCalendarGrid = useCallback((isCheckIn: boolean) => {
    const days = isCheckIn ? checkInCalendarDays : checkOutCalendarDays;
    
    // For checkout calendar, get check-in date info for comparison
    const checkInYear = checkInDate.getFullYear();
    const checkInMonth = checkInDate.getMonth();
    const checkInDay = checkInDate.getDate();

    const displayDate = isCheckIn ? checkInDisplayDate : checkOutDisplayDate;
    const displayYear = displayDate.getFullYear();
    const displayMonth = displayDate.getMonth();

    // Today (for disabling past dates)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
      <div className="grid grid-cols-7 gap-1">
        {/* Days of week headers */}
        {daysOfWeek.map((day, index) => (
          <div key={`day-${index}`} className="text-center text-xs text-gray-400 mb-2">
            {day}
          </div>
        ))}

        {/* Calendar days */}
        {days.map((day, index) => {
          if (day === null) {
            return (
              <button
                key={`${isCheckIn ? 'checkin' : 'checkout'}-${index}`}
                className="invisible"
                disabled
              >
                {/* empty */}
              </button>
            );
          }

          // Date for this cell
          const cellDate = new Date(displayYear, displayMonth, day);

          // Disable logic
          let isDisabled = false;
          if (isCheckIn) {
            // Disable if before today
            if (cellDate < today) {
              isDisabled = true;
            }
          } else {
            // Disable if before today or before/equal to check-in
            if (
              cellDate < today ||
              cellDate <= new Date(checkInDate.getFullYear(), checkInDate.getMonth(), checkInDate.getDate())
            ) {
              isDisabled = true;
            }
          }

          // Highlight selected day
          const isSelected = isCheckIn
            ? (checkInDate.getFullYear() === displayYear &&
               checkInDate.getMonth() === displayMonth &&
               checkInDate.getDate() === day)
            : (checkOutDate.getFullYear() === displayYear &&
               checkOutDate.getMonth() === displayMonth &&
               checkOutDate.getDate() === day);

          return (
            <button
              key={`${isCheckIn ? 'checkin' : 'checkout'}-${index}`}
              className={`w-8 h-8 flex items-center justify-center rounded-[5px] text-sm
                ${isSelected ? 'bg-white text-black' : isDisabled ? 'text-gray-600 cursor-not-allowed' : 'text-white hover:bg-[#2A2E31]'}
              `}
              onClick={() => {
                if (!isDisabled) handleDateSelect(day, isCheckIn);
              }}
              disabled={isDisabled}
            >
              {day}
            </button>
          );
        })}
      </div>
    );
  }, [
    checkInCalendarDays,
    checkOutCalendarDays,
    checkInDate,
    checkOutDate,
    checkInDisplayDate,
    checkOutDisplayDate,
    daysOfWeek,
    handleDateSelect,
  ]);

  // Island button component
  const IslandButton = () => (
    <button className="bg-gradient-to-r w-[250px] from-[#bef264] to-[#06b6d4] text-white px-6 py-2 rounded-full flex items-center gap-2">
      <span>Essentials for {selectedIsland}</span>
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
  );

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    setActiveTabId(tabId);
    setShowContent(true);
    onSearch();
  };

  // Show content when component mounts (for initial Hotels view)
  useEffect(() => {
    setShowContent(true);
  }, []);

  const renderContent = () => {
    switch (activeTabId) {
      case 'Hotels':
        return <HotelParkList onBackToSearch={() => setShowContent(false)} />;
      case 'Cabs':
        return <CabsList onBackToSearch={() => setShowContent(false)} />;
      // Add other cases for different tabs
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container mx-auto bg-[#222629] text-white rounded-2xl overflow-hidden">
        <div className="py-6 px-4 md:px-10 bg-[#1C1F22] flex flex-col gap-6 rounded-[20px]">
          <h2 className='text-white text-3xl md:text-4xl font-bold'>When do you plan to start your trip?</h2>
          <h3 className='text-white text-xl md:text-2xl '>Required to unlock hotel and ferry bookings</h3>
          <IslandButton />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {/* Left column - Options */}
            <div className="space-y-6">
              {/* Essentials Button */}

              {/* Adults selection */}
              <div className="relative flex items-center justify-between py-3 bg-[#222629] rounded-[20px]">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={decrementAdults}
                    className="absolute left-[-15px] w-10 h-10 flex items-center justify-center text-white bg-[#1C1F22] rounded-full"
                  >
                    <span className='text-xl'>-</span>
                  </button>
                  <span className="text-white pl-6">Adults (2+ years)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className='pr-8'>{adults}</span>
                  <button
                    onClick={incrementAdults}
                    className="absolute right-[-15px] w-10 h-10 flex items-center justify-center text-white bg-[#1C1F22] rounded-full"
                  >
                    <span className='text-xl'>+</span>
                  </button>
                </div>
              </div>

              {/* Infants selection */}
              <div className="relative flex items-center justify-between py-3 bg-[#222629] rounded-[20px]">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={decrementInfants}
                    className="absolute left-[-15px] w-10 h-10 flex items-center justify-center text-white bg-[#1C1F22] rounded-full"
                  >
                    <span className='text-xl'>-</span>
                  </button>
                  <span className="text-white pl-6">Infants (0-2 years)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className='pr-8'>{infants}</span>
                  <button
                    onClick={incrementInfants}
                    className="absolute right-[-15px] w-10 h-10 flex items-center justify-center text-white bg-[#1C1F22] rounded-full"
                  >
                    <span className='text-xl'>+</span>
                  </button>
                </div>
              </div>

              {/* Room type selection */}
              <div className="relative flex items-center justify-between py-3 bg-[#222629] rounded-[20px]">
                <div className="flex items-center space-x-3">
                  <div className="absolute left-[-15px] w-10 h-10 flex items-center justify-center text-[#06b6d4] bg-[#1C1F22] rounded-full">
                    <BsBuilding size={20} />
                  </div>
                  <span className="text-white pl-6">Type</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className='pr-8'>{roomType}</span>
                  <div className="absolute right-[-15px] w-10 h-10 flex items-center justify-center text-white bg-[#1C1F22] rounded-full">
                    <FaChevronDown className="text-xs" />
                  </div>
                </div>
              </div>

              {/* Date selection for mobile */}
              <div className="relative flex items-center justify-between py-3 bg-[#222629] rounded-[20px] cursor-pointer">
                <div 
                  className="flex items-center space-x-3"
                  onClick={() => {
                    setShowMobileCalendar(true);
                    setMobileCalendarType('checkin');
                  }}
                >
                  <div className="absolute left-[-15px] w-10 h-10 flex items-center justify-center text-[#06b6d4] bg-[#1C1F22] rounded-full">
                    <BsBuilding size={20} />
                  </div>
                  <span className="text-white pl-6">
                    {checkInDate.toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div 
                  className="flex items-center space-x-2"
                  onClick={() => {
                    setShowMobileCalendar(true);
                    setMobileCalendarType('checkout');
                  }}
                >
                  <span className='pr-8'>
                    {checkOutDate.toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: '2-digit',
                      year: 'numeric'
                    })}
                  </span>
                  <div className="absolute right-[-15px] w-10 h-10 flex items-center justify-center text-white bg-[#1C1F22] rounded-full">
                    <FaChevronDown className="text-xs" />
                  </div>
                </div>
              </div>

              {/* Inline calendar for mobile */}
              {showMobileCalendar && (
                <div className="md:hidden bg-[#1C1F22] rounded-[20px] overflow-hidden">
                  <div className="flex items-center justify-between p-4">
                    <button
                      className="w-8 h-8 bg-[#222629] flex items-center justify-center rounded-full text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateMonth(false);
                      }}
                    >
                      <IoIosArrowBack size={16} />
                    </button>
                    <div className="text-white font-medium">
                      {getMonthName(mobileCalendarType === 'checkin' ? checkInDisplayDate : checkOutDisplayDate)}
                    </div>
                    <button
                      className="w-8 h-8 bg-[#222629] flex items-center justify-center rounded-full text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateMonth(true);
                      }}
                    >
                      <IoIosArrowForward size={16} />
                    </button>
                  </div>

                  {/* Calendar grid */}
                  <div className="bg-[#222629] mx-4 mb-4 p-2 rounded-lg">
                    {renderCalendarGrid(mobileCalendarType === 'checkin')}
                  </div>
                </div>
              )}

              {/* Find button */}
              <div className="mt-6 md:mt-12 flex justify-center">
                <button 
                  className="bg-white text-black font-medium py-3 px-8 rounded-full w-full md:w-auto" 
                  onClick={showHotelList}
                >
                  Find
                </button>
              </div>
            </div>

            {/* Calendar sections - Hidden on mobile */}
            <div className="hidden md:block relative bg-[#222629] rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <button
                  className="w-8 h-8 bg-[#222629] flex items-center justify-center rounded-full text-white"
                  onClick={() => navigateMonth(false)}
                >
                  <IoIosArrowBack size={16} />
                </button>
                <div className="text-white font-medium">
                  {getMonthYearDisplay(checkInDisplayDate)}
                </div>
                <button
                  className="w-8 h-8 bg-[#222629] flex items-center justify-center rounded-full text-white"
                  onClick={() => navigateMonth(true)}
                >
                  <IoIosArrowForward size={16} />
                </button>
              </div>
              <div className="bg-[#222629] p-2 rounded-lg">
                {renderCalendarGrid(true)}
              </div>
            </div>
            <div className="hidden md:block relative bg-[#222629] rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <button
                  className="w-8 h-8 bg-[#222629] flex items-center justify-center rounded-full text-white invisible"
                >
                  <IoIosArrowBack size={16} />
                </button>
                <div className="text-white font-medium">
                  {getMonthYearDisplay(checkOutDisplayDate)}
                </div>
                <button
                  className="w-8 h-8 bg-[#222629] flex items-center justify-center rounded-full text-white invisible"
                >
                  <IoIosArrowForward size={16} />
                </button>
              </div>
              <div className="bg-[#222629] p-2 rounded-lg">
                {renderCalendarGrid(false)}
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="relative mb-4 md:mb-8">
            <div className="overflow-x-auto">
              <div className="flex items-center space-x-2 bg-[#222629] rounded-full p-1 w-fit min-w-full md:min-w-0">
                {essentialTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full whitespace-nowrap transition-colors text-sm md:text-base ${
                      activeTabId === tab.id
                        ? 'bg-white text-black'
                        : 'text-gray-400 hover:text-gray-300'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span>{tab.icon}</span>
                      <span>{tab.name}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Render content below the form */}
      {showContent && (
        <div className="mt-6">
          {renderContent()}
        </div>
      )}
    </>
  );
};

export default React.memo(EssentialsBookingForm);
