<template>
  <div class="conference-page">
    <!-- Hero Section -->
    <section class="hero-section" :style="{ backgroundImage: `url(${conferenceImage1})` }">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="conference-title">
          Bridging Minds, Systems, and Relationships: Biopsychorelational Healing
        </h1>
        <p class="conference-subtitle">A Collaboration between Family Process Institute, Association of Family Psychiatry, and American Association of Child and Adolescent Psychiatry</p>
        <div class="conference-meta">
          <p class="conference-date">April 4, 2026</p>
          <p class="conference-time">7:00 AM – 2:00 PM PST / 10:00 AM – 5:00 PM EST</p>
        </div>
        <p class="conference-virtual-note">
          Virtual Conference
        </p>
      </div>
    </section>

    <!-- Thank You (conference concluded) -->
    <section class="thank-you-section">
      <h2>Thank You</h2>
      <div class="thank-you-content">
        <p>
          Thank you to everyone who joined us on April 4, 2026, for
          <em>Bridging Minds, Systems, and Relationships: Biopsychorelational Healing</em>.
        </p>
        <p>
          We are grateful to our featured presenters, our partners at the Family Process Institute,
          Alliant International University, and the collaborating organizations, and to each
          attendee who took part in the conversation.
        </p>
        <p>
          Registration for this event is now closed. This page remains as a record of the program,
          agenda, and faculty.
        </p>
      </div>
    </section>

    <!-- Partner Logos Section -->
    <section class="logos-section">
      <div class="logos-container">
        <img :src="logoFpi" alt="Family Process Institute Logo" class="partner-logo partner-logo-fpi" />
        <img :src="logoAu" alt="Alliant University Logo" class="partner-logo" />
        <!-- <img :src="logoCheo" alt="CHEO Logo" class="partner-logo" />
        <img :src="logo1c1" alt="1Call1Click Logo" class="partner-logo" />
        <img :src="logoAacap" alt="AACAP Logo" class="partner-logo" /> -->
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="mission-section">
      <h2>Mission Statement</h2>
      <p>
        To create a collaborative platform for family psychiatrists and family therapists to explore
        systemic and relational factors and the biopsychorelational determinants of behavior,
        fostering integrated approaches that improve mental health care delivery and outcomes for
        individuals and families.
      </p>
    </section>

    <!-- Visual Break Section -->
    <section class="visual-break-section">
      <img :src="conferenceImage4" alt="Conference visual" class="visual-break-image" />
    </section>

    <!-- Conference Objectives -->
    <section class="objectives-section">
      <h2>Conference-Wide Learning Objectives</h2>
      <p>By the end of the conference, participants will be able to:</p>
      <ol class="objectives-list">
        <li>
          Identify and integrate systemic and relational considerations into psychiatric and
          therapeutic practices.
        </li>
        <li>
          Explore interprofessional collaboration strategies to enhance patient and family outcomes.
        </li>
        <li>
          Engage in dynamic dialogue to develop action-oriented solutions to clinical and systemic
          challenges.
        </li>
      </ol>
    </section>

    <!-- Agenda -->
    <section class="agenda-section">
      <h2>Conference Agenda</h2>
      <div class="agenda-container">
        <!-- Welcome -->
        <div class="panel-card">
          <h3>10:00 – 10:15 | Welcome and Introduction</h3>
          <p class="panel-focus">
            <strong>Conference Chair:</strong> Dr. Manijeh Daneshpour
          </p>
        </div>

        <!-- Panel I -->
        <div class="panel-card">
          <h3>10:15 – 11:15 | Panel I: Systemic & Relational Perspectives in Psychiatry and Therapy</h3>
          <div class="panelists">
            <h4>Panelists:</h4>
            <div class="presenter-list">
              <span
                v-for="panelist in panel1Panelists"
                :key="panelist.name"
                class="presenter-badge"
              >
                {{ panelist.name }}
              </span>
            </div>
          </div>
          <div class="panel-objectives">
            <h4>Learning Objectives:</h4>
            <ul>
              <li>Describe systemic influences on mental health symptoms.</li>
              <li>
                Demonstrate relational interventions that complement pharmacological approaches.
              </li>
            </ul>
          </div>
        </div>

        <!-- Panel II -->
        <div class="panel-card">
          <h3>
            11:15 – 12:15 | Panel II: From Loss to Resilience: Biopsychorelational Approaches with Refugee Families
          </h3>
          <div class="panelists">
            <h4>Panelists:</h4>
            <div class="presenter-list">
              <span
                v-for="panelist in panel2Panelists"
                :key="panelist.name"
                class="presenter-badge"
              >
                {{ panelist.name }}
              </span>
            </div>
          </div>
          <div class="panel-objectives">
            <h4>Learning Objectives:</h4>
            <ul>
              <li>
                Identify common relational and systemic challenges faced by displaced and refugee
                families (e.g., role shifts, intergenerational strain, cultural dislocation).
              </li>
              <li>
                Explore strategies that foster resilience, belonging, and healing within refugee
                family systems.
              </li>
              <li>
                Discuss how systemic and relational perspectives can inform policy and community
                responses to the global refugee crisis.
              </li>
            </ul>
          </div>
        </div>

        <!-- Panel III -->
        <div class="panel-card">
          <h3>12:15 – 1:15 | Panel III: Integrated Care Models – From Theory to Practice</h3>
          <div class="panelists">
            <h4>Panelists:</h4>
            <div class="presenter-list">
              <span
                v-for="panelist in panel3Panelists"
                :key="panelist.name"
                class="presenter-badge"
              >
                {{ panelist.name }}
              </span>
            </div>
          </div>
          <div class="panel-objectives">
            <h4>Learning Objectives:</h4>
            <ul>
              <li>Describe integrated care models in which psychiatrists and therapists collaborate.</li>
              <li>Identify common barriers to integration and strategies to overcome them across clinical settings.</li>
            </ul>
          </div>
        </div>

        <!-- Lunch Break -->
        <div class="panel-card">
          <h3>1:15 – 2:00 | Lunch Break (45 minutes)</h3>
        </div>

        <!-- Panel IV -->
        <div class="panel-card">
          <h3>2:00 – 3:00 | Panel IV: Ethical, Cultural, and Generational Challenges in Collaborative Care</h3>
          <div class="panelists">
            <h4>Panelists:</h4>
            <div class="presenter-list">
              <span
                v-for="panelist in panel4Panelists"
                :key="panelist.name"
                class="presenter-badge"
              >
                {{ panelist.name }}
              </span>
            </div>
          </div>
          <div class="panel-objectives">
            <h4>Learning Objectives:</h4>
            <ul>
              <li>Apply culturally responsive and ethically sound approaches in systemic work.</li>
              <li>
                Recognize and address loyalty conflicts and intergenerational differences in
                clinical settings.
              </li>
            </ul>
          </div>
        </div>

        <!-- All-Presenters Panel -->
        <div class="panel-card">
          <h3>3:00 – 4:00 | All-Presenters Panel Discussion</h3>
          <div class="panelists">
            <h4>Panelists:</h4>
            <div class="presenter-list">
              <span
                v-for="panelist in allPresentersPanel"
                :key="panelist.name"
                class="presenter-badge"
              >
                {{ panelist.name }}
              </span>
            </div>
          </div>
          <div class="moderator">
            <h4>Moderator:</h4>
            <span class="presenter-badge">Dr. Manijeh Daneshpour</span>
          </div>
          <div class="panel-objectives">
            <h4>Learning Objectives:</h4>
            <ul>
              <li>Integrate insights from psychiatry and therapy to advance biopsychorelational collaboration.</li>
              <li>
                Identify emerging themes and opportunities for future clinical, training, and research
                initiatives in integrated family mental health care.
              </li>
            </ul>
          </div>
        </div>

        <!-- Q&A -->
        <div class="panel-card">
          <h3>4:00 – 5:00 | Audience Q&A and Concluding Remarks</h3>
          <div class="panel-objectives">
            <h4>Learning Objectives:</h4>
            <ul>
              <li>Synthesize key concepts across panels into practical applications.</li>
              <li>
                Engage in reflective dialogue to identify next steps for collaboration within participants'
                clinical, educational, or organizational contexts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Presenters Section -->
    <section class="presenters-section">
      <h2>Featured Presenters</h2>
      <div class="presenters-grid">
        <div v-for="presenter in presenters" :key="presenter.name" class="presenter-card">
          <div v-if="presenter.image" class="presenter-image-container">
            <img :src="presenter.image" :alt="presenter.name" class="presenter-image" />
          </div>
          <div class="presenter-info">
            <h3 class="presenter-name">{{ presenter.name }}</h3>
            <p class="presenter-title">{{ presenter.title }}</p>
            <p class="presenter-bio">{{ presenter.bio }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useSEO } from '@/composables/useSEO.js'

