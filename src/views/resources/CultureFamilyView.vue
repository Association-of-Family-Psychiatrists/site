<template>
  <section class="resources">
    <!-- Show child route content if a child route is active -->
    <RouterView v-if="$route.name !== 'resources-culture-family'" />

    <!-- Show child-adolescent overview only when on the main child-adolescent page -->
    <div v-else>
      <RouterLink to="/resources" class="back-button animate-fade-slide">
        ← Back to Resources
      </RouterLink>

      <h1 class="page-title animate-fade-slide">Culture & Family Resources</h1>

      <InformationSection
        class="animate-fade-slide"
        heading="Culture and Family"
        subheading=""
        description="The interaction of culture and family is critical to understanding family processes. The task of the family is to translate cultural norms and teach the child to deal with the culture(s) in which the family is immersed, while holding to its own boundaries and values, which may or may not reflect the dominant culture."
        link="/resources/culture-family/resources"
      />

      <InformationSection
        class="animate-fade-slide"
        heading="Using Cultural Anthropology Concepts to Understand Residency and Healing Systems"
        subheading=""
        description="Physician burnout is increasingly discussed in the popular media and in residency programs. A little over a year into psychiatry residency, I have found that perspectives provided by anthropology have helped me in moments where I felt close to burnout."
        link="/resources/culture-family/cultural-anthropology"
      />
    </div>
  </section>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
import InformationSection from '@components/InformationSection.vue'
import '@/assets/resources.css'
</script>
