# Frontend Documentation — Association of Family Psychiatrists (AFP)

This is the Vue 3 frontend for the Association of Family Psychiatrists website. It is built using [Vite](https://vitejs.dev/) and organized into modular components, views, and shared state. It integrates with Firebase for backend functionality and Stripe for payments.

---

## 📁 Project Structure

```
site/
├── public/                      # Static assets (favicon, images)
├── src/
│   ├── assets/                  # Global styles, fonts, and logos
│   ├── components/              # Reusable UI components (Hero, Event, etc.)
│   ├── data/                    # Static JS data (dummy events, etc.)
│   ├── views/                   # Page-level Vue components (Home, Membership)
│   ├── firebase.js              # Firebase SDK initialization
│   ├── router/                  # Vue Router configuration
│   ├── stores/                  # (Optional) Global state using Pinia
│   ├── App.vue                  # Root component
│   └── main.js                  # Vite entry file
├── index.html
├── package.json
├── vite.config.js
└── README.md                   # You're here
```

---

## 🧩 Key Components

### UI
- `Hero.vue` – Page headers with background image
- `Event.vue`, `FeaturedEvent.vue` – Event cards
- `StatsBanner.vue`, `CardGrid.vue`, `PublicationCard.vue` – Homepage highlights

### Layout
- `Header.vue`, `Footer.vue` – Site navigation and global layout

---

## 📄 Views

- `HomeView.vue` – Homepage with scroll animations
- `MembershipView.vue` – Membership form with Stripe integration
- `MembershipConfirmationView.vue` – Displayed after successful checkout
- `AboutView.vue`, `EventsView.vue`, `ResourcesView.vue`, etc.
- `ContactView.vue` – Powered by Formspree (see below)

---

## 📬 Contact Form Integration (Formspree)

The **Contact** page uses [Formspree](https://formspree.io/) to send contact form submissions directly to an email address:

```html
<form action="https://formspree.io/f/xanjjwnj" method="POST">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="_replyto" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
  <input type="hidden" name="_next" value="https://yoursite.com/thank-you" />
  <button type="submit">Send Message</button>
</form>
```

No backend setup is required for this feature.

---

## 🔥 Firebase & Stripe

- `src/firebase.js` initializes the Firebase app
- `MembershipView.vue` securely communicates with Firebase Cloud Functions
- Stripe checkout sessions are created server-side and accessed from the frontend

---

## 🧪 Local Development

```bash
cd site
npm install
npm run dev
```

App will be available at: `http://localhost:5173`

---

## 🚀 Deployment

This site is deployed to **GitHub Pages** using the following flow:

### Format code before pushing:
```bash
npm run format
git add .
git commit -m "Update"
git push
```

### Deploy:
```bash
npm run deploy
```

Ensure that `vite.config.js` has the correct `base` path for GitHub Pages:
```js
export default defineConfig({
  base: '/your-repo-name/',
  ...
})
```

---
