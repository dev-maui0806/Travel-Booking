'use client'

import React, {Suspense} from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import slides from '@/components/services/ImageData';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/home/HeroSection';
import ServiceDetail from '@/components/services/ServiceDetail';
const ServiceDetailPage = () => {
    const params = useParams();
    const id = params?.id as string;
    
    // Find the matching service data
    const serviceData = slides.find(slide => slide.id === id);

    if (!serviceData) {
        return (
            <div className="p-6 bg-[#1C1C1E] text-white min-h-screen">
                <h1>Service not found</h1>
            </div>
        );
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
        <Header/>
        <HeroSection title = {serviceData.title}/>
        <div className="min-h-screen bg-[#1C1C1E] mt-8">
            <ServiceDetail serviceData={serviceData} />
        </div>
        <div className="p-6 bg-[#1C1C1E] text-white max-h-screen">
            <h1 className="text-[2.5rem] font-light mb-8">{serviceData.title}</h1>
            <p className="text-gray-300 mb-8">{serviceData.description}</p>
            
            <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
                {serviceData.child.map((image, index) => (
                    <div 
                        key={index} 
                        className={`relative rounded-lg overflow-hidden ${image.className || ''}`}
                    >
                        <Image
                            src={image.src}
                            alt={`${serviceData.title} ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                ))}
            </div>
        </div>
       
        </Suspense>
    );
};

export default ServiceDetailPage; 