// Import logos
import logoFpi from '@/assets/conferencewebsiteinformation/logo_fpi.jpeg'
import logoAu from '@/assets/conferencewebsiteinformation/au_logo.png'

// Import presenter headshots
import noahSpectorImg from '@/assets/conferencewebsiteinformation/Noah Spector.jpg'
import rishiKapurImg from '@/assets/conferencewebsiteinformation/Rishi Kapur.JPG'
import daneshpourImg from '@/assets/conferencewebsiteinformation/Dr. Manijeh Daneshpour.jpg'
import shaligramImg from '@/assets/conferencewebsiteinformation/Shaligram-Dee headshot.jpg'
import michelleRickerbyImg from '@/assets/conferencewebsiteinformation/Dr Michelle Rickerby.jpg'
import jGuzderImg from '@/assets/conferencewebsiteinformation/Dr Jaswant Guzder.jpg'
import ramaRaoGogineniImg from '@/assets/conferencewebsiteinformation/Dr. Rama Rao Gogineni.png'
import rajeshMehtaImg from '@/assets/conferencewebsiteinformation/Dr. Rajesh Mehta.jpeg'
import abbyRossImg from '@/assets/afp-conference-photos/image-12.avif'

// Import conference photos
import conferenceImage1 from '@/assets/conferencewebsiteinformation/diverse-family-1.png'
import conferenceImage4 from '@/assets/conferencewebsiteinformation/diverse-family-2.png'
// SEO setup
useSEO({
  title: 'Bridging Minds, Systems and Relationships: Biopsychorelational Healing | AFP',
  description:
    'Thank you to everyone who joined our April 4, 2026 virtual conference. A collaboration between Family Process Institute, Association of Family Psychiatry, and partners exploring systemic and relational factors in mental health care.',
  path: '/conference',
})

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
})

