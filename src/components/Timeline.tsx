import React from 'react';

const Timeline: React.FC = () => {
  const timeMarkers = ['0s', '1s', '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', '11s'];

  return (
    <div
      className="absolute bottom-3 flex h-[248px] items-center left-3 right-3"
      data-node-id="64:23008"
    >
      {/* Left Sidebar - Layers Panel */}
      <div className="bg-surface-primary border-b border-l border-t border-border-primary flex flex-col gap-200 h-full items-start overflow-clip px-200 py-200 rounded-bl-500 rounded-tl-500 w-[251px]">
        {/* Layers Header */}
        <div className="flex items-center justify-between px-0 py-25 rounded-400 w-full">
          <div className="flex gap-0 items-center">
            <div className="flex gap-2 items-center">
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
            <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
              <rect x="32" y="72" width="192" height="112" rx="8" stroke="#EEEEEE" strokeWidth="16" fill="none" />
            </svg>
            <svg width="20" height="20" viewBox="0 0 256 256" fill="#d7d7d7">
              <rect x="80" y="48" width="24" height="48" rx="4" />
              <rect x="152" y="96" width="24" height="48" rx="4" />
              <rect x="116" y="128" width="24" height="48" rx="4" />
            </svg>
          </div>
        </div>

        <div className="h-0 w-full border-t border-border-primary" />

        {/* Subtitle Items */}
        <div className="flex flex-col gap-200 items-start w-full overflow-y-auto">
          {Array(9).fill('Subtitle').map((_, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-25 rounded-200 w-full ${
                index === 1 ? 'bg-surface-primary-hover' : ''
              }`}
            >
              <div className="flex gap-2 items-center">
                <svg width="16" height="16" viewBox="0 0 256 256" fill="none">
                  <rect x="40" y="64" width="176" height="128" rx="8" stroke="#7ca1f3" strokeWidth="16" fill="none" />
                </svg>
                <p className="font-normal text-sm text-primary-300 leading-[1.3]">Subtitle</p>
              </div>
              <svg width="16" height="16" viewBox="0 0 256 256" fill="none">
                <path d="M208 96L128 176L48 96" stroke="#7ca1f3" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Main Timeline Area */}
      <div className="bg-surface-primary border border-border-primary flex flex-1 flex-col gap-0 h-full items-end overflow-clip p-0 rounded-br-500 rounded-tr-500">
        {/* Timeline Header */}
        <div className="flex flex-col gap-0 items-start w-full">
          {/* Tools Header */}
          <div className="border-b border-border-primary flex items-center justify-between px-300 py-400 w-full">
            {/* Left Tools */}
            <div className="flex gap-400 items-center">
              <div className="flex gap-3 items-start">
                {/* Undo */}
                <button className="w-5 h-5">
                  <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
                    <path d="M80 120L40 80L80 40M40 80H128C176 80 216 120 216 168V168C216 216 176 256 128 256H120" stroke="#d7d7d7" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {/* Redo */}
                <button className="w-5 h-5">
                  <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
                    <path d="M176 120L216 80L176 40M216 80H128C80 80 40 120 40 168V168C40 216 80 256 128 256H136" stroke="#d7d7d7" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {/* Reset */}
                <button className="w-5 h-5">
                  <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
                    <path d="M176 128C176 179.2 134.4 220.8 83.2 220.8C32 220.8 -9.6 179.2 -9.6 128C-9.6 76.8 32 35.2 83.2 35.2C134.4 35.2 176 76.8 176 128Z" stroke="#d7d7d7" strokeWidth="16" />
                    <path d="M120 88L48 88L48 52" stroke="#d7d7d7" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" transform="translate(100, 20)" />
                  </svg>
                </button>
              </div>

              <div className="h-[17px] w-0 border-r border-border-primary" />

              {/* Play Button */}
              <div className="flex gap-2 items-center">
                <button className="w-7 h-7">
                  <svg width="28" height="28" viewBox="0 0 256 256" fill="none">
                    <circle cx="128" cy="128" r="96" stroke="#EEEEEE" strokeWidth="16" fill="none" />
                    <path d="M176 128L108 168L108 88L176 128Z" fill="#EEEEEE" />
                  </svg>
                </button>
                <p className="font-normal text-sm text-[#f5f8f9] leading-[1.3]">00:00:00 / 00:15:22</p>
              </div>
            </div>

            {/* Right Tools */}
            <div className="flex gap-200 items-center">
              {/* Zoom Bar */}
              <div className="bg-surface-on-primary flex gap-100 items-center p-75 rounded-300 w-[200px]">
                <button className="w-2 h-2">
                  <svg width="8" height="8" viewBox="0 0 256 256" fill="none">
                    <line x1="40" y1="128" x2="216" y2="128" stroke="#EEEEEE" strokeWidth="24" strokeLinecap="round" />
                  </svg>
                </button>
                <div className="relative h-0 w-[100px]">
                  <div className="absolute inset-0 border-t-2 border-[#616161]" />
                  <div className="absolute left-0 top-0 w-5 border-t-2 border-border-action-primary" />
                  <div className="absolute left-10 top-1/2 -translate-y-1/2 w-4 h-4">
                    <div className="bg-surface-blue-200 border border-border-action-primary rounded-full w-4 h-4" />
                    <div className="absolute bg-surface-blue-500 left-1 rounded-full w-2 h-2 top-1" />
                  </div>
                </div>
                <button className="w-2 h-2">
                  <svg width="8" height="8" viewBox="0 0 256 256" fill="none">
                    <line x1="128" y1="40" x2="128" y2="216" stroke="#EEEEEE" strokeWidth="24" strokeLinecap="round" />
                    <line x1="40" y1="128" x2="216" y2="128" stroke="#EEEEEE" strokeWidth="24" strokeLinecap="round" />
                  </svg>
                </button>
                <button className="w-2 h-2">
                  <svg width="8" height="8" viewBox="0 0 256 256" fill="none">
                    <circle cx="4" cy="4" r="3" stroke="#EEEEEE" strokeWidth="1" fill="none" />
                  </svg>
                </button>
              </div>

              <div className="h-3 w-0 border-r border-border-primary" />

              <button className="w-5 h-5">
                <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
                  <path d="M168 128L128 96M168 128L208 128M168 128L128 160M96 64L32 96L32 160L96 192L96 64Z" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button className="w-5 h-5">
                <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
                  <path d="M144 69.3C144 69.3 160 80 160 96C160 112 144 122.7 144 122.7M176 45.3C176 45.3 208 64 208 96C208 128 176 146.7 176 146.7M88 136L88 56L128 32L128 184L88 160L32 160L32 136L88 136Z" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button className="w-5 h-5">
                <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
                  <rect x="32" y="72" width="192" height="112" rx="8" stroke="#EEEEEE" strokeWidth="16" fill="none" />
                </svg>
              </button>

              <button className="w-5 h-5">
                <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
                  <path d="M208 48L208 208L48 208L48 48L208 48ZM128 88L128 168M88 128L168 128" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button className="w-5 h-5">
                <svg width="20" height="20" viewBox="0 0 256 256" fill="#d7d7d7">
                  <path d="M208 80L208 208L32 208L32 80L120 80L136 64L208 64L208 80Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Time Markers */}
          <div className="flex items-center justify-between pl-[60px] pr-600 py-75 w-full">
            <div className="flex flex-1 items-center justify-between">
              {timeMarkers.map((time, index) => (
                <React.Fragment key={time}>
                  <p className="font-bold text-xs text-text-tertiary leading-[1.14]">{time}</p>
                  {index < timeMarkers.length - 1 && (
                    <>
                      <div className="w-[2px] h-[2px] rounded-full bg-text-tertiary" />
                      <div className="w-[2px] h-[2px] rounded-full bg-text-tertiary" />
                      <div className="w-[2px] h-[2px] rounded-full bg-text-tertiary" />
                      <div className="w-[2px] h-[2px] rounded-full bg-text-tertiary" />
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Video Tracks */}
        <div className="flex flex-1 flex-col gap-[10px] items-center justify-center w-full px-600">
          {/* Video Track */}
          <div className="flex gap-300 items-center w-full">
            <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
              <path d="M144 69C144 69 160 80 160 96C160 112 144 123 144 123M176 45C176 45 208 64 208 96C208 128 176 147 176 147M88 136V56L128 32V184L88 160H32V136H88Z" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex-1 relative">
              <div className="bg-surface-primary-hover h-[52px] overflow-hidden pl-200 pr-400 py-75 relative rounded-300 w-full">
                {/* Video Thumbnails with Border */}
                <div className="absolute border-700 border-border-action-primary flex items-center left-0 overflow-hidden rounded-300 top-1/2 -translate-y-1/2">
                  {Array(4).fill(null).map((_, i) => (
                    <div key={i} className="h-[52px] w-[86px] relative">
                      <img
                        src="/src/assets/placeholder-video.jpg"
                        alt=""
                        className="absolute h-[137.95%] left-0 top-[-18.62%] w-[125.58%] object-cover"
                      />
                    </div>
                  ))}
                  {/* Edge handles */}
                  <div className="absolute h-4 right-0 top-1/2 -translate-y-1/2 w-2 bg-border-action-primary rounded-r" />
                  <div className="absolute h-4 left-0 top-1/2 -translate-y-1/2 w-2 bg-border-action-primary rounded-l" />
                </div>

                {/* Additional clips */}
                <div className="absolute border-700 border-grayscale-450 flex items-center left-[634px] overflow-hidden rounded-300 top-1/2 -translate-y-1/2 w-[130px]">
                  {Array(2).fill(null).map((_, i) => (
                    <div key={i} className="h-[52px] w-[86px] relative">
                      <img
                        src="/src/assets/placeholder-video.jpg"
                        alt=""
                        className="absolute h-[137.95%] left-0 top-[-18.62%] w-[125.58%] object-cover"
                      />
                    </div>
                  ))}
                  <div className="absolute h-4 right-0 top-1/2 -translate-y-1/2 w-2 bg-grayscale-450 rounded-r" />
                  <div className="absolute h-4 left-0 top-1/2 -translate-y-1/2 w-2 bg-grayscale-450 rounded-l" />
                </div>

                <div className="absolute border-700 border-grayscale-450 flex items-center left-[788px] overflow-hidden rounded-300 top-1/2 -translate-y-1/2 w-[130px]">
                  {Array(2).fill(null).map((_, i) => (
                    <div key={i} className="h-[52px] w-[86px] relative">
                      <img
                        src="/src/assets/placeholder-video.jpg"
                        alt=""
                        className="absolute h-[137.95%] left-0 top-[-18.62%] w-[125.58%] object-cover"
                      />
                    </div>
                  ))}
                  <div className="absolute h-4 right-0 top-1/2 -translate-y-1/2 w-2 bg-grayscale-450 rounded-r" />
                  <div className="absolute h-4 left-0 top-1/2 -translate-y-1/2 w-2 bg-grayscale-450 rounded-l" />
                </div>

                {/* Control buttons */}
                <div className="absolute bg-grayscale-600 flex items-center left-[350px] p-1 rounded-700 top-7">
                  <svg width="12" height="12" viewBox="0 0 256 256" fill="none">
                    <path d="M32 96L224 96M224 96L176 48M224 96L176 144M224 160L32 160M32 160L80 208M32 160L80 112" stroke="#d7d7d7" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="absolute bg-grayscale-600 flex items-center left-[350px] p-1 rounded-700 top-1">
                  <svg width="12" height="12" viewBox="0 0 256 256" fill="none" transform="rotate(180)">
                    <path d="M128 32L128 224M224 128L32 128L64 160M32 128L64 96" stroke="#d7d7d7" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Audio Track */}
          <div className="flex gap-300 items-center w-full">
            <svg width="20" height="20" viewBox="0 0 256 256" fill="none">
              <path d="M144 69C144 69 160 80 160 96C160 112 144 123 144 123M176 45C176 45 208 64 208 96C208 128 176 147 176 147M88 136V56L128 32V184L88 160H32V136H88Z" stroke="#EEEEEE" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex-1">
              <div className="bg-surface-primary-hover h-8 overflow-hidden pl-200 pr-400 py-75 relative rounded-300 w-full">
                <div className="absolute h-8 left-0 top-0 w-[1073px]">
                  {/* Audio waveform visualization */}
                  <svg className="w-full h-full" viewBox="0 0 1073 32" preserveAspectRatio="none">
                    {Array.from({ length: 200 }).map((_, i) => {
                      const height = Math.random() * 24 + 4;
                      const y = (32 - height) / 2;
                      return (
                        <rect
                          key={i}
                          x={i * 5.365}
                          y={y}
                          width="2"
                          height={height}
                          fill="#7746C3"
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Playhead */}
        <div className="absolute bg-border-action-error flex gap-[10px] items-center justify-center left-[43px] px-75 py-25 rounded-200 top-[59px]">
          <p className="font-semibold text-sm text-text-primary text-center tracking-[-0.28px] leading-[1.3]">
            0.00
          </p>
          <div className="absolute h-[293px] left-1/2 top-[21px] -translate-x-1/2 w-0 border-r-2 border-border-action-error" />
        </div>
      </div>
    </div>
  );
};

export default Timeline;

