import React from 'react';

const VideoPreview: React.FC = () => {
  return (
    <div
      className="absolute h-[399px] left-1/2 overflow-hidden rounded-300 top-[150px] -translate-x-1/2 w-[728px]"
      data-node-id="64:22692"
    >
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden rounded-300">
        <img
          src="/src/assets/placeholder-video.jpg"
          alt="Video Preview"
          className="absolute h-[137.95%] left-0 top-[-18.62%] w-full object-cover"
        />
      </div>

      {/* BUILD Text Overlay - Top */}
      <p
        className="absolute font-extrabold leading-normal left-[calc(50%+0.5px)] text-[#f5f8f9] text-[200px] text-center top-[calc(50%-148.5px)] -translate-x-1/2"
        style={{ fontFamily: 'Manrope' }}
      >
        BUILD.
      </p>

      {/* BUILD Text Overlay - Bottom */}
      <p
        className="absolute font-extrabold leading-normal left-[calc(50%+0.5px)] text-[#f5f8f9] text-[200px] text-center top-[calc(50%+226.5px)] -translate-x-1/2"
        style={{ fontFamily: 'Manrope' }}
      >
        BUILD.
      </p>
    </div>
  );
};

export default VideoPreview;

