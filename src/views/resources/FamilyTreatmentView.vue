<template>
  <ContentPage title="Family Treatment in Medical Education" :sections="contentSections" />
</template>

<script setup>
import ContentPage from '@components/ContentPage.vue'

const contentSections = [
  {
    heading: '',
    subheading: '',
    paragraphs: [
      'I’m a fourth year medical student with a strong interest in working with the families of adults with SMI. I’ve been somewhat surprised to find that many within psychiatry are intrigued by my early interest in working with families. Perhaps this is because the literature suggests that mental health professionals do not value interactions with families enough to overcome the many obstacles to substantive interactions. Medical students often have more time than other clinicians to engage in extensive conversations with their patients’ families. These interactions have been formative for me. There were patients who were chronically homeless or had a history of violence and I assumed they would not have family interested in engaging with the treatment team but over and over again I was surprised by the dedication of many families. Family members were often relieved to be contacted and wished to continue to be involved. Some expressed frustration at their lack of input during years of treatment. On a related note, the frustration expressed by families is not unique to psychiatry and education about physician-family interactions during medical school is useful regardless of what medical field students choose.',
      'Conversations with patients’ families were enlightening but like all families, these families were complex. Engaging in a continuing dialogue has the potential to be helpful to the clinician, the patient and the family but without a structure and plan for exploring goals and expectations the interactions can also become frustrating and burdensome for all parties. While I did not receive any formal education about family inclusive treatment and family-based services, my interest and dedication to working with families were born from being required by my supervising attendings to contact patients’ families. Even more importantly, those conversations and the information they yielded were valued by the team. Training in engaging families including education on the strong research supporting the value of family engagement should begin in medical school. Looking forward, I think that early and consistent education about methods of family inclusion and the efficacy of different forms of family engagement will be important in maintaining my commitment to family inclusive treatment as I progress through my residency training in psychiatry.',
      '— Judith Katz, NYU School of Medicine',
    ],
  },
]
</script>
