import { SolutionType } from '../../pages/offer';
import apiDevelopmentAnimation from '../../public/what-we-offer/apiDevelopment.json';
import appDevelopmentAnimation from '../../public/what-we-offer/appAnimation.json';
import outsourcingAnimation from '../../public/what-we-offer/outsourcing.json';
import productAnimation from '../../public/what-we-offer/product.json';
import structureAnimation from '../../public/what-we-offer/structure.json';
import uiAnimation from '../../public/what-we-offer/ui.json';
import webDevelopmentAnimation from '../../public/what-we-offer/websiteAnimation.json';

import adobe from './icons/UX/Adobe';
import angular from './icons/angular';
import banking from './icons/infrastructure/BankingSolution';
import database from './icons/infrastructure/DatabaseDevelopment';
import django from './icons/django';
import dotnet from './icons/dotnet';
import figma from './icons/UX/Figma';
import flutter from './icons/flutter';
import ionic from './icons/ionic';
import itsolutions from './icons/infrastructure/HolisticItSolutions';
import java from './icons/java';
import layer from './icons/UX/Layer';
import logistic from './icons/infrastructure/LogisticsSystems';
import node from './icons/node';
import nosql from './icons/nosql';
import reactNative from './icons/reactNative';
import services from './icons/infrastructure/ServicesDevelopment';
import sql from './icons/sql';
import transport from './icons/infrastructure/TransportSystems';
import vue from './icons/vue';
import webflow from './icons/UX/Webflow';
import wordpress from './icons/wordpress';
import xamarin from './icons/xamarin';

import adobeMobile from './icons/mobile/AdobeIllustratorMobile';
import layerMobile from './icons/mobile/LayerMobile';
import figmaMobile from './icons/mobile/FigmaMobile';
import webflowMobile from './icons/mobile/WebflowMobile';
import angularMobile from './icons/mobile/AngularMobile';
import bankingMobile from './icons/infrastructure/mobile/BankingSolutionMobile';
import databaseMobile from './icons/infrastructure/mobile/DatabaseDevelopmentMobile';
import djangoMobile from './icons/mobile/DjangoMobile';
import dotnetMobile from './icons/dotnetMobile';
import flutterMobile from './icons/mobile/FlutterMobile';
import ionicMobile from './icons/mobile/IonicMobile';
import itSolutionsMobile from './icons/infrastructure/mobile/HolisticItSolutionsMobile';
import javaMobile from './icons/javaMobile';
import logisticMobile from './icons/infrastructure/mobile/LogisticsSystemsMobile';
import nodeMobile from './icons/nodeMobile';
import nosqlMobile from './icons/nosqlMobile';
import reactNativeMobile from './icons/mobile/ReactNativeMobile';
import servicesMobile from './icons/infrastructure/mobile/ServicesDevelopmentMobile';
import sqlMobile from './icons/sqlMobile';
import transportMobile from './icons/infrastructure/mobile/TransportSystemsMobile';
import vueMobile from './icons/mobile/VueMobile';
import wordpressMobile from './icons/mobile/WordpressMobile';
import xamarinMobile from './icons/mobile/XamarinMobile';

export const solutions: SolutionType[] = [
  {
    title: 'Web Development',
    firstParagraphDescription:
      'Using modern technologies combined with the latest web standards, we create performant, responsive, sleek, and secure websites. We are dedicated to helping you establish a powerful online presence.',
    secondParagraphDescription:
      'Our expertise and experience in coding, design, and user experience allows us to build custom web solutions that meet the unique needs of our clients.',
    catchPhrase: 'Unleash the power of your product with our web-based solutions',
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
      'We are passionate about creating innovative and engaging mobile experiences that help individuals and businesses reach their full potential.',
    secondParagraphDescription:
      'With expertise in both iOS and Android platforms, we specialize in developing high-quality, customized mobile applications to help our clients achieve their vision.',
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
      'Our services encompass a wide range of expertise enabling us to tackle even the most complex challenges.',
    secondParagraphDescription:
      'We develop everything from banking solutions to logistic systems and have the server-, database-, and services development experience to tackle any problem',
    catchPhrase: 'Building the foundation for your success',
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
      'Using Agile methodologies and effective time management we provide accurate expectations and deliver on time.',
    secondParagraphDescription:
      'We provide the strategic guidance and expertise needed to create and launch successful products that meet the needs of your customers.',
    catchPhrase: 'Streamlining your product journey for success!',
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
      "We understand the critical importance of effective branding and design. That's why we employ a multi-iterative approach to create powerful brands that stand out in todays crowded marketplace.",
    catchPhrase: 'User-centric design to drive enjoyment and engagement',
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
      'We understand the critical importance of high-quality software development, but building and maintaining an in-house development team can be costly and time-consuming.',
    secondParagraphDescription:
      "That's why we offer developer outsourcing services that provide access to talented developers with the skills and expertise you need to take your software development projects to the next level.",
    catchPhrase: 'Scale your development capacity with seamless outsourcing solutions',
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
      'Connect your digital assets and streamline your business operations with our API and system development services.',
    secondParagraphDescription:
      'Our expert team can design, develop, and deploy robust APIs and systems that enable seamless communication and data exchange between your software applications.',
    catchPhrase: 'Building robust APIs and systems to power your digital ambitions',
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
