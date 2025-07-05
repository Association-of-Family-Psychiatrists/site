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
    </div>
  </section>
</template>

<script setup>
import { RouterView } from 'vue-router'
import InformationSection from '@components/InformationSection.vue'
import '@/assets/resources.css'
</script>