// Panelists data
const panel1Panelists = [{ name: 'Dr. Noah Spector' }, { name: 'Dr. Rishi Kapur' }]

const panel2Panelists = [{ name: 'Dr. Jaswant Guzder' }, { name: 'Dr. Rajesh Mehta' }]

const panel3Panelists = [{ name: 'Dr. Dee Shaligram' }, { name: 'Dr. Michelle Rickerby' }, { name: 'Dr. Abby Ross' }]

const panel4Panelists = [{ name: 'Dr. Manijeh Daneshpour' }, { name: 'Dr. Rama Rao Gogineni' }]

const allPresentersPanel = [
  { name: 'Dr. Noah Spector' },
  { name: 'Dr. Rishi Kapur' },
  { name: 'Dr. Dee Shaligram' },
  { name: 'Dr. Michelle Rickerby' },
  { name: 'Dr. Jaswant Guzder' },
  { name: 'Dr. Rajesh Mehta' },
  { name: 'Dr. Manijeh Daneshpour' },
  { name: 'Dr. Rama Rao Gogineni' },
  { name: 'Dr. Abby Ross' },
]

// Presenters data with bios and images
const presenters = [
  {
    name: 'Michelle Rickerby, MD',
    title: 'Clinical Professor of Psychiatry and Human Behavior, Brown University',
    bio: "Michelle Rickerby, MD has had her academic home at Brown University since 1996. Following her residency training, she spent 20 years working with a team on the development of the Partial Hospital Program at Hasbro Children's Hospital, a nationally recognized program known for creating a model of family-based integrated care for children and teens with complex combinations of medical and psychiatric illness. She transitioned to community-based practice in Providence, RI, in 2018, where she focuses on outpatient family-based integrated care, program development consultation, and cross-disciplinary family therapy training. Her primary teaching role throughout her tenure at Brown, where she is a Clinical Professor of Psychiatry and Human Behavior, has been as the previous co-director and current Director of family therapy training for the child psychiatry and triple board residents. She is currently a Co-Chair of AACAP's Family Committee.",
    image: michelleRickerbyImg,
  },
  {
    name: 'Manijeh Daneshpour, PhD',
    title: 'Systemwide Couple and Family Therapy Director, Alliant International University',
    bio: `Manijeh Daneshpour, PhD, is the Systemwide Director of Couple and Family Therapy and a Distinguished Professor of Marriage and Family Therapy at Alliant University in California. A licensed marriage and family therapist with nearly three decades of academic, research, and clinical experience, she is deeply shaped by her lived experience as a Middle Eastern woman originally from Iran and as a self-identified third-wave feminist. Her scholarly and clinical work emerges from the intersection of personal history, cultural context, and professional practice. Dr. Daneshpour has worked extensively with Muslim families and is the author of Family Therapy with Muslims, using classic family therapy models and their clinical applications for working with Muslim families. Her most recent book, Gender, Power, Global Social Justice: The Healing Power of Psychotherapy, examines how gender and power shape relational life globally and explores the role of family therapists in supporting ethical and relational change.`,
    image: daneshpourImg,
  },
  {
    name: 'Dr. Noah Spector',
    title: 'Care Coordinator, CHEO Kids Come First / 1Call1Click.ca',
    bio: "Dr. Noah Spector is a registered social worker with over twenty years of experience in children's mental health care. He is currently the Care Coordinator for the Children's Hospital of Eastern Ontario (CHEO)'s Kids Come First / 1Call1Click.ca Substance Use and Concurrent Disorders Program. Dr. Spector is also a lecturer in family therapy within the University of Ottawa's Faculty of Medicine, Department of Child and Adolescent Psychiatry. He is the founding Program Director of the CHEO Research Institute (RI)'s Mind Matters team, which includes all CHEO-based researchers studying brain, mind, and the contexts, families, communities, and healthcare settings, in which children and youth can thrive. Dr. Spector holds a PhD in Education from the University of Ottawa and an MSW from McGill University. His research interests include interprofessional collaboration and the development of family interventions within acute pediatric mental health contexts. He is also a proud father of two children under the age of ten, who teach him daily how difficult and rewarding parenting can be.",
    image: noahSpectorImg,
  },
  {
    name: 'Rishi Kapur, MD',
    title: 'Child and Adolescent Psychiatrist, CHEO',
    bio: 'Rishi Kapur, MD. identifies as a cisgender second-generation Canadian South Asian male. He trained and works as a child and adolescent psychiatrist at CHEO. He is passionate about medical education, staff and learner wellness, and health equity. He has taken an interest in exploring clinical work with rural and urban Indigenous communities, gender-diverse populations, and racialized children and families. He has co-led the family therapy teaching program for core psychiatry residents and Child and Adolescent Psychiatry fellows at the University of Ottawa for five years. He is fascinated by organizational health and improving systems and processes within institutions. In his spare time, he enjoys yoga, cycling, the cello, and spending time with his family and Samoyed.',
    image: rishiKapurImg,
  },
  {
    name: 'Jaswant Guzder, MD',
    title: 'Clinical Professor of Psychiatry, University of British Columbia',
    bio: "Jaswant Guzder, MD. is a Clinical Professor of Psychiatry at the University of British Columbia and Co-Director of the UBC Social and Cultural Psychiatry Program, with a career deeply grounded in refugee mental health and culturally informed care. Since 2020, her clinical work in Victoria, BC, has centered on supporting refugee and immigrant communities through the Vancouver Island Centre for Refugee and Immigrant Mental Health (VICCIR), alongside work with Indigenous Child and Youth Mental Health services across southern Vancouver Island. A retired Professor of Psychiatry at McGill University, where she continues to collaborate with the Divisions of Child Psychiatry and Social and Transcultural Psychiatry, she has held major leadership roles, including Head of Child Psychiatry and founding Co-Director of the Cultural Consultation Service at the Jewish General Hospital. Her global research and training initiatives focus on high-risk children and cultural psychiatry, with longstanding partnerships in Jamaica, India, Nepal, and Sri Lanka. Dr. Guzder has authored numerous articles, co-edited Cultural Consultation: Encountering the Other in Mental Health Care, and collaborated with Rome's Museo Laboratorio della Mente on an art-based project in 2017. Her advocacy and clinical leadership have been recognized with the Queen Elizabeth II Diamond Jubilee Medal.",
    image: jGuzderImg,
  },
  {
    name: 'Deepika Shaligram, MD',
    title: `Child, Adolescent, and Adult Psychiatrist, Boston Children's Hospital`,
    bio: `Deepika Shaligram, MD is a child, adolescent, and adult psychiatrist with Boston Children's Hospital. She is an attending psychiatrist in the Outpatient Psychiatry Services and affiliate faculty in Global Health. She is co-director of the Boston Children's Hospital Massachusetts Child Psychiatry Access Program and the International Psychiatry Observership Program. Her areas of interest include access to care, education, and social justice. She is a member of AACAP's Climate Change Committee and co-chair of the Diversity & Culture Committee and the Taskforce on Children, Families, and Immigration. Dr. Shaligram serves on the boards of the New England Council on Child & Adolescent Psychiatry and the Family Process Institute. She is a Fellow of the American Psychiatric Association and a Distinguished Fellow of AACAP. She is a contributing editor for the Journal of the American Academy of Child and Adolescent Psychiatry. She enjoys teaching psychopharmacology, family psychiatry, and collaborative care.`,
    image: shaligramImg,
  },
  {
    name: 'Rama Rao Gogineni, MD, MFT',
    title: 'Professor of Psychiatry, Cooper Medical School of Rowan University',
    bio: 'Rama Rao Gogineni, MD, MFT is a graduate of Kakatiya Medical College, Osmania University, and completed psychiatry residency at the University of Pennsylvania and Child and Adolescent Psychiatry fellowship at the Medical College of Pennsylvania. He was trained in family therapy and psychoanalysis. He is currently a Professor of Psychiatry and Senior Educator in Developmental Psychiatry at Cooper Medical School of Rowan University. He is an active, contributing member of U.S. and international psychiatric organizations. He has several publications, presentations, and serves as editor of five books.',
    image: ramaRaoGogineniImg,
  },
  {
    name: 'Rajesh Mehta, MD',
    title: 'Director of Psychotherapy Training for the Child and Adolescent Psychiatry Fellowship Program and Attending Psychiatrist at Children’s Hospital of The King’s Daughters',
    bio: `Rajesh Mehta, MD is a double board-certified child, adolescent, and general psychiatrist
currently serving as Director of Psychotherapy Training for the Child and Adolescent Psychiatry
Fellowship Program and Attending Psychiatrist at Children’s Hospital of The King’s Daughters
(CHKD), affiliated with Eastern Virginia Medical School–Old Dominion University, Virginia.
With a strong background in psychodynamic psychotherapy and systems-based family care, Dr.
Mehta integrates developmental, cultural, and relational frameworks in both clinical practice and
teaching. Trained in India and the United States, Dr. Mehta has cultivated a globally informed
perspective on mental health. He completed psychiatry residency training at St. Louis University
in Missouri, Child and Adolescent Psychiatry fellowship training at the Institute of

Living/Hartford Hospital in Connecticut, and an advanced course in psychodynamic
psychotherapy at the St. Louis Psychoanalytic Institute. He has supervised psychiatry residents
and fellows across multiple academic centers.
Dr. Mehta is an active member of AACAP, APA, AFP, IACAPAP, and GAP and contributes to
several educational and research initiatives. He currently serves as Vice President of the
Association of Family Psychiatrists (AFP). His academic work includes the development of
short-term psychodynamically oriented family therapy and scholarship focused on the role of
fathers in child development, cultural psychiatry, and systems-based care. He has presented
posters, case conferences, and workshops on child mental health, integrative psychotherapy,
migration and mental health, and early childhood development.`,
    image: rajeshMehtaImg,
  },
  {
    name: 'Abigail (Abby) M. Ross, MSW, LICSW, MPH, PhD',
    title: 'Associate Professor, University of Pennsylvania School of Social Policy & Practice',
    bio: `Abigail (Abby) M. Ross, MSW, LICSW, MPH, PhD, is an Associate Professor at the University of Pennsylvania School of Social Policy & Practice; she maintains a secondary appointment in the Department of Psychiatry at the Perelman School of Medicine. She also consults as a Research Social Worker to the Departments of Psychiatry and Social Work at Boston Children's Hospital. Broadly, her program of research seeks to develop and implement evidence-based interventions that both improve youth and family well-being in pediatric health settings and advance equity within youth-serving health systems. Specifically, her research aims to: 1) develop, adapt, refine, and implement family-based preventive interventions that reduce suicide risk in youth for use across the continuum of healthcare settings, 2) identify effective dissemination and implementation processes and mechanisms that increase the uptake of these evidence-based practices, and 3) leverage technology in youth-serving health systems to both detect unmet social needs and evaluate the impact of social care interventions that address them. Her research has been supported by several federal sources and national foundations, including the American Foundation for Suicide Prevention, the Doris Duke Foundation, the Health Resources and Services Administration, the National Institute of Mental Health, the Substance Abuse and Mental Health Services Administration, and the Tommy Fuss Center for Neuropsychiatric Disease Research.`,
    image: abbyRossImg,
  },
]
</script>

