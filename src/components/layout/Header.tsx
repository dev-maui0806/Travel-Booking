'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FiPhone, FiMail, FiUser, FiShoppingCart } from "react-icons/fi";
import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';

import { RiCloseLine } from "react-icons/ri";

const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isOpentabletMenu, setIsOpenTableMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1280);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 50); // Change background after scrolling 50px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpenTableMenu(!isOpentabletMenu);
  };

  // Mobile view (390px)
  if (isMobile) {
    return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-[#001D20]' : 'bg-transparent'}`}>
        <nav className="px-4 py-4 flex justify-between items-center">
          <Link href="/home" className="relative">
            <div className="flex items-center">
              <Image src="/images/logo.png" alt="Travel Andaman Planner" width={60} height={32} priority />
            </div>
          </Link>

          <div className="flex items-center space-x-3">

            <Link href="/tel:+000000000" className="text-white">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.73 8.03C9.6 8.26 9.42 8.5 9.19 8.74L8.33 9.63C8.22 9.74 8.17 9.87 8.17 10.02C8.17 10.09 8.18 10.16 8.2 10.23C8.23 10.3 8.25 10.35 8.27 10.4C8.44 10.74 8.76 11.15 9.22 11.63C9.69 12.11 10.2 12.61 10.74 13.14C11.28 13.67 11.78 14.18 12.27 14.66C12.75 15.13 13.14 15.46 13.49 15.62C13.53 15.64 13.59 15.66 13.65 15.69C13.72 15.71 13.79 15.73 13.87 15.73C14.03 15.73 14.16 15.67 14.27 15.56L15.13 14.71C15.38 14.47 15.62 14.29 15.85 14.16C16.08 14.03 16.31 13.97 16.56 13.97C16.75 13.97 16.95 14.01 17.17 14.1C17.39 14.19 17.62 14.32 17.87 14.49L21.18 16.84C21.44 17.02 21.62 17.24 21.73 17.5C21.83 17.76 21.89 18.01 21.89 18.28L21.97 18.33Z" stroke="#00ACB1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>

            <Link href="/account" className="text-white">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#00ACB1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#00ACB1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>

            <Link href="/cart" className="text-white">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#00ACB1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z" stroke="#00ACB1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.4945 12H15.5035" stroke="#00ACB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.49451 12H8.50349" stroke="#00ACB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>

            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 12H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 17H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#1C1F22] z-100 pt-20 p-6">
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white focus:outline-none"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="flex flex-col space-y-4 text-white">
              <Link href="/home" className="text-lg py-2 w-full bg-[#222629] rounded-[5px] pl-2" onClick={toggleMenu}>Home</Link>
              <Link href="/createTour" className="text-lg py-2 w-full bg-[#222629] rounded-[5px] pl-2" onClick={toggleMenu}>Create a tour</Link>
              <Link href="/selectTour" className="text-lg py-2 w-full bg-[#222629] rounded-[5px] pl-2" onClick={toggleMenu}>Select tour</Link>
              <Link href="/services" className="text-lg py-2 w-full bg-[#222629] rounded-[5px] pl-2" onClick={toggleMenu}>Services</Link>
              <Link href="/abouttheIslands" className="text-lg py-2 w-full bg-[#222629] rounded-[5px] pl-2" onClick={toggleMenu}>About the Islands</Link>
              <Link href="/blogs" className="text-lg py-2 w-full bg-[#222629] rounded-[5px] pl-2" onClick={toggleMenu}>Blog</Link>
              <Link href="/gallery" className="text-lg py-2 w-full bg-[#222629] rounded-[5px] pl-2" onClick={toggleMenu}>Gallery</Link>
              <Link href="/aboutUs" className="text-lg py-2 w-full bg-[#222629] rounded-[5px] pl-2" onClick={toggleMenu}>About us</Link>
              <Link href="/contacts" className="text-lg py-2 w-full bg-[#222629] rounded-[5px] pl-2" onClick={toggleMenu}>Contacts</Link>
              {/* <div className="mt-4">
                <Link href="/searchFlights" className="text-lg py-2 flex items-center">
                  <span className='text-white'>Search for flights</span>
                  <div className="w-7 h-7 flex items-center justify-center mr-2 rotate-45">
                    <Image src="/images/icon/flight.png" alt="Flight" width={40} height={40} priority />
                  </div>
                </Link>
              </div> */}
              <div className='flex items-center justify-between'>
                <div className="flex flex-row justify-between w-full gap-4">
                  <div className="bg-[#222629] w-[48%] rounded-xl px-1 py-4 flex flex-col items-start gap-8">
                    <div className="w-10 h-10 rounded-full bg-[#292E32] bg-opacity-20 flex items-center justify-center">
                      <FiPhone className="text-[#00ACB1]" size={20} />
                    </div>
                    <span className="text-[15px] text-[#BABABA] w-full">+00 000 00 00</span>
                  </div>

                  <div className="bg-[#222629] w-[48%] rounded-xl px-1 py-4 flex flex-col items-start gap-8">
                    <div className="w-10 h-10 rounded-full bg-[#292E32] bg-opacity-20 flex items-center justify-center">
                      <FiMail className="text-[#00ACB1]" size={20} />
                    </div>
                    <span className="text-[15px] text-[#BABABA] w-full">gmail@gmail.com</span>
                  </div>
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
          </div>
        )}
      </header>
    );
  }

  // Tablet view (1024px)
  if (isTablet) {
    return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-[#001D20]' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/home" className="flex items-center">
            <Image src="/images/logo.png" alt="Travel Andaman Planner" width={60} height={32} priority />
          </Link>

          {!isOpentabletMenu && (<div className="flex items-center space-x-6">
            <div className="flex items-center text-white">
              <div className="mr-1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="#FFFF00" />
                  <path d="M12 1V3M12 21V23M1 12H3M21 12H23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-medium text-xl">23°</span>
            </div>

            <Link href="/searchFlights" className="text-white flex gap-3 items-center">
              <span className='text-white'>Search for flights</span>
              <div className="w-7 h-7 flex items-center justify-center mr-2 rotate-45">
                <Image src="/images/icon/flight.png" alt="Flight" width={40} height={40} priority />
              </div>
            </Link>

            <Link href="/tel:+000000000" className="text-white flex items-center">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center mr-2">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.73 8.03C9.6 8.26 9.42 8.5 9.19 8.74L8.33 9.63C8.22 9.74 8.17 9.87 8.17 10.02C8.17 10.09 8.18 10.16 8.2 10.23C8.23 10.3 8.25 10.35 8.27 10.4C8.44 10.74 8.76 11.15 9.22 11.63C9.69 12.11 10.2 12.61 10.74 13.14C11.28 13.67 11.78 14.18 12.27 14.66C12.75 15.13 13.14 15.46 13.49 15.62C13.53 15.64 13.59 15.66 13.65 15.69C13.72 15.71 13.79 15.73 13.87 15.73C14.03 15.73 14.16 15.67 14.27 15.56L15.13 14.71C15.38 14.47 15.62 14.29 15.85 14.16C16.08 14.03 16.31 13.97 16.56 13.97C16.75 13.97 16.95 14.01 17.17 14.1C17.39 14.19 17.62 14.32 17.87 14.49L21.18 16.84C21.44 17.02 21.62 17.24 21.73 17.5C21.83 17.76 21.89 18.01 21.89 18.28L21.97 18.33Z" stroke="#00ACB1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              +00 000 00 00
            </Link>

            <Link href="/account" className="text-white">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#00ACB1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#00ACB1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>

            <Link href="/cart" className="text-white">
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#00ACB1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z" stroke="#00ACB1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.4945 12H15.5035" stroke="#00ACB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.49451 12H8.50349" stroke="#00ACB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>

            <button onClick={toggleMenu} className="text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 12H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M3 17H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>)}
        </nav>

        {/* Tablet menu */}
        {isMenuOpen && isOpentabletMenu && (
          <div className="fixed flex flex-row justify-end inset-0 bg-transparent z-10 p-2 gap-[20px] md:pr-[50px] pr-[70px] pt-[20px]">

            <div className="flex flex-row justify-center gap-2 text-white pt-[5px]">
              <Link href="/home" className="text-sm" onClick={toggleMenu}>Home</Link>
              <Link href="/createTour" className="text-sm" onClick={toggleMenu}>Create a tour</Link>
              <Link href="/selectTour" className="text-sm" onClick={toggleMenu}>Select tour</Link>
              <Link href="/services" className="text-sm" onClick={toggleMenu}>Services</Link>
              <Link href="/abouttheIslands" className="text-sm " onClick={toggleMenu}>About the Islands</Link>
              <Link href="/blogs" className="text-sm " onClick={toggleMenu}>Blog</Link>
              <Link href="/gallery" className="text-sm " onClick={toggleMenu} >Gallery</Link>
              <Link href="/aboutUs" className="text-sm " onClick={toggleMenu}>About us</Link>
              <Link href="/contacts" className="text-sm " onClick={toggleMenu}>Contacts</Link>
            </div>
            <button
              onClick={toggleMenu}
              className="rounded-full border text-white focus:outline-none w-[30px] h-[30px] flex justify-center items-center text-center"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
      </header>
    );
  }

  // Desktop view (1440px)
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-[#001D20]' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/home" className="flex items-center">
          <Image src="/images/logo.png" alt="Travel Andaman Planner" width={103} height={64} priority />
        </Link>
        <div className="flex items-center space-x-8">
          <Link href="/createTour" className="text-white text-base hover:text-primary">Create a tour</Link>
          <Link href="/selectTour" className="text-white text-base hover:text-primary">Select tour</Link>
          <Link href="/services" className="text-white text-base hover:text-primary">Services</Link>
          <Link href="/abouttheIslands" className="text-white text-base hover:text-primary">About the Islands</Link>
          <Link href="/blogs" className="text-white text-base hover:text-primary">Blog</Link>
          <Link href="/gallery" className="text-white text-base hover:text-primary">Gallery</Link>
          <Link href="/aboutUs" className="text-white text-base hover:text-primary">About us</Link>
          <Link href="/contacts" className="text-white text-base hover:text-primary">Contacts</Link>
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center text-white">
            <div className="mr-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="#FFFF00" />
                <path d="M12 1V3M12 21V23M1 12H3M21 12H23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-medium text-xl">23°</span>
          </div>

          <Link href="/tel:+000000000" className="text-white flex items-center">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center mr-2">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.73 8.03C9.6 8.26 9.42 8.5 9.19 8.74L8.33 9.63C8.22 9.74 8.17 9.87 8.17 10.02C8.17 10.09 8.18 10.16 8.2 10.23C8.23 10.3 8.25 10.35 8.27 10.4C8.44 10.74 8.76 11.15 9.22 11.63C9.69 12.11 10.2 12.61 10.74 13.14C11.28 13.67 11.78 14.18 12.27 14.66C12.75 15.13 13.14 15.46 13.49 15.62C13.53 15.64 13.59 15.66 13.65 15.69C13.72 15.71 13.79 15.73 13.87 15.73C14.03 15.73 14.16 15.67 14.27 15.56L15.13 14.71C15.38 14.47 15.62 14.29 15.85 14.16C16.08 14.03 16.31 13.97 16.56 13.97C16.75 13.97 16.95 14.01 17.17 14.1C17.39 14.19 17.62 14.32 17.87 14.49L21.18 16.84C21.44 17.02 21.62 17.24 21.73 17.5C21.83 17.76 21.89 18.01 21.89 18.28L21.97 18.33Z" stroke="#00ACB1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            +00 000 00 00
          </Link>

          <Link href="/account" className="text-white">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#00ACB1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#00ACB1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>

          <Link href="/cart" className="text-white">
            <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 7.67001V6.70001C7.5 4.45001 9.31 2.24001 11.56 2.03001C14.24 1.77001 16.5 3.88001 16.5 6.51001V7.89001" stroke="#00ACB1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.0008 22H15.0008C19.0208 22 19.7408 20.39 19.9508 18.43L20.7008 12.43C20.9708 9.99 20.2708 8 16.0008 8H8.0008C3.7308 8 3.0308 9.99 3.3008 12.43L4.0508 18.43C4.2608 20.39 4.9808 22 9.0008 22Z" stroke="#00ACB1" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.4945 12H15.5035" stroke="#00ACB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.49451 12H8.50349" stroke="#00ACB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 