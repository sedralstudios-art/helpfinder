import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React and React-DOM into their own chunk — shared by every page.
          if (id.includes('node_modules/react') || id.includes('node_modules/scheduler')) {
            return 'react';
          }
          // Stripe JS into its own chunk — only loaded on /support.
          if (id.includes('node_modules/@stripe')) {
            return 'stripe';
          }
          // Program data into its own chunk — shared by HelpFinder, Search, and prerender.
          if (id.includes('src/data/programs')) {
            return 'programs';
          }
          // Legal library data and components into their own chunk.
          if (id.includes('src/data/legal/') || id.includes('src/components/LegalLibrary') || id.includes('src/components/Glossary')) {
            return 'legal';
          }
          // HelpFinder questionnaire into its own chunk.
          if (id.includes('src/components/HelpFinder') || id.includes('src/components/HelpFinderQuestions')) {
            return 'helpfinder';
          }
          // Search page into its own chunk.
          if (id.includes('src/components/Search')) {
            return 'search';
          }
        },
      },
    },
    // Raise the default 500 KB warning threshold — our chunks are reasonably sized now.
    chunkSizeWarningLimit: 800,
  },
})
