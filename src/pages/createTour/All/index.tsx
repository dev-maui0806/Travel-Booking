import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HeroSectionCreateTour from "@/components/create_tour/heroSectionCreateTour";
import CreateTourAll from "@/components/create_tour/CreateTourAll";
import PopularToursSection from "@/components/home/PopularToursSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import CreateJourneySection from "@/components/home/CreateJourneySection";
import { Suspense } from "react";
import "../../../app/globals.css";
import EssentialsBookingForm from "@/components/create_tour/All/EssentialsBookingForm";
const CreateTourIndex: React.FC = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Header/>
        <HeroSection  title="Create a Tour" subtitle="Choose from our curated selection of Andaman Islands tours designed for unforgettable experiences"/>
        <HeroSectionCreateTour/>
        <CreateTourAll />
        {/* <CreateTourAllMaps/> */}
        <EssentialsBookingForm onSearch={() => {}} selectedIsland="Port Blair" />
        <PopularToursSection/>
        {/* <TravelBlogSection/> */}
        <ReviewsSection/>
        <CreateJourneySection/>
        <Footer/>
        </Suspense>
  );
};

export default CreateTourIndex;