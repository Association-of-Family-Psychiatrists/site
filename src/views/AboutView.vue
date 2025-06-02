<template>
  <div class="about-page">
    <section class="intro">
      <h1>About the Association</h1>
      <p>
        The Association of Family Psychiatrists is committed to advancing the field of family mental
        health by fostering collaboration, research, education, and advocacy.
      </p>
    </section>

    <section class="mission">
      <h2>Our Mission</h2>
      <p>
        We strive to support psychiatrists and mental health professionals who work with families,
        providing resources, training, and a professional network to promote mental wellness at
        every stage of life.
      </p>
    </section>

    <section class="vision">
      <h2>Our Vision</h2>
      <p>
        A world where every family has access to compassionate, evidence-based psychiatric care.
      </p>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
.about-page {
  max-width: 960px;
  margin: 1rem auto;
  padding: 4rem 2rem;
  color: var(--color-text);
  background-color: var(--color-background);
}

.about-page section {
  margin-bottom: 3rem;
}

h1,
h2 {
  color: var(--color-heading);
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.7;
}
</style>
