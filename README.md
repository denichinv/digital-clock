# Digital Clock App

A minimalist, fullscreen clock application built with React and Tailwind CSS that displays the current time and date with a beautiful backdrop.

![Clock App Screenshot](screenshots/initial-view.png)

## Overview

This application displays a clean, elegant clock with the current time and date, rendered over a backdrop image. The clock updates every second and features a subtle backdrop blur effect for enhanced readability.

## Features

- Real-time clock that updates every second
- Current date display with full weekday, day, month, and year format
- Responsive fullscreen design
- Aesthetic backdrop with blur effect for improved readability
- 24-hour time format (configurable)
- Clean, monospaced font for better time visibility

## Technologies Used

- React
- Vite
- Tailwind CSS
- JavaScript Date API

## Getting Started

### Prerequisites

- Node.js (version 14.x or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/denichinv/digital-clock.git
   cd digital-clock
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Customization

### Changing the Background

Replace the `wallpaper.jpg` file in the `assets` folder with your preferred image. The image path is referenced in `App.jsx`.

### Time Format

To switch between 12-hour and 24-hour formats, modify the `hour12` property in `App.jsx`:

```jsx
// For 12-hour format
time.toLocaleTimeString("en-GB", { hour12: true })

// For 24-hour format (current setting)
time.toLocaleTimeString("en-GB", { hour12: false })
```

### Date Format

The date format can be customized by changing the options in the `toLocaleDateString` method:

```jsx
time.toLocaleDateString("en-GB", { 
  weekday: "long",  // "long", "short", or "narrow"
  day: "2-digit",   // "numeric" or "2-digit"
  month: "long",    // "numeric", "2-digit", "long", "short", or "narrow"
  year: "numeric"   // "numeric" or "2-digit"
})
```


