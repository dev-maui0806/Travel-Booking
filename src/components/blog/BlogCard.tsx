import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
  post: {
    id: string | number;
    title: string;
    image: string; // Path to image
    slug: string; // For linking to the full post
    date?: string; // Optional date
  };
  height?: string;
}

// Placeholder Edit/Link Icon
const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
);

const BlogCard: React.FC<BlogCardProps> = ({ post, height = 'h-[280px]' }) => {
  const { title, image, slug, date } = post;

  return (
    <div className={`relative rounded-xl overflow-hidden ${height} group`}>
      <div className='relative rounded-xl flex flex-col overflow-hidden h-full'>

        {/* Image with overlay */}
        <div className='relative h-[70%] w-full'>

        <Image
          src={image}
          alt={title}
          fill
          className=" transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1536px) 50vw, 33vw"
          />
          </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        {/* Title */}
        <div className="absolute bottom-2 left-0 right-0 p-5 flex flex-row item-center justify-between gap-2">
          <h3 className="text-lg text-white md:text-md sm:text-sm">{title}</h3>
        {/* Arrow button */}
        <Link
          href={`/blog/${slug}`}
          aria-label={`Read more about ${title}`}
          className="absolute bottom-2 -rotate-45 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
        >
          <svg
            className="w-5 h-5 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
        </div>

      </div>
    </div>

  );
};

export default BlogCard; 