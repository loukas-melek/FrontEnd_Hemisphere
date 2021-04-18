import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'shopping-cart-outline',
    link: '/front/home',
  },
  {
    title: 'WorkFlow',
    icon: 'shopping-cart-outline',
    link: '/dashboard/workflow',
    home: true,
  },
  {
    title: 'SeekForOffers',
    icon: 'shopping-cart-outline',
    link: '/dashboard/seekforoffers',
    home: true,
  },
  {
    title: 'SeekForTasks',
    icon: 'shopping-cart-outline',
    link: '/dashboard/seekfortasks',
    home: true,
  },
  {
    title: 'MyOffers',
    icon: 'shopping-cart-outline',
    link: '/dashboard/myoffers',
    home: true,
  },
  {
    title: 'MyTasks',
    icon: 'shopping-cart-outline',
    link: '/dashboard/mytasks',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
];
