# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a SvelteKit library project that appears to be a photography portfolio website with navigation components. The project is structured as both a reusable component library (in `src/lib/`) and a showcase/demo application (in `src/routes/`).

## Key Commands

### Development
- `npm run dev` - Start development server (Vite dev server on port 5173)
- `npm run dev -- --open` - Start dev server and open in browser

### Building & Packaging
- `npm run build` - Build production app and run prepack process
- `npm run prepack` - Sync SvelteKit, package library, and run publint
- `npm run preview` - Preview production build

### Code Quality
- `npm run check` - Type check with svelte-check and TypeScript
- `npm run check:watch` - Type check in watch mode
- `npm run lint` - Run Prettier check and ESLint
- `npm run format` - Format code with Prettier

### Testing
- `npm run test:unit` - Run unit tests with Vitest
- `npm run test` - Run all tests once

## Architecture

### Library Structure
- **`src/lib/`** - Library code that gets packaged and exported
  - `components/` - Reusable Svelte components (Nav, MobileNav, AltNav, etc.)
  - `index.ts` - Main entry point for library exports (currently empty)

### Demo/Showcase App
- **`src/routes/`** - SvelteKit routes for demo application
  - `+layout.svelte` - Global layout
  - `+page.svelte` - Homepage
  - `about/`, `contact/`, `freelance/`, `sports/`, `weddings/` - Portfolio sections
- **`static/images/`** - Static image assets organized by category

### Configuration
- **Svelte 5** with SvelteKit
- **TailwindCSS 4** for styling with forms and typography plugins
- **Vitest** for testing with browser testing support via Playwright
- **MDSvex** for Markdown in Svelte components
- **TypeScript** with strict checking
- **ESLint + Prettier** for code quality
- **vite-imagetools** for image optimization

### Testing Setup
The project uses a dual testing configuration:
- **Client tests**: Browser-based tests for `.svelte.test.ts` files using Playwright/Chromium
- **Server tests**: Node-based tests for `.test.ts` files

## Development Notes

- Components are in `src/lib/components/` but not yet exported in `index.ts`
- The project appears to be a photography portfolio with sections for weddings, sports, and freelance work
- Image assets are organized by category in `static/images/`
- Uses SvelteKit's file-based routing system