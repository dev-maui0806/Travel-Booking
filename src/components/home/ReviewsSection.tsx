'use client';

import { useState, useEffect } from 'react';
import ReviewCard from '@/components/reviews/ReviewCard';

// Mock review data
const reviewsData = [
  {
    id: 1,
    author: "Jonas Kakaroto",
    date: "07.01.2024",
    avatar: "/images/reviews/jonas-kakaroto.png",
    text: "Traveling to the Adam Islands with Exotic Trex was a highlight of my life. Hostile nature, incredible fauna and development of white sandy beaches prevent hostilities from going incredibly deep. The service was excellent, every minute was worth the careful consideration. I recommend it to everyone who dreams of unique emotions and atmosphere"
  },
  {
    id: 2,
    author: "Maria Sergievna",
    date: "07.01.2024",
    avatar: "/images/reviews/maria-sergievna.png",
    text: "The journey to the Adam Islands was like a fairy tale, part of the company \"Mandrivniki Svitu\". Incredible landscapes, exotic flora and fauna, as well as friendly staff made this experience unique. There is little opportunity to enjoy the true natural beauty, spending an hour on clean beaches and exploring unique places. The hostilities from this tour have come to a head!"
  },
  {
    id: 3,
    author: "John Smith",
    date: "05.01.2024",
    avatar: "/images/reviews/john-smith.png",
    text: "Our trip to the Adam Islands exceeded all expectations. The pristine beaches and crystal clear waters were breathtaking. Our guide was knowledgeable and attentive, making sure we got the most out of our experience. I would highly recommend this tour to anyone looking for an authentic island experience."
  },
  {
    id: 4,
    author: "Emily Johnson",
    date: "03.01.2024",
    avatar: "/images/reviews/emily-johnson.png",
    text: "The Adam Islands tour was absolutely phenomenal. From the moment we arrived, we were treated to stunning views and incredible hospitality. The snorkeling spots were teeming with colorful fish and coral. This was truly a once-in-a-lifetime experience that I'll never forget."
  },
  {
    id: 5,
    author: "David Chen",
    date: "01.01.2024",
    avatar: "/images/reviews/david-chen.png",
    text: "As an avid traveler, I can confidently say that the Adam Islands tour was one of my top experiences. The natural beauty is unspoiled, and the tour was well-organized from start to finish. The local cuisine we tried was delicious, and our accommodations were comfortable and charming."
  },
  {
    id: 6,
    author: "Sarah Williams",
    date: "28.12.2023",
    avatar: "/images/reviews/sarah-williams.png",
    text: "The Adam Islands exceeded my expectations in every way. The tour guides were friendly and knowledgeable, showing us hidden gems that most tourists never get to see. The beaches were pristine, and the wildlife encounters were magical. Highly recommended!"
  }
];

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [showDetails, setShowDetails] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // Update slides to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (!mobile) {
        setVisibleSlides(2);
        setShowDetails(window.innerWidth >= 1200);
      } else {
        setVisibleSlides(1);
        setShowDetails(true);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const handleNext = () => {
    const maxSlide = reviewsData.length - visibleSlides;
    setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1);
  };
  
  const handlePrev = () => {
    const maxSlide = reviewsData.length - visibleSlides;
    setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1);
  };
  
  // Format page numbers with leading zeros
  const formatNumber = (num: number) => num < 10 ? `0${num}` : num;
  
  return (
    <section className="bg-[#222629] py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl md:text-5xl text-white font-light">Reviews</h2>
          
          {/* Navigation controls for desktop */}
          <div className="hidden md:flex items-center">
            <span className="text-white mr-4">
              {formatNumber(currentSlide + 1)}/{formatNumber(reviewsData.length)}
            </span>
            <div className="flex space-x-3">
              <button 
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Previous review"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Next review"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile view - single card */}
        <div className="md:hidden">
          <div className="mb-6">
            <ReviewCard 
              review={reviewsData[currentSlide]} 
              showDetails={true}
              isMobile={true}
            />
          </div>
          
          {/* Mobile pagination dots */}
          <div className="flex justify-center gap-1.5">
            {reviewsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 
                  ${index === currentSlide ? 'w-8 bg-[#0CCDDA]' : 'w-1.5 bg-gray-600'}`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Desktop view - two cards */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-10">
            {Array.from({ length: visibleSlides }).map((_, index) => {
              const reviewIndex = (currentSlide + index) % reviewsData.length;
              return (
                <ReviewCard 
                  key={reviewsData[reviewIndex].id} 
                  review={reviewsData[reviewIndex]} 
                  showDetails={showDetails}
                  isMobile={false}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection; 