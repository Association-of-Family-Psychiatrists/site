<template>
  <ContentPage title="Books for Professionals, Couples and Families" :sections="contentSections" />
</template>

<script setup>
import ContentPage from '@components/ContentPage.vue'

const contentSections = [
  {
    heading: 'Helpful Texts for Couples',
    subheading: '',
    paragraphs: [
      'Johnson, Susan. [Hold Me Tight](http://www.drsuejohnson.com/books/) 2008',
      'Gottman, Jj, Declaire, J. [The Relationship Cure](http://www.amazon.com/The-Relationship-Cure-Strengthening-Friendships/dp/0609809539) 2001',
      'Hendricks, H. [Getting the Love You Want](http://www.amazon.com/Getting-Love-You-Want-Anniversary/dp/0805087001/ref=sr_1_1?s=books&ie=UTF8&qid=1418003485&sr=1-1&keywords=getting+the+love+you+want) 1988',
    ],
  },
  {
    heading: 'Primarily for Therapists',
    subheading: '',
    paragraphs: [
      'Fishbane, M. [Loving with the Brain In Mind: Neurobiology and couple therapy](http://www.amazon.com/Loving-Brain-Mind-Neurobiology-Interpersonal/dp/0393706532/ref=sr_1_1?s=books&ie=UTF8&qid=1418003520&sr=1-1&keywords=loving+with+the+brain+in+mind) 2013',
      'Snyder, D and Whisman, M. (2003) [Treating Difficult Couples: Helping clients with coexisting mental and relationship disorders](http://www.guilford.com/books/Treating-Difficult-Couples/Snyder-Whisman/9781572308824/contents) NY: Guilford Press.',
    ],
  },
  {
    heading: 'LGBT Families',
    subheading: '',
    paragraphs: [
      '[LGBT Family Support Books](http://www.gayfamilysupport.com/gay-books.html)',
      'Glazer, D.F. & Drescher, J., eds. (2001). [Gay and Lesbian Parenting](http://www.amazon.com/Gay-Lesbian-Parenting-Jack-Drescher/dp/0789013509/ref=sr_1_2?s=books&ie=UTF8&qid=1418003550&sr=1-2&keywords=gay+and+lesbian+parenting) New York: The Haworth Press. 2001',
      "Savin-Williams, R.C. [Mom, Dad, I'm Gay: How Families Negotiate Coming Out.](http://www.amazon.com/Mom-Dad-Im-Gay-Negotiate/dp/1557987416/ref=sr_1_1?s=books&ie=UTF8&qid=1418003594&sr=1-1&keywords=mom+dad+i%27m+gay) Washington, DC: American Psychological Association. 2001",
    ],
  },
  {
    heading: 'Divorce and Stepfamilies',
    subheading: '',
    paragraphs: [
      'Ahrons, C. [The Good Divorce](http://www.amazon.com/gp/product/0060926341/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0060926341&linkCode=as2&tag=ligaphdllcoan-20)',
      '[The Co-Parenting Survival Guide: Letting Go of Conflict After a Difficult Divorce](http://www.amazon.com/gp/product/1572242450/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1572242450&linkCode=as2&tag=ligaphdllcoan-20) by Thayer and Zimmerman',
      "[Mom's House, Dad's House: Making Two Homes for Your Child](http://www.amazon.com/gp/product/0684830787/ref=as_li_tf_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0684830787&linkCode=as2&tag=ligaphdllcoan-20) by Isolina Ricci, Ph.D.",
      '[Making Adult Stepfamilies Work. Strategies for the Whole Family When a Parent Marries Later in Life.](http://www.amazon.com/Making-Adult-Stepfamilies-Work-Strategies/dp/0312342713/ref=sr_1_fkmr0_1?s=books&ie=UTF8&qid=1418003669&sr=1-1-fkmr0&keywords=Strategies+for+the+Whole+Family+When+a+Parent+Marries+Later+in+Life.+Gr) Grace Gabe and Jean Lipman-Blumen. St Martins Press NY 2004.',
      'Papernow, P. [Surviving and Thriving in Stepfamily Relationships.](http://www.amazon.com/Surviving-Thriving-Stepfamily-Relationships-Doesnt/dp/0415894387/ref=sr_1_1?s=books&ie=UTF8&qid=1418003634&sr=1-1&keywords=surviving+in+stepfamily+relationships) 2013',
      '[The Stepfamily Foundation, Inc.](http://www.stepfamily.org/)',
    ],
  },
  {
    heading: 'Military Families',
    subheading: '',
    paragraphs: [
      '[SAMSHA: Military Families Page](http://www.samhsa.gov/militaryfamilies/)',
      'Sayers, Steve: [Coming Back Together: A Guide to Successful Reintegration After Your Partner Returns from Military Deployment.](http://www.amazon.com/Coming-Back-Together-Successful-Reintegration/dp/1608829855/ref=sr_1_1?ie=UTF8&qid=1418003962&sr=8-1&keywords=Coming+Back+Together%3A+A+Guide+to+Successful+Reintegration+After+Your+Partner+Returns+from+Military+Deployment) 2014',
    ],
  },
]
</script>
