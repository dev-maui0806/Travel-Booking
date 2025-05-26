'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { ServiceSlide } from '@/types/services';

interface ServiceDetailProps {
    serviceData: ServiceSlide;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleSlideChange = (direction: 'prev' | 'next') => {
        if (direction === 'next') {
            setCurrentImageIndex((prev) => 
                prev === serviceData.child.length - 1 ? 0 : prev + 1
            );
        } else {
            setCurrentImageIndex((prev) => 
                prev === 0 ? serviceData.child.length - 1 : prev - 1
            );
        }
    };

    return (
        <div className="p-6 bg-[#1C1C1E] text-white">
            <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Text Content */}
                <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                        Andaman Islands is very well known in the international community for 
                        game fishing. Game fishing in Andaman islands are very popular and 
                        these fishing trips are done both in Port Blair and Havelock island. Huge 
                        fishes have been earlier caught in the islands and for this reason game 
                        fishing enthusiasts from all across the globe travel to Andaman to catch 
                        that one big fish.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        Everyone knows that Andaman offers some of the world's best beaches, 
                        reefs and diving. What you might not know is that Andamans also offers 
                        world-class sport fishing and angling
                    </p>
                    <button className="flex items-center gap-2 text-[#00C2B3]">
                        <span className="w-6 h-6 rounded-full border border-[#00C2B3] flex items-center justify-center">↓</span>
                        More
                    </button>
                </div>

                {/* Image Slider */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <Image
                        src={serviceData.child[currentImageIndex].src}
                        alt={serviceData.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-end gap-6">
                <div className="text-gray-400">
                    {String(currentImageIndex + 1).padStart(2, '0')}/{String(serviceData.child.length).padStart(2, '0')}
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

export default ServiceDetail;
