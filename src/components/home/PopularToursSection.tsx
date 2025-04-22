'use client';

import { useRef, useState, useEffect } from 'react';
import { fetchMockTours } from "@/lib/mockData";
import type { Tour } from "@/types";
import Image from 'next/image';
import Link from 'next/link';

const PopularToursSection = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTours = async () => {
      const fetchedTours = await fetchMockTours({ limit: 6 });
      setTours(fetchedTours);
    };
    loadTours();
  }, []);

  const handleNext = () => {
    if (sliderRef.current && currentSlide < tours.length - 1) {
      setCurrentSlide(prev => prev + 1);
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: slideWidth, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (sliderRef.current && currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
      const slideWidth = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: -slideWidth, behavior: 'smooth' });
    }
  };

  // Determine number of visible slides based on screen width
  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1200) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 1;
  };

  return (
    <section className="relative overflow-hidden text-white">
      {/* Full-width background image */}
      <div className="absolute inset-0 -z-10 bg-black/90">
        {/* Can add a background image here if needed */}
        <Image src={"/images/popular-back.png"} alt='PopularToursSectionImage' width={1440} height={727} className='w-full h-full object-cover' />
      </div>
      {/* <div className="absolute inset-0 -z- bg-black/90">
        <div className='bg-gray-100 w-full h-full bg-opacity-50'></div>
      </div> */}
      <div className="container mx-auto px-4 py-20 md:py-16 lg:py-20">
        {/* Title and navigation */}
        <div className="flex justify-between items-center mb-6 md:mb-10">
          <div className="flex flex-col justify-start items-start gap-2">
            <h2 className="text-3xl md:text-5xl font-light">READY-MADE TOURS</h2>
            <h3 className='text-xl md:text-3xl font-light'>Pre-curated itineraries for a hassle-free trip</h3>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 cursor-pointer bg-transparent hover:border-white focus:bg-white focus:text-black transition-colors"
              disabled={currentSlide === 0}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 cursor-pointer bg-transparent hover:border-white focus:bg-white focus:text-black transition-colors"
              disabled={currentSlide === tours.length - getVisibleSlides()}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className="relative right-4 w-full justify-end bottom-5 flex md:hidden absolute items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous slide"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 cursor-pointer bg-transparent hover:border-white focus:bg-white focus:text-black transition-colors"
              disabled={currentSlide === 0}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              aria-label="Next slide"
              className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 cursor-pointer bg-transparent hover:border-white focus:bg-white focus:text-black transition-colors"
              disabled={currentSlide === tours.length - getVisibleSlides()}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-5 overflow-x-hidden snap-x snap-mandatory touch-pan-x"
        >
          {tours.map((tour, index) => (
            <div
              key={tour.id}
              className="flex-none w-[358px] sm:w-[543px] snap-start"
            >
              <div className="relative h-[362px] sm:h-[409px] rounded-2xl overflow-hidden group">
                {/* Background Image */}
                <Image
                  src={tour.attributes.featuredImage?.data?.attributes.url || '/images/placeholder.png'}
                  alt={tour.attributes.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />

                {/* Semi-transparent overlay */}
                <div className="absolute inset-0 bg-[#222629] opacity-80"></div>

                {/* Card content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                  {/* Top section - Price and Duration */}
                  <div className="flex justify-between items-start">
                    <div className='flex flex-col gap-[20px]'>
                      <p className="text-2xl font-bold">{tour.attributes.duration} days</p>
                      <div>
                        <h3 className="text-xl font-medium mb-2">The tour includes</h3>
                        <ul className="space-y-1 text-white/70">
                          <li>Accommodation</li>
                          <li>Directions</li>
                          <li>Breakfast</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-3xl md:text-4xl">{tour.attributes.price} $</p>
                  </div>

                  {/* Bottom section */}
                  <div className="space-y-5 flex flex-row justify-between items-end">
                    <div className='flex flex-col gap-[20px]'>
                      <p className="text-white/70">
                        You will see the most amazing beaches of the islands
                      </p>

                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < 4 ? "text-[#22d3ee]" : "text-white/30"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>


                    <Link href={`/tours/${tour.attributes.slug}`} aria-label="View tour details">
                      <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-white/90 transition-colors -rotate-45">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 10H15M15 10L10 5M15 10L10 15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl">
                Tour of the best beaches
              </h3>
            </div>
          ))}
        </div>

        {/* Pagination dots (mobile) */}
        <div className="flex justify-center mt-6 gap-1.5 md:hidden">
          {tours.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 
                ${currentSlide === index ? 'w-8 bg-white' : 'w-1.5 bg-white/40'}`}
              onClick={() => {
                if (sliderRef.current) {
                  const slideWidth = sliderRef.current.offsetWidth;
                  sliderRef.current.scrollTo({
                    left: slideWidth * index,
                    behavior: 'smooth'
                  });
                  setCurrentSlide(index);
                }
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularToursSection; 