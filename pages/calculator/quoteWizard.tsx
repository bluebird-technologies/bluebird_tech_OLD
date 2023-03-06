import React, { ReactElement, useState } from 'react';
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
import CalendarIcon from 'public/calculator/calendar.svg';
import BookingsIcon from 'public/calculator/bookings.svg';
import LiveTrackingIcon from 'public/calculator/liveTracking.svg';
import MapsIntegrationIcon from 'public/calculator/maps-integration.svg';
import Calculator from '../../components/QuoteCalculator';
import SelectedScreen from '../../components/Calculator/SelectedScreen';
import RightArrow from '../../public/right-arrow.svg';
import {
  CalculatorContext,
  CalculatorContextType,
  Resources,
} from '../../contexts/calculatorContext';
import { useRouter } from 'next/router';

function QuoteWizard() {
  const router = useRouter();
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
        setSelectedScreen(1);
        setOptimisticHours((prev) => [...prev, 40]);
        setPessimisticHours((prev) => [...prev, 57]);
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
        setSelectedScreen(1);
        setOptimisticHours((prev) => [...prev, 40]);
        setPessimisticHours((prev) => [...prev, 57]);
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
        setSelectedScreen(1);
        setOptimisticHours((prev) => [...prev, 40]);
        setPessimisticHours((prev) => [...prev, 57]);
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
        setSelectedScreen(1);
        setOptimisticHours((prev) => [...prev, 80]);
        setPessimisticHours((prev) => [...prev, 114]);
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
          size: 'Small',
          resources: [],
        }));
        setSelectedScreen(2);
        setOptimisticHours((prev) => [...prev, 20]);
        setPessimisticHours((prev) => [...prev, 29]);
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
          size: 'Medium',
          resources: [Resources.PM],
        }));
        setSelectedScreen(2);
        setOptimisticHours((prev) => [...prev, 40]);
        setPessimisticHours((prev) => [...prev, 57]);
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
          size: 'Large',
          resources: [Resources.PM],
        }));
        setSelectedScreen(2);
        setOptimisticHours((prev) => [...prev, 60]);
        setPessimisticHours((prev) => [...prev, 86]);
      },
    },
  ];

  const screen3Btns: Buttons[] = [
    {
      title: 'Yes',
      icon: <YesIcon />,
      onclick: () => {
        setSelectedScreen(3);
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 0,
          pessimisticHours: prev.pessimisticHours + 0,
          hasDesigner: true,
        }));
        setHasDesginer(true);
        setOptimisticHours((prev) => [...prev, 0]);
        setPessimisticHours((prev) => [...prev, 0]);
      },
    },
    {
      title: 'No',
      icon: <NoIcon />,
      onclick: () => {
        setSelectedScreen(3);
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          hasDesigner: false,
          optimisticHours: prev.optimisticHours + 0,
          pessimisticHours: prev.pessimisticHours + 0,
        }));
        setHasDesginer(false);
        setOptimisticHours((prev) => [...prev, 0]);
        setPessimisticHours((prev) => [...prev, 0]);
      },
    },
  ];

  const screen4Btns: Buttons[] = [
    {
      title: 'MVP',
      icon: <MVPIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: hasDesigner ? prev.optimisticHours + 20 : prev.optimisticHours + 40,
          pessimisticHours: hasDesigner ? prev.pessimisticHours + 29 : prev.pessimisticHours + 57,
          platform: prev.platform,
          resources: [],
          ux_ui: 'MVP',
        }));
        setSelectedScreen(4);
        setOptimisticHours((prev) => [...prev, hasDesigner ? 20 : 40]);
        setPessimisticHours((prev) => [...prev, hasDesigner ? 29 : 57]);
      },
    },
    {
      title: 'Stock',
      icon: <StockIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: hasDesigner ? prev.optimisticHours + 30 : prev.optimisticHours + 60,
          pessimisticHours: hasDesigner ? prev.pessimisticHours + 43 : prev.pessimisticHours + 86,
          platform: prev.platform,
          resources: [],
          ux_ui: 'Stock',
        }));
        setSelectedScreen(4);
        setOptimisticHours((prev) => [...prev, hasDesigner ? 30 : 60]);
        setPessimisticHours((prev) => [...prev, hasDesigner ? 43 : 86]);
      },
    },
    {
      title: 'Beautiful',
      icon: <BeautifulIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: hasDesigner ? prev.optimisticHours + 40 : prev.optimisticHours + 80,
          pessimisticHours: hasDesigner ? prev.pessimisticHours + 57 : prev.pessimisticHours + 114,
          platform: prev.platform,
          resources: [],
          ux_ui: 'Beautiful',
        }));
        setSelectedScreen(4);
        setOptimisticHours((prev) => [...prev, hasDesigner ? 40 : 80]);
        setPessimisticHours((prev) => [...prev, hasDesigner ? 57 : 114]);
      },
    },
  ];

  const screen5Btns: Buttons[] = [
    {
      title: 'Email',
      icon: <EmailIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 15,
          pessimisticHours: prev.pessimisticHours + 21,
          platform: prev.platform,
          resources: [Resources.BE],
          loginType: ['Email'],
        }));
        setOptimisticHours((prev) => [...prev, 15]);
        setPessimisticHours((prev) => [...prev, 21]);
        setSelectedScreen(5);
      },
    },
    {
      title: 'Social',
      icon: <SocialIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 15,
          pessimisticHours: prev.pessimisticHours + 21,
          platform: prev.platform,
          resources: [Resources.BE],
          loginType: ['Social'],
        }));
        setOptimisticHours((prev) => [...prev, 15]);
        setPessimisticHours((prev) => [...prev, 21]);
        setSelectedScreen(5);
      },
    },
    {
      title: 'No',
      icon: <NoIcon2 />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 0,
          pessimisticHours: prev.pessimisticHours + 0,
          resources: [],
        }));
        setSelectedScreen(5);
        setOptimisticHours((prev) => [...prev, 0]);
        setPessimisticHours((prev) => [...prev, 0]);
      },
    },
    {
      title: 'Not Sure',
      icon: <NotSureIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 5,
          pessimisticHours: prev.pessimisticHours + 7,
          resources: [Resources.BE],
        }));
        setSelectedScreen(5);
        setOptimisticHours((prev) => [...prev, 5]);
        setPessimisticHours((prev) => [...prev, 7]);
      },
    },
  ];

  const screen6Btns: Buttons[] = [
    {
      title: 'Yes',
      icon: <YesIcon2 />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 30,
          pessimisticHours: prev.pessimisticHours + 43,
          resources: [Resources.BE],
        }));
        setSelectedScreen(6);
        setOptimisticHours((prev) => [...prev, 30]);
        setPessimisticHours((prev) => [...prev, 43]);
      },
    },
    {
      title: 'No',
      icon: <NoIcon3 />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 0,
          pessimisticHours: prev.pessimisticHours + 0,
          resources: [],
        }));
        setSelectedScreen(6);
        setOptimisticHours((prev) => [...prev, 0]);
        setPessimisticHours((prev) => [...prev, 0]);
      },
    },
    {
      title: 'Not Sure',
      icon: <NotSureIcon2 />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 5,
          pessimisticHours: prev.pessimisticHours + 7,
          resources: [Resources.BE],
        }));
        setSelectedScreen(6);
        setOptimisticHours((prev) => [...prev, 5]);
        setPessimisticHours((prev) => [...prev, 7]);
      },
    },
  ];
  const screen7Btns: Buttons[] = [
    {
      title: 'Yes',
      icon: <YesIcon3 />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 15,
          pessimisticHours: prev.pessimisticHours + 21,
          resources: [Resources.BE],
        }));
        setSelectedScreen(7);
        setOptimisticHours((prev) => [...prev, 15]);
        setPessimisticHours((prev) => [...prev, 21]);
      },
    },
    {
      title: 'No',
      icon: <NoIcon4 />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 0,
          pessimisticHours: prev.pessimisticHours + 0,
          resources: [],
        }));
        setSelectedScreen(7);
        setOptimisticHours((prev) => [...prev, 0]);
        setPessimisticHours((prev) => [...prev, 0]);
      },
    },
    {
      title: 'Not Sure',
      icon: <NotSureIcon3 />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 5,
          pessimisticHours: prev.pessimisticHours + 7,
          resources: [Resources.BE],
        }));
        setSelectedScreen(7);
        setOptimisticHours((prev) => [...prev, 5]);
        setPessimisticHours((prev) => [...prev, 7]);
      },
    },
  ];
  const screen8Btns: Buttons[] = [
    {
      title: 'Subscription Plans',
      icon: <SubscriptionIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 40,
          pessimisticHours: prev.pessimisticHours + 57,
          resources: [Resources.BE],
        }));
        setSelectedScreen(8);
        setOptimisticHours((prev) => [...prev, 40]);
        setPessimisticHours((prev) => [...prev, 57]);
      },
    },
    {
      title: 'Payment Processing',
      icon: <PaymentIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 80,
          pessimisticHours: prev.pessimisticHours + 114,
          resources: [Resources.BE],
          payments: 'Payment Processing',
        }));
        setSelectedScreen(8);
        setOptimisticHours((prev) => [...prev, 80]);
        setPessimisticHours((prev) => [...prev, 114]);
      },
    },
    {
      title: 'Shopping Cart',
      icon: <CartIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 100,
          pessimisticHours: prev.pessimisticHours + 143,
          resources: [Resources.BE],
        }));
        setSelectedScreen(8);
        setOptimisticHours((prev) => [...prev, 100]);
        setPessimisticHours((prev) => [...prev, 143]);
      },
    },
    {
      title: 'No',
      icon: <NoIcon5 />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 0,
          pessimisticHours: prev.pessimisticHours + 0,
          resources: [],
        }));
        setSelectedScreen(8);
        setOptimisticHours((prev) => [...prev, 0]);
        setPessimisticHours((prev) => [...prev, 0]);
      },
    },
  ];
  const screen9Btns: Buttons[] = [
    {
      title: 'CMS Integration',
      icon: <CmsIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 30,
          pessimisticHours: prev.pessimisticHours + 43,
          resources: [Resources.BE],
        }));
        setSelectedScreen(9);
        setOptimisticHours((prev) => [...prev, 30]);
        setPessimisticHours((prev) => [...prev, 43]);
      },
    },
    {
      title: 'Performance Monitoring',
      icon: <PerformanceIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 40,
          pessimisticHours: prev.pessimisticHours + 57,
          resources: [],
        }));
        setSelectedScreen(9);
        setOptimisticHours((prev) => [...prev, 40]);
        setPessimisticHours((prev) => [...prev, 57]);
      },
    },
    {
      title: 'Moderation/ Content Approval',
      icon: <ContentIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 40,
          pessimisticHours: prev.pessimisticHours + 57,
          resources: [Resources.BE],
        }));
        setSelectedScreen(9);
        setOptimisticHours((prev) => [...prev, 40]);
        setPessimisticHours((prev) => [...prev, 57]);
      },
    },
    {
      title: 'Usage Analytics',
      icon: <AnalyticsIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 25,
          pessimisticHours: prev.pessimisticHours + 36,
          resources: [],
        }));
        setSelectedScreen(9);
        setOptimisticHours((prev) => [...prev, 25]);
        setPessimisticHours((prev) => [...prev, 36]);
      },
    },
    {
      title: 'No',
      icon: <NoIcon5 />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 0,
          pessimisticHours: prev.pessimisticHours + 0,
          resources: [],
        }));
        setSelectedScreen(9);
        setOptimisticHours((prev) => [...prev, 0]);
        setPessimisticHours((prev) => [...prev, 0]);
      },
    },
  ];

  const screen10Btns: Buttons[] = [
    {
      title: 'Calendar',
      icon: <CalendarIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 50,
          pessimisticHours: prev.pessimisticHours + 71,
          resources: [Resources.BE],
        }));
        router.push('/calculator/quoteEstimate');
      },
    },
    {
      title: 'Bookings',
      icon: <BookingsIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 40,
          pessimisticHours: prev.pessimisticHours + 57,
          resources: [Resources.BE],
        }));
        router.push('/calculator/quoteEstimate');
      },
    },
    {
      title: 'Live GPS and Tracking',
      icon: <LiveTrackingIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 80,
          pessimisticHours: prev.pessimisticHours + 114,
          resources: [Resources.BE],
        }));
        router.push('/calculator/quoteEstimate');
      },
    },
    {
      title: 'Maps Integration',
      icon: <MapsIntegrationIcon />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 80,
          pessimisticHours: prev.pessimisticHours + 114,
          resources: [Resources.BE],
        }));
        router.push('/calculator/quoteEstimate');
      },
    },
    {
      title: 'No',
      icon: <NoIcon5 />,
      onclick: () => {
        setCalculatorValue((prev) => ({
          ...calculatorValue,
          optimisticHours: prev.optimisticHours + 0,
          pessimisticHours: prev.pessimisticHours + 0,
          resources: [],
        }));
        router.push('/calculator/quoteEstimate');
      },
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
      title: 'Do People have to login',
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
    {
      id: 10,
      title: 'Dates and Location',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
      buttons: screen10Btns,
    },
  ];

  const [selectedScreen, setSelectedScreen] = useState<number>(0);
  const [calculatorValue, setCalculatorValue] = useState<CalculatorContextType>({
    platform: '',
    optimisticHours: 0,
    pessimisticHours: 0,
    resources: [],
  });
  const [optimisticHours, setOptimisticHours] = useState<number[]>([]);
  const [pessimisticHours, setPessimisticHours] = useState<number[]>([]);
  const [hasDesigner, setHasDesginer] = useState<boolean>(false);

  const backBtnHandler = () => {
    setSelectedScreen((prev) => prev - 1);
    setCalculatorValue((prev) => ({
      ...prev,
      optimisticHours: prev.optimisticHours - optimisticHours[optimisticHours.length - 1],
      pessimisticHours: prev.pessimisticHours - pessimisticHours[pessimisticHours.length - 1],
    }));
    setOptimisticHours((prev) => prev.slice(0, -1));
    setPessimisticHours((prev) => prev.slice(0, -1));
  };

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
            <SelectedScreen screen={screens[selectedScreen]} />
            <div className="flex flex-1  justify-between w-full">
              {selectedScreen !== 0 && (
                <button
                  onClick={() => backBtnHandler()}
                  className="text-white font-medium text-xl flex items-center justify-center"
                >
                  <RightArrow className="origin-center rotate-180 mr-4" />
                  BACK
                </button>
              )}
              <div></div>
              {selectedScreen !== screens.length - 1 && (
                <button
                  onClick={() =>
                    setSelectedScreen((prev) => (prev < screens.length ? prev + 1 : prev))
                  }
                  className="text-white font-medium text-xl flex items-center justify-center"
                >
                  NEXT
                  <RightArrow className="mr-4" />
                </button>
              )}
            </div>
          </Container>
          <Container>
            <Calculator />
          </Container>
        </div>
      </div>
    </CalculatorContext.Provider>
  );
}

export default QuoteWizard;
