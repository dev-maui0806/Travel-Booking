'use client'

import React from 'react';

interface CalendarCardProps {
  currentMonth: string;
  currentYear: number;
  selectedDate: number | null;
  onDateSelect: (date: number) => void;
  onMonthChange: (direction: 'prev' | 'next') => void;
}

const CalendarCard: React.FC<CalendarCardProps> = ({
  currentMonth,
  currentYear,
  selectedDate,
  onDateSelect,
  onMonthChange
}) => {
    // Generate dates for the current month
    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const monthIndex = new Date(`${currentMonth} 1, ${currentYear}`).getMonth();
    const daysInMonth = getDaysInMonth(monthIndex, currentYear);
    const dates = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
        <div className="bg-[#2C2C2E]/80 p-4 rounded-lg">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-4">
                <button 
                    onClick={() => onMonthChange('prev')}
                    className="text-gray-500 hover:text-gray-400 w-6 h-6 flex items-center justify-center"
                >
                    ←
                </button>
                <span className="text-gray-200">{currentMonth}</span>
                <button 
                    onClick={() => onMonthChange('next')}
                    className="text-gray-500 hover:text-gray-400 w-6 h-6 flex items-center justify-center"
                >
                    →
                </button>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
                {/* Weekday headers */}
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                    <div key={index} className="text-center text-xs text-gray-500 mb-2">
                        {day}
                    </div>
                ))}
                
                {/* Date cells */}
                {dates.map((date) => (
                    <button
                        key={date}
                        onClick={() => onDateSelect(date)}
                        className={`
                            w-8 h-8 rounded-lg text-center text-sm
                            ${selectedDate === date 
                                ? 'bg-white text-black' 
                                : 'text-gray-300 hover:bg-[#3C3C3E]'
                            }
                        `}
                    >
                        {date}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CalendarCard;