import React from 'react';

const Header: React.FC = () => {
  return (
    <div
      className="absolute bg-surface-primary border border-border-primary top-3 left-3 right-3 rounded-500 flex items-center justify-between pl-200 pr-75 py-75"
      data-node-id="64:22908"
    >
      {/* Left Section - Tools */}
      <div className="flex gap-6 items-center">
        {/* Back Button & Divider */}
        <div className="flex gap-100 items-center">
          <button className="w-5 h-5 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
              <path
                d="M224 128L48 128M48 128L120 56M48 128L120 200"
                stroke="#EEEEEE"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="h-[17px] w-0 border-r border-border-primary" />
        </div>

        {/* Tool Icons */}
        <button className="w-5 h-5 hover:opacity-80 transition-opacity" title="Text">
          <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
            <path
              d="M56 88L56 48L200 48L200 88M128 48L128 208M96 208L160 208"
              stroke="#EEEEEE"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="w-5 h-5 hover:opacity-80 transition-opacity" title="Effects">
          <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
            <circle cx="128" cy="128" r="80" stroke="#EEEEEE" strokeWidth="16" fill="none" />
            <circle cx="128" cy="80" r="12" fill="#EEEEEE" />
            <circle cx="176" cy="128" r="12" fill="#EEEEEE" />
            <circle cx="80" cy="128" r="12" fill="#EEEEEE" />
          </svg>
        </button>

        <button className="w-5 h-5 hover:opacity-80 transition-opacity" title="Transitions">
          <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
            <path
              d="M48 128L208 128M208 128L168 168M208 128L168 88"
              stroke="#EEEEEE"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="w-5 h-5 hover:opacity-80 transition-opacity" title="Music">
          <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
            <circle cx="88" cy="192" r="24" stroke="#EEEEEE" strokeWidth="16" fill="none" />
            <circle cx="184" cy="176" r="24" stroke="#EEEEEE" strokeWidth="16" fill="none" />
            <path d="M112 192L112 56L208 40L208 176" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button className="w-5 h-5 hover:opacity-80 transition-opacity" title="Subtitles">
          <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
            <rect x="32" y="48" width="192" height="160" rx="8" stroke="#EEEEEE" strokeWidth="16" fill="none" />
            <line x1="56" y1="136" x2="120" y2="136" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" />
            <line x1="160" y1="136" x2="200" y2="136" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" />
            <line x1="56" y1="168" x2="120" y2="168" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" />
            <line x1="160" y1="168" x2="200" y2="168" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" />
          </svg>
        </button>

        <button className="w-5 h-5 hover:opacity-80 transition-opacity" title="Upload">
          <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
            <path
              d="M80 128L80 40L176 40L176 128M128 88L128 216M96 56L128 24L160 56"
              stroke="#EEEEEE"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="w-5 h-5 hover:opacity-80 transition-opacity" title="History">
          <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
            <path
              d="M136 80L136 128L172 152M224 128C224 179.2 182.4 220.8 131.2 220.8C80 220.8 38.4 179.2 38.4 128C38.4 76.8 80 35.2 131.2 35.2C182.4 35.2 224 76.8 224 128Z"
              stroke="#EEEEEE"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M68 88L32 88L32 52" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button className="w-5 h-5 hover:opacity-80 transition-opacity" title="Download">
          <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
            <path
              d="M128 152L128 32M128 152L80 104M128 152L176 104M216 152L216 208L40 208L40 152"
              stroke="#EEEEEE"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Center Section - Project Info */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center">
        <p className="font-semibold text-base text-white leading-5">Industrial revolution</p>
        <div className="bg-[#272727] border border-[#3a3a3a] flex gap-1 items-center px-2 py-1 rounded-200">
          <p className="font-semibold text-xs text-[#fafafa]">Documentary.History</p>
        </div>
        <button className="w-4 h-4 hover:opacity-80 transition-opacity">
          <svg width="16" height="16" viewBox="0 0 256 256" fill="none">
            <circle cx="128" cy="128" r="96" stroke="#EEEEEE" strokeWidth="16" fill="none" />
            <path d="M128 80L128 128M128 176L128 176.01" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Right Section - Actions */}
      <div className="flex gap-200 items-center justify-end">
        <button className="w-5 h-5 hover:opacity-80 transition-opacity" title="Settings">
          <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
            <path
              d="M128 80A48 48 0 1 0 128 176A48 48 0 1 0 128 80Z"
              stroke="#EEEEEE"
              strokeWidth="16"
              fill="none"
            />
            <path
              d="M196 128L212 108L196 88L196 68L176 56L156 40L136 40L128 32L120 40L100 40L80 56L60 68L60 88L44 108L60 128L44 148L60 168L60 188L80 200L100 216L120 216L128 224L136 216L156 216L176 200L196 188L196 168L212 148L196 128Z"
              stroke="#EEEEEE"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button className="w-5 h-5 hover:opacity-80 transition-opacity" title="Notifications">
          <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
            <path
              d="M96 192C96 209.7 110.3 224 128 224C145.7 224 160 209.7 160 192M184 80C184 63.2 177.2 47.2 165.5 35.5C153.8 23.8 137.8 16 121 16C104.2 16 88.2 23.8 76.5 35.5C64.8 47.2 58 63.2 58 80C58 156 32 184 32 184L224 184C224 184 198 156 198 80"
              stroke="#EEEEEE"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="bg-action-primary border border-border-action-primary flex gap-50 items-center justify-center px-75 py-75 rounded-400 hover:opacity-90 transition-opacity"
        >
          <p className="font-semibold text-sm text-text-primary leading-[1.14]">
            Render video
          </p>
        </button>
      </div>
    </div>
  );
};

export default Header;

