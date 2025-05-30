# Everflow Plumbing Services - Static Website

A professional static website for Everflow Plumbing Services in Silver Spring, MD. This site is optimized for GitHub Pages deployment.

## Features

- Professional responsive design
- Service information and pricing
- Customer testimonials
- Contact information and quote request form
- Mobile-friendly navigation
- SEO optimized

## GitHub Pages Deployment

### Automatic Deployment

1. Fork or clone this repository to your GitHub account
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. Push any changes to the `main` branch to trigger automatic deployment

### Manual Setup

If you prefer to set up manually:

1. Copy `package.static.json` to `package.json`
2. Run `npm install`
3. Run `npm run build`
4. Deploy the `dist` folder to your hosting service

## Local Development

```bash
# Copy the static package file
cp package.static.json package.json

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Customization

### Contact Information
Edit the contact details in `client/src/components/contact.tsx` and `client/src/components/header.tsx`

### Services
Modify the services array in `client/src/components/services.tsx`

### Testimonials
Update the testimonials array in `client/src/components/testimonials.tsx`

### Styling
Colors and themes can be customized in `client/src/index.css`

## File Structure

```
client/
├── src/
│   ├── components/     # React components
│   ├── pages/         # Page components
│   ├── lib/           # Utilities
│   └── index.css      # Styles
├── index.html         # Entry HTML
package.static.json    # Static build dependencies
vite.config.static.ts  # Static build configuration
.github/workflows/     # GitHub Actions for deployment
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Hook Form
- Zod validation
- Lucide React icons