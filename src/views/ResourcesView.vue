<!-- src/views/ResourcesView.vue -->
<template>
  <section class="resources">
    <h1 class="page-title">Resources</h1>

    <InformationSection
      heading="Our Listserv"
      subheading="Join the discussion"
      description="Visit the discussion group of the Association of Family Psychiatry on Google Groups."
      link="/resources/listserv"
    />

    <InformationSection
      heading="Upcoming Conferences"
      subheading="Stay updated"
      description="Check out upcoming events and conferences relevant to our community."
      link="/resources/conferences"
    />

    <InformationSection
      heading="New Articles of Interest"
      subheading=""
      description="Recent articles of interest to our members! John Rolland’s new book *Helping Couples and Families Navigate Illness and Disability* was recently published. Lisa Dixon is now the Editor in Chief of *Psychiatric Services*!"
      link="/resources/articles"
    />

    <InformationSection
      heading="General Web Resources"
      subheading=""
      description="In addition to this page, resources including books and articles can be found throughout the website."
      link="/resources/web"
    />
  </section>
</template>

<script setup>
import InformationSection from '@components/InformationSection.vue'
</script>

<style scoped>
.resources {
  padding: 4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-accent);
}
</style>
