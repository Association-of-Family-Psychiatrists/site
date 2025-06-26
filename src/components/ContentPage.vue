<template>
  <section class="content-page">
    <div class="content-container">
      <RouterLink to="/resources" class="back-button animate-fade-slide">
        ← Back to Resources
      </RouterLink>
      
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
          <p v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex" v-html="parseMarkdown(paragraph)"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { marked } from 'marked'

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

const parseMarkdown = (text) => {
  return text ? marked.parseInline(text) : ''
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