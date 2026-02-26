# Eason Wu - Portfolio Website

A modern, high-performance portfolio website built with React, Vite, and Tailwind CSS.

## ✨ Features

- **Lightning Fast** - Built with Vite for optimal development experience and production performance
- **Performance Optimized** - Code splitting, lazy loading, and optimized for Core Web Vitals
- **Smooth Animations** - Beautiful transitions using Framer Motion
- **Responsive Design** - Works perfectly on all devices
- **Modern Stack** - React 18, Tailwind CSS, Vite
- **SEO Ready** - Optimized meta tags and semantic HTML

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) - Fast JavaScript package manager

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

Visit `http://localhost:5173` to see the website.

## 🏗️ Build for Production

```bash
# Build the website
bun run build

# Preview production build
bun run preview
```

## 📦 Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
# Install Vercel CLI
bun install -g vercel

# Deploy
vercel
```

Or connect your Git repository to Vercel for automatic deployments.

**Note**: The `vercel.json` configuration is already set up for optimal deployment.

## 🛠️ Project Structure

```
├── src/
│   ├── components/     # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component with lazy loading
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles + Tailwind
├── public/             # Static assets
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
└── vercel.json         # Vercel deployment config
```

## ⚡ Performance Features

- **Code Splitting** - Components are lazy loaded for optimal bundle size
- **Tree Shaking** - Unused code is removed from production builds
- **CSS Optimization** - Tailwind CSS purges unused styles
- **Image Optimization** - Lazy loading and modern formats
- **GPU Acceleration** - Animations use transforms for smooth 60fps
- **Minimal Bundle** - Only essential dependencies

## 🎨 Customization

### Update Content

Edit the component files in `src/components/` to personalize:
- **Hero.jsx** - Update your name, title, and intro
- **Projects.jsx** - Add your portfolio projects
- **About.jsx** - Update your bio and skills
- **Contact.jsx** - Add your social links

### Update Styling

Modify `tailwind.config.js` to customize colors, fonts, and animations.

## 📊 Performance

Target metrics (Core Web Vitals):
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🙏 Acknowledgments

- Design inspired by modern portfolio websites
- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Powered by [Vite](https://vitejs.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
