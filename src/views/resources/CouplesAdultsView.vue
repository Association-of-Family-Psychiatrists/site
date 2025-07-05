<template>
  <section class="resources">
    <!-- Show child route content if a child route is active -->
    <RouterView v-if="$route.name !== 'resources-couples-adults'" />

    <!-- Show child-adolescent overview only when on the main child-adolescent page -->
    <div v-else>
      <RouterLink to="/resources" class="back-button animate-fade-slide">
        ← Back to Resources
      </RouterLink>

      <h1 class="page-title animate-fade-slide">Couples & Adults Resources</h1>

      <InformationSection
        class="animate-fade-slide"
        heading="Resources for Couples and Adult Families Dealing with Psychiatric Issues in a Family Member"
        subheading=""
        description="Web and print resources for professionals, couples and families dealing with psychiatric illness and caregiving issues. "
        link="/resources/couples-adults/psychiatric-resources"
      />

      <InformationSection
        class="animate-fade-slide"
        heading="Books for Professionals, Couples and Families"
        subheading=""
        description="Here is a list of books and websites useful for both professionals and couples/families."
        link="/resources/couples-adults/books"
      />
    </div>
  </section>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
import InformationSection from '@components/InformationSection.vue'
import '@/assets/resources.css'
</script>
