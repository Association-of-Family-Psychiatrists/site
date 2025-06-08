// src/data/homeData.js

export const featuredEventData = {
  title: 'Featured Event',
  date: 'October 12, 2025',
  location: 'San Francisco, CA',
  description:
    'Ex: Registration has opened for the annual AFP Conference. This component can be used to display an event, with an image and description',
  image:
    'https://media.istockphoto.com/id/1417699524/photo/group-of-people-at-music-concert.jpg?s=2048x2048&w=is&k=20&c=ry_TiyFeGk5F03WDdcTE9lnx25PvIIUvKCl0uQHyFa0=',
  link: '/events/symposium-2025',
}

export const featuredCards = [
  {
    image:
      'https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=2048x2048&w=is&k=20&c=bUHQJBt4Nbp0IEngDcXMMQteAnGi7fz1WpEuq3zLrOI=',
    title: 'Guest Speaker',
    subtitle: 'Live event • October 2025',
    details: 'With some additional information here',
  },
  {
    image:
      'https://media.istockphoto.com/id/1411002384/photo/nurses-meeting.jpg?s=2048x2048&w=is&k=20&c=M5E3-J6IVCX6cvVBGyfedmTXEPjedRxyE2NZMkdv9hM=',
    title: 'Research Symposium',
    subtitle: 'Hybrid • January 2026',
    details:
      'Join psychiatrists and researchers discussing the latest in clinical family practice.',
  },
  {
    image:
      'https://media.istockphoto.com/id/1783743772/photo/female-speaker-giving-a-presentation-during-business-seminar-at-convention-center.jpg?s=2048x2048&w=is&k=20&c=h7aIvTLP5PhWfrp54V_yUhtoD1cZqqwauSmqMAsbnyw=',
    title: 'Annual AFP Conference',
    subtitle: 'In-Person • July 2026',
    details: 'Our flagship event featuring keynote speakers, panels, and networking opportunities.',
  },
  {
    image:
      'https://media.istockphoto.com/id/1387143441/photo/shot-of-a-family-meeting-with-a-therapist.jpg?s=2048x2048&w=is&k=20&c=_nNijdSHxifcPAKvYZVWpnQu_HSrYLo9kveHu75LElk=',
    title: 'Family Therapy Workshop',
    subtitle: 'Live event • October 2025',
    details: 'A hands-on workshop for professionals focused on family systems and communication.',
  },
]

export const statsData = [
  {
    value: '1,200+',
    label: 'Members',
    description:
      'This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic.',
  },
  {
    value: '$250K',
    label: 'Funds Raised',
    description:
      'This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic.',
  },
  {
    value: '12',
    label: 'Committees',
    description:
      'This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic.',
  },
]

export const featuredArticles = [
  {
    title: 'Coping With Problematic Effects of Social Media',
    thumbnail:
      'https://images.squarespace-cdn.com/content/v1/6267042fe703aa417b69ec37/ff56a26d-ca75-4256-8854-6ddba48c6fc5/Teenage+girl+using+smart+phone+at+home+stock+photo.jpg?format=2500w',
    url: 'https://www.psychologytoday.com/us/blog/psychiatrys-think-tank/202501/coping-with-problematic-effects-of-social-media',
  },
  {
    title: 'Community Support Strategies',
    thumbnail:
      'https://media.istockphoto.com/id/1465173464/photo/business-network-concept-teamwork-partnership-human-resources.jpg?s=2048x2048&w=is&k=20&c=45hL9SREGO-8XjTxsmFy1Iph1lHSxEqD-MTkVlodM_o=',
  },
  {
    title: 'Trauma-Informed Care',
    thumbnail:
      'https://media.istockphoto.com/id/2206797715/photo/cubes-form-the-expression-ptsd.jpg?s=2048x2048&w=is&k=20&c=w4i03qsp8ue3YYBBhSuqcaAwzhfmyWGuEBmA2QkN2Tg=',
  },
  {
    title: 'Placeholder Article',
    thumbnail:
      'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=2048x2048&w=is&k=20&c=dFWJz1EFJt7Tq2lA-hgTpSW119YywTWtS4EwU3fpKrE=',
  },
]

export const featuredAwardWinners = [
  { title: 'Janice Cho, MD' },
  { title: 'Sarah Faitell, DO' },
  { title: 'Eileen Glocer, MD' },
  { title: 'Hannah Goddard, DO' },
  { title: 'Jatin Julakanti, MD' },
  { title: 'Hannah Leo, MD' },
  { title: 'Kaajal Patel Tan, DO' },
  { title: 'Michelle Prakash, MD' },
  { title: 'Pallavi Tatapudy, MD' },
  { title: 'Richard Seeber II, MD' },
  { title: 'Alfonso Vera Jr, MD' },
]

export const conferenceEventData = {
  title: '2025 Annual Family Psychiatry Conference',
  date: 'September 21, 2025',
  time: '9:00 AM – 4:00 PM PT',
  description:
    'Join us for the 2025 Annual Conference, featuring leading experts in family psychiatry. Engage in keynotes, panels, and networking opportunities.',
  link: 'https://example.com/conference-recording',
  linkLabel: 'Join Live / Watch Recording',
  schedule: [
    { time: '9:00 AM', title: 'Opening Remarks & Keynote' },
    { time: '10:30 AM', title: 'Panel: Innovations in Family Therapy' },
    { time: '12:00 PM', title: 'Lunch Break' },
    { time: '1:00 PM', title: 'Workshop: Integrating Family Care in Psychiatry' },
    { time: '2:30 PM', title: 'Research Presentations' },
    { time: '3:30 PM', title: 'Closing Discussion & Networking' },
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
