import Image from 'next/image';

const QuoteIcon = () => (
  <svg width="25" height="20" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5687 0.545C10.3687 2.535 7.86875 4.875 6.06875 7.565C4.26875 10.255 3.36875 13.125 3.36875 16.175C3.36875 19.375 4.28875 21.985 6.12875 24.005C7.96875 26.025 10.3487 27.035 13.2687 27.035C15.9887 27.035 18.2087 26.145 19.9287 24.365C21.6487 22.585 22.5087 20.365 22.5087 17.705C22.5087 15.085 21.7087 12.915 20.1087 11.195C18.5087 9.47499 16.4887 8.615 14.0487 8.615C13.5287 8.615 12.9687 8.67499 12.3687 8.795C12.9087 7.09499 14.0487 5.47499 15.7887 3.935C17.5287 2.395 19.3887 1.375 21.3687 0.875L13.5687 0.545ZM31.2687 0.545C28.0287 2.535 25.5287 4.875 23.7687 7.565C21.9687 10.255 21.0687 13.125 21.0687 16.175C21.0687 19.375 21.9887 21.985 23.8287 24.005C25.6687 26.025 28.0487 27.035 30.9687 27.035C33.6887 27.035 35.9087 26.145 37.6287 24.365C39.3487 22.585 40.2087 20.365 40.2087 17.705C40.2087 15.085 39.4087 12.915 37.8087 11.195C36.2087 9.47499 34.1887 8.615 31.7487 8.615C31.2287 8.615 30.6687 8.67499 30.0687 8.795C30.6087 7.09499 31.7487 5.47499 33.4887 3.935C35.2287 2.395 37.0887 1.375 39.0687 0.875L31.2687 0.545Z" fill="#D7F253"/>
  </svg>
);

interface ReviewCardProps {
  review: {
    id: number;
    author: string;
    date: string;
    avatar: string;
    text: string;
  };
  showDetails?: boolean;
  isMobile?: boolean;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, showDetails = true, isMobile = false }) => {
  // Mobile layout (avatar at top left, name/date at top, quote marks at beginning of text)
  if (isMobile) {
    return (
      <div className="bg-[#1C1F22] rounded-2xl p-6 h-full">
        {/* Author info row with avatar and name/date */}
        <div className=" relativeflex items-center mb-4">
          <div className="relative flex-shrink-0 mr-4">
            <div className="absolute top-[-40px] bg-[#222629] p-[11px] left-[-40px] w-[75px] h-[75px] rounded-full overflow-hidden">
              <Image
                src={review.avatar}
                alt={review.author}
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Author name and date */}
          <div className='w-full'>
            <h3 className="text-xl font-medium text-white pl-[50px]">
              {review.author}
            </h3>
            <p className="pl-[50px] text-gray-400 text-sm">{review.date}</p>
          </div>
        </div>
        
        {/* Review text in separate section below */}
        <div className="text-white text-base">
          <div className="mb-2 w-[34px] h-[27px]">
            <Image src={'/images/icon/quote.png'} alt='quote' width={34} height={27}/>
          </div>
          {review.text}
        </div>
      </div>
    );
  }
  
  // Desktop layout (avatar on left, text on right)
  return (
    <div className="bg-[#1a1d20] rounded-2xl p-6 h-full">
      <div className="relative flex h-full">
        {/* Avatar positioned on the left side, vertically centered */}
        <div className="flex-shrink-0 mr-4 self-center">
          <div className="absolute bg-[#222629] p-[11px] left-[-65px] top-[30%] w-[75px] h-[75px] rounded-full overflow-hidden">
            <Image
              src={review.avatar}
              alt={review.author}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
        </div>
        
        {/* Review text */}
        <div className="flex-1 flex flex-col">
          <div className="text-base flex flex-row mb-4 flex-grow">
            <div className="pr-2 flex-shrink-0">
            <Image src={'/images/icon/quote.png'} alt='quote' width={34} height={27}/>
            </div>
            <p className="text-white">{review.text}</p>
          </div>
          
          {showDetails && (
            <div>
              <h3 className="text-xl font-medium text-white">
                {review.author}
              </h3>
              <p className="text-gray-400 text-sm">{review.date}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard; 