import type { Tour, TourAttributes, StrapiImageFormat } from "@/types";

// --- Mock Data --- 

// Now includes id directly, matching the updated TourAttributes
const mockTourAttributes: TourAttributes[] = [
  {
    id: 1,
    title: "Sunny Beach Escape",
    slug: "sunny-beach-escape",
    description: "Relax on the pristine sands and enjoy the crystal clear waters. Perfect for sunbathing and swimming.",
    price: 150.00,
    duration: 3,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(), // Mock dates
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
  },
  {
    id: 2,
    title: "Island Hiking Adventure",
    slug: "island-hiking-adventure",
    description: "Explore the lush trails and scenic viewpoints of the island. Includes a guided hike.",
    price: 95.50,
    duration: 1,
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    updatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
  },
  {
    id: 3,
    title: "Cultural Village Tour",
    slug: "cultural-village-tour",
    description: "Immerse yourself in the local culture with a visit to a traditional village. Includes craft demonstrations.",
    price: 75.00,
    duration: 1,
    createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), publishedAt: new Date().toISOString(),
  },
  {
    id: 4,
    title: "Sunset Catamaran Cruise",
    slug: "sunset-catamaran-cruise",
    description: "Enjoy breathtaking sunset views from the sea aboard a luxury catamaran. Drinks included.",
    price: 220.00,
    duration: 0.25, 
    createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), publishedAt: new Date().toISOString(),
  },
  {
    id: 5,
    title: "Snorkeling Discovery",
    slug: "snorkeling-discovery",
    description: "Discover the vibrant underwater world at the island's best snorkeling spots. Gear provided.",
    price: 110.00,
    duration: 0.5, 
    createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), publishedAt: new Date().toISOString(),
  },
  {
    id: 6,
    title: "Island Jeep Safari",
    slug: "island-jeep-safari",
    description: "An adventurous off-road journey exploring the hidden gems of the island.",
    price: 180.00,
    duration: 1,
    createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), publishedAt: new Date().toISOString(),
  },
];

// Helper to create the full Strapi-like Tour structure including mock image
const createMockTour = (attr: TourAttributes): Tour => ({
  id: attr.id,
  attributes: {
    ...attr,
    // Add mock image data if your components expect it
    featuredImage: {
      data: {
        id: attr.id, // Use tour id for simplicity
        attributes: {
          name: `placeholder-${attr.id}.png`,
          alternativeText: attr.title,
          caption: null,
          width: 800,
          height: 600,
          formats: {
            // Provide a more complete mock format object
            small: {
              name: `small_placeholder-${attr.id}.png`,
              hash: `small_placeholder_${attr.id}`,
              ext: '.png',
              mime: 'image/png',
              path: null,
              width: 500,
              height: 375,
              size: 50,
              url: '/images/placeholder.png', // Use a single placeholder
            } satisfies StrapiImageFormat, // Use satisfies for type checking
          },
          url: '/images/placeholder.png', // Use a single placeholder
          hash: `placeholder_${attr.id}`,
          ext: '.png',
          mime: 'image/png',
          size: 100, 
          previewUrl: null, 
          provider: 'local', 
          provider_metadata: null, 
          createdAt: attr.createdAt, // Use attr dates
          updatedAt: attr.updatedAt,
        }
      }
    }
  }
});

// Map the attributes to the full Tour structure
const MOCK_TOURS: Tour[] = mockTourAttributes.map(createMockTour);

// --- Mock Fetch Functions --- 

/**
 * Fetches a list of mock tours.
 */
export async function fetchMockTours(params?: {
  limit?: number;
}): Promise<Tour[]> {
  await new Promise(resolve => setTimeout(resolve, 50)); 
  let tours = MOCK_TOURS;
  if (params?.limit) {
    tours = tours.slice(0, params.limit);
  }
  return tours;
}

/**
 * Fetches a single mock tour by its slug.
 */
export async function fetchMockTourBySlug(slug: string): Promise<Tour | null> {
  await new Promise(resolve => setTimeout(resolve, 50)); 
  const tour = MOCK_TOURS.find(t => t.attributes.slug === slug);
  return tour || null;
}

/**
 * Simulates submitting a booking.
 */
export async function submitMockBooking(bookingData: any): Promise<{ success: boolean; message?: string }> {
  await new Promise(resolve => setTimeout(resolve, 500)); 
  console.log("Mock Booking Submitted:", bookingData);
  return { success: true };
} 