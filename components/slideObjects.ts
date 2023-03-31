import { clientIcons } from './clientIcons';

interface Slide {
  label?: string;
  icon?: React.ReactNode;
  content?: string;
}

export const tabs: Slide[] = [
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

export const clientIconsSlide: Slide[] = clientIcons.map((icon) => ({
  label: '',
  content: '',
  icon: `/client-icons/${icon}`,
}));
