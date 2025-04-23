'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlogCard from "@/components/blog/BlogCard";

// Mock Data for Blog Posts
const blogPostsData = [
  {
    id: 1,
    title: "How to do Andaman on a Budget?",
    slug: "how-to-do-andaman-on-a-budget-1",
    image: "/images/blog/post1.png",
    date: "17/06/2024",
  },
  {
    id: 2,
    title: "How to do Andaman on a Budget?",
    slug: "exploring-underwater-world",
    image: "/images/blog/post2.png",
    date: "15/06/2024",
  },
  {
    id: 3,
    title: "How to do Andaman on a Budget?",
    slug: "hidden-beaches-neil-island",
    image: "/images/blog/post3.png",
    date: "12/06/2024",
  },
  {
    id: 4,
    title: "How to do Andaman on a Budget?",
    slug: "havelock-island-cafes",
    image: "/images/blog/post4.png",
    date: "10/06/2024",
  },
  {
    id: 5,
    title: "How to do Andaman on a Budget?",
    slug: "trekking-mount-harriet",
    image: "/images/blog/post5.png",
    date: "08/06/2024",
  },
  {
    id: 6,
    title: "How to do Andaman on a Budget?",
    slug: "sunrise-kalapathar-beach",
    image: "/images/blog/post6.png",
    date: "05/06/2024",
  },
  {
    id: 7,
    title: "How to do Andaman on a Budget?",
    slug: "how-to-do-andaman-on-a-budget-1",
    image: "/images/blog/post1.png",
    date: "17/06/2024",
  },
  {
    id: 8,
    title: "How to do Andaman on a Budget?",
    slug: "exploring-underwater-world",
    image: "/images/blog/post2.png",
    date: "15/06/2024",
  },
  {
    id: 9,
    title: "How to do Andaman on a Budget?",
    slug: "hidden-beaches-neil-island",
    image: "/images/blog/post3.png",
    date: "12/06/2024",
  },

  {
    id: 10,
    title: "How to do Andaman on a Budget?",
    slug: "sunrise-kalapathar-beach",
    image: "/images/blog/post6.png",
    date: "05/06/2024",
  },
  {
    id: 11,
    title: "How to do Andaman on a Budget?",
    slug: "trekking-mount-harriet",
    image: "/images/blog/post5.png",
    date: "08/06/2024",
  },
  {
    id: 12,
    title: "How to do Andaman on a Budget?",
    slug: "havelock-island-cafes",
    image: "/images/blog/post4.png",
    date: "10/06/2024",
  },
];

const TravelBlogSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSet, setCurrentSet] = useState(0);
  const postsPerPage = 5;
  const totalSets = Math.ceil(blogPostsData.length / postsPerPage);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const handleNextSet = () => {
    setCurrentSet((prev) => (prev + 1) % totalSets);
  };

  const handlePrevSet = () => {
    setCurrentSet((prev) => (prev === 0 ? totalSets - 1 : prev - 1));
  };

  // Get current 5 posts for desktop layout
  const getCurrentPosts = () => {
    const startIndex = currentSet * postsPerPage;
    return blogPostsData.slice(startIndex, startIndex + postsPerPage);
  };

  const currentPosts = getCurrentPosts();

  return (
    <section className="bg-[#15191D] text-white py-12 md:py-16 relative">
      <div className="container relative mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-light mb-8">Island story and travel tips</h2>
        {/* Mobile View - Single Card with Pagination */}
        <div className="md:hidden">
          <div className="relative mb-6">
            <div className="rounded-xl overflow-hidden">
              <div className="relative h-[320px]">
                <Image
                  src={blogPostsData[currentSlide].image}
                  alt={blogPostsData[currentSlide].title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-semibold">{blogPostsData[currentSlide].title}</h3>
              </div>

              <Link href={`/blog/${blogPostsData[currentSlide].slug}`} className="absolute bottom-5 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex justify-center gap-1.5 mb-6">
            {blogPostsData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`h-1.5 rounded-full transition-all duration-300 
                  ${index === currentSlide ? 'w-8 bg-[#0CCDDA]' : 'w-1.5 bg-gray-600'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Explore Button */}
          <div className="flex justify-center">
            <Link href="/blog" className="w-full max-w-xs py-4 rounded-full text-center font-medium text-white bg-gradient-to-r from-[#D8F153] to-[#0CCDDA]">
              Explore More
            </Link>
          </div>
        </div>

        {/* Desktop Layout with 4 columns */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-5 h-[600px]">
            {/* First column - 2 cards stacked vertically */}
            <div className="flex flex-col gap-5 h-full">
              <div className="h-1/2">
                <BlogCard post={currentPosts[0]} height="h-full" />
              </div>
              <div className="h-1/2">
                <BlogCard post={currentPosts[1]} height="h-full" />
              </div>
            </div>

            {/* Second column - 1 card at the top */}
            <div className="flex flex-col h-full">
              <div className="h-1/2 mb-auto">
                <BlogCard post={currentPosts[2]} height="h-full" />
              </div>
              <div className="h-1/2"></div> {/* Empty space */}
            </div>

            {/* Third column - 1 card at the bottom */}
            <div className="flex flex-col h-full">
              <div className="h-1/2"></div> {/* Empty space */}
              <div className="h-1/2 mt-auto">
                <BlogCard post={currentPosts[3]} height="h-full" />
              </div>
            </div>

            {/* Fourth column - 1 card at top and button at bottom */}
            <div className="flex flex-col h-full justify-between">
              <div className="h-1/2 mb-5">
                <BlogCard post={currentPosts[4]} height="h-full" />
              </div>
              <div className="flex justify-end items-end">
                <div className="mt-8 flex justify-center">
                  <button className=" flex items-center px-4 text-base py-3 rounded-full bg-gradient-to-r from-[#bef264] to-[#06b6d4] text-white font-medium transition-all w-[120px] h-[44px] duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]">
                    Explore More
                    <div className="ml-2 w-6 h-6 rounded-full bg-white flex items-center justify-center -rotate-45">
                      <svg className="w-6 h-6 text-[#06b6d4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop carousel navigation */}
          <div className="flex justify-center mt-8 gap-1.5">
            {Array.from({ length: totalSets }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSet(index)}
                className={`h-1.5 rounded-full transition-all duration-300 
                  ${index === currentSet ? 'w-8 bg-[#0CCDDA]' : 'w-1.5 bg-gray-600'}`}
                aria-label={`Go to set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelBlogSection; 