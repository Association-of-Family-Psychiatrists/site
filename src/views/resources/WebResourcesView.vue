<template>
  <ContentPage title="Web Resources" :sections="contentSections" />
</template>

<script setup>
import ContentPage from '@components/ContentPage.vue'

const contentSections = [
  {
    heading: 'General Web Resources',
    subheading:
      'In addition to this page, resources including books and articles can be found throughout the website. We welcome additions to this page.',
    paragraphs: [
      '[Mental Health America](http://mentalhealthamerica.net/)',
      '[National Alliance on Mental Illness](https://www.nami.org/): Family to Family Education Program',
      '[American Psychiatric Association](http://psych.org/)',
      '[American Psychological Association](http://apa.org/)',
      '[World Association of Family Psychiatrists](https://www.wafp.org/)',
    ],
  },

  {
    heading: 'Resources for Children',
    subheading: '',
    paragraphs: [
      '[AACAP Factors for Families](https://www.aacap.org/AACAP/Families_and_Youth/Facts_for_Families/Layout/FFF_Guide-01.aspx)',
      '[Families Preventing and Overcoming Depression](http://fampod.org/)',
      "[The National Federation of Families for Children's Mental Health](http://www.ffcmh.org/)",
      '[National Association for Children of Alcoholics](https://www.nacac.org/)',
    ],
  },

  {
    heading: 'Resources for Caregivers',
    subheading: '',
    paragraphs: [
      '[The National Family Caregives Association](http://www.thefamilycaregiver.org/)',
      '[The National Plan Alliance](https://nationalplanalliance.org/)',
    ],
  },

  {
    heading: 'Resources for College Students',
    subheading: '',
    paragraphs: ['[Active Minds on Campus](https://activeminds.org/)'],
  },

  {
    heading: 'Resources for Military Families',
    subheading: '',
    paragraphs: [
      '[The Substance Abuse and Mental Health Services Administration](https://www.samhsa.gov/mental-health/children-and-families)',
    ],
  },

  {
    heading: 'Resources for Substance Use and Families',
    subheading: '',
    paragraphs: [
      'Center for Motivation and Change: [Parent/Partner 20 Minute Guide](https://20-minute-guide.myshopify.com/) & [Videos for Families](http://motivationandchange.com/online-and-in-print-resources/videos/)',
      '[Al Anon Family Groups](http://www.al-anon.alateen.org/)',
      '[Families Anonymous](https://www.familiesanonymous.org/)',
      '[National Council on Alcoholism and Drug Dependence](https://www.ncadd.org/)',
      '[DrugRehab.com: A Substance Abuse Guide for Parents](https://www.drugrehab.com/guides/parents/)',
      '[DrugRehab.com: Resources for Moms](https://www.drugrehab.com/support/resources-for-moms/)',
    ],
  },
  {
    heading: 'Resources on Borderling Personality Disorder',
    subheading: '',
    paragraphs: [
      '[Family Connections](http://www.borderlinepersonalitydisorder.com/family-connections/): Coordinated by the [National Education Alliance for Borderline Personality Disorder](https://www.borderlinepersonalitydisorder.org/)',
    ],
  },
  {
    heading: 'Resources on Attention Deficit Hyperactivity Disorder',
    subheading: '',
    paragraphs: [
      '[Children and Adults with Attention Deficit/Hyperactivity Disorder](http://www.chadd.org/)',
    ],
  },
  {
    heading: 'Resources on Schizophrenia',
    subheading: '',
    paragraphs: [
      '[The World Fellowship for Schizophrenia and Allied Disorders](http://world-schizophrenia.org/resources/booklist.html)',
    ],
  },
  {
    heading: 'Resources on Depression and Bipolar',
    subheading: '',
    paragraphs: [
      '[The American Foundation for Suicide Prevention (AFSP)](https://afsp.org/)',
      '[Families for Depression Awareness](http://www.familyaware.org/)',
      '[Families Together](http://www.familiestogetherinc.org/)',
      '[The Depression and Bipolar Support Alliance](https://www.dbsalliance.org/)',
    ],
  },
]
</script>
