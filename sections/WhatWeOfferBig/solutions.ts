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
import banking from './icons/systemsnew/BankingSolution';
import database from './icons/systemsnew/DatabaseDevelopment';
import django from './icons/django';
import dotnet from './icons/dotnet';
import figma from './icons/figma';
import flutter from './icons/flutter';
import ionic from './icons/ionic';
import itsolutions from './icons/systemsnew/WholisticItSolutions';
import java from './icons/java';
import layer from './icons/layer';
import logistic from './icons/systemsnew/LogisticsSystems';
import node from './icons/node';
import nosql from './icons/nosql';
import reactNative from './icons/reactNative';
import services from './icons/systemsnew/ServicesDevelopment';
import sql from './icons/sql';
import transport from './icons/systemsnew/TransportSystems';
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
import itSolutionsMobile from './icons/itMobile';
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
    icons: [
      { title: 'angular', icon: angular, iconMobile: angularMobile },
      { title: 'reactNative', icon: reactNative, iconMobile: reactNativeMobile },
      { title: 'vue', icon: vue, iconMobile: vueMobile },
      { title: 'django', icon: django, iconMobile: djangoMobile },
      { title: 'wordpress', icon: wordpress, iconMobile: wordpressMobile },
    ],
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
    icons: [
      { title: 'flutter', icon: flutter, iconMobile: flutterMobile },
      { title: 'reactNative', icon: reactNative, iconMobile: reactNativeMobile },
      { title: 'ionic', icon: ionic, iconMobile: ionicMobile },
      { title: 'xamarin', icon: xamarin, iconMobile: xamarinMobile },
    ],
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
    icons: [
      { title: 'Transport Systems', icon: transport, iconMobile: transportMobile },
      { title: 'Logistic Systems', icon: logistic, iconMobile: logisticMobile },
      { title: 'Banking Solutions', icon: banking, iconMobile: bankingMobile },
      { title: 'Holistic IT Solutions', icon: itsolutions, iconMobile: itSolutionsMobile },
      { title: 'Services Development', icon: services, iconMobile: servicesMobile },
      { title: 'Database Development', icon: database, iconMobile: databaseMobile },
    ],
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
    icons: [
      { title: 'Scrum Master', icon: '', iconMobile: '' },
      { title: 'Product Lead', icon: '', iconMobile: '' },
      { title: 'Product Owner', icon: '', iconMobile: '' },
      { title: 'Kanban', icon: '', iconMobile: '' },
      { title: 'Agile', icon: '', iconMobile: '' },
      { title: 'Waterfall', icon: '', iconMobile: '' },
    ],
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
    icons: [
      { title: 'figma', icon: figma, iconMobile: figmaMobile },
      { title: 'layer', icon: layer, iconMobile: layerMobile },
      { title: 'adobe', icon: adobe, iconMobile: adobeMobile },
      { title: 'webflow', icon: webflow, iconMobile: webflowMobile },
    ],
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
    icons: [
      { title: 'placeholder', icon: '', iconMobile: '' },
      { title: 'placeholder2', icon: '', iconMobile: '' },
      { title: 'placeholder3', icon: '', iconMobile: '' },
      { title: 'placeholder4', icon: '', iconMobile: '' },
    ],
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
    icons: [
      { title: 'node', icon: node, iconMobile: nodeMobile },
      { title: 'dotnet', icon: dotnet, iconMobile: dotnetMobile },
      { title: 'java', icon: java, iconMobile: javaMobile },
      { title: 'nosql', icon: nosql, iconMobile: nosqlMobile },
      { title: 'sql', icon: sql, iconMobile: sqlMobile },
    ],
    amtItemsInFirstRow: 2,
    centerSecondRow: false,
    secondLayerTitle: 'FOUND WHAT YOU’VE BEEN LOOKING FOR?',
    secondLayerLottie: apiDevelopmentAnimation,
  },
];
