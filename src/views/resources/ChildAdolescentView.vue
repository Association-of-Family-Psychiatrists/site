<template>
    <section class="resources">
      <!-- Show child route content if a child route is active -->
      <RouterView v-if="$route.name !== 'resources-child-adolescent'" />

      <!-- Show child-adolescent overview only when on the main child-adolescent page -->
      <div v-else>
        <RouterLink to="/resources" class="back-button animate-fade-slide">
          ← Back to Resources
        </RouterLink>
        
        <h1 class="page-title animate-fade-slide">Child & Adolescent Resources</h1>
  
        <InformationSection
          class="animate-fade-slide"
          heading="The American Academy of Child and Adolescent Psychiatry"
          subheading="Professional Organization"
          description="Learn about the AACAP and its Family Committee's work in child and adolescent psychiatry."
          link="/resources/child-adolescent/aacap"
        />
  
        <InformationSection
          class="animate-fade-slide"
          heading="Child and Adolescent Centered Families"
          subheading="Family-Focused Resources"
          description="Resources and information focused on family-centered approaches in child and adolescent psychiatry."
          link="/resources/child-adolescent/family-centered"
        />
  
      </div>
    </section>
  </template>
  
  <script setup>
  import { RouterView, RouterLink } from 'vue-router'
  import InformationSection from '@components/InformationSection.vue'
  import '@/assets/resources.css'
  </script>
  