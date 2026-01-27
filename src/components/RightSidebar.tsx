import React from 'react';

const RightSidebar: React.FC = () => {
  const animations = Array(8).fill('Blur');

  return (
    <div
      className="absolute bg-surface-primary border border-border-primary bottom-[272px] flex flex-col gap-6 items-center left-3 overflow-y-auto p-75 rounded-500 top-[72px] w-[252px]"
      data-node-id="64:19549"
    >
      {/* Video Preview Thumbnail */}
      <div className="aspect-[135/82] relative rounded-300 w-full overflow-hidden">
        <img
          src="/src/assets/placeholder-video.jpg"
          alt="Preview"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Controls Section */}
      <div className="flex flex-col gap-200 items-start w-full">
        {/* Volume Control */}
        <div className="flex flex-col gap-50 items-start px-75 w-full">
          <p className="font-normal text-sm text-text-primary leading-[1.3]">Volume</p>
          <div className="flex gap-100 items-center px-0 py-75 rounded-300 w-full">
            {/* Minus Icon */}
            <button className="w-4 h-4 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 256 256" fill="none">
                <line x1="40" y1="128" x2="216" y2="128" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" />
              </svg>
            </button>

            {/* Slider */}
            <div className="flex-1 relative h-0">
              <div className="absolute inset-0 border-t-2 border-[#616161]" />
              <div className="absolute left-0 top-0 w-[62px] border-t-2 border-border-action-primary" />
              <div className="absolute left-[90px] top-1/2 -translate-y-1/2 w-4 h-4">
                <div className="absolute bg-surface-blue-200 border border-border-action-primary rounded-full w-4 h-4" />
                <div className="absolute bg-surface-blue-500 left-1 rounded-full w-2 h-2 top-1" />
              </div>
            </div>

            {/* Plus Icon */}
            <button className="w-4 h-4 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 256 256" fill="none">
                <line x1="128" y1="40" x2="128" y2="216" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" />
                <line x1="40" y1="128" x2="216" y2="128" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Playback Speed */}
        <div className="flex flex-col gap-100 items-start px-75 w-full">
          <p className="font-normal text-sm text-text-primary leading-[1.3]">Playback Speed</p>
          <div className="bg-surface-secondary border border-border-secondary flex items-center justify-between px-3 py-2 rounded-200 w-full">
            <p className="font-normal text-sm text-text-secondary tracking-[-0.1202px] leading-[15.983px]">
              1x (Normal)
            </p>
            <svg width="16" height="16" viewBox="0 0 256 256" fill="none">
              <path
                d="M208 96L128 176L48 96"
                stroke="#d7d7d7"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Animations */}
        <div className="flex flex-col gap-100 items-start px-75 w-[236px]">
          <p className="font-normal text-sm text-text-primary leading-[1.3]">Animations</p>
          <div className="flex flex-wrap gap-x-[42px] gap-y-2 items-start w-full">
            {animations.map((animation, index) => (
              <div key={index} className="flex flex-col h-10 items-center justify-between w-[23px]">
                {/* Circles Icon */}
                <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
                  <circle cx="128" cy="128" r="32" stroke="#d7d7d7" strokeWidth="16" fill="none" />
                  <circle cx="200" cy="128" r="16" fill="#d7d7d7" />
                  <circle cx="56" cy="128" r="16" fill="#d7d7d7" />
                </svg>
                <p className="font-medium text-xs text-white leading-[15.983px] whitespace-pre">
                  {animation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;

