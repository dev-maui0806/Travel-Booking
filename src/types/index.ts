// Generic Strapi Response Structure (adjust as needed)
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiDataItem<T> {
  id: number;
  attributes: T;
}

export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface StrapiImageData {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail?: StrapiImageFormat;
      small?: StrapiImageFormat;
      medium?: StrapiImageFormat;
      large?: StrapiImageFormat;
    } | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null; // Adjust if you know the structure
    createdAt: string;
    updatedAt: string;
  };
}

export interface StrapiMedia {
  data: StrapiImageData | null; 
}

export interface StrapiMediaCollection {
  data: StrapiImageData[];
}

// --- Your Specific Content Types --- 

// Example: Tour Content Type
export interface TourAttributes {
  id: number;
  title: string;
  slug: string;
  description: string; // Could be markdown
  price: number;
  duration: number; // e.g., in days
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  featuredImage?: StrapiMedia; // Relation to Media library (single image)
  gallery?: StrapiMediaCollection; // Relation (multiple images)
  // Add other fields: itinerary (Rich Text), inclusions (Text), exclusions (Text), map_location (JSON?), etc.
}

export type Tour = StrapiDataItem<TourAttributes>;

// Example: Booking Content Type
export interface BookingAttributes {
  name: string;
  email: string;
  phone: string;
  date: string; // Or Date type if you prefer
  numTravelers: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  tour?: { data: StrapiDataItem<{ slug: string; title: string }> | null }; // Relation (populate minimally if needed)
}

export type Booking = StrapiDataItem<BookingAttributes>;

// Add other types as needed (e.g., Category, PageContent, Review) 