<template>
  <ContentPage title="Child and Adolescent Centered Families" :sections="contentSections" />
</template>

<script setup>
import ContentPage from '@components/ContentPage.vue'

const contentSections = [
  {
    heading: 'About Child and Adolescent Centered Families',
    subheading:
      'Many extremely challenging behavioral health problems in childhood and adolescence are best treated with family based treatment. Here are some examples with a brief description of each:',
    paragraphs: [],
  },
  {
    heading: 'Conduct Disorder and Delinquency',
    subheading: '',
    paragraphs: [
      'The diagnosis of conduct disorder is reached when a prolonged pattern of delinquent and serious violation of laws and societal norms occurs. The child’s behavior may include aggression towards people or animals, destruction of property, deceitfulness or theft, or serious violation of rules. Multisystemic Therapy (MST) is a home-based program that integrates the roles of the school, social network, family, and the neighborhood. It is believed that all of these systems play a role in maintaining this behavior, and can be utilized to break the behaviors. This intervention is particularly popular withJuvenile Court programs but can also be implemented through numerous community agencies and providers. Goals of this treatment modality include promoting and improving family functioning, while subsequently decreasing the delinquency. MST has been used in children and adolescents who have not yet reached a diagnosis of conduct disorder, but have been displaying some of the aforementioned misbehaviors.',
    ],
  },
  {
    heading: 'Anorexia Nervosa',
    subheading: '',
    paragraphs: [
      'Anorexia Nervosa is a type of eating disorder in which one develops a refusal to maintain body weight at or above a minimally normal weight for age and height. It is associated with an intense fear of gaining weight and a disturbance in the way one views their own body shape and weight. Family based approaches utilize the family as a resource and tool for treatment. Family meals may be observed by therapists in order to help coach the parents while fostering appropriate relationships between the identified patient and the entire family. One of the most widely supported family based interventions is the Maudsley Approach in which parents play a role in making a clear demand of weight gain and food intake without criticism, as in addition to empowering the adolescent by giving them control of eating.',
    ],
  },
  {
    heading: 'Disruptive and Oppositional Defiant Disorder',
    subheading: '',
    paragraphs: [
      'Children with these traits or disorders may demonstrate angry/irritable mood, argumentative/defiant behavior, or vindictiveness. These behaviors occur outside of the context of sibling interaction and can be very problematic. Parent Child Interaction Therapy combines play and behavior therapy in children. It has been shown to be effective in populations of children ages 2-7 years with oppositional and disruptive behaviors. Parents receive guidance and training on strategies used during play therapy that foster connection and attachment. PCIT also focuses on teaching effective discipline techniques to improve the relationship between the child and parent.',
    ],
  },
  {
    heading: 'PTSD & Trauma Reactions',
    subheading: '',
    paragraphs: [
      'After exposure to trauma, children are at risk for the development of behavioral and emotional difficulties such as depression, post traumatic stress disorder (PTSD) and acting out behaviors. Trauma-Focused Cognitive Behavioral Therapy for Children (TF-CBT) combines three separate types of therapy: cognitive therapy, behavioral therapy and family therapy. Therapists integrate the three therapeutic modalities in order to build skills in both the child and parent. Goals including dealing with symptoms related to trauma, as well as providing a safe environment in which to address and process traumatic memories. The course of treatment usually lasts 12-17 sessions.',
    ],
  },
  {
    heading: 'Adolescent Substance Abuse',
    subheading: '',
    paragraphs: [
      'Early intervention and treatment for adolescents who misuse substances is critical as research has shown that these individuals go on to abuse substances more heavily during adulthood. Practice parameters according to the American Academy of Adolescent Psychiatry include guidelines for screening, evaluation, monitoring, and treatment. Family therapy approaches are cited as having the most supportive evidence. Both multidimensional family therapy (MDFT) and multisystemic family therapy (MST) have shown effectiveness in treating adolescent substance abuse. MDFT is a family focused therapy that not only targets family functioning, but also youth and parents within both family and peer contexts. MDFT has been shown to improve substance use frequency, delinquency, and reported internalized distress.',
    ],
  },
  {
    heading: 'References',
    subheading: '',
    paragraphs: [
      'Henggeler, S. W., Schoenwald, S. K., Borduin, C. M., Rowland, M. D., & Cunningham, P. B. (2009). Multisystemic therapy for antisocial behavior in children and adolescents (2nd ed.). New York: Guilford Press.',
      'Lock, J., Le Grange, D., Agras, W. S., C. Dare. 2001. Treatment manual for anorexia nervosa: A family-based approach. New York: Guildford Publications, Inc.',
      'Eyberg, S.M., & Bussing, R. (2010). Parent-child interaction therapy. In M. Murrihy, A. Kidman, and T. Ollendick (Eds.). A Clinician’s Handbook for the Assessment and Treatment of Conduct Problems in Youth (pp. 139-162). New York: Springer',
      'Child Welfare Information Gateway. (2012). Trauma-focused cognitive behavioral therapy for children affected by sexual abuse or trauma. Washington, DC: U.S. Department of Health and Human Services, Children’s Bureau.',
      'Liddle, H.A., et al., Multidimensional family therapy for young adolescent substance abuse: twelve-month outcomes of a randomized controlled trial. J Consult Clin Psychol, 2009. 77(1): p. 12-25.',
      'Papernow, Patricia L. Clinical Guidelines for Working With Stepfamilies: What Family, Couple, Individual, and Child Therapists Need to Know . Fam Proc 57:25-51 2018',
    ],
  },
]
</script>
