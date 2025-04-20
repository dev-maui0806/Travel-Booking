import React, { useState } from "react";

const HeroSectionCreateTour: React.FC = () => {
    const slides = [
        {
            id: 1,
            image: "/images/places/corbyns.png",
            title: "Diglipur",
            description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
            mapImage: "/images/maps/create_tour/google-map-diglipur.png"
        },
        {
            id: 2,
            image: "/images/places/havelock.png",
            title: "HaveLock",
            description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
            mapImage: "/images/maps/create_tour/google-map-havelock.png"
        },
        {
            id: 3,
            image: "/images/places/long.png",
            title: "Long",
            description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
            mapImage: "/images/maps/create_tour/google-map-long.png"
        },
        {
            id: 4,
            image: "/images/places/neil.png",
            title: "Neil",
            description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
            mapImage: "/images/maps/create_tour/google-map-neil.png"
        },
        {
            id: 5,
            image: "/images/places/port.png",
            title: "Port",
            description: "The fascinating town of Diglipur is the largest town in North Andaman Islands and yet often goes unnoticed because of its distance from other popular tourist attractions (Havelock and Port Blair). But, perhaps it is this same distance that makes Diglipur such a different and adventurous place!",
            mapImage: "/images/maps/create_tour/google-map-port_blair.png"
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeTabId, setActiveTabId] = useState(slides[0].id);

    const activePlace = slides.find(place => place.id === activeTabId);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="bg-[#222629] text-white py-[20px] md:py-[100px] h-auto">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Navigation Tabs */}
                <div className="relative mb-2">
                    <div className="flex flex-col lg:flex-row gap-2 items-align w-full justify-between overflow-x-auto">
                        <div className="lg:hidden flex items-center space-x-2 bg-[#1C1F22] rounded-full p-1 w-fit min-w-full md:min-w-0">
                            <div className="flex items-center space-x-2">
                                <span className="bg-[#222629] px-4 py-2 rounded-full">$ 0</span>
                                <span className="bg-[#222629] px-4 py-2 rounded-full">0 day</span>
                            </div>
                            <button className="bg-gradient-to-r from-[#bef264] to-[#06b6d4] text-white px-6 py-2 rounded-full">
                                Route details
                            </button>
                        </div>
                        <div className="flex items-center space-x-2 bg-[#1C1F22] rounded-full p-1 w-fit min-w-full md:min-w-0">
                            {slides.map((place) => (
                                <button
                                    key={place.id}
                                    onClick={() => {
                                        setActiveTabId(place.id);
                                        setCurrentSlide(slides.findIndex(p => p.id === place.id));
                                    }}
                                    className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full whitespace-nowrap transition-colors text-sm md:text-base ${activeTabId === place.id
                                        ? 'bg-white text-black'
                                        : 'text-gray-400 hover:text-gray-300'
                                        }`}
                                >
                                    {place.title}
                                </button>
                            ))}
                        </div>
                        <div className="hidden lg:flex items-center space-x-2 bg-[#1C1F22] rounded-full p-1 w-fit min-w-full md:min-w-0">
                            <div className="flex items-center space-x-2">
                                <span className="bg-[#222629] px-4 py-2 rounded-full">$ 0</span>
                                <span className="bg-[#222629] px-4 py-2 rounded-full">0 day</span>
                            </div>
                            <button className="bg-gradient-to-r from-[#bef264] to-[#06b6d4] text-white px-6 py-2 rounded-full">
                                Route details
                            </button>
                        </div>
                    </div>
                </div>
                {/* Main Content */}
                <div className="flex flex-1 flex-col md:flex-row gap-2 lg:h-[750px] md:h-[700px]">
                    {/* Left Section: Map */}
                    <div className="w-full w-full md:w-1/3 bg-[#1C1F22] rounded-[10px] flex flex-col justify-center items-center p-4">
                        <div className="relative w-full h-full">
                            <img
                                src={slides[currentSlide].mapImage}// Replace with your map image path
                                alt="Andaman Map"
                                className="w-full h-full object-contain"
                            />
                            {/* Add more labels for other locations */}
                        </div>
                    </div>

                    {/* Right Section: Carousel */}
                    <div className="bg-[#1C1F22] w-full relative w-full md:w-2/3 flex flex-col gap-[24px] justify-start items-center rounded-[10px]">
                        <div className="relative w-full h-3/4">
                            <img
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].title}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="w-full h-1/4 flex px-[32px] py-[10px] md:py-[0px] flex-col sm:flex-row justify-between rounded-b-lg">
                            <p className="text-sm w-full md:w-3/5">{slides[currentSlide].description}</p>
                            <div className="flex items-center justify-end space-x-3 md:space-x-4 w-full md:w-2/5">
                                <span className="text-sm font-light text-[#06b6d4]">
                                    {String(currentSlide + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
                                </span>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={handlePrev}
                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                                        aria-label="Previous"
                                    >
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-white/10 transition-colors"
                                        aria-label="Next"
                                    >
                                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSectionCreateTour;