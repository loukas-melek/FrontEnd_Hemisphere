import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_COMPANY: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/front/home',
  },
  {
    title: 'Project Management',
    icon: 'calendar-outline',
    link: '/company/projects',
    
  },
  {
    title: 'Tasks',
    icon: 'archive-outline',
    children: [
      {
        title: 'pulic-tasks',
        link: '/company/tasks/public-tasks',
      },
      {
        title: 'my-tasks',
        link: '/company/tasks/my-tasks',
      },
    ],
  },
  {
    title: 'Offers',
    icon: 'briefcase-outline',
    children: [
      {
        title: 'public-offers',
        link: '/company/offers/public-offers',
      },
      {
        title: 'my-offers',
        link: '/company/offers/my-offers',
      },
    ],
  },
];
