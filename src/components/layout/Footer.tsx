'use client'

import Image from 'next/image';
import Link from 'next/link';
import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1F22] text-white">
      <div className="container mx-auto px-4">
        {/* Mobile View (390px) */}
        <div className="md:hidden py-8">
          <div className="space-y-6">
            <Image 
              src="/images/logo.png" 
              alt="Travel Adaman Planner" 
              width={120} 
              height={48}
              className="mb-6"
            />
            <p className="text-[#BABABA] text-sm leading-relaxed">
              Our company is a real leader in the field of tours to the Adam Islands. 
              With us, you will get a unique travel experience in which every 
              moment is filled with adventure and impressions. Trust us with your 
              trip and we will ensure the highest standard of service and an 
              unforgettable trip to this unique archipelago
            </p>

            <div className="flex flex-row justify-between gap-4 mt-8">
              <div className="bg-[#222629] w-[48%] rounded-xl p-4 flex flex-col items-start gap-8">
                <div className="w-10 h-10 rounded-full bg-[#292E32] bg-opacity-20 flex items-center justify-center">
                  <FiPhone className="text-[#00ACB1]" size={20} />
                </div>
                <span className="text-[15px] text-[#BABABA]">+00 000 00 00</span>
              </div>
              
              <div className="bg-[#222629] w-[48%] rounded-xl p-4 flex flex-col items-start gap-8">
                <div className="w-10 h-10 rounded-full bg-[#292E32] bg-opacity-20 flex items-center justify-center">
                  <FiMail className="text-[#00ACB1]" size={20} />
                </div>
                <span className="text-[15px] text-[#BABABA]">gmail@gmail.com</span>
              </div>
            </div>

            <div className="flex items-center justify-between rounded-[10px] bg-[#222629] mt-8 py-4 px-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#292E32] flex items-center justify-center mb-2">
                  <FaTelegramPlane size={24} className="text-[#00ACB1]" />
                </div>
               
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#292E32] flex items-center justify-center mb-2">
                  <BsWhatsapp size={24} className="text-[#00ACB1]" />
                </div>
               
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#292E32] flex items-center justify-center mb-2">
                  <BsFacebook size={24} className="text-[#00ACB1]" />
                </div>
               
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#292E32] flex items-center justify-center mb-2">
                  <BsInstagram size={24} className="text-[#00ACB1]" />
                </div>
               
              </div>
            </div>
          </div>

          {/* Mobile Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-[#BABABA] text-sm">Adaman Travek Planer</p>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 py-16">
          {/* Rest of the desktop code remains unchanged */}
          <div className="md:col-span-5 space-y-6">
            <Image 
              src="/images/logo.png" 
              alt="Travel Adaman Planner" 
              width={150} 
              height={60}
              className="mb-4"
            />
            <p className="text-[#BABABA] text-sm leading-relaxed max-w-lg">
              Our company is a real leader in the field of tours to the Adam Islands.
              With us, you will get a unique travel experience in which every
              moment is filled with adventure and impressions. Trust us with your
              trip and we will ensure the highest standard of service and an
              unforgettable trip to this unique archipelago
            </p>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h3 className="text-[#00ACB1] text-xl font-medium mb-6">Contacts</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FiPhone className="text-[#00ACB1]" size={20} />
                <span className='text-[#BABABA]'>+00 000 00 00</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-[#00ACB1]" size={20} />
                <span className='text-[#BABABA]'>gmail@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 mt-6">
                <FaTelegramPlane size={24} className="text-[#00ACB1] hover:text-white cursor-pointer" />
                <BsWhatsapp size={24} className="text-[#00ACB1] hover:text-white cursor-pointer" />
                <BsFacebook size={24} className="text-[#00ACB1] hover:text-white cursor-pointer" />
                <BsInstagram size={24} className="text-[#00ACB1] hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="md:col-span-2 space-y-4">
            <Link href="/create-tour" className="block text-[#BABABA] hover:text-[#00ACB1]">Create a tour</Link>
            <Link href="/select-tour" className="block text-[#BABABA] hover:text-[#00ACB1]">Select tour</Link>
            <Link href="/services" className="block text-[#BABABA] hover:text-[#00ACB1]">Services</Link>
            <Link href="/about-islands" className="block text-[#BABABA] hover:text-[#00ACB1]">About the Islands</Link>
            <Link href="/blog" className="block text-[#BABABA] hover:text-[#00ACB1]">Blog</Link>
            <Link href="/gallery" className="block text-[#BABABA] hover:text-[#00ACB1]">Gallery</Link>
            <Link href="/about-us" className="block text-[#BABABA] hover:text-[#00ACB1]">About us</Link>
            <Link href="/contacts" className="block text-[#BABABA] hover:text-[#00ACB1]">Contacts</Link>
          </div>

          <div className="md:col-span-2 space-y-4">
            <Link href="/terms" className="block text-[#BABABA] hover:text-[#00ACB1]">Terms and conditions</Link>
            <Link href="/privacy" className="block text-[#BABABA] hover:text-[#00ACB1]">Privacy policy</Link>
            <Link href="/emergency" className="block text-[#BABABA] hover:text-[#00ACB1]">Emergency contacts</Link>
            <Link href="/cancellation" className="block text-[#BABABA] hover:text-[#00ACB1]">Cancellation policy</Link>
          </div>

          {/* Desktop Copyright */}
          <div className="md:col-span-12 mt-12 pt-8 border-t border-[#BABABA]">
            <p className="text-[#BABABA] text-sm">Adaman Travel Planer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 