<style scoped>
.conference-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: var(--color-background);
  color: var(--color-text-dark, #333);
}

/* Hero Section */
.hero-section {
  position: relative;
  background: linear-gradient(135deg, var(--color-accent) 0%, #c65e53 100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 3rem;
  overflow: hidden;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(198, 94, 83, 0.85) 0%,
    rgba(198, 94, 83, 0.75) 50%,
    rgba(198, 94, 83, 0.85) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
}

/* Partner Logos Section */
.logos-section {
  background-color: white;
  padding: 3rem 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logos-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.partner-logo {
  max-height: 80px;
  max-width: 180px;
  object-fit: contain;
  height: auto;
  width: auto;
}

.partner-logo-fpi {
  max-height: 180px;
  max-width: 400px;
}

/* Single row on larger screens - all 5 logos in one row */
@media (min-width: 1200px) {
  .logos-container {
    gap: 2.5rem;
    flex-wrap: nowrap;
  }

  .partner-logo {
    max-height: 90px;
    max-width: 200px;
  }

  .partner-logo-fpi {
    max-height: 200px;
    max-width: 450px;
  }
}

/* Stack 2 and 3 on medium screens */
@media (min-width: 768px) and (max-width: 1199px) {
  .logos-container {
    gap: 2rem;
    max-width: 700px;
    margin: 0 auto;
  }

  .partner-logo {
    max-height: 75px;
    max-width: 160px;
  }

  .partner-logo-fpi {
    max-height: 150px;
    max-width: 320px;
  }

  /* First 2 logos take 50% each */
  .partner-logo:nth-child(-n + 2) {
    flex: 0 1 calc(50% - 1rem);
  }

  /* Last 3 logos take 33.33% each */
  .partner-logo:nth-child(n + 3) {
    flex: 0 1 calc(33.333% - 1.33rem);
  }
}

/* Smaller screens - 2 per row */
@media (max-width: 767px) {
  .logos-container {
    gap: 1.5rem;
  }

  .partner-logo {
    max-height: 60px;
    max-width: 140px;
    flex: 0 1 calc(50% - 0.75rem);
  }

  .partner-logo-fpi {
    max-height: 120px;
    max-width: 280px;
  }
}

.conference-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.conference-subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  opacity: 0.95;
}

.conference-meta {
  margin-top: 1.5rem;
}

.conference-virtual-note {
  margin-top: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.conference-date {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.conference-time {
  font-size: 1.1rem;
  font-weight: 500;
  opacity: 0.95;
}

/* Mission Section */
.mission-section {
  background-color: var(--vt-c-black-soft);
  color: var(--color-text-light);
  padding: 3rem 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  text-align: center;
}

.mission-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text-light);
}

.mission-section p {
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto;
}

/* Visual Break Section */
.visual-break-section {
  margin: 3rem 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-height: 400px;
}

.visual-break-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  max-height: 400px;
}

