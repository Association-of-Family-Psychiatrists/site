<template>
  <section class="member-view">
    <h1 class="page-title">Our Members</h1>
    <p class="page-subtitle">Meet some of the dedicated professionals in our association.</p>

    <CardGrid title="Members" :cards="memberCards" />
  </section>
</template>

<script setup>
import CardGrid from '@/components/CardGrid.vue'
import { memberCards } from '@/data/memberData.js'
</script>

<style scoped>
.member-view {
  padding: 4rem 2rem;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.page-subtitle {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: var(--color-text);
}
</style>
