import React from 'react';

const AIPromptInput: React.FC = () => {
  return (
    <div
      className="absolute bg-surface-primary border border-border-primary bottom-[271px] flex flex-col items-center justify-end overflow-hidden p-75 right-3 rounded-500 top-[73px] w-[252px]"
      data-node-id="64:23280"
    >
      {/* Prompt Input Card */}
      <div className="bg-surface-on-primary border border-border-primary flex flex-col gap-300 items-start p-100 rounded-300 w-full">
        <p className="font-normal text-xs text-text-secondary leading-[1.3]">
          Write any Prompt to modify the video
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-between px-0 w-full">
          {/* Left Icons */}
          <div className="flex gap-3 items-center">
            {/* Image Icon */}
            <button className="w-5 h-5 hover:opacity-80 transition-opacity" title="Image">
              <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
                <rect x="32" y="48" width="192" height="160" rx="8" stroke="white" strokeWidth="16" fill="none" />
                <path d="M32 152L88 96L144 152M144 152L176 120L224 168" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="156" cy="100" r="12" fill="white" />
              </svg>
            </button>

            {/* Microphone Icon */}
            <button className="w-5 h-5 hover:opacity-80 transition-opacity" title="Voice Input">
              <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
                <rect x="88" y="24" width="80" height="128" rx="40" stroke="white" strokeWidth="16" fill="none" />
                <line x1="128" y1="200" x2="128" y2="232" stroke="white" strokeWidth="16" strokeLinecap="round" />
                <path d="M56 136C56 136 56 168 128 168C200 168 200 136 200 136" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Import Icon */}
            <button className="w-5 h-5 hover:opacity-80 transition-opacity" title="Import">
              <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
                <rect x="32" y="32" width="192" height="192" rx="8" stroke="white" strokeWidth="16" fill="none" />
                <path d="M168 80L216 128L168 176M216 128L96 128M96 128L128 96M96 128L128 160" stroke="white" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Submit Button */}
          <button className="bg-surface-blue-200 border border-border-action-primary flex items-center justify-center p-1 rounded-600 hover:opacity-90 transition-opacity">
            <svg width="16" height="16" viewBox="0 0 256 256" fill="none">
              <path
                d="M128 216L128 40M128 40L72 96M128 40L184 96"
                stroke="#1e50bf"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIPromptInput;

