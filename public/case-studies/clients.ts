import { Props } from '../../components/ClientCard';
import revio from '../case-studies/revio-logo';
import raubex from '../case-studies/raubex-logo';
import aurora from '../case-studies/aurora-logo';

export const clients: Props[] = [
  {
    clientName: 'revio',
    clientLogo: revio,
    responsibilities: [
      'System Architecture',
      'Back-end Development',
      'Infrastructure Design',
      'Database Design',
    ],
    backgroundImageSrc: '../case-studies/revioBackground.png',
  },
  {
    clientName: 'raubex',
    clientLogo: raubex,
    responsibilities: [
      'System Architecture',
      'Back-end Development',
      'Infrastructure Design',
      'Database Design',
      'Web Development',
    ],
    backgroundImageSrc: '../case-studies/raubexBackground.png',
  },
  {
    clientName: 'aurora',
    clientLogo: aurora,
    responsibilities: [
      'Web App Architecture and Development',
      'API Architecture and Development',
      'Cloud Hosting',
      'China Deployment',
    ],
    backgroundImageSrc: '../case-studies/auroraBackground.png',
  },
];
