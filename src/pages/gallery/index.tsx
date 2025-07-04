
import React from "react"
import { Suspense } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ReviewsSection from "@/components/home/ReviewsSection"
import CreateJourneySection from "@/components/home/CreateJourneySection"
import HeroSection from "@/components/home/HeroSection"
import "../../app/globals.css";
import GalleryMain from "@/components/gallery/galleryMain";


const GalleryIndex:React.FC = () => {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Header/>
            <HeroSection/>
            <GalleryMain/>
            <ReviewsSection/>
            <CreateJourneySection/>
            <Footer/>
        </Suspense>
    )
}

export default GalleryIndex;