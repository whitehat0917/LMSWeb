import { GlobalUrls } from '@util/app-utils';

export const MainMenu = [
  {
    title: 'Dashboard',
    path: GlobalUrls.STUDENT,
    imgSrc: '/images/dashboard.svg',
  },
  {
    title: 'Courses',
    path: GlobalUrls.STUDENT + '/courses',
    imgSrc: '/images/book.svg',
  },
  {
    title: 'Events',
    path: GlobalUrls.STUDENT + '/events',
    imgSrc: '/images/event.svg',
  },
  {
    title: 'Sales',
    path: GlobalUrls.STUDENT + '/sales',
    imgSrc: '/images/sales.svg',
  },
  {
    title: 'Reports',
    path: GlobalUrls.STUDENT + '/reports',
    imgSrc: '/images/report.svg',
  },
  {
    title: 'Billing',
    path: GlobalUrls.STUDENT + '/billing',
    imgSrc: '/images/bill.svg',
  },
];

export const statsMenu = [
  {
    title: 'Active Courses',
    value: 2000,
    iconSrc: 'stats_book.svg',
  },
  {
    title: 'Completed Courses',
    value: 1200,
    iconSrc: 'stats_student.svg',
  },
  {
    title: 'Active Learners',
    value: 1000,
    iconSrc: 'stats_study.svg',
  },
];

export const quickLinks = [
  {
    title: 'Request Custom Course',
    iconSrc: 'quick_custom.svg',
  },
  {
    title: 'Create New Course',
    iconSrc: 'quick_create.svg',
  },
  {
    title: 'Add New User',
    iconSrc: 'quick_team.svg',
  },
  {
    title: 'Add Event',
    iconSrc: 'quick_event.svg',
  },
  {
    title: 'View Learning Paths',
    iconSrc: 'quick_ladder.svg',
  },
  {
    title: 'Battle Board',
    iconSrc: 'quick_game.svg',
  },
];

export const filterOptions = [
  // { title: 'Today', value: 1},
  // { title: 'Yesterday', value: 2},
  { title: 'Last 7 days', value: 7 },
  { title: 'Last 14 days', value: 14 },
  { title: 'Last 30 days', value: 30 },
];
