import Image from 'next/image';
import Link from 'next/link';
import type { Tour } from '@/types';
import Button from '@/components/ui/Button';

type TourCardProps = {
  tour: Tour;
};

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  const { title, slug, description, price, featuredImage } = tour.attributes;
  const imageUrl = featuredImage?.data?.attributes?.url || '/images/placeholder.png';

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <Link href={`/tours/${slug}`} className="block relative h-48 w-full">
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">
          <Link href={`/tours/${slug}`} className="hover:text-primary">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {description.substring(0, 100)}...
        </p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t">
          <span className="text-lg font-bold text-primary">
            ${price?.toFixed(2)}
          </span>
          <Link href={`/tours/${slug}`} passHref>
            <Button variant="outline">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard; 