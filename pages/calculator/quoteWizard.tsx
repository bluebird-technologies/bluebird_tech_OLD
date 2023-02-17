import React, { ReactElement, useContext, useState } from 'react';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import AppleIcon from '../../public/calculator/appleIcon.svg';
import AndroidIcon from '../../public/calculator/androidIcon.svg';
import WebIcon from '../../public/calculator/webIcon.svg';
import MultiPlatformIcon from '../../public/calculator/multiPlatformIcon.svg';
import SmallIcon from '../../public/calculator/small.svg';
import MediumIcon from '../../public/calculator/medium.svg';
import LargeIcon from '../../public/calculator/large.svg';
import MVPIcon from '../../public/calculator/mvp-image.svg';
import StockIcon from 'public/calculator/stock-icon.svg';
import YesIcon from 'public/calculator/yesIcon.svg';
import NoIcon from 'public/calculator/noIcon.svg';
import EmailIcon from 'public/calculator/emailIcon.svg';
import SocialIcon from 'public/calculator/socialIcon.svg';
import NoIcon2 from 'public/calculator/no.svg';
import NotSureIcon from 'public/calculator/notSureIcon.svg';
import NotSureIcon2 from 'public/calculator/notSureIcon2.svg';
import NoIcon3 from 'public/calculator/noIcon3.svg';
import YesIcon2 from 'public/calculator/yesIcon2.svg';
import NotSureIcon3 from 'public/calculator/notSureIcon3.svg';
import NoIcon4 from 'public/calculator/noIcon4.svg';
import YesIcon3 from 'public/calculator/yesIcon3.svg';
import BeautifulIcon from 'public/calculator/beautiful-icon.svg';
import SubscriptionIcon from 'public/calculator/subPlans.svg';
import PaymentIcon from 'public/calculator/paymentIcon.svg';
import CartIcon from 'public/calculator/cartIcon.svg';
import NoIcon5 from 'public/calculator/noIcon5.svg';
import PerformanceIcon from 'public/calculator/performanceIcon.svg';
import ContentIcon from 'public/calculator/contentIcon.svg';
import AnalyticsIcon from 'public/calculator/analyticsIcon.svg';
import CmsIcon from 'public/calculator/cmsIcon.svg';
import Calculator from '../../components/QuoteCalculator';
import SelectedScreen from '../../components/Calculator/SelectedScreen';
import {
  CalculatorContext,
  CalculatorContextType,
  Resources,
} from '../../contexts/calculatorContext';

