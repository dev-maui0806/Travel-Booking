import React from "react";
import { FaPhone, FaEnvelope, FaWhatsapp, FaTelegram, FaInstagram, FaFacebookF } from "react-icons/fa";
import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs';
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
const contacts = [
  {
    icon: <FaPhone className="text-cyan-400 text-xl" />,
    label: "+00 000 00 00",
    type: "phone",
  },
  {
    icon: <FaEnvelope className="text-cyan-400 text-xl" />,
    label: "gmail@gmail.com",
    type: "email",
  },
  {
    icon: <FaTelegram className="text-cyan-400 text-xl" />,
    label: "Telegram",
    type: "telegram",
  },
  {
    icon: <FaWhatsapp className="text-cyan-400 text-xl" />,
    label: "Whatsapp",
    type: "whatsapp",
  },
  {
    icon: <FaInstagram className="text-cyan-400 text-xl" />,
    label: "Instagram",
    type: "instagram",
  },
  {
    icon: <FaFacebookF className="text-cyan-400 text-xl" />,
    label: "Facebook",
    type: "facebook",
  },
];

const CreateYourOwnJourney: React.FC = () => {
  return (
    <div className="py-[100px] w-full gap-[12px] bg-[#222629] rounded-2xl overflow-hidden flex flex-col container mx-auto ">
        <div className="w-full flex flex-col md:flex-row">
      {/* Left: Map (desktop) */}
            <div className="md:w-2/3 hidden w-full md:flex mx-auto px-4 flex-col">
                <div className="relative w-full h-[340px] md:h-full min-h-[300px] bg-[#d9f5e5]">
                <img
                    src="/images/contactUs/desktopImage.png"
                    alt="Map"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <img
                    src="/images/contactUs/palms.png"
                    alt="Palms"
                    className="absolute left-1/2 top-1/2 w-20 h-20 md:w-32 md:h-32 -translate-x-1/2 -translate-y-1/2"
                />
                </div>
            </div>

            {/* Right: Form (desktop) */}
            <div className="md:w-1/3 w-full hidden md:flex flex-col justify-center bg-[#222629] p-4 md:p-10">
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">Create your own journey</h2>
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
      {/* Bottom contacts (desktop only) */}
      <div className="hidden md:flex w-full left-0 bottom-0 z-10">
        <div className="w-full grid grid-cols-4 gap-4">
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

      {/* Mobile layout */}
      <div className="md:hidden container mx-auto px-4 w-full flex flex-col gap-0">
        {/* Map */}
        <div className="w-full bg-[#d9f5e5] flex items-center justify-center relative overflow-hidden" style={{ aspectRatio: "1.7/1" }}>
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

        {/* Two horizontal contact cards */}
        <div className="flex flex-row justify-between gap-4 mt-8">
          <div className="bg-[#1C1F22] w-[48%] rounded-xl p-4 flex flex-col items-start gap-8">
            <div className="w-10 h-10 rounded-full bg-[#292E32] bg-opacity-20 flex items-center justify-center">
              <FiPhone className="text-[#00ACB1]" size={20} />
            </div>
            <span className="text-[15px] text-[#BABABA]">+00 000 00 00</span>
          </div>
          <div className="bg-[#1C1F22] w-[48%] rounded-xl p-4 flex flex-col items-start gap-8">
            <div className="w-10 h-10 rounded-full bg-[#292E32] bg-opacity-20 flex items-center justify-center">
              <FiMail className="text-[#00ACB1]" size={20} />
            </div>
            <span className="text-[15px] text-[#BABABA]">gmail@gmail.com</span>
          </div>
        </div>

        {/* Four circular icon buttons, centered, no text */}
        <div className="flex items-center justify-between rounded-[10px] bg-[#1C1F22] mt-8 py-4 px-4">
          <div className="w-12 h-12 rounded-full bg-[#222629] flex items-center justify-center">
            <FaTelegramPlane size={24} className="text-[#00ACB1]" />
          </div>
          <div className="w-12 h-12 rounded-full bg-[#222629] flex items-center justify-center">
            <BsWhatsapp size={24} className="text-[#00ACB1]" />
          </div>
          <div className="w-12 h-12 rounded-full bg-[#222629] flex items-center justify-center">
            <BsFacebook size={24} className="text-[#00ACB1]" />
          </div>
          <div className="w-12 h-12 rounded-full bg-[#222629] flex items-center justify-center">
            <BsInstagram size={24} className="text-[#00ACB1]" />
          </div>
        </div>

        {/* Form */}
        <div className="w-full bg-[#222629] rounded-2xl px-2 pt-4 pb-6 mt-2">
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
    </div>
  );
};

export default CreateYourOwnJourney;
