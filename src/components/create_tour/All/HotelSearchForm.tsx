'use client';

import { useState, useEffect } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsBuilding } from "react-icons/bs";
import HotelDetailModal from './HotelDetailModal';

interface HotelSearchFormProps {
    onSearch: () => void; // Function to call when Find button is clicked
}

const HotelSearchForm: React.FC<HotelSearchFormProps> = ({ onSearch }) => {


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

    // Travelers state
    const [adults, setAdults] = useState(1);
    const [infants, setInfants] = useState(0);
    const [roomType, setRoomType] = useState('Rest');
    const [ShowListFlag, setShowListFlag] = useState(false);
    const [activeTab, setActiveTab] = useState('Hotels');

    // Add state to control mobile calendar modal visibility
    const [showMobileCalendar, setShowMobileCalendar] = useState(false);
    const [mobileCalendarType, setMobileCalendarType] = useState<'checkin' | 'checkout'>('checkin');


    // Initialize display dates
    useEffect(() => {
        setCheckInDisplayDate(new Date(checkInDate));
        setCheckOutDisplayDate(new Date(checkOutDate));
    }, []);

    // Get month and year display
    const getMonthName = (date: Date): string => {
        return date.toLocaleString('default', { month: 'long' });
    };

    const getMonthYearDisplay = (date: Date): string => {
        return `${getMonthName(date)} ${date.getFullYear()}`;
    };

    // Generate calendar data for a specific month
    const generateCalendarData = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();

        // First day of the month (0 = Sunday, 1 = Monday, etc.)
        const firstDay = new Date(year, month, 1).getDay();
        // Adjust for Monday as first day of week (0 = Monday, 6 = Sunday)
        const firstDayAdjusted = firstDay === 0 ? 6 : firstDay - 1;

        // Last day of the month
        const lastDay = new Date(year, month + 1, 0).getDate();

        // Generate array of days
        const days = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayAdjusted; i++) {
            days.push(null);
        }

        // Add the days of the month
        for (let i = 1; i <= lastDay; i++) {
            days.push(i);
        }

        return days;
    };

    // Navigate to previous/next month
    const navigateMonth = (isCheckIn: boolean, increment: boolean) => {
        if (isCheckIn) {
            const newDate = new Date(checkInDisplayDate);
            newDate.setMonth(newDate.getMonth() + (increment ? 1 : -1));
            setCheckInDisplayDate(newDate);
        } else {
            const newDate = new Date(checkOutDisplayDate);
            newDate.setMonth(newDate.getMonth() + (increment ? 1 : -1));
            setCheckOutDisplayDate(newDate);
        }
    };

    // Handle date selection
    const handleDateSelect = (day: number | null, isCheckIn: boolean) => {
        if (day === null) return;

        if (isCheckIn) {
            const newDate = new Date(checkInDisplayDate);
            newDate.setDate(day);

            // Ensure check-in date is not after check-out date
            if (newDate >= checkOutDate) {
                const nextDay = new Date(newDate);
                nextDay.setDate(nextDay.getDate() + 1);
                setCheckOutDate(nextDay);

                // Also update the checkout display date to match the new checkout date
                setCheckOutDisplayDate(new Date(nextDay));
            }

            setCheckInDate(newDate);
        } else {
            const newDate = new Date(checkOutDisplayDate);
            newDate.setDate(day);

            // Ensure check-out date is not before check-in date
            if (newDate <= checkInDate) {
                // If user tries to select a checkout date before checkin,
                // move the checkout date to the day after checkin
                const nextDay = new Date(checkInDate);
                nextDay.setDate(nextDay.getDate() + 1);
                setCheckOutDate(nextDay);
                setCheckOutDisplayDate(new Date(nextDay));
                return;
            }

            setCheckOutDate(newDate);
        }
    };

    // Check if a date is disabled (for checkout calendar)
    const isDateDisabled = (day: number | null, isCheckIn: boolean): boolean => {
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
    };



    const showHotelList = () => {
        onSearch()
    }



    // Check if a date is selected
    const isDateSelected = (day: number | null, isCheckIn: boolean): boolean => {
        if (day === null) return false;

        const date = isCheckIn ? checkInDate : checkOutDate;
        const displayDate = isCheckIn ? checkInDisplayDate : checkOutDisplayDate;

        return date.getDate() === day &&
            date.getMonth() === displayDate.getMonth() &&
            date.getFullYear() === displayDate.getFullYear();
    };

    // Handle increment/decrement for travelers
    const incrementAdults = () => setAdults(prev => prev + 1);
    const decrementAdults = () => setAdults(prev => (prev > 0 ? prev - 1 : 0));
    const incrementInfants = () => setInfants(prev => prev + 1);
    const decrementInfants = () => setInfants(prev => (prev > 0 ? prev - 1 : 0));

    // Days of the week
    const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    // Get calendar days
    const checkInCalendarDays = generateCalendarData(checkInDisplayDate);
    const checkOutCalendarDays = generateCalendarData(checkOutDisplayDate);


    return (
        <div className="container mx-auto bg-[#222629] text-white rounded-2xl overflow-hidden">

            {/* Main content */}
            <div className="py-6 px-4 md:px-10 bg-[#1C1F22] rounded-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
                    {/* Left column - Options */}
                    <div className="space-y-6">
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

                        {/* Inline calendar for mobile - shown directly below date selection */}
                        {showMobileCalendar && (
                            <div className="md:hidden bg-[#1C1F22] rounded-[20px] overflow-hidden">
                                <div className="flex items-center justify-between p-4">
                                    <button
                                        className="w-8 h-8 bg-[#222629] flex items-center justify-center rounded-full text-white"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigateMonth(mobileCalendarType === 'checkin', false);
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
                                            navigateMonth(mobileCalendarType === 'checkin', true);
                                        }}
                                    >
                                        <IoIosArrowForward size={16} />
                                    </button>
                                </div>

                                {/* Calendar grid */}
                                <div className="bg-[#222629] mx-4 mb-4 p-2 rounded-lg">
                                    <div className="grid grid-cols-7 gap-1">
                                        {/* Days of week headers */}
                                        {daysOfWeek.map((day, index) => (
                                            <div key={`mobile-day-${index}`} className="text-center text-xs text-gray-400 mb-2">
                                                {day}
                                            </div>
                                        ))}

                                        {/* Calendar days - show either check-in or check-out calendar */}
                                        {(mobileCalendarType === 'checkin' ? checkInCalendarDays : checkOutCalendarDays).map((day, index) => (
                                            <button
                                                key={`mobile-${index}`}
                                                className={`w-8 h-8 flex items-center justify-center rounded-[5px] text-sm ${
                                                    day === null 
                                                        ? 'invisible' 
                                                        : isDateSelected(day, mobileCalendarType === 'checkin')
                                                            ? 'bg-white text-black' 
                                                            : mobileCalendarType === 'checkout' && isDateDisabled(day, false)
                                                                ? 'text-gray-600 cursor-not-allowed'
                                                                : 'text-white hover:bg-[#2A2E31]'
                                                }`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (day !== null && !(mobileCalendarType === 'checkout' && isDateDisabled(day, false))) {
                                                        handleDateSelect(day, mobileCalendarType === 'checkin');
                                                        setShowMobileCalendar(false);
                                                    }
                                                }}
                                                disabled={day === null || (mobileCalendarType === 'checkout' && isDateDisabled(day, false))}
                                            >
                                                {day}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Find button */}
                        <div className="mt-6 md:mt-12 flex justify-center">
                            <button className="bg-white text-black font-medium py-3 px-8 rounded-full w-full md:w-auto" onClick={showHotelList}>
                                Find
                            </button>
                        </div>
                    </div>

                    {/* Calendar sections - Hidden on mobile */}
                    <div className="hidden md:block relative bg-[#222629] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                            <button
                                className="absolute left-[-25px] bg-[#1C1F22] p-2 rounded-full text-white"
                                onClick={() => navigateMonth(true, false)}
                            >
                                <IoIosArrowBack size={30} className='bg-[#222629] rounded-full p-[5px]' />
                            </button>
                            <div className="text-center flex justify-between items-center w-full px-5">
                                <div className="text-sm text-white mb-1">Check-in date</div>
                                <div className="text-white font-medium">{getMonthYearDisplay(checkInDisplayDate)}</div>
                            </div>
                            <button
                                className="absolute right-[-25px] bg-[#1C1F22] p-2 rounded-full text-white"
                                onClick={() => navigateMonth(true, true)}
                            >
                                <IoIosArrowForward size={30} className='bg-[#222629] rounded-full p-[5px]' />
                            </button>
                        </div>

                        {/* Calendar grid */}
                        <div className="grid grid-cols-7 gap-2">
                            {/* Days of week headers */}
                            {daysOfWeek.map((day, index) => (
                                <div key={`day-${index}`} className="text-center text-xs text-gray-400 mb-2">
                                    {day}
                                </div>
                            ))}

                            {/* Calendar days */}
                            {checkInCalendarDays.map((day, index) => (
                                <button
                                    key={`checkin-${index}`}
                                    className={`w-8 h-8 flex items-center justify-center rounded-[5px] text-sm ${day === null
                                        ? 'invisible'
                                        : isDateSelected(day, true)
                                            ? 'bg-white text-black'
                                            : 'text-white hover:bg-[#2A2E31]'
                                        }`}
                                    onClick={() => day !== null && handleDateSelect(day, true)}
                                    disabled={day === null}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right column - Check-out calendar - Hidden on mobile */}
                    <div className="hidden md:block relative bg-[#222629] rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                            <button
                                className="absolute left-[-25px] bg-[#1C1F22] p-2 rounded-full text-white"
                                onClick={() => navigateMonth(false, false)}
                            >
                                <IoIosArrowBack size={30} className='bg-[#222629] rounded-full p-[5px]' />
                            </button>
                            <div className="text-center flex justify-between items-center w-full px-5">
                                <div className="text-sm text-white mb-1">Date of departure</div>
                                <div className="text-white font-medium">{getMonthYearDisplay(checkOutDisplayDate)}</div>
                            </div>
                            <button
                                className="absolute right-[-25px] bg-[#1C1F22] p-2 rounded-full text-white"
                                onClick={() => navigateMonth(false, true)}
                            >
                                <IoIosArrowForward size={30} className='bg-[#222629] rounded-full p-[5px]' />
                            </button>
                        </div>

                        {/* Calendar grid */}
                        <div className="grid grid-cols-7 gap-2">
                            {/* Days of week headers */}
                            {daysOfWeek.map((day, index) => (
                                <div key={`day-out-${index}`} className="text-center text-xs text-gray-400 mb-2">
                                    {day}
                                </div>
                            ))}

                            {/* Calendar days for checkout */}
                            {checkOutCalendarDays.map((day, index) => (
                                <button
                                    key={`checkout-${index}`}
                                    className={`w-8 h-8 flex items-center justify-center rounded-[5px] text-sm ${day === null
                                        ? 'invisible'
                                        : isDateSelected(day, false)
                                            ? 'bg-white text-black'
                                            : isDateDisabled(day, false)
                                                ? 'text-gray-600 cursor-not-allowed'
                                                : 'text-white hover:bg-[#2A2E31]'
                                        }`}
                                    onClick={() => day !== null && !isDateDisabled(day, false) && handleDateSelect(day, false)}
                                    disabled={day === null || isDateDisabled(day, false)}
                                >
                                    {day}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HotelSearchForm;