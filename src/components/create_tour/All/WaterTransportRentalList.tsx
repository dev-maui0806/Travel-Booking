import React from "react";
import { FaStar, FaBed, FaUserFriends } from "react-icons/fa";
import { MdOutlineCabin } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface WaterTransportRentalListProps {
  onBackToSearch: () => void;
}

const boats = [
  {
    name: "Azimut 42",
    image: "/images/waterTransports/ship1.png",
    people: 8,
    cabins: 2,
    beds: 4,
    price: "600$ - 3 hours",
  },
  {
    name: "Azimut 42",
    image: "/images/waterTransports/ship2.png",
    people: 8,
    cabins: 2,
    beds: 4,
    price: "600$ - 3 hours",
  },
  {
    name: "Azimut 42",
    image: "/images/waterTransports/ship3.png",
    people: 8,
    cabins: 2,
    beds: 4,
    price: "600$ - 3 hours",
  },
];

const WaterTransportRentalList: React.FC<WaterTransportRentalListProps> = ({ onBackToSearch }) => (
  <div className="container mx-auto bg-[#222629] rounded-2xl p-6">
    <div className="flex items-center gap-4 mb-6">
      <button className="bg-[#1C1F22] text-white px-4 py-2 rounded-full">Best options</button>
      <button className="bg-[#1C1F22] text-white px-4 py-2 rounded-full">Ascending price</button>
      <button className="bg-[#1C1F22] text-white px-4 py-2 rounded-full">Descending price</button>
      <div className="ml-auto flex items-center gap-2">
        <span className="text-white">102$</span>
        <input type="range" min={102} max={12386} className="w-32 accent-cyan-400" />
        <span className="text-white">12 386$</span>
      </div>
    </div>
    {boats.map((boat, idx) => (
      <div key={idx} className="flex flex-col md:flex-row bg-[#1C1F22] rounded-xl mb-6 overflow-hidden">
        <img src={boat.image} alt={boat.name} className="w-full md:w-1/3 h-56 object-cover" />
        <div className="flex-1 p-6 flex flex-col md:flex-row justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">{boat.name}</span>
              <span className="flex text-cyan-400">
                {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
              </span>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-gray-200">
              <div className="flex items-center gap-2">
                <FaUserFriends /> {boat.people} people
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineCabin /> {boat.cabins} cabins
              </div>
              <div className="flex items-center gap-2">
                <FaBed /> {boat.beds} beds
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between min-w-[160px]">
            <span className="text-cyan-400 text-xl font-bold">{boat.price}</span>
            <button className="mt-4 bg-[#222629] text-cyan-400 rounded-full p-2 hover:bg-cyan-900 transition">
              <span className="text-2xl">+</span>
            </button>
          </div>
        </div>
      </div>
    ))}
    <div className="flex justify-between items-center mt-4 text-gray-400">
      <span>01/12</span>
      <div className="flex gap-2">
        <button className="p-2 rounded-full bg-[#1C1F22]">
          <IoIosArrowBack />
        </button>
        <button className="p-2 rounded-full bg-[#1C1F22]">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  </div>
);

export default WaterTransportRentalList;