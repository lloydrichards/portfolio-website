import { Project } from '../Projects';

export const ProjectData: Array<Project> = [
  {
    id: '2006',
    date: new Date('2020-05-01'),
    title: '2020 Portfolio',
    description: 'Print/digital Data Visualization portfolio for 2020',
    href: '/',
    category: ['Code', 'Design'],
    image: '/images/thumb_2020portfolio.png',
    link: '/downloads/2020Portfolio.pdf',
  },
  {
    id: '2000',
    date: new Date('2020-06-10'),
    title: 'Life of Plastic',
    description: 'Data Visualization looking at plastic recycling',
    href: '/lifeofplastic',
    category: ['Code', 'Design'],
    image: '/images/thumb_lifeofplastic.png',
    github: 'https://github.com/interactivethings/LifeofPlastic',
    link: 'https://life-of-plastic.interactivethings.io/',
  },
  {
    id: '2001',
    date: new Date('2020-02-10'),
    title: 'Coming Soon',
    description: 'Data Visualization breaking down Vietnamese Dishes',
    href: '/lifeofplastic',
    category: ['Design'],
    image: '/images/thumb_comingsoon.png',
    link:
      'https://blog.interactivethings.com/visualizing-tasty-vietnamese-food-929e07a10d5c',
  },
  {
    id: '2002',
    date: new Date('2020-07-29'),
    title: 'mimirOpen',
    description: 'Open Hardware Project based on the mimirHome sensor',
    href: '/',
    category: ['Design', 'Code', 'Garden'],
    image: '/images/thumb_mimiropen.png',
    link: '/portfolio/mimiropen',
    github: 'https://github.com/lloydrichards/mimirOpen',
  },
  {
    id: '2003',
    date: new Date('2020-04-29'),
    title: 'mimirHome',
    description:
      'Taking envir. data and ML to create house plant recommentations',
    href: '/',
    category: ['Design', 'Code', 'Garden'],
    image: '/images/thumb_mimirHome.png',
    link: '/portfolio/mimirhome',
  },
  {
    id: '2004',
    date: new Date('2020-05-29'),
    title: 'nata-ko',
    description: 'Promotional website for local filmmaker',
    href: 'http://nata-ko.com/',
    category: ['Design', 'Code'],
    image: '/images/thumb_natako.png',
    link: 'http://nata-ko.com/',
    github: 'https://github.com/lloydrichards/nata-ko',
  },
  {
    id: '2005',
    date: new Date('2020-05-29'),
    title: 'Interactive Things NCY',
    description: 'Data Visualization comparing New York City and Zurich',
    href: '/',
    category: ['Design'],
    image: '/images/projects/interactivethings_nyc/thumb_interactivethings_nyc.png',
    link: '/portfolio/interactivethings_nyc',
  },
  {
    id: '1903',
    date: new Date('2019-08-01'),
    title: '2019 Portfolio',
    description: 'Print/digital Data Visualization portfolio for 2019',
    href: '/',
    category: ['Code', 'Design'],
    image: '/images/thumb_2019portfolio.png',
    link: '/downloads/2019Portfolio.pdf',
  },
  {
    id: '1900',
    date: new Date('2019-12-21'),
    title: 'Spanish Pool Decking',
    description: 'Composit deck around the pool, overlooking the olives',
    href: '/',
    category: ['Garden'],
    image: '/images/thumb_spanishdeck.png',
    link: '/portfolio/spanishpooldeck',
  },
  {
    id: '1901',
    date: new Date('2019-12-21'),
    title: 'mimirHome Visualizations 1',
    description:
      'First attempt at visualizing the environmental data from mimir',
    href: '/',
    category: ['Design'],
    image: '/images/thumb_mimirhome_visualization.png',
    link: '/portfolio/mimirhome_visualizations1',
  },
  {
    id: '1500',
    date: new Date('2015-03-01'),
    title: 'Spanish Food Forest',
    description:
      'Garden designed to be a self sufficent and abundant ecosystem in Spain',
    href: '/',
    category: ['Design', 'Garden'],
    image: '/images/thumb_spanishfoodforest.png',
    link: '/portfolio/spanishfoodforest',
  },
];
