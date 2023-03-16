import AppleIcon from '../icons/AppleIcon';
import AndroidIcon from '../icons/AndroidIcon';
import WebIcon from '../icons/WebIcon';
import MultiPlatformIcon from '../icons/MultiPlatformIcon';
import smallIcon from '../icons/small';
import mediumIcon from '../icons/medium';
import largeIcon from '../icons/large';
import yesIcon from '../icons/yesIcon';
import noIcon from '../icons/noIcon';
import stockUx from '../icons/stockUX';
import mvpIcon from '../icons/mvpIcon';
import beautifulUxIcon from '../icons/beautifulUxIcon';
import Social from '../icons/social';
import Email from '../icons/Email';
import LoginNotSure from '../icons/loginNotSure';
import LoginNo from '../icons/logInNo';
import NoIconPersonal from '../icons/personalProfile/NoIcon';
import NotSureIconPersonal from '../icons/personalProfile/NotSureIcon';
import YesIconPersonal from '../icons/personalProfile/YesIcon';
import NoIconConnected from '../icons/connected/NoIconConnected';
import NotSureConnected from '../icons/connected/NotSureConnected';
import YesConnected from '../icons/connected/YesConnected';
import MarketplaceIcon from '../icons/payments/MarketplaceIcon';
import PaymentNoIcon from '../icons/payments/PaymentNoIcon';
import PaymentProcessingIcon from '../icons/payments/PaymentProcessingIcon';
import ShoppingCartIcon from '../icons/payments/ShoppingCartIcon';
import SubscriptionPlansIcon from '../icons/payments/SubscriptionPlansIcon';
import CMSIconAdmin from '../icons/admin/CMSIconAdmin';
import ModerateIconAdmin from '../icons/admin/ModerateIconAdmin';
import NoIconAdmin from '../icons/admin/NoIconAdmin';
import PerformanceIconAdmin from '../icons/admin/PerformanceIconAdmin';
import UsageIconAdmin from '../icons/admin/UsageIconAdmin';
import BookingsIcon from '../icons/dates/BookingsIcon';
import DatesCalendarIcon from '../icons/dates/DatesCalendarIcon';
import DatesNoIcon from '../icons/dates/DatesNoIcon';
import LiveTrackingIcon from '../icons/dates/LiveTrackingIcon';
import MapsIntegrationIcon from '../icons/dates/MapsIntegrationIcon';

export interface TFormCardConfig {
  title: string;
  description: string;
  options: {
    optionIndex: number;
    title: string;
    icon: React.ReactNode;
    optimisticHours?: number;
    pessimisticHours?: number;
  }[];
}

