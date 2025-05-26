'use client'

import React, {useState} from 'react';
import Image from 'next/image'
import RentalSection from "./TransportRental";
import HotelSection from './HotelPost';
import AdventuresEntertainment from './AdventuresEntertainment';

const ServiceSection: React.FC = () => {
    return(
        <div className="container mx-auto service-section-container bg-[#222629]">
            <RentalSection/>
            <HotelSection/>
            <AdventuresEntertainment/>
        </div>   
    )
} 

export default ServiceSection;