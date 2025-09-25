// src/data/homeData.js

export const featuredEventData = {
  title: 'Feature',
  date: 'A Date',
  location: 'A Place',
  description: 'A place to feature anything the AFP wants on their home page',
  image:
    'https://media.istockphoto.com/id/1417699524/photo/group-of-people-at-music-concert.jpg?s=2048x2048&w=is&k=20&c=ry_TiyFeGk5F03WDdcTE9lnx25PvIIUvKCl0uQHyFa0=',
  link: '/',
}

export const featuredCards = [
  {
    image: new URL('@/assets/img/affiliate/affiliate-1.jpg', import.meta.url).href,
    title: 'AACAP',
    subtitle: 'Annual Meeting • October 2025',
    details:
      'The American Academy of Child and Adolescent Psychiatry (AACAP) is the leading national professional medical association dedicated to promoting healthy development and the mental health of children, adolescents, and families. Join us for their annual meeting featuring cutting-edge research, clinical workshops, and networking opportunities with child and adolescent psychiatry experts.',
  },
  {
    image: new URL('@/assets/img/affiliate/affilliate-2.jpg', import.meta.url).href,
    title: 'APA',
    subtitle: 'Annual Meeting • May 2026',
    details:
      "The American Psychiatric Association (APA) is the world's largest psychiatric organization, representing more than 38,000 physician members specializing in the diagnosis, treatment, prevention, and research of mental illnesses. Their annual meeting brings together psychiatrists from around the world for education, networking, and the latest advances in psychiatric care and research.",
  },
  {
    image: new URL('@/assets/img/affiliate/affiliate-3.jpg', import.meta.url).href,
    title: 'Annual AFP Conference',
    subtitle: 'Virtual • March 2026',
    details:
      'Our flagship event featuring keynote speakers, panels, and networking opportunities. The Association of Family Psychiatrists Annual Conference is the premier gathering for family psychiatry professionals, offering comprehensive education on family-centered mental health care, innovative treatment approaches, and collaborative practice models.',
  },
]

export const statsData = [
  {
    value: '1,200+',
    label: 'Members',
    description: 'This is a description for this statistic',
  },
  {
    value: '$250K',
    label: 'Funds Raised',
    description: 'This is a description for this statistic',
  },
  {
    value: '12',
    label: 'Committees',
    description: 'This is a description for this statistic',
  },
]

export const featuredArticles = [
  {
    title: 'Coping With Problematic Effects of Social Media',
    thumbnail: new URL('@/assets/img/featured/feature-1.jpg', import.meta.url).href,
    url: 'https://www.psychologytoday.com/us/blog/psychiatrys-think-tank/202501/coping-with-problematic-effects-of-social-media',
  },
  {
    title: 'Community Support Strategies',
    thumbnail: new URL('@/assets/img/featured/feature-2.jpg', import.meta.url).href,
  },
  {
    title: 'Trauma-Informed Care',
    thumbnail: new URL('@/assets/img/featured/feature-3.jpg', import.meta.url).href,
  },
]

export const featuredAwardWinners = [
  { title: 'Adriana Cantos, MD' },
  { title: 'Aimin Mitwally, DO' },
  { title: 'Aisha Julakanti, MD' },
  { title: 'Allred McKay, MD' },
  { title: 'Allyson Folsom Davis, MD' },
  { title: 'Alexander Norton, MD' },
  { title: 'Ana-Maria McGill, DO' },
  { title: 'Andrea Weir, DO' },
  { title: 'Frank Direnno, MD' },
  { title: 'Isabella Caldwell, MD' },
  { title: 'Joseph Pareira, MD' },
  { title: 'Mario Montelongo, MD' },
  { title: 'Michael Destounis, MD' },
  { title: 'Neharika Padala, MD' },
  { title: 'Saagar Patel, DO' },
  { title: 'Tyler Francisco, MD' },
]

