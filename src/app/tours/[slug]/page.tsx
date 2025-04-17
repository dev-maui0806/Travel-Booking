import { fetchMockTourBySlug, fetchMockTours } from "@/lib/mockData";
// import type { Tour } from "@/types";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";

type TourDetailPageProps = {
  params: { slug: string };
};

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { slug } = params;
  const tourData = await fetchMockTourBySlug(slug);

  if (!tourData) {
    // Handle case where tour is not found (e.g., return 404)
    // You might want to use Next.js's notFound() function here
    return <p>Tour not found.</p>;
  }

  const tour = tourData.attributes;

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">{tour.title}</h1>

      {tour.featuredImage?.data?.attributes.url && (
        <div className="relative h-96 w-full overflow-hidden rounded-lg">
          <Image
            src={tour.featuredImage.data.attributes.url}
            alt={tour.title}
            layout="fill"
            objectFit="cover"
            priority // Prioritize loading the main image
          />
        </div>
      )}

      <div className="prose lg:prose-xl max-w-none">
        {/* Render tour description (potentially markdown) */}
        <p>{tour.description}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg shadow-sm space-y-2">
        <h2 className="text-xl font-semibold">Tour Details</h2>
        <p><span className="font-medium">Duration:</span> {tour.duration} days</p>
        <p><span className="font-medium">Price:</span> ${tour.price?.toFixed(2)}</p>
        {/* Add other relevant details like inclusions, exclusions, etc. */}
      </div>

      <Link href={`/booking?tourId=${tourData.id}&tourName=${encodeURIComponent(tour.title)}`}>
        <Button>Book This Tour</Button>
      </Link>

      {/* Consider adding sections for itinerary, map, reviews, related tours */}
    </div>
  );
}

// Optional: Add generateMetadata function for dynamic page titles/descriptions
// export async function generateMetadata({ params }: TourDetailPageProps): Promise<Metadata> {
//   const tour = await fetchTourBySlug(params.slug);
//   if (!tour) return { title: 'Tour Not Found' };
//   return {
//     title: `${tour.attributes.title} | Island Travel Bookings`,
//     description: tour.attributes.description.substring(0, 160), // Truncate description for meta
//   };
// } 