function QuoteWizard() {
  interface Screen {
    id: number;
    title: string;
    description: string;
    buttons: {
      title: string;
      icon: ReactElement;
      onclick: () => void;
    }[];
  }

  interface Buttons {
    title: string;
    icon: ReactElement;
    onclick: () => void;
  }

  const screen1Btns: Buttons[] = [
    {
      title: 'Apple iOS',
      icon: <AppleIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 40,
          pessimisticHours: prev.pessimisticHours + 57,
          platform: 'Apple',
          resources: [Resources.MD],
        }));
        setSelectedScreen(screens[1]);
      },
    },
    {
      title: 'Android',
      icon: <AndroidIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 40,
          pessimisticHours: prev.pessimisticHours + 57,
          platform: 'Android',
          resources: [Resources.MD],
        }));
        setSelectedScreen(screens[1]);
      },
    },
    {
      title: 'Web',
      icon: <WebIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 40,
          pessimisticHours: prev.pessimisticHours + 57,
          platform: 'Web',
          resources: [Resources.FE],
        }));
        setSelectedScreen(screens[1]);
      },
    },
    {
      title: 'Multi-Platform',
      icon: <MultiPlatformIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 80,
          pessimisticHours: prev.pessimisticHours + 114,
          platform: 'Multi-Platform',
          resources: [Resources.MD, Resources.FE, Resources.BE],
        }));
        setSelectedScreen(screens[1]);
      },
    },
  ];

  const screen2Btns: Buttons[] = [
    {
      title: 'Small',
      icon: <SmallIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 20,
          pessimisticHours: prev.pessimisticHours + 29,
          platform: prev.platform,
          resources: [],
        }));
        setSelectedScreen(screens[2]);
      },
    },
    {
      title: 'Medium',
      icon: <MediumIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 40,
          pessimisticHours: prev.pessimisticHours + 57,
          platform: prev.platform,
          resources: [Resources.PM],
        }));
        setSelectedScreen(screens[2]);
      },
    },
    {
      title: 'Large',
      icon: <LargeIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 60,
          pessimisticHours: prev.pessimisticHours + 86,
          platform: prev.platform,
          resources: [Resources.PM],
        }));
        setSelectedScreen(screens[2]);
      },
    },
  ];

  const screen3Btns: Buttons[] = [
    {
      title: 'Yes',
      icon: <YesIcon />,
      onclick: () => setSelectedScreen(screens[4]),
    },
    {
      title: 'No',
      icon: <NoIcon />,
      onclick: () => setSelectedScreen(screens[4]),
    },
  ];

  const screen4Btns: Buttons[] = [
    {
      title: 'MVP',
      icon: <MVPIcon />,
      onclick: () => setSelectedScreen(screens[3]),
    },
    {
      title: 'Stock',
      icon: <StockIcon />,
      onclick: () => setSelectedScreen(screens[3]),
    },
    {
      title: 'Beautiful',
      icon: <BeautifulIcon />,
      onclick: () => setSelectedScreen(screens[3]),
    },
  ];

  const screen5Btns: Buttons[] = [
    {
      title: 'Email',
      icon: <EmailIcon />,
      onclick: () => setSelectedScreen(screens[5]),
    },
    {
      title: 'Social',
      icon: <SocialIcon />,
      onclick: () => setSelectedScreen(screens[5]),
    },
    {
      title: 'No',
      icon: <NoIcon2 />,
      onclick: () => setSelectedScreen(screens[5]),
    },
    {
      title: 'Not Sure',
      icon: <NotSureIcon />,
      onclick: () => setSelectedScreen(screens[5]),
    },
  ];

  const screen6Btns: Buttons[] = [
    {
      title: 'Yes',
      icon: <YesIcon2 />,
      onclick: () => setSelectedScreen(screens[6]),
    },
    {
      title: 'No',
      icon: <NoIcon3 />,
      onclick: () => setSelectedScreen(screens[6]),
    },
    {
      title: 'Not Sure',
      icon: <NotSureIcon2 />,
      onclick: () => setSelectedScreen(screens[6]),
    },
  ];
  const screen7Btns: Buttons[] = [
    {
      title: 'Yes',
      icon: <YesIcon3 />,
      onclick: () => setSelectedScreen(screens[7]),
    },
    {
      title: 'No',
      icon: <NoIcon4 />,
      onclick: () => setSelectedScreen(screens[7]),
    },
    {
      title: 'Not Sure',
      icon: <NotSureIcon3 />,
      onclick: () => setSelectedScreen(screens[7]),
    },
  ];
  const screen8Btns: Buttons[] = [
    {
      title: 'Subscription Plans',
      icon: <SubscriptionIcon />,
      onclick: () => setSelectedScreen(screens[8]),
    },
    {
      title: 'Payment Processing',
      icon: <PaymentIcon />,
      onclick: () => setSelectedScreen(screens[8]),
    },
    {
      title: 'Shopping Cart',
      icon: <CartIcon />,
      onclick: () => setSelectedScreen(screens[8]),
    },
    {
      title: 'No',
      icon: <NoIcon5 />,
      onclick: () => setSelectedScreen(screens[8]),
    },
  ];
  const screen9Btns: Buttons[] = [
    {
      title: 'CMS Integration',
      icon: <CmsIcon />,
      onclick: () => setSelectedScreen(screens[8]),
    },
    {
      title: 'Performance Monitoring',
      icon: <PerformanceIcon />,
      onclick: () => setSelectedScreen(screens[8]),
    },
    {
      title: 'Moderation/ Content Approval',
      icon: <ContentIcon />,
      onclick: () => setSelectedScreen(screens[8]),
    },
    {
      title: 'Usage Analytics',
      icon: <AnalyticsIcon />,
      onclick: () => setSelectedScreen(screens[8]),
    },
    {
      title: 'No',
      icon: <NoIcon5 />,
      onclick: () => setSelectedScreen(screens[8]),
    },
  ];

  const screens: Screen[] = [
    {
      id: 1,
      title: 'What type of platform are you building?',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
      buttons: screen1Btns,
    },
    {
      id: 2,
      title: 'How big is your platform?',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
      buttons: screen2Btns,
    },
    {
      id: 3,
      title: 'Do you have a designer',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
      buttons: screen3Btns,
    },
    {
      id: 4,
      title: 'What level of UX/UI do you want?',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
      buttons: screen4Btns,
    },

    {
      id: 5,
      title: 'Do you have a designer',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
      buttons: screen5Btns,
    },
    {
      id: 6,
      title: 'Do people create personal profiles?',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
      buttons: screen6Btns,
    },
    {
      id: 7,
      title: 'Does your app and website need to be connected?',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
      buttons: screen7Btns,
    },
    {
      id: 8,
      title: 'Are there payments involved?',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
      buttons: screen8Btns,
    },
    {
      id: 9,
      title: 'Do you want an admin portal?',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
      buttons: screen9Btns,
    },
  ];

  const [selectedType, setSelectedType] = useState('');
  const [selectedScreen, setSelectedScreen] = useState(screens[0]);
  const [calculatorValue, setCalculatorValue] = useState<CalculatorContextType>({
    platform: '',
    optimisticHours: 0,
    pessimisticHours: 0,
    resources: [],
  });

  return (
    <CalculatorContext.Provider value={calculatorValue}>
      <div className="flex-1 flex flex-col h-full">
        <div className="relative w-full bg-cover bg-bottom flex flex-col items-center pb-[90px]">
          <div
            className="bg-primary h-full"
            style={{
              position: 'absolute',
              left: '-16%',
              width: '130vw',
              borderBottomLeftRadius: '50%',
              borderBottomRightRadius: '50%',
            }}
          />
          <Header />
        </div>
        <div className="bg-secondary flex-1 flex pt-60 pb-16 px-20 w-full -mt-40">
          <Container wide>
            <SelectedScreen screen={selectedScreen} />
          </Container>
          <Container>
            <Calculator platformType={selectedType} />
          </Container>
        </div>
      </div>
    </CalculatorContext.Provider>
  );
}

export default QuoteWizard;
