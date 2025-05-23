export interface FerryTicket {
  id: string;
  price: string;
  company: string;
  rating: number;
  features: string[];
  departure: string;
  arrival: string;
  duration: string;
  image: string;
}

export const ferryTickets: FerryTicket[] = [
  {
    id: "1",
    price: "From 20 USD",
    company: "Makruzz",
    rating: 4,
    features: ["Air conditioner", "Express"],
    departure: "7:00 am",
    arrival: "8:30 am",
    duration: "1 h 30 min",
    image: "/images/ferry1.jpg",
  },
  // ...more tickets
];

