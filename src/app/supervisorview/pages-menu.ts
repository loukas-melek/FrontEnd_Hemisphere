import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_SUPERVISOR: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    link: '/front/home',
  },
  {
    title: 'Project Management',
    icon: 'calendar-outline',
    link: '/supervisor/projects',
    
  },
  {
    title: 'Tasks',
    icon: 'archive-outline',
    children: [
      {
        title: 'pulic-tasks',
        link: '/supervisor/tasks/public-tasks',
      },
      {
        title: 'my-tasks',
        link: '/supervisor/tasks/my-tasks',
      },
    ],
  },
  {
    title: 'Offers',
    icon: 'briefcase-outline',
    children: [
      {
        title: 'public-offers',
        link: '/supervisor/offers/public-offers',
      },
      {
        title: 'my-offers',
        link: '/supervisor/offers/my-offers',
      },
    ],
  },
];
