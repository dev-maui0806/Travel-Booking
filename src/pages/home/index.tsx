import React from "react";
import Link from "next/link";
import { Suspense } from "react";
import HeroSection from "@/components/home/HeroSection";
import CreateDreamTripSection from "@/components/home/CreateDreamTripSection";
import UnforgettablePlacesSection from "@/components/home/UnforgettablePlacesSection";
import PopularToursSection from "@/components/home/PopularToursSection";
import ServicesSection from "@/components/home/ServicesSection";
import TravelBlogSection from "@/components/home/TravelBlogSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import CreateJourneySection from "@/components/home/CreateJourneySection";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";



const HomeIndex: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <HeroSection />
      <CreateDreamTripSection />
      <UnforgettablePlacesSection />
      <PopularToursSection />
      <ServicesSection />
      <TravelBlogSection />
      <ReviewsSection />
      <CreateJourneySection />
      <Footer />
    </Suspense>
  );
};

export default HomeIndex;