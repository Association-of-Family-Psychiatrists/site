<template>
  <ContentPage
    title="Resources for Couples and Adult Families Dealing with Psychiatric Issues in a Family Member"
    :sections="contentSections"
  />
</template>

<script setup>
import ContentPage from '@components/ContentPage.vue'

const contentSections = [
  {
    heading: 'General Resources',
    subheading:
      'Web and print resources for professionals, couples and families dealing with psychiatric illness and caregiving issues. ',
    paragraphs: [
      '[Mental Health America](http://www.mentalhealthamerica.net)',
      '[The National Alliance on Mental Illness](http://www.nami.org)',
      '[The Family Institue For Education, Practice and Research (University of Rochester Medical Center)](https://www.nysfamilyinstitute.org/)',
      '[Support and Education Profgram for Families (Safe)](https://www.ouhsc.edu/safeprogram/)',
      'Sederer, Lloyd. [The Family Guide to Mental Health Care](http://www.amazon.com/Family-Guide-Mental-Health-Care/dp/0393707946) 2013',
      'Galynker, Igor. [Talking to Families About Mental Illness](http://www.amazon.com/Talking-Families-about-Mental-Illness-ebook/dp/B004KKXN0U/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1418178861&sr=1-1&keywords=igor+galynker) 2012',
    ],
  },
  {
    heading: 'Substance Use Disorders and Families',
    subheading: '',
    paragraphs: [
      '[Ackerman Institute for the Family: Substance Abuse and Family Program](https://www.ackerman.org/)',
      '[Al-Anon Family Groups](http://www.al-anon.alateen.org)',
      '[SMART Recovery](http://www.smartrecovery.org/)',
      '[Families Anonymous](http://www.familiesanonymous.org/)',
      '[National Council on Alcoholism and Drug Dependence (NCADD)](http://www.ncadd.org/)',
      '[Center for Motivation and Change: Parent/Partner 20 Minute Guide](https://20-minute-guide.myshopify.com/)',
      'O’Farrell, T.J. (2012) Review of outcome research on marital and family therapy in treatment of alcoholism. Journal of Marital and Family Therapy 38(1): 122-144.',
      'Copello, A.G.; Velleman, R.D.B.; Templeton, L.J. (2005) Family interventions in the treatment of alcohol and drug problems. Drug and Alcohol Review 24 (4): Pages 369-385.',
    ],
  },
  {
    heading: 'Depression/Bipolar Illness and Families',
    subheading: '',
    paragraphs: [
      '[Families for Depression Awareness](www.familyaware.org)',
      '[Families Together](https://familiestogetherinc.org/)',
      '[Depression and Bipolar Support Alliance](https://www.dbsalliance.org/)',
      'Miklowitz, D. [The Bipolar Survival Guide 2nd ed.](https://www.amazon.com/Bipolar-Disorder-Survival-Guide-Second-ebook/dp/B0057YW78W/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1418178704&sr=1-1&keywords=bipolar+survival+guide) 2011',
      '[The American Foundation for Suicide Prevention (AFSP)](https://afsp.org/)',
    ],
  },
  {
    heading: 'Attention Deficit Hyperactivity Disorder (ADHD)',
    subheading: '',
    paragraphs: [
      '[Children and Adults with Attention Deficit Hyperactivity Disorder (CHADD)](https://www.chadd.org/)',
      'Orlov, Melissa [The ADHD Effect on Marriage](http://www.amazon.com/ADHD-Effect-Marriage-Understand-Relationship-ebook/dp/B005MRBEAG/ref=sr_1_sc_1?s=digital-text&ie=UTF8&qid=1418178546&sr=1-1-spell&keywords=thee+add+effect+on+mrriage) 2010',
    ],
  },
  {
    heading: 'Schizophrenia',
    subheading: '',
    paragraphs: [
      '[The World Fellowship for Schizophrenia and Allied Disorders Website](http://www.world-schizophrenia.org/)',
    ],
  },
  {
    heading: 'Borderline Personality Disorder',
    subheading: '',
    paragraphs: [
      '[National Education Alliance for Borderline Personality Disorder](http://www.borderlinepersonalitydisorder.com/)',
    ],
  },
  {
    heading: 'Caregiver',
    subheading: '',
    paragraphs: [
      '[The National Family Caregiver Association](https://www.caregiveraction.org/)',
      '[PLAN - Planned Lifetime Assistance Network (The national PLAN Alliance)](http://www.nationalplanalliance.org/)',
      'Jacobs, B. [The Emotional Survival Guide for Caregivers: Looking After Yourself And Your Family While Helping an Aging Parent](http://www.amazon.com/Emotional-Survival-Guide-Caregivers-Yourself/dp/1572307293/ref=sr_1_1?ie=UTF8&qid=1418003929&sr=8-1&keywords=The+Emotional+Survival+Guide+for+Caregivers%3A++Looking+after+yourself+and+your+family+While+Helping+an+Aging+Parent.) 2006',
    ],
  },
  {
    heading: 'Consumer Organizations',
    subheading: '',
    paragraphs: [
      '[Compeer Inc](https://www.compeer.org/)',
      '[Consumers Helping Others In a Caring Enviroment (CHOICE)](https://www.choicenr.org/)',
      '[Network of Care](https://www.networkofcare.org/)',
      '[World Federation for Mental Health: Center for Family Consumer](https://wfmh.global/)',
      '[Advocacy and Support](http://www.wfmh.org/)',
      '[Active Minds on Campus](http://www.activeminds.org/)',
    ],
  },
]
</script>
