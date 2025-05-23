import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Data structure similar to islandSlides
const islandSlides = [
    {
        id: 1,
        title: "Diglipur",
        images: [
            {
                id: 11,
                imagePath: "/images/gallery/gallery1.png",
                title: "Corbyn's Cove Beach",
                desc: "The Cellular Jail, also known as 'Kālā Pānī' (Black Water), was a British colonial prison in the Andaman and Nicobar Islands"
            },
            {
                id: 12,
                imagePath: "/images/gallery/gallery2.png",
                title: "Corbyn's Cove Beach",
                desc: "A beautiful coconut-palm fringed beach, ideal for swimming, sun-basking & bathing."
            },
            {
                id: 13,
                imagePath: "/images/gallery/gallery3.png",
                title: "Reef View",
                desc: "Crystal clear waters and vibrant coral reefs."
            },
            {
                id: 14,
                imagePath: "/images/gallery/gallery4.png",
                title: "Blue Waters",
                desc: "Turquoise blue waters perfect for boating."
            },
            {
                id: 15,
                imagePath: "/images/gallery/gallery5.png",
                title: "Cellular Jail",
                desc: "Historic colonial prison, now a national memorial monument."
            },
            {
                id: 16,
                imagePath: "/images/gallery/gallery6.png",
                title: "White Sand Beach",
                desc: "Pristine white sand and clear blue sea."
            },
        ]
    },
    {
        id: 2,
        title: "Havelock",
        images: [
            {
                id: 21,
                imagePath: "/images/gallery/gallery2.png",
                title: "Havelock Beach",
                desc: "A beautiful beach in Havelock."
            },
            {
                id: 22,
                imagePath: "/images/gallery/gallery3.png",
                title: "Corbyn's Cove",
                desc: "A serene cove in Havelock."
            },
            ,
            {
                id: 23,
                imagePath: "/images/gallery/gallery4.png",
                title: "Reef View",
                desc: "Crystal clear waters and vibrant coral reefs."
            },
            {
                id: 24,
                imagePath: "/images/gallery/gallery5.png",
                title: "Blue Waters",
                desc: "Turquoise blue waters perfect for boating."
            },
            {
                id: 25,
                imagePath: "/images/gallery/gallery6.png",
                title: "Cellular Jail",
                desc: "Historic colonial prison, now a national memorial monument."
            },
            {
                id: 26,
                imagePath: "/images/gallery/gallery1.png",
                title: "White Sand Beach",
                desc: "Pristine white sand and clear blue sea."
            },
            // ...add more images as needed
        ],
    },
    {
        id: 3,
        title: "Long",
        images: [
            {
                id: 31,
                imagePath: "/images/gallery/gallery1.png",
                title: "Long Island Beach",
                desc: "A tranquil and scenic beach."
            },
            {
                id: 32,
                imagePath: "/images/gallery/gallery2.png",
                title: "Lalaji Bay Beach",
                desc: "Famous for its white sand and clear water."
            },
            {
                id: 33,
                imagePath: "/images/gallery/gallery3.png",
                title: "Guitar Island",
                desc: "A hidden gem with a unique shape."
            },
            {
                id: 34,
                imagePath: "/images/gallery/gallery4.png",
                title: "Blue Lagoon",
                desc: "A beautiful lagoon with blue water."
            },
            {
                id: 35,
                imagePath: "/images/gallery/gallery5.png",
                title: "Mangrove Forest",
                desc: "Explore the lush mangroves."
            },
            {
                id: 36,
                imagePath: "/images/gallery/gallery6.png",
                title: "Sunset Point",
                desc: "Best place to watch the sunset."
            },
        ],
    },
    {
        id: 4,
        title: "Mayabandar",
        images: [
            {
                id: 41,
                imagePath: "/images/gallery/gallery1.png",
                title: "Karmatang Beach",
                desc: "Known for turtle nesting."
            },
            {
                id: 42,
                imagePath: "/images/gallery/gallery2.png",
                title: "Rampur Beach",
                desc: "A peaceful and scenic spot."
            },
            {
                id: 43,
                imagePath: "/images/gallery/gallery3.png",
                title: "Avis Island",
                desc: "A small and beautiful island."
            },
            {
                id: 44,
                imagePath: "/images/gallery/gallery5.png",
                title: "German Jetty",
                desc: "A popular tourist attraction."
            },
            {
                id: 45,
                imagePath: "/images/gallery/gallery4.png",
                title: "Forest Walk",
                desc: "Enjoy a walk in the lush forest."
            },
            {
                id: 46,
                imagePath: "/images/gallery/gallery6.png",
                title: "Sunrise View",
                desc: "Catch the sunrise over the bay."
            },
        ],
    },
    {
        id: 5,
        title: "Neil",
        description: "",
        images: [
            {
                id: 51,
                imagePath: "/images/gallery/gallery1.png",
                title: "Bharatpur Beach",
                desc: "Famous for coral reefs and clear water."
            },
            {
                id: 52,
                imagePath: "/images/gallery/gallery2.png",
                title: "Laxmanpur Beach",
                desc: "Known for its sunset views."
            },
            {
                id: 53,
                imagePath: "/images/gallery/gallery4.png",
                title: "Sitapur Beach",
                desc: "A quiet and beautiful beach."
            },
            {
                id: 54,
                imagePath: "/images/gallery/gallery3.png",
                title: "Natural Bridge",
                desc: "A unique rock formation."
            },
            {
                id: 55,
                imagePath: "/images/gallery/gallery5.png",
                title: "Ramnagar Beach",
                desc: "A serene spot for relaxation."
            },
            {
                id: 56,
                imagePath: "/images/gallery/gallery6.png",
                title: "Snorkeling Cove",
                desc: "Great for snorkeling and swimming."
            },
        ],
    },
    {
        id: 6,
        title: "Port Blair",
        description: "",
        images: [
            {
                id: 61,
                imagePath: "/images/gallery/gallery1.png",
                title: "Cellular Jail",
                desc: "Historic colonial prison, now a national memorial monument."
            },
            {
                id: 62,
                imagePath: "/images/gallery/gallery2.png",
                title: "Ross Island",
                desc: "Ruins of the British administrative headquarters."
            },
            {
                id: 63,
                imagePath: "/images/gallery/gallery3.png",
                title: "Wandoor Beach",
                desc: "Known for its coral reefs and marine life."
            },
            {
                id: 64,
                imagePath: "/images/gallery/gallery4.png",
                title: "Chidiya Tapu",
                desc: "Famous for bird watching and sunset views."
            },
            {
                id: 65,
                imagePath: "/images/gallery/gallery5.png",
                title: "Samudrika Museum",
                desc: "A museum showcasing marine life."
            },
            {
                id: 66,
                imagePath: "/images/gallery/gallery6.png",
                title: "Corbyn's Cove",
                desc: "A popular beach for water sports."
            },
        ],
    }
];

