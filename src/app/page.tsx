import HeroSection from "@/components/home/HeroSection";
import CreateDreamTripSection from "@/components/home/CreateDreamTripSection";
import UnforgettablePlacesSection from "@/components/home/UnforgettablePlacesSection";
import PopularToursSection from "@/components/home/PopularToursSection";
import ServicesSection from "@/components/home/ServicesSection";
import TravelBlogSection from "@/components/home/TravelBlogSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import CreateJourneySection from "@/components/home/CreateJourneySection";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
      <CreateDreamTripSection />
      <UnforgettablePlacesSection />
      <PopularToursSection />
      <ServicesSection />
      <TravelBlogSection />
      <ReviewsSection />
      <CreateJourneySection />
    </Suspense>
  );
}
