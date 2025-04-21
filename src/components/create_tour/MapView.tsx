'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { IoClose } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import { LuFlag } from "react-icons/lu";
import PlaceDetailPanel from './PlaceDetailPanel';

interface MapViewProps {
  places: Array<{
    id: number;
    name: string;
    image: string;
    description: string;
  }>;
}

const MapView: React.FC<MapViewProps> = ({ places }) => {
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null);
  const [showDetailPanel, setShowDetailPanel] = useState(false);

  // Use useMemo to generate and cache marker positions
  const markerPositions = useMemo(() => {
    return places.map(place => ({
      id: place.id,
      top: `${Math.floor(Math.random() * 70) + 10}%`,
      left: `${Math.floor(Math.random() * 70) + 10}%`
    }));
  }, [places]); // Only recalculate if places array changes

  const handleMarkerClick = (placeId: number) => {
    setSelectedPlace(placeId === selectedPlace ? null : placeId);
  };

  const selectedPlaceData = places.find(place => place.id === selectedPlace);

  return (
    <div className="relative h-[calc(100vh-150px)] w-full rounded-xl overflow-hidden">
      {/* Map Background */}
      <Image
        src="/images/attraction_map.png"
        alt="Map View"
        fill
        className="object-cover"
      />
      
      {/* Map Markers */}
      {markerPositions.map((marker) => {
        const place = places.find(p => p.id === marker.id);
        if (!place) return null;
        
        return (
          <div
            key={marker.id} 
            className="absolute cursor-pointer" 
            style={{ 
              top: marker.top, 
              left: marker.left 
            }}
            onClick={() => handleMarkerClick(marker.id)}
          >
            <div className={`flex bg-black rounded-full px-2 flex-col items-center justify-center`}>
              <LuFlag 
                size={24} 
                className={`${selectedPlace === marker.id ? 'text-[#06b6d4]' : 'text-white'}`} 
              />
              <div className={`w-2 h-2 rounded-full mt-1 ${selectedPlace === marker.id ? 'bg-[#06b6d4]' : 'bg-white'}`}></div>
            </div>
          </div>
        );
      })}

      {/* Rest of the component remains unchanged */}
      {/* Zoom Controls */}
      <div className="absolute right-4 bottom-20 flex flex-col gap-2">
        <button className="w-8 h-8 bg-[#06b6d4] rounded-full flex items-center justify-center text-white shadow-lg">
          <AiOutlinePlus size={18} />
        </button>
        <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#222629] shadow-lg">
          <span className="text-xl font-bold">-</span>
        </button>
      </div>
      
      {/* Selected Place Card */}
      {selectedPlaceData && (
        <div className="absolute flex justify-between top-10 left-10 bg-[#222629] rounded-xl overflow-hidden shadow-lg w-[600px]">
          <div className="relative">
            <div className="relative h-full w-full p-3">
              <Image
                src={selectedPlaceData.image}
                alt={selectedPlaceData.name}
                width={1000}
                height={300}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="p-4 text-white">
            <h3 className="text-lg font-semibold">{selectedPlaceData.name}</h3>
            <p className="text-sm text-gray-300 mt-1">
              {selectedPlaceData.description}
            </p>
            
            <div className="flex justify-between items-center mt-4">
              <button 
                className="text-[#06b6d4] rounded-full p-2 hover:bg-[#111827]"
                onClick={() => setShowDetailPanel(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 16 16 12 12 8"></polyline>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </button>
              <button className="text-white bg-[#06b6d4] p-2 rounded-full border border-[#06b6d4] hover:border-white">
                <HiOutlineShoppingBag/>
              </button>
            </div>
          </div>
          <button 
            className="absolute top-2 right-2 w-8 h-8 bg-[#222629]/70 rounded-full flex items-center justify-center text-white"
            onClick={() => setSelectedPlace(null)}
          >
            <IoClose size={18} />
          </button>
        </div>
      )}
      
      {/* Route Indicators */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] pointer-events-none">
        {/* This would be replaced with actual route paths */}
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M20,80 Q40,60 60,70 T90,50" 
            stroke="#6B7280" 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="4,4"
          />
        </svg>
        
        {/* Route markers */}
        <div className="absolute top-[70%] left-[20%] bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">4</div>
        <div className="absolute top-[50%] left-[90%] bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">4</div>
      </div>
      
      {/* Detail Panel */}
      {showDetailPanel && selectedPlaceData && (
        <PlaceDetailPanel 
          place={selectedPlaceData} 
          onClose={() => setShowDetailPanel(false)} 
        />
      )}
    </div>
  );
};

export default MapView;