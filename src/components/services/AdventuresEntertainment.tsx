'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import slides from "./ImageData"
import ServiceCard from './ServiceCard';

const AdventuresEntertainment: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const mainSlides = [
        {
            id: 'game-fishing',
            title: 'Game Fishing',
            description: 'The Andaman Islands are very famous in the international community for their fishing. Fishing in the Andaman Islands is very popular and such fishing trips are conducted in both Port Blair and Havelock Island',
            image: '/images/services/fishing.jpg',
            className: 'col-span-2 row-span-2',
            childImages: [
                '/images/services/scuba.jpg',
                '/images/services/seawalk.jpg',
                '/images/services/snorkeling.jpg',
                '/images/services/kayaking.jpg',
                '/images/services/speedboat.jpg',
            ]
        }
    ];

    const handleSlideChange = (direction: 'prev' | 'next') => {
        if (direction === 'next') {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        } else {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }
    };

    return (
        <div className="container mx-auto p-6 bg-[#1C1C1E] text-white min-h-screen">
            <h1 className="text-[2.5rem] font-light mb-8">Adventures and entertainment</h1>

            <div className="relative overflow-hidden">
                <div
                    className="transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    <div className="w-full h-full">
                        <div className="grid grid-cols-4 gap-4 auto-rows-[400px] auto-cols-[400px]">
                        {slides.map((slide, index) => (
                           
                                <div
                                    key={index}
                                    className={`relative rounded-lg overflow-hidden ${slide.className || ''}`}
                                >
                                    {/* {index === 0 && (
                                        <div className="absolute bottom-0 left-0 p-6 z-10 bg-gradient-to-t from-black/70 to-transparent w-full">
                                            <h2 className="text-2xl mb-2">{slide.title}</h2>
                                            <p className="text-sm text-gray-300">{slide.description}</p>
                                        </div>
                                    )} */}
                                    <ServiceCard service={slide} />
                                </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-end mt-6 gap-6">
                <div className="text-gray-400">
                    {String(currentSlide + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => handleSlideChange('prev')}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        ←
                    </button>
                    <button
                        onClick={() => handleSlideChange('next')}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdventuresEntertainment;