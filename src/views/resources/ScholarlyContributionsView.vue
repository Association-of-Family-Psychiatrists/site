<template>
  <ContentPage title="Scholarly Contributions by AFP Members" :sections="contentSections" />
</template>

<script setup>
import ContentPage from '@components/ContentPage.vue'
import { useSEO, useStructuredData } from '@/composables/useSEO.js'

// SEO setup
useSEO({
  title: 'Scholarly Contributions by AFP Members',
  description:
    'Books, articles, and resources developed and shared by members of the Association of Family Psychiatrists.',
  keywords: [
    'family psychiatry',
    'mental illness',
    'trauma',
    'family resources',
    'AFP member contributions',
  ],
  path: '/resources/scholarly-contributions',
})

// Structured data for scholarly contributions
useStructuredData('CollectionPage', {
  '@type': 'CollectionPage',
  name: 'Scholarly Contributions by AFP Members',
  description:
    'Books and resources shared by Association of Family Psychiatrists members for families managing mental illness and trauma.',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Loving Someone with a Mental Illness or History of Trauma',
        description: 'Skills, Hope, and Strength for Your Journey (Johns Hopkins University Press, 2025)',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: "I'm Not Alone: A Teen's Guide to Living with a Parent Who Has a Mental Illness or History of Trauma",
        description: '2nd edition, 2024',
      },
    ],
  },
})

const contentSections = [
  {
    heading: 'Michelle Sherman',
    subheading: 'Clinical psychologist, Minnesota',
    paragraphs: [
      "My name is Michelle Sherman, and I'm a clinical psychologist in Minnesota. I've dedicated my 30-year career to supporting families managing mental illness/trauma, and have special passion for youth whose parent has a mental illness.",
      "Grateful to be welcomed to the Association of Family Psychiatrists community, and look forward to learning from all of you. It's great to connect with colleagues who share my passion for supporting families!",
    ],
  },
  {
    heading: 'Books',
    subheading: '',
    paragraphs: [
      '**"Loving Someone with a Mental Illness or History of Trauma: Skills, Hope, and Strength for Your Journey"** (Johns Hopkins University Press, 2025)',
      "**\"I'm Not Alone: A Teen's Guide to Living with a Parent Who Has a Mental Illness or History of Trauma\"** (2nd edition, 2024) — there are SO few resources for these teens!",
      'Both books strive to build resilience by providing information, practical skills, and resources. They differ from other books as I merge facts and actionable strategies with reflection questions, activities, and stories from adults and teens with lived experience.',
      'You can see the Table of Contents, sample chapters, and other resources on [our website](https://www.seedsofhopebooks.com/).',
      "As a family member of folks managing SMI myself, I really believe we're all in this together, and hope these new books might be of interest to you.",
    ],
  },
]
</script>
