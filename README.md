# Enemy Aliens Research Project

An academic portfolio website presenting historical research on South Slavic immigrants from Austria-Hungary who were designated as "Enemy Aliens" in the United States during World War I.

## About the Research

This project examines the experiences of non-naturalized residents from Austria-Hungary—particularly Croats, Serbs, and Slovenes—who were legally classified as "Enemy Aliens" during WWI. Despite many of these immigrants supporting the Allied cause and seeking independence from the Austro-Hungarian Empire, their technical citizenship subjected them to registration, surveillance, and potential internment.

The research draws on:
- Surveillance records
- Internment camp diaries
- Legal proceedings
- Archival photographs
- Government documents

## Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations

## Getting Started

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
├── App.tsx                 # Main application component
├── index.html              # HTML entry point
├── index.tsx               # React DOM entry
├── components/
│   ├── Navbar.tsx          # Navigation with scroll detection
│   ├── Hero.tsx            # Full-screen hero section
│   ├── ProjectGallery.tsx  # Interactive image gallery
│   ├── ResearcherProfile.tsx # Principal investigator bio
│   ├── Affiliations.tsx    # Institutional affiliations
│   ├── FAQ.tsx             # Frequently asked questions
│   └── Contact.tsx         # Contact information
└── vite.config.ts          # Vite configuration
```

## License

All rights reserved. Academic research content and design.
