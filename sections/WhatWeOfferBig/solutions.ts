import { Props } from '../../components/SolutionsCard';
import angular from './icons/angular';
import reactNative from './icons/reactNative';
import vue from './icons/vue';
import django from './icons/django';
import wordpress from './icons/wordpress';
import flutter from './icons/flutter';
import ionic from './icons/ionic';
import xamarin from './icons/xamarin';
import transport from './icons/transport';
import logistic from './icons/logistic';
import banking from './icons/banking';
import it from './icons/it';
import services from './icons/services';
import database from './icons/database';
import figma from './icons/figma';
import adobe from './icons/adobe';
import webflow from './icons/webflow';
import layer from './icons/layer';

export const solutions: Props[] = [
  {
    title: 'Web Development',
    firstParagraphDescription:
      'Using modern technologies combined with the latest web standards, we create performant, responsive, sleek, and secure websites.',
    secondParagraphDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    catchPhrase: 'Experts in technology that’s here to stay',
    icons: [angular, reactNative, vue, django, wordpress],
    numOfCols: 3,
    numOfRows: 2,
  },
  {
    title: 'App Development',
    firstParagraphDescription:
      'Using modern technologies combined with the latest web standards, we create performant, responsive, sleek, and secure websites.',
    secondParagraphDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    catchPhrase: 'Experts in technology that’s here to stay',
    icons: [flutter, reactNative, ionic, xamarin],
    numOfCols: 2,
    numOfRows: 2,
  },
  {
    title: 'Infrastructure Development',
    firstParagraphDescription:
      'We develop everything from banking solutions to logistic systems and have the server-, database-, and services development experience to tackle any problem',
    secondParagraphDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    catchPhrase: 'Experts in technology that’s here to stay',
    icons: [transport, logistic, banking, it, services, database],
    numOfCols: 3,
    numOfRows: 3,
  },
  {
    title: 'Product Management',
    firstParagraphDescription:
      'Using Agile methodologies and effective time management we provide accurate expectations and deliver on time',
    secondParagraphDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    catchPhrase: 'Experts in technology that’s here to stay',
    icons: ['Scrum Master', 'Product Lead', 'Product Owner', 'Kanban', 'Agile Transformation'],
    numOfCols: 3,
    numOfRows: 2,
  },
  {
    title: 'UX/UI Design',
    firstParagraphDescription:
      'Working with a wide range of designers and employing a multi-iterative approach, we invent powerful brands and provide pixel perfect fine tuning to existing solutions.',
    secondParagraphDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    catchPhrase: 'Experts in technology that’s here to stay',
    icons: [figma, adobe, layer, webflow],
    numOfCols: 2,
    numOfRows: 2,
  },
  {
    title: 'Developer Outsourcing',
    firstParagraphDescription:
      'WLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ',
    secondParagraphDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    catchPhrase: 'Experts in technology that’s here to stay',
    icons: ['Scrum Master', 'Product Lead', 'Product Owner', 'Kanban', 'Agile Transformation'],
  },
];
