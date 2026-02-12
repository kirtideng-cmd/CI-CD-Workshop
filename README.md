# POSTERHAUS - Poster Selling E-commerce Site

A hyper-styled React e-commerce application for selling art posters. Built with React, TypeScript, and Vite.

## Features

- **Hero Section** with bold typography and floating poster visuals
- **Poster Grid** with category filtering
- **Shopping Cart** with add/remove/quantity controls
- **Newsletter Signup** form
- **Features Section** highlighting store benefits
- **Fully Responsive** design

## Tech Stack

- React 18
- TypeScript
- Vite
- CSS (Hyper-styled with custom properties)

## Design System

### Typography
- **Display Font:** Bebas Neue (bold, impactful headlines)
- **Body Font:** Outfit (modern, clean readability)

### Colors
- Deep black backgrounds (#0a0a0a)
- Neon Pink accent (#ff2d92)
- Neon Cyan (#00f5ff)
- Neon Yellow (#f0ff00)
- Neon Orange (#ff6b2c)

### Effects
- Glassmorphism on header
- Gradient buttons with shimmer animation
- Floating poster stack animation
- Smooth hover transitions
- Pulsing cart badge


## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Cart.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Newsletter.tsx
│   ├── PosterCard.tsx
│   └── PosterGrid.tsx
├── data/
│   └── posters.ts
├── hooks/
│   └── useCart.ts
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

## License

MIT
