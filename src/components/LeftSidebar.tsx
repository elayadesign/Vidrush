import React from 'react';

const LeftSidebar: React.FC = () => {
  const subtitles = Array(9).fill('Subtitle');

  return (
    <div
      className="absolute bg-surface-primary border-b border-l border-t border-border-primary bottom-[272px] flex flex-col gap-6 items-center left-3 overflow-y-auto p-75 rounded-bl-500 rounded-tl-500 top-[72px] w-[252px]"
      data-node-id="64:23009"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-0 py-25 rounded-400 w-full">
        <div className="flex gap-0 items-center">
          <div className="flex gap-2 items-center">
            {/* Layers Icon */}
            <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
              <path
                d="M12 50L128 24L244 50L128 76L12 50Z"
                stroke="#EEEEEE"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="scale(0.75) translate(0, 40)"
              />
              <path
                d="M12 128L128 102L244 128L128 154L12 128Z"
                stroke="#EEEEEE"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="scale(0.75) translate(0, 40)"
              />
              <path
                d="M12 206L128 180L244 206L128 232L12 206Z"
                stroke="#EEEEEE"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="scale(0.75) translate(0, 40)"
              />
            </svg>
            <p className="font-normal text-sm text-[#f5f8f9] leading-[1.3]">Layers</p>
          </div>
        </div>
        <div className="flex gap-[10px] items-center">
          {/* Keyboard Icon */}
          <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
            <rect x="32" y="72" width="192" height="112" rx="8" stroke="#EEEEEE" strokeWidth="16" fill="none" />
            <line x1="88" y1="112" x2="168" y2="112" stroke="#EEEEEE" strokeWidth="12" strokeLinecap="round" />
            <line x1="88" y1="144" x2="168" y2="144" stroke="#EEEEEE" strokeWidth="12" strokeLinecap="round" />
          </svg>
          {/* Settings Icon */}
          <svg width="20" height="20" viewBox="0 0 256 256" fill="#d7d7d7">
            <rect x="80" y="48" width="24" height="48" rx="4" />
            <rect x="152" y="96" width="24" height="48" rx="4" />
            <rect x="116" y="128" width="24" height="48" rx="4" />
          </svg>
        </div>
      </div>

      {/* Divider */}
      <div className="h-0 w-full border-t border-border-primary" />

      {/* Subtitle Items */}
      <div className="flex flex-col gap-200 items-start w-full">
        {subtitles.map((subtitle, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-25 rounded-200 w-full ${
              index === 1 ? 'bg-surface-primary-hover' : ''
            }`}
          >
            <div className="flex gap-2 items-center">
              {/* Textbox Icon */}
              <svg width="16" height="16" viewBox="0 0 256 256" fill="none">
                <rect x="40" y="64" width="176" height="128" rx="8" stroke="#7ca1f3" strokeWidth="16" fill="none" />
                <line x1="88" y1="112" x2="168" y2="112" stroke="#7ca1f3" strokeWidth="16" strokeLinecap="round" />
                <line x1="120" y1="144" x2="136" y2="144" stroke="#7ca1f3" strokeWidth="16" strokeLinecap="round" />
              </svg>
              <p className="font-normal text-sm text-primary-300 leading-[1.3]">
                {subtitle}
              </p>
            </div>
            {/* Caret Down */}
            <svg width="16" height="16" viewBox="0 0 256 256" fill="none">
              <path
                d="M208 96L128 176L48 96"
                stroke="#7ca1f3"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;

