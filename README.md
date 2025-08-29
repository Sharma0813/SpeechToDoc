# Speech → Doc (React + Vite)

This is a simple speech-to-text web app built with React and Vite using `react-speech-recognition`.

## Features
- Start / Stop / Pause / Resume speech recognition
- View live transcript
- Copy transcript to clipboard
- Download transcript as a TXT file
- Reset transcript

## Setup (locally)
1. Install Node.js (v18+ recommended)
2. Extract the project folder
3. In the project root, run:
   ```bash
   npm install
   ```
4. Install optional packages (Tailwind CSS) if you want Tailwind styles:
   ```bash
   # Optional (for Tailwind)
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   Then follow Tailwind docs to add `@tailwind base; @tailwind components; @tailwind utilities;` to `src/index.css`.

5. Start dev server:
   ```bash
   npm run dev
   ```

## Notes
- The browser must support the Web Speech API (Chrome, Edge). Mobile browser support varies.
- Allow microphone permissions when prompted.

Enjoy! 😃
