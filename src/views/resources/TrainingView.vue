<template>
  <section class="resources">
    <!-- Show child route content if a child route is active -->
    <RouterView v-if="$route.name !== 'resources-training'" />

    <!-- Show child-adolescent overview only when on the main child-adolescent page -->
    <div v-else>
      <RouterLink to="/resources" class="back-button animate-fade-slide">
        ← Back to Resources
      </RouterLink>

      <h1 class="page-title animate-fade-slide">Training Resources</h1>

      <InformationSection
        class="animate-fade-slide"
        heading="Curriculum in Adult Psychiatric Residency Training"
        subheading=""
        description="This curriculum has been chosen as a model curriculum in family skills by the American Association of Directors of Psychiatric Residency Training. The curriculum includes the theoretical basis of skills training from the Group for the Advancement of Psychiatry (GAP) Committee on the Family and the specific four year curriculum for general psychiatry residents at the U of Penn Psychiatry Department."
        link="/resources/training/curriculum-in-adult-psychiatric-residency-training"
      />

      <InformationSection
        class="animate-fade-slide"
        heading="Training Programs in Family Psychiatry"
        subheading=""
        description="Today, with the rise in the popularity of psychopharmacology and the promise of biological interventions, there are fewer opportunities for family systems training within psychiatric residency programs. In order to receive family systems training, a psychiatrist may decide to enroll in an independent family training institute, such as the Ackerman Institute for the Family in New York. However, there are still some psychiatric residency programs that consider learning to work with families to be an essential psychotherapeutic skill."
        link="/resources/training/training-programs-in-family-psychiatry"
      />
    </div>
  </section>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router'
import InformationSection from '@components/InformationSection.vue'
import '@/assets/resources.css'
</script>
