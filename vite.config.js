import { defineConfig } from 'vite'

// The page is static HTML; the taste-skill kit lives in public/assets and is served as plain files.
export default defineConfig({ build: { modulePreload: { polyfill: false } } })
