import Image from 'next/image';
import Link from 'next/link'; // Assuming services link somewhere

interface ServiceCardProps {
  service: {
    id: string | number;
    title: string;
    description: string;
    image: string; // Path to image
    link: string; // Destination link
  };
}

// Placeholder Icon (adjust as needed)
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const { title, description, image, link } = service;

  return (
    <Link href={link} className="block group relative aspect-video md:aspect-[16/10] w-full rounded-lg overflow-hidden shadow-lg">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white flex flex-col justify-end h-full">
        <div className="mt-auto">
          <h3 className="text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-gray-300 mb-4 line-clamp-3">
            {description}
          </p>
          <div className="flex justify-end">
             {/* Icon Button - adjust styling as needed */}
            <div className="bg-primary rounded-full p-2 group-hover:bg-secondary transition-colors">
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard; 