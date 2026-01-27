# Vidrush Video Editor

A modern, professional video editor interface built with React, TypeScript, and Tailwind CSS, precisely matching the Figma design specifications.

## Features

### 🎨 Complete UI Implementation
- **Header Navigation**: Full toolbar with all editing tools (text, effects, transitions, music, subtitles, etc.)
- **Video Preview**: Central preview area with "BUILD." text overlay
- **Left Sidebar**: Layers panel with subtitle management
- **Right Sidebar**: Control panel with volume, playback speed, and animation controls
- **Timeline**: Professional timeline with video/audio tracks, waveform visualization, and time markers
- **AI Prompt Input**: Integrated AI prompt section for video modifications

### 🎯 Design Fidelity
- **Exact Spacing**: All spacing matches Figma design tokens (2px, 4px, 8px, 12px, 16px, 24px)
- **Precise Colors**: Custom color palette including surface, border, text, and action colors
- **Typography**: Manrope font family with proper weights (Regular, SemiBold, Bold, ExtraBold)
- **Border Radius**: Consistent rounded corners (2px to 32px scale)
- **Icons**: SVG icons inline for all UI elements

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework with custom design tokens

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── VideoEditor.tsx      # Main container component
│   ├── Header.tsx           # Top navigation bar
│   ├── LeftSidebar.tsx      # Layers panel (left side)
│   ├── RightSidebar.tsx     # Controls panel (right side)
│   ├── VideoPreview.tsx     # Central video preview
│   ├── Timeline.tsx         # Bottom timeline with tracks
│   └── AIPromptInput.tsx    # AI prompt input section
├── assets/
│   └── placeholder-video.jpg # Placeholder video thumbnail
├── App.tsx                  # Root component
├── main.tsx                 # Entry point
└── index.css                # Global styles and Tailwind imports
```

## Design Tokens

### Colors
- **Surface**: `#1f1f1f`, `#272727`, `#313131`, `#181818`
- **Border**: `#3a3a3a`, `#313131`, `#5182ef`, `#e35151`
- **Text**: `#eeeeee`, `#cccccc`, `#9e9e9e`
- **Action**: `#2563eb`, `#7ca1f3`, `#a8c1f7`

### Spacing Scale
- `spacing-0`: 0px
- `spacing-25`: 2px
- `spacing-50`: 4px
- `spacing-75`: 8px
- `spacing-100`: 12px
- `spacing-200`: 16px
- `spacing-300`: 24px

### Border Radius Scale
- `radius-100`: 2px
- `radius-200`: 4px
- `radius-300`: 8px
- `radius-400`: 12px
- `radius-500`: 16px
- `radius-600`: 24px
- `radius-700`: 32px

## Component Details

### Header
- Project title and category tag
- Tool icons (text, effects, transitions, music, subtitles, etc.)
- Settings, notifications, and render button

### Left Sidebar (Layers Panel)
- 9 subtitle layers with expand/collapse functionality
- Layer icons and controls
- Scrollable layer list

### Right Sidebar (Controls Panel)
- Video thumbnail preview
- Volume slider with precise controls
- Playback speed dropdown
- 8 animation presets grid

### Timeline
- Video track with thumbnail preview
- Audio track with waveform visualization
- Time markers (0s to 11s)
- Playhead indicator at 0.00s
- Video clips with drag handles
- Control buttons (undo, redo, reset, play, zoom)

### AI Prompt Input
- Text input area
- Image, voice, and import buttons
- Submit button with arrow icon

## Notes

- All measurements and spacing are exact per Figma design
- SVG icons are embedded inline for performance
- Color values use CSS custom properties for maintainability
- Component structure follows atomic design principles
- Fully responsive layout (optimized for 1440x900)

## License

MIT

---

Built with ❤️ using Figma design specifications
