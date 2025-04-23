
import React, { Suspense } from "react"
import Link from "next/link";

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/home/HeroSection"
import ReviewsSection from "@/components/home/ReviewsSection"
import CreateJourneySection from "@/components/home/CreateJourneySection"
import "../../app/globals.css";




const AboutTheIslandsIndex: React.FC = () =>{
    return(
        <Suspense fallback={<div>...Loading</div>}>
            <Header/>
            <HeroSection/>
            <ReviewsSection/>
            <CreateJourneySection/>
            <Footer/>
        </Suspense>
    )
}
export default AboutTheIslandsIndex;