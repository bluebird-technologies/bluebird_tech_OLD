import { SolutionType } from '../../pages/offer';
import apiDevelopmentAnimation from '../../public/what-we-offer/apiDevelopment.json';
import appDevelopmentAnimation from '../../public/what-we-offer/appAnimation.json';
import outsourcingAnimation from '../../public/what-we-offer/outsourcing.json';
import productAnimation from '../../public/what-we-offer/product.json';
import structureAnimation from '../../public/what-we-offer/structure.json';
import uiAnimation from '../../public/what-we-offer/ui.json';
import webDevelopmentAnimation from '../../public/what-we-offer/websiteAnimation.json';
import adobe from './icons/Adobe';
import angular from './icons/angular';
import banking from './icons/banking';
import database from './icons/database';
import django from './icons/django';
import dotnet from './icons/dotnet';
import figma from './icons/figma';
import flutter from './icons/flutter';
import ionic from './icons/ionic';
import it from './icons/it';
import java from './icons/java';
import layer from './icons/layer';
import logistic from './icons/logistic';
import node from './icons/node';
import nosql from './icons/nosql';
import reactNative from './icons/reactNative';
import services from './icons/services';
import sql from './icons/sql';
import transport from './icons/transport';
import vue from './icons/vue';
import webflow from './icons/webflow';
import wordpress from './icons/wordpress';
import xamarin from './icons/xamarin';

import adobeMobile from './icons/mobile/AdobeIllustratorMobile';
import angularMobile from './icons/mobile/AngularMobile';
import bankingMobile from './icons/bankingMobile';
import databaseMobile from './icons/databaseMobile';
import djangoMobile from './icons/mobile/DjangoMobile';
import dotnetMobile from './icons/dotnetMobile';
import figmaMobile from './icons/mobile/FigmaMobile';
import flutterMobile from './icons/mobile/FlutterMobile';
import ionicMobile from './icons/mobile/IonicMobile';
import itMobile from './icons/itMobile';
import javaMobile from './icons/javaMobile';
import layerMobile from './icons/layerMobile';
import logisticMobile from './icons/logisticMobile';
import nodeMobile from './icons/nodeMobile';
import nosqlMobile from './icons/nosqlMobile';
import reactNativeMobile from './icons/mobile/ReactNativeMobile';
import servicesMobile from './icons/servicesMobile';
import sqlMobile from './icons/sqlMobile';
import transportMobile from './icons/transportMobile';
import vueMobile from './icons/mobile/VueMobile';
import webflowMobile from './icons/mobile/WebflowMobile';
import wordpressMobile from './icons/mobile/WordpressMobile';
import xamarinMobile from './icons/mobile/XamarinMobile';

export const solutions: SolutionType[] = [
  {
    title: 'Web Development',
    firstParagraphDescription:
      'Using modern technologies combined with the latest web standards, we create performant, responsive, sleek, and secure websites.',
    secondParagraphDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    catchPhrase: 'Experts in technology that’s here to stay',
    content: {
      contentType: 'icon',
      icons: [angular, reactNative, vue, django, wordpress],
      iconsMobile: [angularMobile, reactNativeMobile, vueMobile, djangoMobile, wordpressMobile],
    },
    amtItemsInFirstRow: 3,
    centerSecondRow: true,
    secondLayerTitle: 'Accelerate your website today',
    secondLayerLottie: webDevelopmentAnimation,
  },
  {
    title: 'App Development',
    firstParagraphDescription:
      'Using modern technologies combined with the latest web standards, we create performant, responsive, sleek, and secure websites.',
    secondParagraphDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    catchPhrase: 'Experts in technology that’s here to stay',
    content: {
      contentType: 'icon',
      icons: [flutter, reactNative, ionic, xamarin],
      iconsMobile: [flutterMobile, reactNativeMobile, ionicMobile, xamarinMobile],
    },
    amtItemsInFirstRow: 2,
    centerSecondRow: false,
    secondLayerTitle: 'Ready for your next-level mobile app?',
    secondLayerLottie: appDevelopmentAnimation,
  },
  {
    title: 'Infrastructure Development',
    firstParagraphDescription:
      'We develop everything from banking solutions to logistic systems and have the server-, database-, and services development experience to tackle any problem',
    secondParagraphDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    catchPhrase: 'Experts in technology that’s here to stay',
    content: {
      contentType: 'icon',
      icons: [transport, logistic, banking, it, services, database],
      iconsMobile: [
        transportMobile,
        logisticMobile,
        bankingMobile,
        itMobile,
        servicesMobile,
        databaseMobile,
      ],
    },
    amtItemsInFirstRow: 3,
    centerSecondRow: false,
    secondLayerTitle: 'Got something in mind',
    secondLayerLottie: structureAnimation,
  },
  {
    title: 'Product Management',
    firstParagraphDescription:
      'Using Agile methodologies and effective time management we provide accurate expectations and deliver on time',
    secondParagraphDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    catchPhrase: 'Experts in technology that’s here to stay',
    content: {
      contentType: 'text',
      icons: ['Scrum Master', 'Product Lead', 'Product Owner', 'Kanban', 'Agile Transformation'],
    },
    amtItemsInFirstRow: 3,
    centerSecondRow: false,
    secondLayerTitle: 'Sounds good',
    secondLayerLottie: productAnimation,
  },
  {
    title: 'UX/UI Design',
    firstParagraphDescription:
      'Working with a wide range of designers and employing a multi-iterative approach, we invent powerful brands and provide pixel perfect fine tuning to existing solutions.',
    secondParagraphDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    catchPhrase: 'Experts in technology that’s here to stay',
    content: {
      contentType: 'icon',
      icons: [figma, webflow, adobe, layer],
      iconsMobile: [figmaMobile, webflowMobile, adobeMobile, layerMobile],
    },
    amtItemsInFirstRow: 2,
    centerSecondRow: false,
    secondLayerTitle: 'Bring your ideas to life',
    secondLayerLottie: uiAnimation,
  },
  {
    title: 'Developer Outsourcing',
    firstParagraphDescription:
      'WLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ',
    secondParagraphDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    catchPhrase: 'Experts in technology that’s here to stay',
    content: {
      contentType: 'text',
      icons: ['Scrum Master', 'Product Lead', 'Product Owner', 'Kanban', 'Agile Transformation'],
    },
    amtItemsInFirstRow: 3,
    centerSecondRow: true,
    secondLayerTitle: 'In need of an expert',
    secondLayerLottie: outsourcingAnimation,
  },
  {
    title: 'API & System Development',
    firstParagraphDescription:
      'WLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. ',
    secondParagraphDescription:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    catchPhrase: '',
    content: {
      contentType: 'icon',
      icons: [node, dotnet, java, nosql, sql],
      iconsMobile: [nodeMobile, dotnetMobile, javaMobile, nosqlMobile, sqlMobile],
    },
    amtItemsInFirstRow: 2,
    centerSecondRow: false,
    secondLayerTitle: 'FOUND WHAT YOU’VE BEEN LOOKING FOR?',
    secondLayerLottie: apiDevelopmentAnimation,
  },
];
