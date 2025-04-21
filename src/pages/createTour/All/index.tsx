import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HeroSectionCreateTour from "@/components/create_tour/heroSectionCreateTour";
import CreateTourAll from "@/components/create_tour/CreateTourAll";
import PopularToursSection from "@/components/home/PopularToursSection";
import TravelBlogSection from "@/components/home/TravelBlogSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import CreateJourneySection from "@/components/home/CreateJourneySection";
import { Suspense } from "react";
import "../../../app/globals.css";
import CreateTourAllMaps from "@/components/create_tour/CreateTourAllMaps";
import HotelSearchForm from "@/components/create_tour/All/HotelSearchForm";



const CreateTourIndex: React.FC = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Header/>
        <HeroSection/>
        <HeroSectionCreateTour/>
        {/* <CreateTourAllMaps/> */}
        {/* <HotelSearchForm/> */}
        <PopularToursSection/>
        {/* <TravelBlogSection/> */}
        <ReviewsSection/>
        <CreateJourneySection/>
        <Footer/>
        </Suspense>
  );
};

export default CreateTourIndex;