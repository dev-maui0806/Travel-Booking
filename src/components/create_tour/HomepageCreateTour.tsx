import React from "react";
import HeroSectionCreateTour from "./heroSectionCreateTour";
import Link from "next/link";

const HomepageCreateTour: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 bg-gray-800">
        <h1 className="text-xl font-bold">Create Tour</h1>
        <nav>
          <Link href="/">
            <a className="text-teal-400 hover:underline">Back to Home</a>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <HeroSectionCreateTour />

      {/* Footer Section */}
      <footer className="bg-gray-800 text-center py-4">
        <p className="text-sm text-gray-400">
          © 2025 Travel Book Website. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomepageCreateTour;