<template>
  <section class="award-recognition">
    <h1 class="page-title">
      Annual Resident/Fellow Recognition Award for Excellence in Family Oriented Care: Nominations
      Requested
    </h1>

    <div class="nomination-text">
      <h2>Nominate an Outstanding Trainee</h2>
      <p>
        We are requesting that you nominate one 3rd or 4th year resident and/or one child or adult
        fellow from your program for this honor. Please select the candidate who best embraces the
        values of a family psychiatrist and shows consistent, advanced interest in family work at
        the child or adult level.
      </p>
      <ul>
        <li>Seeking out extra teaching or supervision in family care</li>
        <li>
          Consistently seeing families in treatment, whether in consultation, psychoeducation or
          family therapy
        </li>
        <li>Advocacy work with NAMI or other organizations</li>
        <li>Academic presentations (posters, grand rounds, etc.)</li>
        <li>Writing columns, books or journal articles about family-oriented issues</li>
      </ul>
      <p>
        The deadline for nomination is April 1. Please email a description of the resident's work
        with families, as well as their CV, to Randi Libbon, MD at
        <a href="mailto:Randi.libbon@cuanschutz.edu">Randi.libbon@cuanschutz.edu</a>.
      </p>
    </div>

    <!-- 2023 Winners -->
    <section class="card-grid-section">
      <h2 class="grid-title">2023 Winners of Our Annual Award for Excellence in Family Care</h2>
      <div class="card-grid">
        <div v-for="(card, index) in awardCards2023" :key="index" class="award-card">
          <h3 class="award-card-title">{{ card.title }}</h3>
          <p class="award-card-subtitle">{{ card.subtitle }}</p>
          <p class="award-card-description">{{ card.description }}</p>
        </div>
      </div>
    </section>

    <!-- 2024 Winners -->
    <section class="card-grid-section">
      <h2 class="grid-title">2024 Winners of Our Annual Award for Excellence in Family Care</h2>
      <div class="card-grid">
        <div v-for="(card, index) in awardCards2024" :key="index" class="award-card">
          <h3 class="award-card-title">{{ card.title }}</h3>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup>
const awardCards2023 = [
  {
    title: 'Joel H. Barrett Jr., MD',
    subtitle: 'Resident',
    description: 'Texas Tech University Health Sciences Center, Lubbock, TX',
  },
  {
    title: 'Amber Khan, MD',
    subtitle: 'Resident',
    description: 'Montefiore Medical Center / Albert Einstein College of Medicine, Bronx, NY',
  },
  {
    title: 'Gerardo Lopez, MD',
    subtitle: 'Resident',
    description: 'Cooper University Hospital, Camden, NJ',
  },
  {
    title: 'Sarah Richards, MD',
    subtitle: 'Resident',
    description: 'MetroHealth Medical Center, Cleveland, OH',
  },
  {
    title: 'Emilie Transue, MD, MPH',
    subtitle: 'Resident',
    description:
      'National Health Services Corps Scholar; University of Rochester Medical Center, Rochester, NY',
  },
  {
    title: 'Hannah W Burley, MD',
    subtitle: 'Fellow',
    description: 'Maine Medical Center Child and Adolescent Psychiatry Fellowship',
  },
  {
    title: 'Danielle Burton, MD',
    subtitle: 'Fellow',
    description:
      'Tufts Medical Center Triple Board Residency; Pediatrics, Psychiatry, Child and Adolescent Psychiatry',
  },
  {
    title: 'Josiah Cox, MD, PhD',
    subtitle: 'Fellow',
    description:
      'Tulane Triple Board Residency; Pediatrics, Psychiatry, and Child and Adolescent Psychiatry',
  },
  {
    title: 'Gregory Gabrellas, MD',
    subtitle: 'Fellow',
    description:
      'NewYork-Presbyterian Hospital / Weill Cornell Medical College Clinical Child and Adolescent Psychiatry Fellowship',
  },
  {
    title: 'Jennifer T. Hu, MD',
    subtitle: 'Fellow',
    description: 'Duke University Child and Adolescent Psychiatry Fellowship',
  },
  {
    title: 'Sehar N. Jessani, MD',
    subtitle: 'Fellow',
    description: 'Children’s Hospital of Philadelphia Child and Adolescent Psychiatry Fellowship',
  },
  {
    title: 'Jooyoung Lee, MD',
    subtitle: 'Fellow',
    description:
      'Cambridge Health Alliance / Harvard Medical School Child and Adolescent Psychiatry Fellowship and BPSI One-Year Fellowship in Psychoanalytic Psychotherapy, Newton Center, MA',
  },
  {
    title: 'Christopher Robertson, MD',
    subtitle: 'Fellow',
    description:
      'Harvard Medical School and Boston Children’s Hospital Child and Adolescent Psychiatry Fellowship',
  },
]

const awardCards2024 = [
  { title: 'Janice Cho, MD' },
  { title: 'Sarah Faitell, DO' },
  { title: 'Eileen Glocer, MD' },
  { title: 'Hannah Goddard, DO' },
  { title: 'Jatin Julakanti, MD' },
  { title: 'Hannah Leo, MD' },
  { title: 'Kaajal Patel Tan, DO' },
  { title: 'Michelle Prakash, MD' },
  { title: 'Pallavi Tatapudy, MD' },
  { title: 'Richard Seeber II, MD' },
  { title: 'Alfonso Vera Jr, MD' },
]
</script>

<style scoped>
.award-recognition {
  padding: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  color: var(--color-heading, #333);
}

.nomination-text h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-heading, #333);
}

.nomination-text p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--color-text, #555);
}

.nomination-text ul {
  list-style-type: disc;
  margin-left: 2rem;
  margin-bottom: 1rem;
}

.nomination-text a {
  color: var(--color-link, #007bff);
  text-decoration: underline;
}

.card-grid-section {
  margin-top: 3rem;
}

.grid-title {
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 2rem;
  color: var(--color-heading, #333);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.award-card {
  background: var(--color-surface, #f9f9f9);
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.award-card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: var(--color-heading, #333);
}

.award-card-subtitle {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: var(--color-accent, #555);
}

.award-card-description {
  font-size: 0.95rem;
  color: var(--color-text, #555);
}
</style>