export const FormConfigs: TFormCardConfig[] = [
  {
    // form 0
    title: 'What type of platform are you building?',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    options: [
      {
        optionIndex: 1,
        title: 'Apple iOS',
        icon: AppleIcon,
        optimisticHours: 40,
        pessimisticHours: 57,
      },
      {
        optionIndex: 2,
        title: 'Android',
        icon: AndroidIcon,
        optimisticHours: 40,
        pessimisticHours: 57,
      },
      {
        optionIndex: 3,
        title: 'Web',
        icon: WebIcon,
        optimisticHours: 40,
        pessimisticHours: 57,
      },
      {
        optionIndex: 4,
        title: 'Multi-Platform',
        icon: MultiPlatformIcon,
        optimisticHours: 80,
        pessimisticHours: 114,
      },
    ],
  },
  {
    // form 1
    title: 'How big is your platform?',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    options: [
      {
        optionIndex: 1,
        title: 'Small',
        icon: smallIcon,
        optimisticHours: 20,
        pessimisticHours: 29,
      },
      {
        optionIndex: 2,
        title: 'Medium',
        icon: mediumIcon,
        optimisticHours: 40,
        pessimisticHours: 57,
      },
      {
        optionIndex: 3,
        title: 'Large',
        icon: largeIcon,
        optimisticHours: 60,
        pessimisticHours: 86,
      },
    ],
  },
  {
    // form 2
    title: 'Do you have a designer?',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    options: [
      {
        optionIndex: 1,
        title: 'Yes',
        icon: yesIcon,
        optimisticHours: 0,
        pessimisticHours: 0,
      },
      {
        optionIndex: 2,
        title: 'No',
        icon: noIcon,
        optimisticHours: 0,
        pessimisticHours: 0,
      },
    ],
  },
  {
    // form 3
    title: 'What level of UX/UI do you want?',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    options: [
      {
        optionIndex: 1,
        title: 'MVP',
        icon: mvpIcon,
        optimisticHours: 40,
        pessimisticHours: 57,
      },
      {
        optionIndex: 2,
        title: 'Stock',
        icon: stockUx,
        optimisticHours: 60,
        pessimisticHours: 86,
      },
      {
        optionIndex: 3,
        title: 'Beautiful',
        icon: beautifulUxIcon,
        optimisticHours: 80,
        pessimisticHours: 114,
      },
    ],
  },
  {
    // form 4
    title: 'Do People have to login?',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    options: [
      {
        optionIndex: 1,
        title: 'Email',
        icon: Email,
        optimisticHours: 15,
        pessimisticHours: 21,
      },
      {
        optionIndex: 2,
        title: 'Social',
        icon: Social,
        optimisticHours: 15,
        pessimisticHours: 21,
      },
      {
        optionIndex: 3,
        title: 'No',
        icon: LoginNo,
        optimisticHours: 0,
        pessimisticHours: 0,
      },
      {
        optionIndex: 4,
        title: 'Not sure',
        icon: LoginNotSure,
        optimisticHours: 5,
        pessimisticHours: 7,
      },
    ],
  },
  {
    // form 5
    title: 'Do people create personal profiles?',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    options: [
      {
        optionIndex: 1,
        title: 'Yes',
        icon: YesIconPersonal,
        optimisticHours: 30,
        pessimisticHours: 43,
      },
      {
        optionIndex: 2,
        title: 'No',
        icon: NoIconPersonal,
        optimisticHours: 0,
        pessimisticHours: 0,
      },
      {
        optionIndex: 3,
        title: 'Not sure',
        icon: NotSureIconPersonal,
        optimisticHours: 5,
        pessimisticHours: 7,
      },
    ],
  },
  {
    // form 6
    title: 'Does your app and website need to be connected?',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    options: [
      {
        optionIndex: 1,
        title: 'Yes',
        icon: YesConnected,
        optimisticHours: 15,
        pessimisticHours: 21,
      },
      {
        optionIndex: 2,
        title: 'No',
        icon: NoIconConnected,
        optimisticHours: 0,
        pessimisticHours: 0,
      },
      {
        optionIndex: 3,
        title: 'Not sure',
        icon: NotSureConnected,
        optimisticHours: 5,
        pessimisticHours: 7,
      },
    ],
  },
  {
    // form 7
    title: 'Are there payments involved?',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    options: [
      {
        optionIndex: 1,
        title: `Subscription Plans`,
        icon: SubscriptionPlansIcon,
        optimisticHours: 40,
        pessimisticHours: 57,
      },
      {
        optionIndex: 2,
        title: 'Payment Processing',
        icon: PaymentProcessingIcon,
        optimisticHours: 80,
        pessimisticHours: 114,
      },
      {
        optionIndex: 3,
        title: 'Shopping Cart',
        icon: ShoppingCartIcon,
        optimisticHours: 100,
        pessimisticHours: 143,
      },
      {
        optionIndex: 4,
        title: 'MarketPlace',
        icon: MarketplaceIcon,
        optimisticHours: 100,
        pessimisticHours: 143,
      },
      {
        optionIndex: 5,
        title: 'No',
        icon: PaymentNoIcon,
        optimisticHours: 0,
        pessimisticHours: 0,
      },
    ],
  },
  {
    // form 8
    title: 'Do you want an admin portal?',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    options: [
      {
        optionIndex: 1,
        title: 'CMS Integration',
        icon: CMSIconAdmin,
        optimisticHours: 30,
        pessimisticHours: 43,
      },
      {
        optionIndex: 2,
        title: 'Performance Monitoring',
        icon: PerformanceIconAdmin,
        optimisticHours: 40,
        pessimisticHours: 57,
      },
      {
        optionIndex: 3,
        title: 'Moderation/ Content Approval',
        icon: ModerateIconAdmin,
        optimisticHours: 40,
        pessimisticHours: 57,
      },
      {
        optionIndex: 4,
        title: 'Usage Analytics',
        icon: UsageIconAdmin,
        optimisticHours: 25,
        pessimisticHours: 36,
      },
      {
        optionIndex: 5,
        title: 'No',
        icon: NoIconAdmin,
        optimisticHours: 0,
        pessimisticHours: 0,
      },
    ],
  },
  {
    // form 9
    title: 'Dates and Location?',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam',
    options: [
      {
        optionIndex: 1,
        title: 'Calendar',
        icon: DatesCalendarIcon,
        optimisticHours: 50,
        pessimisticHours: 71,
      },
      {
        optionIndex: 2,
        title: 'Bookings',
        icon: BookingsIcon,
        optimisticHours: 40,
        pessimisticHours: 57,
      },
      {
        optionIndex: 3,
        title: 'Live GPS Tracking',
        icon: LiveTrackingIcon,
        optimisticHours: 80,
        pessimisticHours: 114,
      },
      {
        optionIndex: 4,
        title: 'Maps Integration',
        icon: MapsIntegrationIcon,
        optimisticHours: 80,
        pessimisticHours: 114,
      },
      {
        optionIndex: 5,
        title: 'No',
        icon: DatesNoIcon,
        optimisticHours: 0,
        pessimisticHours: 0,
      },
    ],
  },
];
