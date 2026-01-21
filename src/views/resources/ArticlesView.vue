<template>
  <ContentPage title="Articles of Interest" :sections="contentSections" />
</template>

<script setup>
import ContentPage from '@components/ContentPage.vue'
import { useSEO, useStructuredData } from '@/composables/useSEO.js'

// SEO setup
useSEO({
  title: 'Articles of Interest',
  description:
    'A comprehensive library of articles of interest to family psychiatrists and mental health professionals. Research papers, clinical studies, and professional publications.',
  keywords: [
    'psychiatry articles',
    'family therapy research',
    'mental health publications',
    'psychiatric studies',
    'clinical research',
  ],
  path: '/resources/articles',
})

// Structured data for articles collection
useStructuredData('CollectionPage', {
  '@type': 'CollectionPage',
  name: 'Articles of Interest for Family Psychiatrists',
  description:
    'A library of articles of interest to our members including research papers, clinical studies, and professional publications.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Family Functioning Assessment',
        description: 'Research on the Brief Assessment of Family Functioning Scale',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'McMaster Family Therapy',
        description: 'Encyclopedia entry on McMaster Family Therapy approach',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'From Hysteria to the Creation of a Functional Neurological Disorder Clinic',
        description:
          'Article by Alison Heru on the development of a functional neurological disorder clinic',
      },
    ],
  },
})

const contentSections = [
  {
    heading: 'Articles of Interest',
    subheading: 'A library of articles of interest to our members!',
    paragraphs: [
      'Mansfield AK, Keitner GI, Sheeran T. The Brief Assessment of Family Functioning Scale (BAFFS) : a three-item version of the General Functioning Scale of the Family Assessment Device. Psychotherapy Research 2018 (in press)',
      'Keitner GI, Mansfield  A, Archambault R.  McMaster Family Therapy. J Lebow et al. (eds) Encyclopedia of Couple and Family Therapy, Springer (in press).',
      'Stratton J, Buck K, Heru AM. Three step-model of family centered care in Integrated Care in Integrating Behavioral health and Primary care Feinstein, Connelly, Feinstein. Oxford University Press, NY, NY Oxford University Press',
      'Guo Y & Heru AM. A Case based approach to Public Psychiatry, Oxford University Press.',
      'Rudnick LP, Heru AM. The ‘secret’ source of ‘female hysteria’: the role that syphilis played in the construction of female sexuality and psychoanalysis in the late nineteenth and early twentieth centuries.',
      'Davis RA, Epstein CH, Klepitskaya O, Sharp CS, Ojemann S, Abosch A, Heru AM.Disambiguating the Psychiatric Sequelae of Parkinson’s Disease, Deep Brain Stimulation, and Life Events: Case Report and Literature Review. Am J Psychiatry. 2017 Jan 1;174(1):11-15.',
      'Fenton L, Rothberg B, Strom LA, Heru AM, Brown M. Integrative care model for neurology and psychiatry, in Integrating Behavioral health and Primary care Feinstein, Connelly, Feinstein. Oxford University Press, NY, NY.',
      'Phelps K, Hodgson J, Heru AM. Chapter 8 / MedFT in Psychiatry in Clinical Methods in Medical Family Therapy.',
      'Brewer BW, Caspari JM, Youngwerth J, Nathan L, Ripoll I, Heru A. Demoralization in medical illness: Feasibility and acceptability of a pilot educational intervention for inpatient oncology nurses. Palliat Support Care 2017 Aug 9:1-8. Epub 2017 Aug 9.',
      'Heru, AM. Managing family differences March 14, 2017 Clinical Psychiatry News Families in Psychiatry.',
      'Heru AM. Changing the Family Dance September 19, 2017 Clinical Psychiatric News Families in Psychiatry.',
      'Papernow, Patricia L. Clinical Guidelines for Working With Stepfamilies: What Family, Couple, Individual, and Child Therapists Need to Know. Fam Proc 57:25-51 2018',
      'Heru AM. [From Hysteria to the Creation of a Functional Neurological Disorder Clinic](https://cdn.tanuj.xyz/10_68.4heru-1_ah.pdf).',
    ],
  },
]
</script>
