# Everflow Plumbing Website - GitHub Pages Deployment

## Quick Setup Instructions

### 1. Create GitHub Repository
1. Go to https://github.com/marylandwebsites
2. Click "New repository"
3. Name: `everflow-plumbing` (or your preferred name)
4. Set to Public
5. Don't initialize with README

### 2. Upload Files
Upload all files from this package to your new repository:
- Drag and drop all files/folders from this package
- Or use "uploading an existing file" on GitHub

### 3. Enable GitHub Pages
1. Go to repository Settings
2. Click "Pages" in sidebar
3. Under "Source" select "GitHub Actions"
4. The site will automatically deploy

### 4. Your Website Will Be Live At:
`https://marylandwebsites.github.io/your-repo-name/`

## File Structure Included:
```
├── client/               # React application source
├── .github/workflows/    # Auto-deployment configuration
├── package.json         # Dependencies
├── vite.config.ts       # Build configuration
├── tailwind.config.ts   # Styling configuration
└── README.md           # Documentation
```

## Features:
- Fully static website (no backend required)
- Mobile responsive design
- Call-to-action buttons for phone contact
- Professional plumbing services layout
- Automatic GitHub Pages deployment

## Customization:
- Edit contact info in `client/src/components/contact.tsx`
- Modify services in `client/src/components/services.tsx`
- Update testimonials in `client/src/components/testimonials.tsx`

The website will automatically build and deploy when you push changes to the main branch.