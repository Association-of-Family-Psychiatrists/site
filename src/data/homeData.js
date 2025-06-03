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
].concat(
  new Array(4).fill({
    image:
      'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=2048x2048&w=is&k=20&c=dFWJz1EFJt7Tq2lA-hgTpSW119YywTWtS4EwU3fpKrE=',
    title: 'Placeholder Event / Person',
    subtitle: 'TBD',
    details: 'Additional Information',
  }),
)

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