const islandNames = islandSlides.map(island => island.title);

const GalleryMain: React.FC = () => {
    const [selectedIslandIdx, setSelectedIslandIdx] = useState(0);
    const [current, setCurrent] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    const island = islandSlides[selectedIslandIdx];
    const images = island.images;

    // Responsive: 1440px: 6 thumbs, 1024px: 4, 390px: 2
    const getThumbsToShow = () => {
        if (typeof window !== "undefined") {
            if (window.innerWidth < 390) return 2;
            if (window.innerWidth < 500) return 3;
            if(window.innerWidth < 768) return 4;
            if (window.innerWidth < 1024) return 5;
        }
        return 6;
    };

    const [thumbsToShow, setThumbsToShow] = useState(getThumbsToShow());

    useEffect(() => {
        const handleResize = () => setThumbsToShow(getThumbsToShow());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Reset current image when island changes
    useEffect(() => {
        setCurrent(0);
    }, [selectedIslandIdx]);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        // Render nothing or a skeleton to avoid hydration mismatch
        return null;
    }

    // Thumbnail carousel logic
    const thumbStart = Math.max(
        0,
        Math.min(
            current - Math.floor(thumbsToShow / 2),
            images.length - thumbsToShow
        )
    );
    const thumbEnd = thumbStart + thumbsToShow;
    return (
        <div className="w-full p-4 container mx-auto flex flex-col items-center justify-start px-4 py-[100px]">
            {/* Top nav */}
            <div className="w-full flex flex-col md:flex-row items-center gap-2 justify-between">
                <div className="w-full flex md:hidden flex-row justify-between bg-[#1C1F22] py-2 px-4 rounded-full gap-2">
                    <button className="w-1/2 px-6 py-2 rounded-full bg-gradient-to-r from-[#00E09E] to-[#00B6B1] text-white font-medium">
                        Photo
                    </button>
                    <button className="w-1/2 px-6 py-2 rounded-full bg-[#222629] text-gray-400 font-medium">
                        Video
                    </button>
                </div>
                <div className="w-full md:w-auto overflow-x-auto scrollbar-hide bg-[#1C1F22] py-2 px-4 justify-between md:justify-start rounded-full flex gap-2">
                    {islandSlides.map((island, idx) => (
                        <button
                            key={island.title}
                            className={`px-2 py-1 md:px-4 md:py-2 text-[12px] w-max rounded-full text-[14px] font-medium transition-colors ${selectedIslandIdx === idx
                                ? "bg-white text-black"
                                : "bg-[#222629] text-gray-400"
                                }`}
                            onClick={() => setSelectedIslandIdx(idx)}
                        >
                            {island.title}
                        </button>
                    ))}
                </div>
                <div className="hidden md:flex bg-[#1C1F22] py-2 px-4 rounded-full gap-2">
                    <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#00E09E] to-[#00B6B1] text-white font-[14px]">
                        Photo
                    </button>
                    <button className="px-6 py-2 rounded-full bg-[#222629] text-gray-400 font-[14px]">
                        Video
                    </button>
                </div>
            </div>

            {/* Main gallery area */}
            <div className="w-full flex flex-col lg:flex-row gap-4 mt-8">
                {/* Info panel */}
                <div className="bg-[#1C1F22] p-6 rounded-2xl p-8 flex flex-col justify-between min-h-[400px] max-w-full lg:max-w-[400px] w-full lg:w-[400px]">
                    <div>
                        <h2 className="text-white text-2xl font-semibold mb-2">{images[current]?.title}</h2>
                        <p className="text-gray-300 text-base">{images[current]?.desc}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-8 w-full justify-end">
                        <span className="text-[#00B6B1] font-medium text-sm">
                            {String(current + 1).padStart(2, "0")}/{String(images.length).padStart(2, "0")}
                        </span>
                        <button
                            className="w-8 h-8 rounded-full border border-[#444] flex items-center justify-center text-white"
                            onClick={() => setCurrent((prev) => (prev > 0 ? prev - 1 : prev))}
                            aria-label="Previous"
                        >
                            <IoIosArrowBack />
                        </button>
                        <button
                            className="w-8 h-8 rounded-full border border-[#444] flex items-center justify-center text-white"
                            onClick={() => setCurrent((prev) => (prev < images.length - 1 ? prev + 1 : prev))}
                            aria-label="Next"
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>
                {/* Main image */}
                <div className="flex-1 flex items-center justify-center">
                    <div className="rounded-2xl overflow-hidden w-full h-[350px] md:h-[420px] lg:h-[500px] bg-[#111] flex items-center justify-center">
                        <img
                            src={images[current]?.imagePath}
                            alt={images[current]?.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>

            {/* Thumbnails */}
            <div className="relative w-full flex flex-row items-center gap-4 md:px-8 mt-2 md:mt-8">
                {/* Left arrow */}
                <div className="flex w-full flex-row items-center gap-4 md:px-8 mt-8">
                    <button
                        className="w-10 h-10 absolute z-10 left-0 rounded-full border border-white flex items-center justify-center text-white"
                        onClick={() => setCurrent((prev) => (prev > 0 ? prev - 1 : prev))}
                        aria-label="Previous"
                    >
                        <IoIosArrowBack />
                    </button>
                    {/* Thumbnails */}
                    <div className="flex-1 flex flex-row gap-4 overflow-x-auto scrollbar-hide">
                        {images.slice(thumbStart, thumbEnd).map((img, idx) => {
                            const realIdx = thumbStart + idx;
                            return (
                                <button
                                    key={img?.imagePath}
                                    className={`rounded-2xl relative overflow-hidden border-2 w-[200px] h-[200px] md:w-[190px] md:h-[190px] flex-shrink-0
                                        ${realIdx === current
                                            ? "border-[#00B6B1]"
                                            : "border-transparent bg-transparent"
                                        }`}
                                    onClick={() => setCurrent(realIdx)}
                                    aria-label={`Show image ${realIdx + 1}`}
                                >
                                    <img
                                        src={img?.imagePath}
                                        alt={img?.title}
                                        className="object-cover w-full h-full"
                                    />
                                    <div className={`${realIdx == current? "flex absolute top-0 left-0 z-5 w-full h-full bg-black bg-opacity-50" : "hidden"}`}></div>
                                </button>
                            );
                        })}
                    </div>
                    {/* Right arrow */}
                    <button
                        className="w-10 h-10 absolute z-10 right-0 rounded-full border border-white flex items-center justify-center text-white"
                        onClick={() => setCurrent((prev) => (prev < images.length - 1 ? prev + 1 : prev))}
                        aria-label="Next"
                    >
                        <IoIosArrowForward />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default GalleryMain;
