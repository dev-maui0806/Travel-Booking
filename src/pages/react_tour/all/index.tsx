'use client';

import React, { useState } from 'react';
import EssentialsBookingForm from '@/components/create_tour/All/EssentialsBookingForm';

const EssentialsPage: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [activeTab, setActiveTab] = useState('Hotels');

  const handleSearch = () => {
    setShowContent(true);
  };

  return (
    <div className="min-h-screen bg-[#1C1F22] py-8">
      <EssentialsBookingForm onSearch={handleSearch} />
    </div>
  );
};

export default EssentialsPage; 