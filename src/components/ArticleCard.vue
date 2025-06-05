<template>
  <div class="article-card">
    <img :src="thumbnail" :alt="title" class="thumbnail" />
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <a :href="url" target="_blank" rel="noopener" class="read-button">Read Article</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  thumbnail: String,
  url: String,
})
</script>

<style scoped>
.article-card {
  background: var(--color-background-soft);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
}

.article-card:hover {
  transform: translateY(-4px);
}

.thumbnail {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.content {
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.read-button {
  align-self: flex-start;
  background-color: var(--color-accent);
  color: white;
  padding: 0.5rem 1rem;
  font-weight: 500;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.read-button:hover {
  background-color: #c65e53;
}
</style>
