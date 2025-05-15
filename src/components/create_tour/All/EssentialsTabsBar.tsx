import React from "react";

export interface Tab {
  id: string;
  name: string;
  icon?: React.ReactNode;
  image?: string;
}

interface EssentialsTabsBarProps {
  tabs: Tab[];
  activeTabId: string;
  onTabChange: (tabId: string) => void;
}

const EssentialsTabsBar: React.FC<EssentialsTabsBarProps> = ({
  tabs,
  activeTabId,
  onTabChange,
}) => (
  <div className="relative mb-4 md:mb-8">
    <div className="overflow-x-auto">
      <div className="flex items-center space-x-2 bg-[#222629] rounded-full p-1 w-fit min-w-full md:min-w-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-3 md:px-6 py-1.5 md:py-2 rounded-full whitespace-nowrap transition-colors text-sm md:text-base ${
              activeTabId === tab.id
                ? "bg-white text-black"
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            <span className="flex items-center gap-2">
              <span>{tab.name}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default EssentialsTabsBar;