export const conferenceEventData = {
  title: 'Highlights: 2025 Annual Family Psychiatry Conference',
  date: 'September 21, 2025',
  time: '9:00 AM – 4:00 PM PT',
  description:
    'Join us for the 2025 Annual Conference, featuring leading experts in family psychiatry. Engage in keynotes, panels, and networking opportunities.',
  link: 'https://drive.google.com/file/d/14MEsEO4A65rdNfa7eHmyuKKwWBJJDtLl/view?usp=drive_link',
  linkLabel: 'Watch Recording',
  schedule: [
    {
      time: ' 11:00 AM',
      title:
        'Introduction by Dr. Glick on the state of psychiatric practice, it’s efficacy, and why it isn’t used more in practice',
    },
    {
      time: '11:10 AM',
      title:
        '[Family Work in Adult Outpatient Setting](https://www.familypsychiatrists.org/s/family-work-in-outpatient-setting-Carolyn-Fulton.pdf) (Carolyn Fulton)',
    },
    {
      time: '11:45 PM',
      title:
        '[Role of Family Engagement in PHP](https://www.familypsychiatrists.org/s/Role-of-Family-Engagement-in-a-Partial-Hospital-Program-Tumuluru.pdf) (Dr. Tumuluru)',
    },
    { time: '12:20 PM', title: 'Break' },
    {
      time: '12:30 PM',
      title:
        '[Family and Family Interventions in Institutional Care](https://www.familypsychiatrists.org/s/family-interventions-in-institutionalized-care-settings-Gogineni.pdf) (Dr. Gogineni)',
    },
    {
      time: '1:05 PM',
      title:
        '[Understanding and Treating Adolescent Eating Disorders](https://www.familypsychiatrists.org/s/understanding-and-treating-adolescent-eating-disorders-the-role-of-the-psychiatrist-in-family-based.pdf) (Dr. Spector and Dr. Spettigue)',
    },
    { time: '1:40 PM', title: 'Break Out Rooms' },
  ],
}

export const publicationData = [
  {
    title: 'Helping Couples and Families Navigate Illness and Disability',
    summary:
      'John Rolland’s new book presents an integrated approach for supporting couples and families dealing with serious illness and disability.',
    url: 'https://example.com/research-publication',
    authors: ['John Rolland', 'John Doe'],
  },
  {
    title: 'Lisa Dixon Appointed Editor in Chief of Psychiatric Services',
    summary:
      'Lisa Dixon is now the Editor in Chief of Psychiatric Services, bringing her extensive expertise in family psychiatry and community mental health.',
    url: 'https://example.com/research-publication',
    authors: ['Lisa Dixon'],
  },
  {
    title: 'Recent Articles of Interest to Our Members',
    summary:
      'A curated list of recent publications and articles that provide valuable insights and advancements in the field of family psychiatry.',
    url: 'https://example.com/research-publication',
    authors: ['AFP Editorial Board'],
  },
]

export const conferenceCarouselData = [
  {
    src: new URL('@/assets/afp-conference-photos/image-1.png', import.meta.url).href,
    alt: 'AFP Conference Photo 1',
  },
  {
    src: new URL('@/assets/afp-conference-photos/image-2.png', import.meta.url).href,
    alt: 'AFP Conference Photo 2',
  },
  {
    src: new URL('@/assets/afp-conference-photos/image-3.png', import.meta.url).href,
    alt: 'AFP Conference Photo 3',
  },
  {
    src: new URL('@/assets/afp-conference-photos/image-4.png', import.meta.url).href,
    alt: 'AFP Conference Photo 4',
  },
  {
    src: new URL('@/assets/afp-conference-photos/image-5.png', import.meta.url).href,
    alt: 'AFP Conference Photo 5',
  },
  {
    src: new URL('@/assets/afp-conference-photos/image-6.png', import.meta.url).href,
    alt: 'AFP Conference Photo 6',
  },
  {
    src: new URL('@/assets/afp-conference-photos/image-7.png', import.meta.url).href,
    alt: 'AFP Conference Photo 7',
  },
  {
    src: new URL('@/assets/afp-conference-photos/image-8.png', import.meta.url).href,
    alt: 'AFP Conference Photo 8',
  },
  {
    src: new URL('@/assets/afp-conference-photos/image-9.png', import.meta.url).href,
    alt: 'AFP Conference Photo 9',
  },
  {
    src: new URL('@/assets/afp-conference-photos/image-10.png', import.meta.url).href,
    alt: 'AFP Conference Photo 10',
  },
  {
    src: new URL('@/assets/afp-conference-photos/image-11.png', import.meta.url).href,
    alt: 'AFP Conference Photo 11',
  },
]
