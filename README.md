<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

Node.js 20+ is required.

View your app in AI Studio: https://ai.studio/apps/drive/1g7c5H0b8V9AdQgZvXXNaxF5X4ZobRYzJ

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `API_KEY` in `.env` (or `.env.local`) to your Gemini API key
3. Run the app:
   `npm run dev`

## Production Sanity Checks

1. Run compile and runtime checks:
   `npm run prod:check`
2. Build production assets:
   `npm run build`
3. Start production server:
   `npm run start`
