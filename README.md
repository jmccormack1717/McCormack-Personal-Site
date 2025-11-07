# McCormack Personal Portfolio

A modern portfolio website built with React, showcasing work in Software Engineering and Machine Learning Research.

## Features

- Four main sections: About, Experience, Research, and Education
- Modern, responsive design with vibrant purple gradient theme
- Smooth navigation with React Router
- Optimized for performance and accessibility

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

This site is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **Push to main/master branch:**
   - The GitHub Actions workflow will automatically build and deploy your site
   - Deployment happens on every push to the main/master branch

3. **If deploying to a subdirectory:**
   - If your site is at `username.github.io/repo-name`, update `vite.config.js`:
   ```js
   base: '/repo-name/'
   ```

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
# Then push the dist folder to the gh-pages branch
```

## Tech Stack

- React 18
- React Router DOM
- Vite
- Modern CSS with CSS Variables
- GitHub Actions for CI/CD

