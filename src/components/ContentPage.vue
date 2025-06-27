<template>
  <section class="content-page">
    <div class="content-container">
      <button @click="goBack" class="back-button animate-fade-slide">
        ← Back
      </button>
      
      <h1 class="page-title animate-fade-slide">{{ title }}</h1>
      
      <div 
        v-for="(section, index) in sections" 
        :key="index"
        class="content-section animate-fade-slide"
        :style="{ animationDelay: `${(index + 1) * 0.2}s` }"
      >
        <h2 v-if="section.heading" class="section-heading">{{ section.heading }}</h2>
        <h3 v-if="section.subheading" class="section-subheading">{{ section.subheading }}</h3>
        <div class="content-text">
          <p v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex" v-html="parseLinks(paragraph)">
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

defineProps({
  title: {
    type: String,
    required: true
  },
  sections: {
    type: Array,
    required: true,
    default: () => []
  }
})

const router = useRouter()

const goBack = () => {
  router.go(-1)
}

// Function to parse and render links in text
const parseLinks = (text) => {
  if (!text) return ''
  
  // Store markdown links as placeholders to prevent double-processing
  const markdownLinks = []
  let linkIndex = 0
  
  // First, replace markdown links with placeholders
  let result = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, linkText, url) => {
    const placeholder = `__MARKDOWN_LINK_${linkIndex}__`
    markdownLinks.push({ placeholder, linkText, url })
    linkIndex++
    return placeholder
  })
  
  // Convert plain URLs to clickable links
  const urlRegex = /(https?:\/\/[^\s]+)/g
  result = result.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer" class="content-link">$1</a>')
  
  // Convert email addresses to clickable mailto links
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
  result = result.replace(emailRegex, '<a href="mailto:$1" class="content-link">$1</a>')
  
  // Restore markdown links
  markdownLinks.forEach(({ placeholder, linkText, url }) => {
    const isEmail = url.startsWith('mailto:')
    const target = isEmail ? '' : ' target="_blank" rel="noopener noreferrer"'
    const htmlLink = `<a href="${url}"${target} class="content-link">${linkText}</a>`
    result = result.replace(placeholder, htmlLink)
  })
  
  return result
}
</script>

<style scoped>
.content-page {
  padding: 4rem 2rem;
  background-color: var(--color-background);
  color: var(--color-text);
  min-height: 100vh;
}

.content-container {
  max-width: 900px;
  margin: 0 auto;
}

.back-button {
  display: inline-block;
  color: var(--color-accent);
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--color-accent);
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.back-button:hover {
  background-color: var(--color-accent);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(227, 114, 99, 0.3);
}

.page-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-accent);
  font-weight: bold;
}

.content-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: var(--vt-c-white);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--color-accent);
}

.section-heading {
  font-size: 1.75rem;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.section-subheading {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: var(--vt-c-black-soft);
}

.content-text {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text);
}

.content-text p {
  margin-bottom: 1rem;
}

.content-text p:last-child {
  margin-bottom: 0;
}

/* Link styling */
.content-link {
  color: var(--color-accent);
  text-decoration: underline;
  font-weight: 500;
  transition: all 0.3s ease;
}

.content-link:hover {
  color: var(--vt-c-indigo);
  text-decoration: none;
}

.content-text a {
  color: var(--color-accent);
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.3s ease;
}

.content-text a:hover {
  color: var(--vt-c-indigo);
  text-decoration: none;
}

.content-text strong {
  font-weight: bold;
}

.content-text em {
  font-style: italic;
}

.content-text code {
  font-family: monospace;
  background: #f4f4f4;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-size: 0.95em;
}

/* Animation */
.animate-fade-slide {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeSlideIn 0.8s ease forwards;
}

@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .content-page {
    padding: 2rem 1rem;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .section-heading {
    font-size: 1.5rem;
  }
  
  .section-subheading {
    font-size: 1.1rem;
  }
  
  .content-section {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 1.75rem;
  }
  
  .section-heading {
    font-size: 1.3rem;
  }
  
  .content-section {
    padding: 1rem;
  }
}
</style> 