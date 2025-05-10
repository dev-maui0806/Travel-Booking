import React, { useState } from "react";
import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import HeroSectionCreateTour from "@/components/create_tour/heroSectionCreateTour";
import CreateTourAll from "@/components/create_tour/CreateTourAll";
import PopularToursSection from "@/components/home/PopularToursSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import CreateJourneySection from "@/components/home/CreateJourneySection";
import "../../../app/globals.css";
import EssentialsBookingForm from "@/components/create_tour/All/EssentialsBookingForm";

const CreateTourIndex: React.FC = () => {
  const [selectedIsland, setSelectedIsland] = useState<string>("Port Blair");

  const handleSearch = () => {
    console.log("Searching for options in", selectedIsland);
  };

  const handleIslandSelect = (islandName: string) => {
    setSelectedIsland(islandName);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header/>
      <HeroSection  
        title="Create a Tour" 
        subtitle="Choose from our curated selection of Andaman Islands tours designed for unforgettable experiences"
      />
      <HeroSectionCreateTour onIslandSelect={handleIslandSelect}/>
      <CreateTourAll />
      <EssentialsBookingForm 
        selectedIsland={selectedIsland}
        onSearch={handleSearch}
      />
      <PopularToursSection/>
      <ReviewsSection/>
      <CreateJourneySection/>
      <Footer/>
    </Suspense>
  );
};

export default CreateTourIndex;