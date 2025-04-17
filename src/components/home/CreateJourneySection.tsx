"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Contact card component for the right side
const ContactCard = ({ icon, text, link }: { icon: React.ReactNode; text: string; link: string }) => (
  <Link href={link} className="bg-[#212429] h-[176px] p-5 rounded-lg flex flex-col justify-between items-center">
    <div className="text-[#0CCDDA] w-full text-left"><div className="w-[35px] h-[35px] bg-[#292E32] p-1 rounded-full flex items-center justify-center">{icon}</div></div>
    <span className="text-white text-center">{text}</span>
  </Link>
);

// Icon components
const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 16.92V19.92C22 20.4704 21.7893 20.9978 21.4142 21.3728C21.0391 21.7479 20.5117 21.9587 19.96 21.96C18.4221 21.9559 16.8978 21.6818 15.45 21.15C14.0661 20.6432 12.7857 19.9066 11.66 18.97C10.5308 18.0279 9.55709 16.9234 8.77997 15.69C8.24847 14.2469 7.97472 12.7263 7.96997 11.19C7.97065 10.6389 8.18071 10.1119 8.55505 9.73679C8.9294 9.36162 9.45588 9.14989 10.01 9.14001H13.01C13.4884 9.13548 13.9538 9.31107 14.3219 9.63284C14.6901 9.95461 14.9404 10.3972 15.03 10.87C15.1773 11.6682 15.4239 12.4463 15.77 13.19C15.907 13.4781 15.9631 13.8018 15.9321 14.1235C15.9011 14.4452 15.7842 14.7522 15.6 15.01L14.6 16.01C15.3093 17.0817 16.1809 18.0411 17.19 18.85L18.19 17.85C18.4478 17.6658 18.7548 17.5489 19.0765 17.5179C19.3982 17.4869 19.7219 17.5431 20.01 17.68C20.7537 18.0262 21.5318 18.2727 22.33 18.42C22.8043 18.5103 23.2481 18.763 23.5692 19.1335C23.8902 19.504 24.0634 19.9714 24.055 20.45L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 11.5C21 16.75 16.75 21 11.5 21C9.55 21 7.77 20.4 6.3 19.42L3 20.5L4.08 17.2C3.1 15.73 2.5 13.95 2.5 12C2.5 6.75 6.75 2.5 12 2.5C17.25 2.5 21.5 6.75 21.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.25 8.75C16.25 9 16.1 9.25 15.85 9.5C15.6 9.75 15.35 9.75 15.1 9.75C14.85 9.75 14.6 9.6 14.35 9.35C14.1 9.1 14.1 8.85 14.1 8.6C14.1 8.35 14.25 8.1 14.5 7.85C14.75 7.6 15 7.6 15.25 7.6C15.5 7.6 15.75 7.75 16 8C16.25 8.25 16.25 8.5 16.25 8.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.25 11.75C18.25 12 18.1 12.25 17.85 12.5C17.6 12.75 17.35 12.75 17.1 12.75C16.85 12.75 16.6 12.6 16.35 12.35C16.1 12.1 16.1 11.85 16.1 11.6C16.1 11.35 16.25 11.1 16.5 10.85C16.75 10.6 17 10.6 17.25 10.6C17.5 10.6 17.75 10.75 18 11C18.25 11.25 18.25 11.5 18.25 11.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.25 14.75C14.25 15 14.1 15.25 13.85 15.5C13.6 15.75 13.35 15.75 13.1 15.75C12.85 15.75 12.6 15.6 12.35 15.35C12.1 15.1 12.1 14.85 12.1 14.6C12.1 14.35 12.25 14.1 12.5 13.85C12.75 13.6 13 13.6 13.25 13.6C13.5 13.6 13.75 13.75 14 14C14.25 14.25 14.25 14.5 14.25 14.75Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CreateJourneySection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-bg.png"
          alt="Beach background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10">
        {/* SECTION 1: Header - Full Width */}
        <div className="container mx-auto px-4 mb-10">
          <h2 className="text-4xl md:text-5xl font-light text-white">
            Create your own journey
          </h2>
          <p className="text-white/70 mt-2 max-w-md">
            Have questions or doubts? Simply fill out our contact form and we will
            contact you as soon as possible. Or maybe you just want to leave a
            review, we will be very grateful to you.
          </p>
        </div>

        {/* SECTION 2 & 3: Form and Contact Cards */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between md:flex-row gap-6">
            {/* SECTION 2: Form (Left Side) */}
            <div className="md:w-3/5 lg:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-4 bg-transparent border border-solid border-white/30 rounded-lg text-white 
                      focus:outline-none hover:border-[1px] hover:border-transparent
                      hover:[border-image-source:linear-gradient(90.41deg,#FAFF00_0.42%,#00ACB1_100%)]
                      hover:[border-image-slice:1]"
                    required
                  />
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-4 bg-transparent border border-solid border-white/30 rounded-lg text-white 
                      focus:outline-none hover:border-[1px] hover:border-transparent
                      hover:[border-image-source:linear-gradient(90.41deg,#FAFF00_0.42%,#00ACB1_100%)]
                      hover:[border-image-slice:1]"
                    required
                  />
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    className="w-full p-4 bg-transparent border border-white/30 rounded-lg text-white 
                      focus:outline-none focus:ring-1 resize-none
                      hover:border-[1px] hover:border-transparent
                      hover:[border-image-source:linear-gradient(90.41deg,#FAFF00_0.42%,#00ACB1_100%)]
                      hover:[border-image-slice:1]"
                    required
                  ></textarea>
                </div>

                <div className="flex md:w-[100px] w-full">
                  <button
                    type="submit"
                    className="px-3 py-3 bg-white text-gray-900 rounded-full font-medium flex items-center 
                      hover:bg-gray-100 transition-colors duration-300 flex w-full justify-center md:justify-between"
                  >
                    <span className="text-[16px] text-[#222629]">
                      Send</span>
                    <span className="hidden md:block ml-2 bg-[#1C1F22] rounded-full p-1 -rotate-45">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* SECTION 3: Contact Cards (Right Side) */}
            <div className="hidden md:flex flex-row justify-end md:w-2/5 lg:w-1/2">
              <div className="grid grid-cols-2 h-full gap-4 flex flex-col justify-end">
                <div className="flex flex-col gap-4">
                <ContactCard
                  icon={<PhoneIcon />}
                  text="+00 000 00 00"
                  link="tel:+000000000"
                  />
                <ContactCard
                  icon={<TelegramIcon />}
                  text="Telegram"
                  link="https://t.me/yourusername"
                  />
                  </div>
                  <div className="flex flex-col gap-4">
                <ContactCard
                  icon={<EmailIcon />}
                  text="Gmail@gmail.com"
                  link="mailto:Gmail@gmail.com"
                  />
                <ContactCard
                  icon={<WhatsappIcon />}
                  text="Whatsapp"
                  link="https://wa.me/0000000000"
                  />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateJourneySection; 