import React from "react";

interface AdventuresEntertainmentListProps {
  onBackToSearch: () => void;
}

const adventures = [
  {
    name: "Game Fishing",
    image: "/images/advantures/advantures1.png",
    description:
      "The Andaman Islands are very famous in the international community for their fishing. Fishing in the Andaman Islands is very popular and such fishing trips are conducted in both Port Blair and Havelock Island",
    price: "44USD",
    priceNote: "price per person",
    rating: 9.4,
  },
  {
    name: "Snorkeling",
    image: "/images/advantures/advantures2.png",
    description:
      "Andaman Islands is one of the best places to snorkel. Snorkeling in Andaman is another famous activity as the reefs here in Andaman starts at a very low depth, making it easier for people who want to do snorkeling. Guides accompany you during the snorkeling at any location in Andaman",
    price: "44USD",
    priceNote: "price per person",
    rating: 9.4,
  },
  {
    name: "Speed Boat Rides",
    image: "/images/advantures/advantures3.png",
    description:
      "Various boats sail within the Andaman Islands. Now, boat ride can be done both in Port Blair and Havelock Islands. The majority of boat rides in Andaman Islands happen in Port Blair. Before even any boat ride begins in the islands, the weather is checked. If the weather is favorable then boats are allowed to sail",
    price: "44USD",
    priceNote: "price per person",
    rating: 9.4,
  },
];

const AdventuresEntertainmentList: React.FC<AdventuresEntertainmentListProps> = ({ onBackToSearch }) => (
  <div className=" container mx-auto bg-[#222629] rounded-2xl p-6">
    {adventures.map((item, idx) => (
      <div key={idx} className="flex flex-col md:flex-row bg-[#1C1F22] rounded-xl mb-6 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full md:w-1/3 h-56 object-cover" />
        <div className="flex-1 p-6 flex flex-col md:flex-row justify-between">
          <div>
            <div className="text-lg font-semibold mb-2">{item.name}</div>
            <div className="text-gray-200 mb-2">{item.description}</div>
          </div>
          <div className="flex flex-col items-end justify-between min-w-[160px]">
            <span className="text-cyan-400 text-xl font-bold">{item.price} <span className="text-base font-normal text-white">→</span></span>
            <span className="text-gray-400 text-sm">{item.priceNote}</span>
            <span className="mt-4 bg-[#222629] text-cyan-400 rounded-full px-3 py-1 text-sm">{item.rating}</span>
          </div>
        </div>
      </div>
    ))}
    <div className="flex justify-between items-center mt-4 text-gray-400">
      <span>01/12</span>
      <div className="flex gap-2">
        <button className="p-2 rounded-full bg-[#1C1F22]">
          {"<"}
        </button>
        <button className="p-2 rounded-full bg-[#1C1F22]">
          {">"}
        </button>
      </div>
    </div>
  </div>
);

export default AdventuresEntertainmentList;