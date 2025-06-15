# Frontend Documentation

This folder contains the Vue 3 frontend for the AFP website. Built using Vite and organized by components, views, and shared data.

## Structure

```
site/
├── public/                      # Static assets and favicons
├── src/
│   ├── assets/                  # Logo, base CSS
│   ├── components/              # Reusable UI components (Hero, Event, Cards, etc.)
│   ├── data/                    # JS modules with dummy or static data
│   ├── views/                   # Page-level Vue components (e.g. Home, Membership)
│   ├── firebase.js              # Firebase client SDK initialization
│   ├── router/                  # Vue Router config
│   ├── stores/                  # (Optional) Pinia or reactive state
│   ├── App.vue                  # Root app layout
│   └── main.js                  # Vite entry file
├── e2e/                         # End-to-end test config and example
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Components

### UI Components
- `Hero.vue`: Section header with image and overlay
- `FeaturedEvent.vue`, `Event.vue`: Reusable for events display
- `StatsBanner.vue`, `CardGrid.vue`, `PublicationCard.vue`: Homepage-specific components

### Layout & Navigation
- `Header.vue`, `Footer.vue`: Site navigation and global UI

## Views

- `HomeView.vue`: Homepage with dynamic sections
- `MembershipView.vue`: Stripe checkout integration with animated form
- `MembershipConfirmationView.vue`: Shown after successful Stripe payment
- `AboutView.vue`, `ResourcesView.vue`, `EventsView.vue`, etc.

## Firebase Integration

- Firebase client initialized in `src/firebase.js`
- Calls to backend Firebase Functions from `MembershipView.vue`

## Running Locally

```bash
cd site
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

## Deploying to GitHub Pages

Before committing to GitHub, run prettier with the command:

```bash
npm run format
```

Then commit as normal

```bash
git add .
git commit -m "Commit message"
git push
```

To deploy to GitHub pages, run:

```bash
npm run deploy
```
