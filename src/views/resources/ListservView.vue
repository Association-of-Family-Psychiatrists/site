<template>
  <ContentPage title="Our Listserv" :sections="contentSections" />
</template>

<script setup>
import ContentPage from '@components/ContentPage.vue'

const contentSections = [
  {
    heading: 'Join the Discussion',
    subheading: 'Connect with fellow family psychiatrists. ',
    paragraphs: [
      'We are excited to introduce The AFP Listserve, an electronic discussion list for our members. It provides for the rapid exchange of information, assistance, and discussion of professional issues among AFP members. Participation in the listserv is a benefit of AFP membership.',
      'Professional questions – clinical, teaching, research, and consultation issues – and public policy concerns are all welcome. Requests for referral suggestions in other cities are always acceptable; in fact that is one of the main functions of our listserve. We encourage you to post information about workshops you are presenting or books/articles you have written.   If you have recently read a great book, found a great DVD or a good teaching youtube video, please post that as well.',
      'To post to this group, send email to association-of-family-psychiatrists@googlegroups.com.',
      'To unsubscribe from this group and stop receiving emails from it, send an email to association-of-family-psychiatrists+unsubscribe@googlegroups.com.',
    ],
  },
]
</script>
