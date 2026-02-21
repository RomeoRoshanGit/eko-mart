# EkoMart - Premium Organic & Grocery Store

EkoMart is a modern, high-performance e-commerce platform built with **React** and **Tailwind CSS**. It features a rich, aesthetic design with premium animations, responsive layouts, and a comprehensive suite of pages for a complete shopping experience.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create an optimized production build:
```bash
npm run build
```

---

## 🏗️ Project Structure

The project follows a standard React component-based architecture:

```text
eko-mart/
├── public/              # Static assets (images, icons, svgs)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.js    # Multi-tier dynamic header
│   │   ├── Footer.js    # Dark-themed comprehensive footer
│   │   ├── ProductCard.js # Grid view product cards
│   │   ├── VendorCard.js  # Dedicated vendor directory cards
│   │   └── ...          # Sections (Hero, Featured, Categories, etc.)
│   ├── pages/           # High-level page components
│   │   ├── HomePage.js
│   │   ├── ShopPage.js     # Grid/List toggle shop view
│   │   ├── AboutPage.js    # Multi-section company info
│   │   ├── VendorsPage.js  # Vendor directory with search
│   │   ├── BlogPage.js     # Modern grid blog
│   │   ├── ContactPage.js  # Interactive map & contact info
│   │   └── AccountPage.js  # User dashboard with sidebar
│   ├── App.js           # Routing and core logic
│   ├── index.js         # Application entry point
│   └── index.css        # Tailwind directives and global styles
├── tailwind.config.js   # Custom brand colors and theme setup
└── package.json
```

---

## ✨ Key Features

- **Dynamic Header**: Automatically switches styles between the Homepage (Green) and other pages (White).
- **Dual View Shop**: Toggle between a 5-column grid and a detailed list view with nutritional information.
- **Vendor Directory**: Full search and status tracking (Open/Closed) for multiple store locations.
- **Wishlist & Compare**: Functional pages for managing favorite products and side-by-side comparisons.
- **Interactive About Page**: Professional layout featuring team grids, mission stats, and customer testimonials.
- **Contact Integration**: Embedded Google Maps with localized office cards.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile screens.

## 🛠️ Tech Stack

- **React**: Frontend framework
- **React Router**: Client-side navigation
- **Tailwind CSS**: Utility-first styling with custom brand tokens
- **Lucide/SVG Icons**: Optimized vector iconography
- **Unsplash API**: High-quality network imagery

---

Developed for EkoMart - Healthy Food, Healthy Life.
