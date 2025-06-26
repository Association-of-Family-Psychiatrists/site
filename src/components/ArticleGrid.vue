<template>
  <section class="article-grid-section">
    <h2 class="grid-title">{{ title }}</h2>
    <div class="article-grid">
      <ArticleCard v-for="(article, i) in articles" :key="i" v-bind="article" />
    </div>
  </section>
</template>

<script setup>
import ArticleCard from './ArticleCard.vue'

defineProps({
  title: String,
  articles: Array,
})
</script>

<style scoped>
.article-grid-section {
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 3rem;
}

.grid-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-heading);
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
</style>
