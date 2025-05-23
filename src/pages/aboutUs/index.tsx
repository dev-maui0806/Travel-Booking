
import React from "react"
import Link from "next/link";

import { Suspense } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ReviewsSection from "@/components/home/ReviewsSection"
import CreateJourneySection from "@/components/home/CreateJourneySection"
import HeroSection from "@/components/home/HeroSection"
import TeamSection from "@/components/aboutUs/TeamSection";
import "../../app/globals.css";
import VideoSection from "@/components/aboutUs/VideoSection";

const AboutUsIndex:React.FC = () => {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Header/>
            <HeroSection/>
            <VideoSection/>
            <TeamSection/>
            <ReviewsSection/>
            <CreateJourneySection/>
            <Footer/>
        </Suspense>
    )
}

export default AboutUsIndex;