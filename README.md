# Association of Family Psychiatrists (AFP)

Welcome to the official website of the Association of Family Psychiatrists, a professional organization dedicated to advancing family psychiatry through education, research, and clinical practice.

## 🌟 About AFP

The Association of Family Psychiatrists is committed to promoting excellence in family-centered psychiatric care. Our organization brings together mental health professionals who specialize in treating individuals, couples, and families within their broader social and cultural contexts.

## 🎯 What We Offer

### 📚 Comprehensive Resources
- **Child & Adolescent Psychiatry**: Specialized resources for treating young patients and their families
- **Couples & Adult Psychiatry**: Tools and information for relationship and individual therapy
- **Cultural & Family Resources**: Culturally sensitive approaches to family mental health
- **Training Programs**: Educational resources and professional development opportunities
- **Articles & Publications**: Latest research and clinical insights in family psychiatry

### 📅 Events & Conferences
- Annual conferences and workshops
- Continuing education opportunities
- Networking events for mental health professionals
- Specialized training sessions

### 👥 Membership Benefits
- Access to exclusive resources and publications
- Professional networking opportunities
- Continuing education credits
- Advocacy and representation in the field

## 🔗 Quick Links

- **Home**: Overview of our organization and latest updates
- **About**: Learn about our mission, history, and leadership
- **Resources**: Access our comprehensive library of mental health resources
- **Events**: Find upcoming conferences and educational opportunities
- **Membership**: Join our professional community
- **Contact**: Get in touch with our team

## 📱 User Experience

Our website is designed with you in mind:
- **Responsive Design**: Optimized for all devices
- **Easy Navigation**: Intuitive menu structure
- **Fast Loading**: Quick access to information
- **Accessible**: Designed for users of all abilities

## 🤝 Get Involved

Whether you're a mental health professional, student, or interested in family psychiatry, there are many ways to get involved:

- **Join as a Member**: Access exclusive resources and networking opportunities
- **Attend Events**: Participate in our conferences and workshops
- **Contribute Resources**: Share your expertise with the community
- **Stay Connected**: Follow us for updates and announcements

---

## 🚀 For Developers
### 🛠️ Tech Stack

- **Frontend**: Vue 3 + Composition API
- **Build Tool**: Vite 6
- **Styling**: CSS with modular components
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **Backend**: Firebase
- **Payments**: Stripe
- **Contact Form**: Formkeep

### ⚡ Features

- **Component-Based Architecture**: Modular Vue components for maintainable code
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Dynamic Content**: Firebase integration for real-time data management
- **Secure Payments**: Stripe integration for membership processing
- **SEO Optimized**: Meta tags and structured data for search engines
- **Performance**: Lazy loading and code splitting for optimal loading speeds
- **Accessibility**: ARIA labels and keyboard navigation support
- **Form Handling**: Formkeep integration for reliable contact form submissions

### 📁 Project Structure

```
src/
├── assets/                 # Global styles, images, and resources
├── components/            # Reusable UI components
├── data/                  # Static data files
├── firebase.js           # Firebase configuration
├── router/               # Vue Router setup
├── stores/               # Pinia state management
├── views/                # Page components
│   ├── resources/        # Resource pages (articles, training, etc.)
│   └── ...              # Other page views
├── App.vue               # Root component
└── main.js              # Application entry point
```

### 🧭 Navigation

The website uses Vue Router 4 with browser history routing and Static Site Generation (SSG):

```
/                           # Home page
/about                      # About AFP organization
/events                     # Events and conferences
/resources                  # Main resources hub
├── /listserv              # Listserv information
├── /award-recognition     # Awards and recognition
├── /family-treatment      # Family treatment resources
├── /articles              # Articles and publications
├── /web                   # Web resources
├── /child-adolescent      # Child & adolescent psychiatry
│   ├── /aacap            # AACAP resources
│   └── /family-centered  # Family-centered care
├── /couples-adults        # Couples & adult psychiatry
│   ├── /psychiatric-resources # Psychiatric resources
│   └── /books            # Book recommendations
├── /culture-family        # Cultural & family resources
│   └── /resources        # Cultural resources
└── /training              # Training programs
      ├── /curriculum      # Residency curriculum
      └── /programs        # Training programs
/membership                 # Membership application
/contact                    # Contact form
```

**Key Navigation Features:**
- **Nested Routes**: Resources section uses child routes for organization
- **Lazy Loading**: Child routes are dynamically imported for performance
- **Static Site Generation**: Pre-rendered pages for optimal SEO and performance
- **Browser History**: Clean URLs without hash fragments
- **Breadcrumb Support**: Built-in navigation hierarchy

### 🔧 Development Commands

```bash
npm run lint               # ESLint + Oxlint
npm run format             # Prettier formatting
npm run type-check         # TypeScript checking
npm run dev                # Start development server
npm run build              # Build static site for production
npm run preview            # Preview production build
```

### 🚀 Deployment

The site is deployed on **Cloudflare Pages** with Static Site Generation (SSG) using `vite-ssg`:

- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **SPA Fallback**: Configured via `_redirects` file for client-side routing
- **Performance**: Pre-rendered pages for optimal SEO and loading speeds

**Deployment Configuration:**
- `wrangler.toml`: Cloudflare Pages configuration
- `public/_redirects`: SPA fallback routing
- Static site generation for all routes

---

## 📞 Contact Information

Have questions or need assistance? We're here to help:
- **General / Membership Inquiries**: Use our contact form
- **Event Information**: Check our events calendar
- **Website & Development**: Reach out to Tanuj Siripurapu at `dev@tanuj.xyz`

