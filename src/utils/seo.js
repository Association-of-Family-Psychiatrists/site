// SEO configuration and utilities for the Association of Family Psychiatrists website

export const siteConfig = {
  name: 'Association of Family Psychiatrists',
  description:
    'Promoting mental wellness and supporting family psychiatry through education, advocacy, and community. Join our professional network of family psychiatrists.',
  url: 'https://familypsychiatrists.org', // Update with actual domain
  logo: '/afp-logo.png',
  twitter: '@FamilyPsych', // Update with actual Twitter handle
  keywords: [
    'family psychiatry',
    'mental health',
    'psychiatry',
    'family therapy',
    'mental wellness',
    'psychiatric resources',
    'family mental health',
    'psychiatrist network',
    'mental health education',
    'psychiatric training',
  ],
}

export const defaultMeta = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(', '),
  'og:title': siteConfig.name,
  'og:description': siteConfig.description,
  'og:type': 'website',
  'og:url': siteConfig.url,
  'og:image': `${siteConfig.url}${siteConfig.logo}`,
  'og:site_name': siteConfig.name,
  'twitter:card': 'summary_large_image',
  'twitter:title': siteConfig.name,
  'twitter:description': siteConfig.description,
  'twitter:image': `${siteConfig.url}${siteConfig.logo}`,
  'twitter:site': siteConfig.twitter,
  robots: 'index, follow',
  author: siteConfig.name,
  viewport: 'width=device-width, initial-scale=1.0',
}

export function generatePageMeta(pageData) {
  const {
    title,
    description,
    keywords = [],
    image,
    type = 'website',
    path = '',
    noindex = false,
  } = pageData

  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const fullDescription = description || siteConfig.description
  const fullKeywords = [...siteConfig.keywords, ...keywords].join(', ')
  const fullUrl = `${siteConfig.url}${path}`
  const fullImage = image ? `${siteConfig.url}${image}` : `${siteConfig.url}${siteConfig.logo}`

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    'og:title': fullTitle,
    'og:description': fullDescription,
    'og:type': type,
    'og:url': fullUrl,
    'og:image': fullImage,
    'og:site_name': siteConfig.name,
    'twitter:card': 'summary_large_image',
    'twitter:title': fullTitle,
    'twitter:description': fullDescription,
    'twitter:image': fullImage,
    'twitter:site': siteConfig.twitter,
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    author: siteConfig.name,
    canonical: fullUrl,
  }
}

export function generateStructuredData(type, data) {
  const baseStructuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
  }

  return {
    ...baseStructuredData,
    ...data,
  }
}

// Page-specific SEO data
export const pageSeoData = {
  home: {
    title: 'Home',
    description:
      'Welcome to the Association of Family Psychiatrists. Promoting mental wellness and supporting family psychiatry through education, advocacy, and community.',
    keywords: ['family psychiatry', 'mental health professionals', 'psychiatric community'],
    type: 'website',
  },
  about: {
    title: 'About Us',
    description:
      'Learn about the Association of Family Psychiatrists mission to advance family mental health through collaboration, research, education, and advocacy.',
    keywords: ['about AFP', 'mission', 'vision', 'family psychiatry organization'],
    type: 'website',
  },
  resources: {
    title: 'Resources',
    description:
      'Access comprehensive resources for family psychiatrists including articles, training materials, web resources, and professional development tools.',
    keywords: [
      'psychiatric resources',
      'family therapy resources',
      'mental health training',
      'professional development',
    ],
    type: 'website',
  },
  events: {
    title: 'Events',
    description:
      'Stay updated with upcoming conferences, workshops, and events for family psychiatrists and mental health professionals.',
    keywords: [
      'psychiatry conferences',
      'mental health events',
      'professional development',
      'family psychiatry training',
    ],
    type: 'website',
  },
  membership: {
    title: 'Membership',
    description:
      'Join the Association of Family Psychiatrists and become part of our professional network dedicated to advancing family mental health.',
    keywords: [
      'AFP membership',
      'join psychiatrists',
      'professional network',
      'family psychiatry community',
    ],
    type: 'website',
  },
  contact: {
    title: 'Contact Us',
    description:
      'Get in touch with the Association of Family Psychiatrists. Contact information and ways to reach our team.',
    keywords: ['contact AFP', 'get in touch', 'psychiatry organization contact'],
    type: 'website',
  },
}
