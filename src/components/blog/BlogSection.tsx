'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    imageUrl: string;
    slug: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel. In this blog, we're putting together everything you'll need to know before you head to the Andamans for a budget trip",
        imageUrl: "/images/blog/blog1.png",
        slug: "andaman-on-budget"
    },
    {
        id: 2,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog2.png",
        slug: "andaman-on-budget-2"
    },
    {
        id: 3,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog3.png",
        slug: "andaman-on-budget-3"
    },
    {
        id: 4,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog4.png",
        slug: "andaman-on-budget-4"
    },
    {
        id: 5,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog2.png",
        slug: "andaman-on-budget-2"
    },
    {
        id: 6,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog3.png",
        slug: "andaman-on-budget-3"
    },
    {
        id: 7,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog4.png",
        slug: "andaman-on-budget-4"
    },
    {
        id: 8,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog2.png",
        slug: "andaman-on-budget-2"
    },
    {
        id: 9,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog3.png",
        slug: "andaman-on-budget-3"
    },
    {
        id: 10,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog4.png",
        slug: "andaman-on-budget-4"
    },
    {
        id: 11,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog2.png",
        slug: "andaman-on-budget-2"
    },
    {
        id: 12,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog3.png",
        slug: "andaman-on-budget-3"
    },
    {
        id: 13,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog4.png",
        slug: "andaman-on-budget-4"
    },
    {
        id: 14,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog2.png",
        slug: "andaman-on-budget-2"
    },
    {
        id: 15,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog3.png",
        slug: "andaman-on-budget-3"
    },
    {
        id: 16,
        title: "How to do Andaman on a Budget?",
        excerpt: "Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel.",
        imageUrl: "/images/blog/blog4.png",
        slug: "andaman-on-budget-4"
    }
];

const BlogSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(1);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 390) setVisibleSlides(1);
            else if (width < 540) setVisibleSlides(2);
            else if (width < 768) setVisibleSlides(3);
            else setVisibleSlides(3);
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalSlides = blogPosts.length - 1; // Minus the featured post

    const nextSlide = () => {
        if (currentSlide < totalSlides - visibleSlides + 1) {
            setCurrentSlide(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(prev => prev - 1);
        }
    };

    // Format the current slide number with leading zero
    const formattedSlideNumber = (currentSlide + 1).toString().padStart(2, '0');
    const formattedTotalSlides = (totalSlides - visibleSlides + 2).toString().padStart(2, '0');

    const featuredPost = blogPosts[0];
    const carouselPosts = blogPosts.slice(0);

    // Only render mobile version after component is mounted
    const renderMobileVersion = () => {
        if (!isMounted) return null;

        return (
            <div className="md:hidden w-full h-full bg-[#1A1D1F] overflow-hidden">
                <div className="relative w-full h-full">
                    {/* Carousel Container */}
                    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory h-full">
                        {blogPosts.map((post, index) => (
                            <div 
                                key={post.id}
                                className="relative min-w-[calc(100%)] sm:min-w-[calc(50%-8px)] md:min-w-[calc(33.333%-16px)] h-full flex-shrink-0 snap-start first:ml-4 last:mr-4"
                            >
                                <div className="relative h-full rounded-2xl overflow-hidden">
                                    <img 
                                        src={post.imageUrl} 
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
                                    
                                    {/* Content */}
                                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col">
                                        <h2 className="text-white text-[32px] font-bold mb-3">
                                            {post.title}
                                        </h2>
                                        <p className="text-white/80 text-base mb-6">
                                            {post.excerpt}
                                        </p>
                                        <Link href={`/blog/${post.slug}`}>
                                            <span className="inline-flex items-center gap-2 border border-white text-white rounded-full py-3 px-6 hover:bg-white/10 transition-colors">
                                                Read the article
                                                <FiArrowRight />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Pagination */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                        {Array.from({ 
                            length: Math.ceil(blogPosts.length / visibleSlides) 
                        }).map((_, index) => (
                            <div 
                                key={index}
                                className={`w-2 h-2 rounded-full ${
                                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="relative w-full h-screen">
            {/* Desktop Version */}
            <div className="hidden md:block h-full">
                {/* Main Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={"/images/blog/blog-bg.png"}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover hidden md:flex"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 container mx-auto h-full flex flex-col md:flex-row justify-between items-center gap-2">
                    {/* Featured Post Content */}
                    <div className="w-1/3 hidden md:flex flex-col justify-center">
                        <h1 className="text-white text-3xl md:text-4xl font-bold mb-6">How to do Andaman on a Budget?</h1>
                        <p className="text-white/90 text-xl mb-8">Can the Andamans be done on a budget? The short answer is yes. The long answer is it really depends on when and how you choose to travel. In this blog, we're putting together everything you'll need to know before you head to the Andamans for a budget trip</p>

                        <Link href={`/blog/${featuredPost.slug}`}>
                            <span className="inline-flex items-center gap-2 border border-white text-white rounded-full py-3 px-8 hover:bg-white/10 transition-colors">
                                Read the article
                                <FiArrowRight />
                            </span>
                        </Link>
                    </div>

                    {/* Carousel Posts */}
                    <div className=" w-full md:w-2/3">
                        <div className="relative">
                            {/* Carousel */}
                            <div className="flex gap-4 overflow-hidden">
                                {carouselPosts.map((post, index) => (
                                    <div
                                        key={post.id}
                                        className="transition-transform duration-500 w-[250px] flex-shrink-0"
                                        style={{
                                            transform: `translateX(-${currentSlide * 260}px)` // 280px width + 8px gap
                                        }}
                                    >
                                        <div className="relative h-[300px] rounded-xl overflow-hidden">
                                            <img
                                                src={post.imageUrl}
                                                alt={post.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
                                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                                <h3 className="text-white text-lg font-medium">{post.title}</h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="flex items-center justify-start mt-6 gap-8">
                                <span className="text-white/80 text-sm">{formattedSlideNumber}/{formattedTotalSlides}</span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={prevSlide}
                                        disabled={currentSlide === 0}
                                        className={`w-10 h-10 rounded-full border border-white/60 flex items-center justify-center ${currentSlide === 0 ? 'text-white/40 border-white/40 cursor-not-allowed' : 'text-white hover:bg-white/10'
                                            }`}
                                        aria-label="Previous slide"
                                    >
                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 9L1 5L5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        disabled={currentSlide >= totalSlides - visibleSlides + 1}
                                        className={`w-10 h-10 rounded-full border border-white/60 flex items-center justify-center ${currentSlide >= totalSlides - visibleSlides + 1 ? 'text-white/40 border-white/40 cursor-not-allowed' : 'text-white hover:bg-white/10'
                                            }`}
                                        aria-label="Next slide"
                                    >
                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            {renderMobileVersion()}
        </section>
    );
};

export default BlogSection;

