# LightOnTexture - Professional Photography Portfolio

A professional photography portfolio website built with React, TypeScript, Tailwind CSS, and deployed on AWS Amplify.

**Live Site**: [https://www.lightontexture.com](https://www.lightontexture.com)

## Project Overview

LightOnTexture is a clean, minimal photography portfolio showcasing professional work across multiple galleries. The site features custom typography, responsive design, and seamless navigation optimized for showcasing photography.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Build Tool**: Vite
- **Font**: Custom Eurostile Extended Regular
- **Deployment**: AWS Amplify
- **Domain**: GoDaddy DNS with SSL

## Features

- 🎨 Clean, minimal design optimized for photography
- 📱 Fully responsive across all devices
- 🖼️ Multiple gallery pages (Panorama Color/B&W, Portraiture, Still Life)
- 🎯 Custom image carousel component
- 💼 About page and Art Prints information
- 📧 Contact form integration ready
- ⚡ Fast loading with Vite build optimization
- 🔒 HTTPS with custom domain and SSL

## Site Structure

### Pages
- **Home**: Hero section with featured photography
- **Panorama Color**: Color landscape photography gallery
- **Panorama B&W**: Black & white landscape photography gallery  
- **Portraiture**: Portrait photography gallery
- **Still Life**: Still life photography gallery
- **About**: Photographer biography and information
- **Art Prints**: Print purchasing and sizing information

### Components
- `Header`: Navigation and branding
- `Footer`: Contact information and social links
- `Carousel`: Custom image gallery component
- `Hero`: Homepage hero section

## Development Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd LightOnTexture
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```
   Site will be available at `http://localhost:5173`

4. Build for production:
   ```bash
   npm run build
   ```

## Deployment

### AWS Amplify Setup

The site is deployed using AWS Amplify with the following configuration:

1. **Build Settings** (`amplify.yml`):
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

2. **SPA Routing** (`public/_redirects`):
   ```
   /*    /index.html   200
   ```

### Domain Configuration

**Domain**: `lightontexture.com`
- **Primary URL**: `https://www.lightontexture.com` 
- **Root redirect**: `https://lightontexture.com` → `https://www.lightontexture.com`

#### GoDaddy DNS Records:
- **CNAME**: `www` → `d1234abcd5efgh.amplifyapp.com`
- **Forwarding**: Root domain → `https://www.lightontexture.com` (301 redirect)
- **SSL**: Auto-managed by both GoDaddy (forwarding) and AWS (Amplify)

### SSL/HTTPS
- AWS Amplify manages SSL certificate for `www.lightontexture.com`
- GoDaddy manages SSL certificate for root domain forwarding
- Both domains serve content over HTTPS

## File Structure

```
LightOnTexture/
├── public/
│   ├── _redirects              # Amplify SPA routing
│   ├── hero-image.jpg          # Homepage hero image
│   ├── about-image.jpg         # About page image
│   ├── art-prints-image.jpg    # Art prints page image
│   └── [gallery-images]/       # All gallery photography
├── src/
│   ├── assets/
│   │   └── Eurostile Extended Regular.ttf
│   ├── components/
│   │   ├── Header.tsx          # Navigation component
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Hero.tsx            # Hero section
│   │   └── Carousel.tsx        # Image gallery component
│   ├── pages/
│   │   ├── AboutPage.tsx       # About page
│   │   ├── ArtPrintsPage.tsx   # Art prints information
│   │   ├── PanoramaColorPage.tsx # Color landscape gallery
│   │   ├── PanoramaBWPage.tsx  # B&W landscape gallery
│   │   ├── PortraiturePage.tsx # Portrait gallery
│   │   └── StillLifePage.tsx   # Still life gallery
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   ├── App.tsx                 # Main app component with routing
│   ├── main.tsx                # App entry point
│   └── index.css               # Global styles and Tailwind
├── business-card.html          # Printable business card design
├── amplify.yml                 # AWS Amplify build configuration
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite build configuration
```

## Key Implementation Details

### Custom Font Integration
- **Font**: Eurostile Extended Regular (`src/assets/`)
- **Loading**: CSS `@font-face` in `index.css`
- **Usage**: Applied via Tailwind custom font family

### Image Optimization
- **Location**: All images in `public/` folder for production compatibility
- **References**: Absolute paths (`/image.jpg`) for AWS Amplify
- **Aspect Ratios**: Maintained using Tailwind aspect ratio utilities

### Navigation
- **Router**: React Router DOM v6 with `BrowserRouter`
- **Active States**: Dynamic styling for current page
- **Mobile**: Responsive hamburger menu (ready for implementation)

### Component Architecture
- **Carousel**: Reusable image gallery with navigation controls
- **Layout**: Consistent header/footer across all pages
- **Responsive**: Mobile-first design approach

## Business Card

Included `business-card.html` with printable business card design:
- **Size**: Standard business card dimensions
- **Design**: Split dark/white layout matching site branding
- **Content**: Contact info with vertical Instagram handle
- **Print**: Optimized for home/professional printing

## Development Timeline & Key Decisions

### Phase 1: Project Setup
- ✅ Vite + React + TypeScript + Tailwind CSS setup
- ✅ React Router DOM for SPA navigation
- ✅ Custom Eurostile font integration
- ✅ Component architecture planning

### Phase 2: Core Development  
- ✅ All page components (Home, galleries, About, Art Prints)
- ✅ Reusable Carousel component for image galleries
- ✅ Header/Footer with navigation
- ✅ Responsive design implementation

### Phase 3: Content & Assets
- ✅ Image optimization and organization
- ✅ Content updates for About and Art Prints pages
- ✅ Asset path corrections for production deployment
- ✅ Business card design creation

### Phase 4: Deployment & Domain
- ✅ AWS Amplify deployment setup
- ✅ Custom domain connection (`lightontexture.com`)
- ✅ GoDaddy DNS configuration
- ✅ SSL certificate setup for both www and root domains
- ✅ SPA routing fix with `_redirects` file

## Maintenance & Updates

### Adding New Images
1. Add images to `public/` folder
2. Update respective page component with new image paths
3. Commit and push - AWS Amplify will auto-deploy

### Content Updates
1. Edit page components in `src/pages/`
2. Update image references if needed
3. Test locally with `npm run dev`
4. Commit and push for deployment

### Domain Management
- **DNS**: Managed through GoDaddy
- **SSL**: Auto-renewed by AWS Amplify and GoDaddy
- **Monitoring**: Check AWS Amplify console for deployment status

## Contact & Support

For technical issues or updates to this documentation, refer to the commit history and AWS Amplify deployment logs.

**Live Site**: [https://www.lightontexture.com](https://www.lightontexture.com)