
import React, { Suspense } from "react"
import Link from "next/link";

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/home/HeroSection"
import ReviewsSection from "@/components/home/ReviewsSection"
import CreateJourneySection from "@/components/home/CreateJourneySection"
import UnforgettablePlacesSection from "@/components/home/UnforgettablePlacesSection";
import ServicesSection from "@/components/home/ServicesSection";
import "../../app/globals.css";
import GeneralInfo from "@/components/abouttheIslands/GeneralInfo";



const AboutTheIslandsIndex: React.FC = () =>{
    return(
        <Suspense fallback={<div>...Loading</div>}>
            <Header/>
            <HeroSection/>
            <GeneralInfo/>
            <UnforgettablePlacesSection/>
            <ServicesSection/>
            <ReviewsSection/>
            <CreateJourneySection/>
            <Footer/>
        </Suspense>
    )
}
export default AboutTheIslandsIndex;