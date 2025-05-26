
import React from "react"
import Link from "next/link";

import { Suspense } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ReviewsSection from "@/components/home/ReviewsSection"
// import CreateJourneySection from "@/components/home/CreateJourneySection"
import HeroSection from "@/components/home/HeroSection"
import "../../app/globals.css";
import CreateYouroOwnJouney from "@/components/contactUs/CreateYouroOwnJouney";


const ContactsIndex:React.FC = () => {
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <Header/>
            <HeroSection title="Contact Us" subtitle="Create your own unique Andaman Islands tour and discover the charm of this paradise on Earth!"/>
            <CreateYouroOwnJouney/>
            <Footer/>
        </Suspense>
    )
}

export default ContactsIndex;