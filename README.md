# Mission 0

A modern web application built with Vite, React, and Material-UI.

## Project Overview

This project is a Vite-based React application that utilizes Material-UI for its component library. It's designed to be fast, efficient, and easy to develop with.

## Features

- Modern React application with Vite
- Material-UI components for consistent UI
- TypeScript support
- Hot Module Replacement (HMR)
- Production-ready build configuration

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview the production build:
```bash
npm run preview
```

## Project Structure

```
mission-0/
├── .git/                # Git repository files
├── .gitignore           # Git ignore file
├── .DS_Store            # macOS system file
├── eslint.config.js     # ESLint configuration
├── index.html          # Main HTML file
├── node_modules/       # Project dependencies
├── package.json        # Project configuration
├── package-lock.json   # Dependency versions
├── public/            # Static assets
├── src/               # Source code directory
│   ├── components/    # React components
│   │   ├── CardSection.jsx      # Card-based content section
│   │   ├── CardSection.module.css # Card section styles
│   │   ├── Footer.jsx           # Footer component
│   │   ├── HeroSection.jsx      # Hero banner section
│   │   ├── HeroSection.module.css # Hero section styles
│   │   ├── Home.jsx            # Home page component
│   │   ├── Home.module.css     # Home page styles
│   │   ├── NavBar.jsx          # Navigation bar component
│   │   └── NavBar.module.css   # Navigation bar styles
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Entry point
└── vite.config.js     # Vite configuration
```

### Key Directories

- `/src` - Contains all source code
  - `components/` - Reusable React components
  - `pages/` - Page-level components
  - `styles/` - CSS/SCSS styles
  - `utils/` - Utility functions and helpers
- `/public` - Static assets (images, fonts, etc.)
- `/node_modules` - Project dependencies (managed by npm)

## Technologies Used

- React 19.1.0
- Vite 6.3.5
- Material-UI 7.0.2
- TypeScript
- ESLint for code linting

## Development

The project is set up with ESLint for code quality. You can run the linter with:

```bash
npm run lint
```

## License

This project is proprietary and confidential. All rights reserved.

## Support

For support, please contact the project maintainer.
