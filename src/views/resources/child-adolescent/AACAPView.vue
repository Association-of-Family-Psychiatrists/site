<template>
  <ContentPage
    title="The American Academy of Child and Adolescent Psychiatry"
    :sections="contentSections"
  />
</template>

<script setup>
import ContentPage from '@components/ContentPage.vue'

const contentSections = [
  {
    heading: 'About AACAP',
    subheading: '',
    paragraphs: [
      'The American Academy of Child and Adolescent Psychiatry is the national organization of child and Adolescent Psychiatrists. Its mission is to promote the psychological well-being and healthy development of children throughout the country. It includes several committees that meet annually and work throughout the year on specific projects.',
      'The AACAP Family Committee is composed of several Academy members including trainees, early career child psychiatrists and senior members with significant experience practicing and teaching family therapy. The mission of the Committee is to define family interventions valuable in the treatment of child and adolescent behavioral health and make them known to Academy members; identify advances in family assessment and treatment and communicate these to members; to identify and promote successful parenting programs to assist parents in promoting the healthy development of their children; to evaluate and promote the development of evidence based family interventions; and add a family perspective to initiatives of the Academy. Current co-chairs of the Family Committee are John Sargent, M.D. and Thomas Roesler, M.D.',
      'In the past few years the Committee has focused on preparing AACAP Practice Parameters on Family Assessment and Family Interventions; developing presentations to be given at the Annual Meeting of the AACAP including a day long Family Institute presented at the 2014 meeting and developing an award for contributions to understanding and treating families to be given at the Annual Meeting. Our current project is a comprehensive review of training in engaging and intervening in family interactions in Child and Adolescent Psychiatry residency programs aiming toward universal training in the skills of working with families of children and teens with behavioral health problems. From time to time the Committee writes a column on families in the AACAP News. Further information is available at the [AACP web site](http://www.aacap.org/).',
    ],
  },
]
</script>
