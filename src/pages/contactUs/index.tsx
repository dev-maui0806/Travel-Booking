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
import { FaPhone, FaEnvelope, FaWhatsapp, FaTelegram, FaInstagram, FaFacebookF } from "react-icons/fa";


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

const CreateYourOwnJourney: React.FC = () => {
  return (
    <div className="w-full bg-[#222629] rounded-2xl overflow-hidden flex flex-col md:py-[100px] md:container md:mx-auto">
      {/* --- MOBILE LAYOUT --- */}
      <div className="md:hidden flex flex-col gap-4 p-0">
        {/* Map */}
        <div className="w-full aspect-[1.7/1] bg-[#d9f5e5] rounded-none flex items-center justify-center relative overflow-hidden">
          <img
            src="/images/contactUs/desktopImage.png"
            alt="Map"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <img
            src="/images/contactUs/palms.png"
            alt="Palms"
            className="absolute left-1/2 top-1/2 w-12 h-12 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        {/* Top contacts: phone, email */}
        <div className="grid grid-cols-2 gap-2 px-2 mt-2">
          <div className="bg-[#1C1F22] rounded-xl flex flex-col items-center justify-center py-4">
            <FaPhone className="text-cyan-400 text-xl mb-1" />
            <span className="text-white text-xs mt-1">+00 000 00 00</span>
          </div>
          <div className="bg-[#1C1F22] rounded-xl flex flex-col items-center justify-center py-4">
            <FaEnvelope className="text-cyan-400 text-xl mb-1" />
            <span className="text-white text-xs mt-1">gmail@gmail.com</span>
          </div>
        </div>
        {/* Bottom contacts: telegram, whatsapp, facebook, instagram */}
        <div className="grid grid-cols-4 gap-2 px-2">
          <div className="bg-[#1C1F22] rounded-xl flex flex-col items-center justify-center py-3">
            <FaTelegram className="text-cyan-400 text-xl mb-1" />
            <span className="text-white text-xs mt-1">Telegram</span>
          </div>
          <div className="bg-[#1C1F22] rounded-xl flex flex-col items-center justify-center py-3">
            <FaWhatsapp className="text-cyan-400 text-xl mb-1" />
            <span className="text-white text-xs mt-1">Whatsapp</span>
          </div>
          <div className="bg-[#1C1F22] rounded-xl flex flex-col items-center justify-center py-3">
            <FaFacebookF className="text-cyan-400 text-xl mb-1" />
            <span className="text-white text-xs mt-1">Facebook</span>
          </div>
          <div className="bg-[#1C1F22] rounded-xl flex flex-col items-center justify-center py-3">
            <FaInstagram className="text-cyan-400 text-xl mb-1" />
            <span className="text-white text-xs mt-1">Instagram</span>
          </div>
        </div>
        {/* Form */}
        <div className="bg-[#222629] rounded-2xl px-2 pt-4 pb-6">
          <h2 className="text-white text-xl font-bold mb-2">Create your own journey</h2>
          <p className="text-gray-300 mb-4 text-sm">
            Have questions or doubts? Simply fill out our contact form and we will contact you as soon as possible. Or maybe you just want to leave a review, we will be very grateful to you
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent border border-gray-500 rounded-md px-3 py-2 text-white focus:outline-none focus:border-cyan-400 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border border-gray-500 rounded-md px-3 py-2 text-white focus:outline-none focus:border-cyan-400 transition"
            />
            <textarea
              placeholder="Message"
              rows={3}
              className="bg-transparent border border-gray-500 rounded-md px-3 py-2 text-white focus:outline-none focus:border-cyan-400 transition"
            />
            <button
              type="submit"
              className="mt-4 bg-white text-black font-semibold w-full py-3 rounded-full transition hover:bg-cyan-400 hover:text-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* --- DESKTOP LAYOUT --- */}
      <div className="hidden md:flex flex-col gap-8 py-[100px]">
        <div className="w-full flex flex-row gap-8">
          {/* Map */}
          <div className="w-2/3 flex flex-col justify-center">
            <div className="relative w-full h-[400px] bg-[#d9f5e5] rounded-2xl overflow-hidden">
              <img
                src="/images/contactUs/desktopImage.png"
                alt="Map"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
                src="/images/contactUs/palms.png"
                alt="Palms"
                className="absolute left-1/2 top-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          {/* Form */}
          <div className="w-1/3 flex flex-col justify-center bg-[#222629] p-10">
            <h2 className="text-white text-3xl font-bold mb-2">Create your own journey</h2>
            <p className="text-gray-300 mb-6">
              Have questions or doubts? Simply fill out our contact form and we will contact you as soon as possible. Or maybe you just want to leave a review, we will be very grateful to you
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent border border-gray-500 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border border-gray-500 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="bg-transparent border border-gray-500 rounded-md px-4 py-2 text-white focus:outline-none focus:border-cyan-400 transition"
              />
              <button
                type="submit"
                className="self-start mt-2 bg-white text-black font-semibold px-6 py-2 rounded-full flex items-center gap-2 transition hover:bg-cyan-400 hover:text-white"
              >
                Send
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        {/* Bottom contacts */}
        <div className="w-full grid grid-cols-4 gap-4 mt-8">
          <div className="bg-[#1C1F22] rounded-xl flex flex-col items-start justify-between p-6 min-h-[176px]">
            <FaPhone className="text-cyan-400 text-2xl mb-2" />
            <span className="text-white text-sm">+00 000 00 00</span>
          </div>
          <div className="bg-[#1C1F22] rounded-xl flex flex-col items-start justify-between p-6 min-h-[176px]">
            <FaWhatsapp className="text-cyan-400 text-2xl mb-2" />
            <span className="text-white text-sm">Whatsapp</span>
          </div>
          <div className="bg-[#1C1F22] rounded-xl flex flex-col items-start justify-between p-6 min-h-[176px]">
            <FaTelegram className="text-cyan-400 text-2xl mb-2" />
            <span className="text-white text-sm">Telegram</span>
          </div>
          <div className="bg-[#1C1F22] rounded-xl flex flex-col items-start justify-between p-6 min-h-[176px]">
            <FaInstagram className="text-cyan-400 text-2xl mb-2" />
            <span className="text-white text-sm">Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsIndex;