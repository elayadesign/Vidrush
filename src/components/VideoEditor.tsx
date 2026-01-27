import React from 'react';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Timeline from './Timeline';
import VideoPreview from './VideoPreview';
import AIPromptInput from './AIPromptInput';

const VideoEditor: React.FC = () => {
  return (
    <div className="bg-grayscale-870 relative w-full h-full overflow-hidden">
      {/* Background Video Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/src/assets/placeholder-video.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Header */}
      <Header />

      {/* Left Sidebar - Layers Panel (extends to timeline area) */}
      <LeftSidebar />

      {/* Main Video Preview */}
      <VideoPreview />

      {/* Right Sidebar - Controls Panel */}
      <RightSidebar />

      {/* AI Prompt Input */}
      <AIPromptInput />

      {/* Bottom Timeline */}
      <Timeline />
    </div>
  );
};

export default VideoEditor;

