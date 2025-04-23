
import React from "react"
import Link from "next/link";
import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PopularToursSection from "@/components/home/PopularToursSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import CreateJourneySection from "@/components/home/CreateJourneySection";
import "../../app/globals.css";
const SelectTourIndex: React.FC = () => {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Header/>
            <HeroSection/>
            <PopularToursSection/>
            <ReviewsSection/>
            <CreateJourneySection/>
            <Footer/>
        </Suspense>
    )
}

export default SelectTourIndex;