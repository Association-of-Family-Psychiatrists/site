import { useHead } from '@unhead/vue'
import { generatePageMeta, generateStructuredData } from '@/utils/seo.js'

export function useSEO(pageData = {}) {
  const meta = generatePageMeta(pageData)

  // Set the page meta tags using useHead
  useHead({
    title: meta.title,
    meta: [
      { name: 'description', content: meta.description },
      { name: 'keywords', content: meta.keywords },
      { name: 'author', content: meta.author },
      { name: 'robots', content: meta.robots },
      { property: 'og:title', content: meta['og:title'] },
      { property: 'og:description', content: meta['og:description'] },
      { property: 'og:type', content: meta['og:type'] },
      { property: 'og:url', content: meta['og:url'] },
      { property: 'og:image', content: meta['og:image'] },
      { property: 'og:site_name', content: meta['og:site_name'] },
      { name: 'twitter:card', content: meta['twitter:card'] },
      { name: 'twitter:title', content: meta['twitter:title'] },
      { name: 'twitter:description', content: meta['twitter:description'] },
      { name: 'twitter:image', content: meta['twitter:image'] },
      { name: 'twitter:site', content: meta['twitter:site'] },
    ],
    link: [{ rel: 'canonical', href: meta.canonical }],
  })

  return { meta }
}

export function useStructuredData(type, data) {
  const structuredData = generateStructuredData(type, data)

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(structuredData),
      },
    ],
  })

  return structuredData
}
