# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Faster Than is an educational Vue 3 web app where users compare animal speeds and take quizzes about animal-speed knowledge. Live at fasterthan.net.

## Commands

- **Dev server:** `npm run serve`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Deploy (builds + pushes dist to gh-pages):** `npm run deploy`

## Architecture

Vue 3 app using Vue CLI 5, Vue Router 4, and Options API throughout. No TypeScript.

### Routing & Pages

`src/router.js` defines four routes, each mapping to a page component in `src/pages/`:
- `/` → LandingPage — home/splash
- `/compare` → ComparePage — pick two animals and compare top speeds
- `/quiz` → QuizPage — five-question quiz on which animal is faster
- `/about` → AboutPage

### Key Data

`src/components/data/animals.js` exports the `animals` array — the single source of truth for all animal data (id, commonName, scientificName, speed in mph, Wikipedia link, S3-hosted SVG image URL). Both ComparePage and QuizPage consume this array.

### Components

- `src/components/ui/BaseCard.vue` and `BaseSelect.vue` are registered globally in `main.js`
- `src/components/TheHeader.vue`, `TheFooter.vue`, `TheWinner.vue`, `TheTie.vue`, `TheShareCard.vue` are feature components
- `src/old/` contains deprecated components (TheDetails, TheSelector) — not in use

### Styling

Global styles (CSS custom properties, reset, transitions) live in `App.vue <style>`. The app uses CSS custom properties for colors and fluid typography via `calc()`. Roboto font loaded from Google Fonts.

### Analytics

Google Analytics (G-FDFF33B2C1) integrated via `vue-gtag` in `main.js`.

### Build Output

`dist/` contains the production build. The root-level `index.html`, `css/`, and `js/` appear to be an older static build — `dist/` is the current build target.

## ESLint Config

Uses `plugin:vue/vue3-essential` + `eslint:recommended` with `babel-eslint` parser. `console` and `debugger` are warnings in production, off in dev.
