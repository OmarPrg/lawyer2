# Project Architecture: Lawyer Firm Website

This document provides a high-level overview of the technical architecture, project structure, and technology stack used in the **Lawyer Firm** website.

## 🚀 Technology Stack

The application is built with modern, high-performance web technologies:

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) with PostCSS |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & [Motion](https://motion.dev/) |
| **Smooth Scroll** | [Lenis](https://github.com/darkroomengineering/lenis) |
| **UI Components** | [Radix UI](https://www.radix-ui.com/) (Primitives) & [Shadcn/UI](https://ui.shadcn.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) & Google Material Symbols |
| **Maps** | [Maplibre GL](https://maplibre.org/) |

## 📁 Project Structure

The project follows a modular structure optimized for Next.js App Router:

```text
├── app/                  # Routing, Page layouts, and Global styles
│   ├── about/            # About page route
│   ├── contact/          # Contact page route
│   ├── services/         # Services details routes
│   ├── globals.css       # Global CSS with Tailwind 4 directives
│   ├── layout.tsx        # Root layout (Navbar, Footer, Providers)
│   └── page.tsx          # Homepage (Landing)
├── components/           # Business-specific React components
│   ├── ui/               # Reusable UI primitives and animation wrappers
│   ├── Hero.tsx          # Hero section with premium animations
│   ├── AboutUs.tsx       # About section
│   ├── Services.tsx      # Services grid
│   ├── Navbar.tsx        # Responsive navigation with glassmorphism
│   └── ...               # Other section-based components
├── lib/                  # Utility functions and shared logic
├── public/               # Static assets (images, icons, etc.)
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Design System & UX

### 1. Typography & RTL Support
- **Fonts**: Uses `Cairo` (for Arabic display/headings) and `Montserrat` (for Latin/secondary text).
- **RTL**: The application is natively built for **Right-To-Left (RTL)** layouts, using `dir="rtl"` and `lang="ar"` on the root HTML element.
- **Responsive**: Fully optimized for mobile, tablet, and desktop views.

### 2. Premium Experience Features
- **Smooth Scrolling**: Integrated with `Lenis` for a luxury, fluid scrolling feel.
- **Glassmorphism**: Heavy use of backdrop blurs and semi-transparent borders for a premium, modern aesthetic.
- **Micro-Animations**: 
  - **Preloader**: Implements a smooth entrance experience.
  - **Mouse Follow**: Subtle background accents that follow the cursor.
  - **Scroll Entrance**: Sections fade and slide into view as the user scrolls.

### 3. Component Architecture
- **Compound Components**: Utilizing Radix UI for accessible, high-quality interactive elements like Dialogs and Modals.
- **Section-Based Composition**: The homepage is composed of modular sections (`Hero`, `AboutUs`, `Services`, etc.), making it easy to rearrange or update content.

## 🛠️ Configuration & Build

- **Eint/Prettier**: Standard Next.js ESLint configuration.
- **Build System**: optimized through Next.js for static optimization and efficient image handling.
- **Package Manager**: Supports `pnpm` or `npm`.

## 📈 SEO & Accessibility

- **Semantic HTML**: Uses proper sectioning tags (`main`, `section`, `nav`, `footer`).
- **Meta Tags**: Configured in `app/layout.tsx` for dynamic title and description management.
- **RTL Accessibility**: All navigation and flow patterns are adjusted for Arabic reading directions.
