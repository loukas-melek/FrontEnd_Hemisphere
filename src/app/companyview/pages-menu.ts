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
    link: '/company/workflow',
    home: true,
  },
  {
    title: 'Offers',
    icon: 'shopping-cart-outline',
    link: '/company/offers',
    home: true,
  },
  {
    title: 'Tasks',
    icon: 'shopping-cart-outline',
    link: '/company/tasks',
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
