import { clientIcons } from './clientIcons';

export const solutionsSlide: {
  label: string;
  content: string;
}[] = [
  {
    label: 'Boutique',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    label: 'Lean',
    content:
      ' Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
  },
  {
    label: 'Personal',
    content:
      ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
];

export const clientIconsSlide: {
  icon: string;
}[] = clientIcons.map((icon) => ({
  icon: `/client-icons/${icon}`,
}));

export const latestWorkSlide: {
  backgroundImage: string;
  label: string;
  link: string;
  icon: string;
}[] = [
  {
    backgroundImage: '/case-studies/revio.png',
    label: 'Revio',
    icon: '/images/revio.png',
    link: '/case-studies/revio',
  },
  {
    backgroundImage: '/case-studies/raubex.png',
    label: 'Raubex',
    icon: '/images/raubex.png',
    link: '/case-studies/raubex',
  },
  {
    backgroundImage: '/case-studies/aurora.png',
    label: 'Aurora',
    icon: '/images/aurora.png',
    link: '/case-studies/aurora',
  },
];
