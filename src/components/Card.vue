<template>
  <div class="card">
    <img
      v-if="showImage"
      :src="image"
      alt="Card image"
      class="card-image"
      @error="showImage = false"
    />

    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-subtitle">{{ subtitle }}</p>

      <button v-if="details" @click="expanded = !expanded" class="cta-button">
        {{ expanded ? 'Hide' : 'Learn More' }}
      </button>

      <transition name="fade">
        <div v-if="expanded" class="card-details" v-html="parsedDetails"></div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { marked } from 'marked'

const props = defineProps({
  image: {
    type: String,
    default: '',
  },
  title: String,
  subtitle: String,
  details: String,
})

const expanded = ref(false)
const showImage = ref(true)

const parsedDetails = computed(() => {
  return props.details ? marked.parseInline(props.details) : ''
})
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-4px);
}

.card-image {
  width: 100%;
  max-height: 180px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.card-subtitle {
  font-size: 1rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.card-details {
  margin-top: 1rem;
  color: var(--color-text);
  font-size: 0.95rem;
  line-height: 1.5;
}

.card-details a {
  color: var(--color-accent);
  text-decoration: underline;
  font-weight: 500;
}

.card-details a:hover {
  color: var(--vt-c-indigo);
  text-decoration: none;
}

.cta-button {
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #c65e53;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
