<template>
  <section class="resources">
    <!-- Show child route content if a child route is active -->
    <RouterView v-if="$route.name !== 'resources'" />

    <!-- Show resources overview only when on the main resources page -->
    <div v-else>
      <h1 class="page-title animate-fade-slide">Resources</h1>

      <InformationSection
        class="animate-fade-slide"
        heading="Our Listserv"
        subheading="Join the discussion"
        description="Visit the discussion group of the Association of Family Psychiatry on Google Groups."
        link="/resources/listserv"
      />

      <InformationSection
        class="animate-fade-slide"
        heading="Articles of Interest"
        subheading=""
        description="Archived articles of interest to our members"
        link="/resources/articles"
      />

      <InformationSection
        class="animate-fade-slide"
        heading="General Web Resources"
        subheading=""
        description="In addition to this page, resources including books and articles can be found throughout the website."
        link="/resources/web"
      />

      <InformationSection
        class="animate-fade-slide"
        heading="Child & Adolescent "
        description="Resources for child and adolescent psychiatry"
        link="/resources/child-adolescent"
      />

      <InformationSection
        class="animate-fade-slide"
        heading="Couples & Adults "
        description="Resources for couples and adults"
        link="/resources/couples-adults"
      />

      <InformationSection
        class="animate-fade-slide"
        heading="Culture & Family "
        description="Resources for culture and family"
        link="/resources/culture-family"
      />

      <InformationSection
        class="animate-fade-slide"
        heading="Training "
        description="Resources for training"
        link="/resources/training"
      />

      <InformationSection
        class="animate-fade-slide"
        heading="Family Treatment in Medical Education"
        description=""
        link="/resources/family-treatment"
      />

      <InformationSection
        class="animate-fade-slide"
        heading="Annual Resident/Fellow Recognition Award"
        description="Nominations requested for excellence in family-oriented care"
        link="/resources/award-recognition"
      />
    </div>
  </section>
</template>

<script setup>
import { RouterView } from 'vue-router'
import InformationSection from '@components/InformationSection.vue'
import { useSEO, useStructuredData } from '@/composables/useSEO.js'
import { pageSeoData } from '@/utils/seo.js'
import '@/assets/resources.css'

// SEO setup
useSEO({
  ...pageSeoData.resources,
  path: '/resources',
})

// Structured data for resources page
useStructuredData('CollectionPage', {
  '@type': 'CollectionPage',
  name: 'Resources for Family Psychiatrists',
  description:
    'Comprehensive resources for family psychiatrists including articles, training materials, web resources, and professional development tools.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Listserv',
        description: 'Join the discussion group of the Association of Family Psychiatry',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Articles of Interest',
        description: 'Archived articles of interest to our members',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Web Resources',
        description: 'General web resources for family psychiatrists',
      },
    ],
  },
})
</script>
