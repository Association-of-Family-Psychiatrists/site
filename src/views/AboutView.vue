<template>
  <div class="about-page">
    <section class="intro">
      <Hero
        title="Welcome to the Association of Family Psychiatrists"
        subtitle="Promoting mental wellness and supporting family psychiatry through education, advocacy, and community."
        image="https://images.squarespace-cdn.com/content/v1/5748cc56746fb940f105bd1c/22364a6b-02db-4f89-8840-8ad7de5d6682/family+therapy+pic.jpg"
      />

      <div class="section-content" id="about-statement">
        <h1 class="section-heading">About the Association</h1>
        <p>
          The Association of Family Psychiatrists is committed to advancing the field of family
          mental health by fostering collaboration, research, education, and advocacy.
        </p>
      </div>
    </section>

    <section class="mission">
      <div class="section-content" id="mission-statement">
        <h2 class="section-heading">Our Mission</h2>
        <p>
          We strive to support psychiatrists and mental health professionals who work with families,
          providing resources, training, and a professional network to promote mental wellness at
          every stage of life.
        </p>
      </div>
    </section>

    <section class="vision">
      <div class="section-content" id="vision-statement">
        <h2 class="section-heading">Our Vision</h2>
        <p>
          A world where every family has access to compassionate, evidence-based psychiatric care.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '@components/Hero.vue'
</script>

<style scoped>
.about-page {
  margin: 0 auto;
  padding: 4rem 0;
  background-color: var(--color-background);
  color: var(--color-text);
}

section {
  padding: 2rem 0;
  position: relative;
}

section:not(:last-of-type)::after {
  content: '';
  display: block;
  height: 2px;
  background-color: var(--color-accent);
  margin: 3rem auto 0;
  width: 60%;
  opacity: 0.4;
}

.section-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  padding: 0 1rem;
}

#about-statement {
  margin-top: 4rem;
}

.section-heading {
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

p {
  font-size: 1.15rem;
  line-height: 1.75;
  color: inherit;
}

/* Responsive */
@media (max-width: 768px) {
  .section-heading {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  section:not(:last-of-type)::after {
    width: 80%;
  }
}
</style>
