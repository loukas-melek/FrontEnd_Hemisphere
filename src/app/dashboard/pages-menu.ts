import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'shopping-cart-outline',
    link: '/front/home',
  },
  {
    title: 'Project Management',
    icon: 'shopping-cart-outline',
    link: '/dashboard/workflow',
  },
  {
    title: 'Projects ',
    icon: 'shopping-cart-outline',
    link: '/dashboard/projects',
  },
  {
    title: 'Projects ',
    icon: 'shopping-cart-outline',
    link: '/dashboard/cal',
  },
  // {
  //   title: 'OffersC',
  //   icon: 'shopping-cart-outline',
  //   link: '/dashboard/company/offers',
  //   home: true,
  // },
  // {
  //   title: 'TasksC',
  //   icon: 'shopping-cart-outline',
  //   link: '/dashboard/company/tasks',
  //   home: true,
  // },
  // {
  //   title: 'TasksS',
  //   icon: 'shopping-cart-outline',
  //   link: '/dashboard/student/tasks',
  //   home: true,
  // },
  // {
  //   title: 'OffersS',
  //   icon: 'shopping-cart-outline',
  //   link: '/dashboard/student/offers',
  //   home: true,
  // },
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
