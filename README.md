# ROC Help Finder
**Free help in Rochester, NY. No judgment. No data collected.**

Sedral Studios · 183 programs · 34 categories · 8 languages

## What this is
A free resource directory for Rochester NY residents who need help with food, housing, health, jobs, documents, and more. Built for people in crisis. Collects zero data.

## Setup (first time)

You need **Node.js** installed. If you don't have it:
- Go to https://nodejs.org
- Download the **LTS** version (the big green button)
- Install it (just click Next through everything)
- Restart your terminal/command prompt after installing

Then open a terminal in this folder and run:

```
npm install
npm run dev
```

It will say something like:

```
  VITE v5.x.x  ready in 300ms

  ➜  Local:   http://localhost:5173/
```

Open that link in your browser. That's your app running locally.

## What to test
1. Click "Find Help Now"
2. Pick each of the 5 tabs — make sure all categories show
3. Pick a category → WHO → HOW → see results
4. Switch language to Somali or Arabic — check labels change, RTL works
5. Pick "Someone is hurting me or my family" — Quick Exit button should appear
6. Check the "I also need help" button at bottom of results
7. Check the findhelp.org link at bottom of results
8. Test on your phone (use the same WiFi — the terminal shows a Network URL too)

## Deploy to Vercel (free)
1. Push this folder to GitHub
2. Go to vercel.com, sign in with GitHub
3. Click "Add New Project", select this repo
4. Click Deploy
5. Done. Live URL in 60 seconds.

## Built by
Sedral Studios · Rochester, NY
Built with nothing. Built for everyone.