/* Objectives Section */
.objectives-section {
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  background-color: var(--color-background);
}

.objectives-section h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-accent);
  text-align: center;
}

.objectives-section > p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--color-text-dark, #333);
}

.objectives-list {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  padding-left: 2rem;
  color: var(--color-text-dark, #333);
}

.objectives-list li {
  margin-bottom: 1rem;
}

/* Agenda Section */
.agenda-section {
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  background-color: var(--color-background);
}

.agenda-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-accent);
  text-align: center;
}

.agenda-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}


.panel-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: var(--color-text-dark, #333);
}

.panel-card h3 {
  font-size: 1.5rem;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.panel-duration {
  font-weight: 600;
  color: var(--color-text-dark, #666);
  margin-bottom: 1rem;
}

.panel-focus {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: var(--color-text-dark, #333);
}

.panelists {
  margin: 1.5rem 0;
}

.panelists h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-dark, #333);
}

.moderator {
  margin: 1.5rem 0;
}

.moderator h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-dark, #333);
}

.presenter-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.presenter-badge {
  background-color: var(--color-accent);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
}

.panel-objectives {
  margin-top: 1.5rem;
}

.panel-objectives h4 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-dark, #333);
}

.panel-objectives ul,
.panel-objectives ol {
  margin-left: 1.5rem;
  line-height: 1.8;
  color: var(--color-text-dark, #333);
}

.panel-objectives li {
  margin-bottom: 0.5rem;
}

/* Presenters Section */
.presenters-section {
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  background-color: var(--color-background);
}

.presenters-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-accent);
  text-align: center;
}

.presenters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.presenter-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.presenter-image-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-color: #f5f5f5;
}

.presenter-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.presenter-info {
  padding: 1.5rem;
}

.presenter-card .presenter-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
}

.presenter-title {
  font-size: 1rem;
  color: var(--color-text-dark, #666);
  font-weight: 600;
  margin-bottom: 1rem;
}

.presenter-bio {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-dark, #333);
}

/* Thank You (post-conference) */
.thank-you-section {
  background: linear-gradient(
    135deg,
    rgba(198, 94, 83, 0.12) 0%,
    rgba(198, 94, 83, 0.06) 100%
  );
  border: 1px solid rgba(198, 94, 83, 0.25);
  padding: 3rem 2rem;
  border-radius: 12px;
  margin-bottom: 3rem;
  text-align: center;
}

.thank-you-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-accent);
}

.thank-you-content {
  max-width: 720px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-dark, #333);
}

.thank-you-content p {
  margin-bottom: 1.25rem;
}

.thank-you-content p:last-child {
  margin-bottom: 0;
}

.thank-you-content em {
  font-style: italic;
  color: var(--color-text-dark, #333);
}

/* Responsive Design */
@media (max-width: 768px) {
  .conference-title {
    font-size: 1.75rem;
  }

  .conference-subtitle {
    font-size: 1.25rem;
  }

  .hero-section {
    min-height: 300px;
    padding: 2.5rem 1.5rem;
  }

  .visual-break-section {
    margin: 2rem 0;
    max-height: 250px;
  }

  .visual-break-image {
    max-height: 250px;
  }

  .logos-container {
    gap: 1rem;
  }

  .partner-logo {
    max-height: 60px;
  }

  .presenters-grid {
    grid-template-columns: 1fr;
  }

  .thank-you-section {
    padding: 2rem 1.5rem;
  }

  .thank-you-section h2 {
    font-size: 1.6rem;
  }

  .thank-you-content {
    font-size: 1rem;
  }
}
</style>
