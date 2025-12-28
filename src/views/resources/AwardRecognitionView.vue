<template>
  <section class="award-recognition">
    <h1 class="page-title">
      Annual Resident/Fellow Recognition Award for Excellence in Family Oriented Care: Nominations
      Requested
    </h1>

    <div class="nomination-text">
      <p class="greeting">
        Dear Colleagues,<br />
        Happy Holidays! On behalf of the Association of Family Psychiatrists (AFP), we wish you and
        your families a wonderful, healthy, and successful New Year. We are pleased to share two
        important announcements highlighting AFP's continued commitment to recognizing excellence in
        family-oriented psychiatry, education, and scholarship.
      </p>

      <!-- 10th Annual Resident and Fellow Recognition Award -->
      <div class="award-section">
        <h2>10th Annual Resident and Fellow Recognition Award for Excellence in Family-Oriented Care</h2>
        <p>
          We are excited to announce the 10th Annual Resident and Fellow Recognition Award for
          Excellence in Family-Oriented Care, presented by the Association of Family Psychiatrists
          (AFP). This award highlights outstanding contributions to family-oriented clinical care and
          supports the next generation of family psychiatrists.
        </p>

        <h3>Awardees Will Receive:</h3>
        <ul>
          <li>A certificate of recognition</li>
          <li>An invitation to attend the AFP Annual Meeting</li>
          <li>An invitation to attend the AFP Meeting held during the APA Annual Meeting</li>
          <li>
            One year of mentoring or other significant family-oriented learning experiences with a
            senior AFP member
          </li>
        </ul>

        <h3>Eligibility & Nomination Criteria</h3>
        <p>
          We invite nominations of 3rd- or 4th-year psychiatry residents or fellows who demonstrate:
        </p>
        <ul>
          <li>A commitment to family-oriented care through supervision, teaching, or advocacy</li>
          <li>Consistent involvement of families in treatment</li>
          <li>
            Contributions such as advocacy, presentations, or publications focused on family-oriented
            care
          </li>
        </ul>
        <p>
          Nominees should have experience in psychoeducation and family consultation, with a strong
          focus on involving families in treatment.
        </p>
      </div>

      <!-- Berman Award -->
      <div class="award-section">
        <h2>The Berman Award for Best Written or Media Content of the Year (2026)</h2>
        <p>
          We are also excited to announce the launch of the inaugural Berman Award, beginning with
          2026 submissions, best content on any aspect of family works each year starting in 2025.
        </p>

        <p>
          Eligible submissions may include a book, article, poster, YouTube video, blog, podcast, or
          conference presentation focused on psychoeducation, family therapy, or family consultation
          in any medical field, including psychiatry, medicine, surgery, addiction, and related
          disciplines. Publicly presented content refers to work that was accessible to the field
          and/or the public in the given year.
        </p>

        <h3>Eligibility:</h3>
        <ul>
          <li>
            Open to residents, fellows, and early-career psychiatrists (within the first five years
            after completing training)
          </li>
          <li>The submitting author must be the sole author or first author</li>
          <li>Preference will be given to AFP or AACAP members</li>
          <li>Content may be self-submitted or nominated by others</li>
        </ul>

        <h3>Awards:</h3>
        <ul>
          <li>First-place award: $200–$250</li>
          <li>
            Second- and third-place awards: Books on family psychiatry or family therapy authored or
            edited by AFP or AACAP members
          </li>
        </ul>

        <p>
          The award and winners will be announced at the 2026 AFP Annual Conference (April 2026 more
          information yet to come).
        </p>
      </div>

      <!-- Submission Details -->
      <div class="submission-section">
        <h2>Submission Details (for Both Awards)</h2>
        <p>Please email:</p>
        <ul>
          <li>A brief description of the nominee's or submitter's work, and</li>
          <li>A CV</li>
        </ul>
        <p>
          to Dr. Rajesh Mehta at:
          <a href="mailto:rmeht2033@gmail.com">rmeht2033@gmail.com</a> or
          <a href="mailto:Rajesh.Mehta@CHKD.org">Rajesh.Mehta@CHKD.org</a>
        </p>
        <p class="deadline">
          <strong>Submission Deadline: Friday, February 27, 2026</strong>
        </p>
      </div>
    </div>

    <!-- 2024 Winners -->
    <section class="card-grid-section">
      <h2 class="grid-title">2024 Winners of Our Annual Award for Excellence in Family Care</h2>
      <div class="card-grid">
        <div v-for="(card, index) in awardCards2024" :key="index" class="award-card">
          <h3 class="award-card-title">{{ card.title }}</h3>
        </div>
      </div>
    </section>

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
  line-height: 1.6;
}

.nomination-text .greeting {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  font-style: italic;
}

.award-section {
  margin-top: 2.5rem;
  padding-top: 2rem;
  border-top: 2px solid var(--color-accent, #ca590d);
}

.award-section h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--color-heading, #333);
}

.award-section h3 {
  font-size: 1.25rem;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--color-heading, #333);
}

.submission-section {
  margin-top: 2.5rem;
  padding: 1.5rem;
  background: var(--color-surface, #f9f9f9);
  border-radius: 0.5rem;
  border-left: 4px solid var(--color-accent, #ca590d);
}

.submission-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-heading, #333);
}

.submission-section .deadline {
  font-size: 1.1rem;
  margin-top: 1.5rem;
  padding: 1rem;
  background: #fff;
  border-radius: 0.25rem;
  color: var(--color-accent, #ca590d);
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
