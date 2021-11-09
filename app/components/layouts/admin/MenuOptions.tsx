import { GlobalUrls } from '@util/app-utils';
import { lmsStyle } from 'styles/ui.variables';

export const MainMenu = [
  {
    title: 'Dashboard',
    path: GlobalUrls.ADMIN,
    isRoot: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15.165}
        height={15.165}
        viewBox="0 0 15.165 15.165"
        fill="#fff"
      >
        <path d="M5.416 15.165h8.666a1.086 1.086 0 001.083-1.083V5.416H5.416zM14.082 0h-13A1.086 1.086 0 000 1.083v3.25h15.165v-3.25A1.086 1.086 0 0014.082 0zM0 14.082a1.086 1.086 0 001.083 1.083h3.25V5.416H0z" />
      </svg>
    ),
  },
  {
    title: 'Courses',
    path: GlobalUrls.ADMIN + '/courses',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15.5}
        height={20.268}
        viewBox="0 0 15.5 20.268"
        fill={lmsStyle['base-gray-100']}
      >
        <path d="M3.577 15.5H15.5V0H3.577A3.587 3.587 0 000 3.577v13.115a3.587 3.587 0 003.577 3.577H15.5v-2.385H3.577a1.192 1.192 0 110-2.384z" />
      </svg>
    ),
    children: [
      {
        title: 'Courses',
        path: GlobalUrls.ADMIN + '/courses',
      },
      {
        title: 'Categories',
        path: GlobalUrls.ADMIN + '/courses/categories',
      },
      // {
      //   title: 'Assessments',
      //   path: GlobalUrls.ADMIN + '/assessments',
      // },
    ],
  },
  {
    title: 'Learning Paths',
    path: GlobalUrls.ADMIN + '/learningPath',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.351"
        height="14.315"
        viewBox="0 0 16.351 14.315"
        fill={lmsStyle['base-gray-100']}
      >
        <path
          d="M20.042,27.941v4.481a2.851,2.851,0,0,0,5.5,1.063l3.167-7.92a.807.807,0,0,1,1.556.3v4.481a3.066,3.066,0,1,0,2.044,0V25.861a2.851,2.851,0,0,0-5.5-1.063l-3.167,7.92a.807.807,0,0,1-1.556-.3V27.941a3.066,3.066,0,1,0-2.044,0Zm11.241,6.31a1.022,1.022,0,1,1,.723-.3,1.021,1.021,0,0,1-.723.3ZM21.064,24.032a1.022,1.022,0,1,1-1.022,1.022,1.021,1.021,0,0,1,1.022-1.022Z"
          transform="translate(-17.998 -21.984)"
        />
      </svg>
    ),
  },
  {
    title: 'Events',
    path: GlobalUrls.ADMIN + '/events',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16.352}
        height={15.888}
        viewBox="0 0 16.352 15.888"
        fill={lmsStyle['base-gray-100']}
      >
        <path d="M14.922 1.598h-1.338v.619a1.986 1.986 0 11-3.972 0v-.619H6.758v.619a1.986 1.986 0 11-3.972 0v-.619H1.444A1.424 1.424 0 00.017 3.025V5.69h16.335V3.027a1.434 1.434 0 00-1.43-1.429z" />
        <path d="M4.779 3.2a.98.98 0 00.98-.98V.98a.98.98 0 10-1.96 0v1.238a.958.958 0 00.98.982zM11.59 3.2a.98.98 0 00.98-.98V.98a.98.98 0 00-1.96 0v1.238a.969.969 0 00.98.982zM.017 14.461a1.424 1.424 0 001.427 1.429h13.464a1.424 1.424 0 001.427-1.427V6.69H.001v7.772zm6.173-3.937l1.066-.154a.2.2 0 00.172-.138l.464-.946a.324.324 0 01.568 0l.482.98a.275.275 0 00.172.138l1.049.154a.31.31 0 01.172.533l-.774.756a.235.235 0 00-.069.206l.172 1.049a.306.306 0 01-.447.326l-.963-.5a.256.256 0 00-.224 0l-.928.5a.306.306 0 01-.447-.326l.189-1.066a.237.237 0 00-.069-.206l-.756-.74a.336.336 0 01.171-.568z" />
      </svg>
    ),
  },
  {
    title: 'Sales',
    path: GlobalUrls.ADMIN + '/sales',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18.352}
        height={15.733}
        viewBox="0 0 18.352 15.733"
        fill="#fff"
      >
        <path d="M13.118 5.701a2.179 2.179 0 110-3.081l.014.015h2.5l.1-2.635-8.014.31L.636 7.395a2.185 2.185 0 000 3.081l4.621 4.621a2.185 2.185 0 003.081 0l7.086-7.087.089-2.327h-2.385l-.01.018zm-4.7 5.932l-.338-.338a2.016 2.016 0 01-.252.144 1.638 1.638 0 01-.692.159 1.464 1.464 0 01-1.044-.438l.769-.77a.371.371 0 00.274.119.55.55 0 00.232-.057 1.08 1.08 0 00.305-.223 1.907 1.907 0 00.317-.4.561.561 0 00.086-.267.254.254 0 00-.023-.106.519.519 0 00-.11-.15.531.531 0 00-.157-.115.276.276 0 00-.114-.023.67.67 0 00-.222.048 2.245 2.245 0 00-.331.16c-.248.139-.527.331-.851.483a1.8 1.8 0 01-.752.188 1.257 1.257 0 01-.5-.1 1.428 1.428 0 01-.447-.309 1.5 1.5 0 01-.438-1.055 1.587 1.587 0 01.148-.662 1.958 1.958 0 01.153-.271l-.329-.329.77-.77.342.343a2.31 2.31 0 01.207-.119 1.69 1.69 0 01.752-.187 1.424 1.424 0 01.557.113 1.487 1.487 0 01.46.315l-.769.77a.408.408 0 00-.122-.085.308.308 0 00-.126-.025.6.6 0 00-.268.074 1.589 1.589 0 00-.407.308 1.1 1.1 0 00-.23.313.5.5 0 00-.05.212.4.4 0 00.034.162.414.414 0 00.084.123.354.354 0 00.106.077.156.156 0 00.071.014.564.564 0 00.2-.046 2.384 2.384 0 00.323-.16c.247-.14.531-.335.865-.488a1.88 1.88 0 01.77-.186 1.363 1.363 0 01.547.113 1.695 1.695 0 01.83.822 1.334 1.334 0 01.116.547 1.646 1.646 0 01-.224.8 2.221 2.221 0 01-.1.159l.344.344z" />
        <path d="M12.511 3.616a1.057 1.057 0 00-.938-.545 1.089 1.089 0 10.771 1.859 1.1 1.1 0 00.168-.226h5.839V3.616z" />
      </svg>
    ),
    children: [
      {
        title: 'Sales History',
        path: GlobalUrls.ADMIN + '/sales',
      },
      {
        title: 'Plans',
        path: GlobalUrls.ADMIN + '/sales/plans',
      },
      {
        title: 'Discounts',
        path: GlobalUrls.ADMIN + '/sales/discounts',
      },
    ],
  },
  {
    title: 'Users',
    path: GlobalUrls.ADMIN + '/users',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15.135}
        height={16.911}
        viewBox="0 0 15.135 16.911"
        fill="#fff"
      >
        <path d="M7.566 8.783a4.4 4.4 0 10-3.1-1.291 4.39 4.39 0 003.1 1.291zM15.102 12.291a4.063 4.063 0 00-.442-.8 5.453 5.453 0 00-3.776-2.378.8.8 0 00-.556.134 4.679 4.679 0 01-5.522 0 .721.721 0 00-.557-.134 5.412 5.412 0 00-3.777 2.373 4.711 4.711 0 00-.442.8.406.406 0 00.02.365 7.8 7.8 0 00.517.767 7.4 7.4 0 00.882 1q.422.406.882.767a8.748 8.748 0 0010.431 0 8.541 8.541 0 00.882-.767 9.014 9.014 0 00.882-1 6.826 6.826 0 00.517-.767.327.327 0 00.056-.365z" />
      </svg>
    ),
  },
  {
    title: 'Reports',
    path: GlobalUrls.ADMIN + '/reports',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16.777}
        height={21.082}
        viewBox="0 0 16.777 21.082"
        fill="#fff"
      >
        <path d="M15.4 0H1.376A1.383 1.383 0 000 1.376v18.331a1.383 1.383 0 001.376 1.376H15.4a1.383 1.383 0 001.376-1.376V1.376A1.383 1.383 0 0015.4 0zm-5.37 3.551a.222.222 0 01.222-.222h1.021a.222.222 0 01.222.222v3.906a.222.222 0 01-.222.222h-1.021a.222.222 0 01-.222-.222zM7.5 4.683a.222.222 0 01.222-.222h1.021a.222.222 0 01.222.222v2.774a.222.222 0 01-.222.222h-1.02a.222.222 0 01-.222-.222zM4.971 5.837a.222.222 0 01.222-.222h1.021a.222.222 0 01.222.222v1.62a.222.222 0 01-.222.222H5.193a.222.222 0 01-.222-.222zm7.59 11.763H4.216a.444.444 0 110-.888h8.366a.445.445 0 01.444.444.465.465 0 01-.466.444zm0-3.4H4.216a.444.444 0 110-.888h8.366a.445.445 0 01.444.444.464.464 0 01-.466.444zm0-3.373H4.216a.444.444 0 110-.888h8.366a.445.445 0 01.444.444.465.465 0 01-.466.444z" />
      </svg>
    ),
  },
  {
    admin: true,
    title: 'Billing',
    path: GlobalUrls.ADMIN + '/billing',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15.25}
        height={25.074}
        viewBox="0 0 15.25 25.074"
        fill="#fff"
      >
        <path d="M12.238 1.21L10.633.143a.849.849 0 00-.94 0l-1.6 1.067a.849.849 0 01-.94 0L5.554.143a.849.849 0 00-.94 0l-1.6 1.067a.849.849 0 01-.94 0L1.32.71a.848.848 0 00-1.317.707v22.244a.848.848 0 001.317.707l.754-.5a.849.849 0 01.94 0l1.6 1.067a.849.849 0 00.94 0l1.6-1.067a.849.849 0 01.94 0l1.6 1.067a.849.849 0 00.94 0l1.605-1.067a.846.846 0 01.936 0l.758.5a.848.848 0 001.317-.707V1.413a.848.848 0 00-1.317-.707l-.758.5a.846.846 0 01-.936 0zm-.377 11.327a.847.847 0 11-.847.847.847.847 0 01.847-.847zm0 3.389a.847.847 0 11-.847.847.847.847 0 01.847-.847zm-4.236-1.271a.847.847 0 01-.847-.847H5.507a.847.847 0 010-1.694h2.542a.847.847 0 000-1.694h-.847a2.542 2.542 0 01-.424-5.045v-.04a.847.847 0 111.694 0h1.271a.847.847 0 010 1.694H7.202a.847.847 0 000 1.694h.847a2.542 2.542 0 01.424 5.045v.038a.846.846 0 01-.847.847zm4.66 6.354H9.744a.847.847 0 110-1.694h2.541a.847.847 0 110 1.694z" />
      </svg>
    ),
  },
  {
    title: 'Battleboard',
    path: GlobalUrls.ADMIN + '/battleboard',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 477.518 477.518"
        version="1.1"
        width={20}
        height={20}
        fill="#fff"
        viewBox="0 0 477.518 477.518"
        xmlSpace="preserve"
      >
        <path d="M436.162 165.281c-38.291-78.362-79.319-83.836-117.516-65.158-11.586 5.662-21.54 12.924-28.772 22.443H187.661c-7.232-9.519-17.186-16.781-28.772-22.443-38.198-18.678-79.227-13.204-117.517 65.158-38.321 78.37-59.38 199.953-21.182 218.633 26.549 12.97 74.699-27.203 114.468-79.195h208.187c39.769 51.992 87.919 92.165 114.468 79.195 38.228-18.68 17.139-140.263-21.151-218.633zm-257.864 48.968c0 3.166-2.628 5.732-5.864 5.732h-28.041v28.742c0 3.165-2.613 5.732-5.848 5.732H118.7c-3.219 0-5.848-2.567-5.848-5.732V219.98h-28.04c-3.234 0-5.864-2.566-5.864-5.732V194.8c0-3.165 2.629-5.73 5.864-5.73h28.041v-28.75c0-3.164 2.629-5.732 5.848-5.732h19.846c3.235 0 5.848 2.567 5.848 5.732v28.75h28.041c3.236 0 5.864 2.566 5.864 5.73v19.449zm181.328-48.944c0 9.884-7.993 17.893-17.885 17.893s-17.886-8.009-17.886-17.893 7.995-17.893 17.886-17.893 17.885 8.009 17.885 17.893zm-54.775 54.784c-9.892 0-17.886-8.017-17.886-17.901 0-9.868 7.995-17.885 17.886-17.885s17.885 8.017 17.885 17.885c0 9.883-7.994 17.901-17.885 17.901zm73.847 0c-9.892 0-17.886-8.017-17.886-17.901 0-9.868 7.995-17.885 17.886-17.885s17.885 8.017 17.885 17.885c0 9.883-7.993 17.901-17.885 17.901zm-36.957 36.89c-9.892 0-17.886-8.009-17.886-17.893s7.995-17.893 17.886-17.893 17.885 8.009 17.885 17.893-7.993 17.893-17.885 17.893z"></path>
      </svg>
    ),
  },
  {
    title: 'Requests',
    path: GlobalUrls.ADMIN + '/requests',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="prefix__h-5 prefix__w-5"
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="#fff"
      >
        <path
          fillRule="evenodd"
          d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
          clipRule="evenodd"
        />
        <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
      </svg>
    ),
  },
  {
    title: 'Feedback',
    path: GlobalUrls.ADMIN + '/feedback',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 426.667 426.667"
        version="1.1"
        width={20}
        height={20}
        fill="#fff"
        viewBox="0 0 426.667 426.667"
        xmlSpace="preserve"
      >
        <path d="M384 0H42.667C19.093 0 .213 19.093.213 42.667l-.213 384 85.333-85.333H384c23.573 0 42.667-19.093 42.667-42.667v-256C426.667 19.093 407.573 0 384 0zM234.667 256H192v-42.667h42.667V256zm0-85.333H192V85.333h42.667v85.334z"></path>
      </svg>
    ),
  },
  {
    title: 'Blog',
    path: GlobalUrls.ADMIN + '/blog',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 504 504"
        version="1.1"
        height={20}
        width={20}
        fill="#fff"
        viewBox="0 0 504 504"
        xmlSpace="preserve"
      >
        <path d="M250.8 176h-55.2c-10.4 0-19.2 7.6-19.2 18s8.8 18 19.2 18h55.2c10.4 0 19.2-7.6 19.2-18s-8.4-18-19.2-18zM308 288H195.6c-10.4 0-19.2 9.6-19.2 20s8.4 20 19.2 20H308c10.4 0 18.8-9.6 18.8-20s-8.4-20-18.8-20z"></path>
        <path d="M377.6 0H126C56.8 0 0 56.8 0 126.4V378c0 69.2 56.8 126 126 126h251.6c69.6 0 126.4-56.8 126.4-126.4V126.4C504 56.8 447.2 0 377.6 0zm31.2 309.6c-.4 54.4-45.2 98.4-100 98.4H194.4c-54.8 0-98.4-43.6-98.4-98V194c0-54.4 43.6-98 98.4-98H264c25.6 0 63.2 24.4 76.8 53.6 3.6 8 6 9.2 8.8 33.6 1.6 12.4 2.4 21.6 8 26.8 8 7.2 37.2 2.4 43.2 6.8l4.4 3.6 2.8 5.6.8 4v79.6z"></path>
      </svg>
    ),
  },
];
export const footerMenu = [
  {
    admin: true,
    title: 'Help',
    path: GlobalUrls.ADMIN + '/help',
    icon: '',
  },
  {
    title: 'Settings',
    path: GlobalUrls.ADMIN + '/settings',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        height={20}
        width={20}
        viewBox="0 0 20 20"
        fill="#fff"
      >
        <path
          fillRule="evenodd"
          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export const statsMenu = [
  {
    title: 'Active Courses',
    value: 'activeCourses',
    iconSrc: 'stats_book.svg',
  },
  {
    title: 'Completed Courses',
    value: 'completedCourses',
    iconSrc: 'stats_student.svg',
  },
  {
    title: 'Active Learners',
    value: 'activeLearners',
    iconSrc: 'stats_study.svg',
  },
  {
    title: 'Completed Modules',
    value: 'completedModules',
    iconSrc: 'stats_completed_module.svg',
  },
  {
    title: 'Avg Learning Time',
    value: '',
    iconSrc: 'stats_learning_time.svg',
  },
];

export const quickLinks = [
  {
    title: 'Request Custom Course',
    iconSrc: 'quick_custom.svg',
    link: 'admin/courses/create',
  },
  {
    title: 'Create New Course',
    iconSrc: 'quick_create.svg',
    link: 'admin/courses/add',
  },
  {
    title: 'Add New User',
    iconSrc: 'quick_team.svg',
    link: 'admin/users',
  },
  {
    title: 'Create New Team',
    iconSrc: 'quick_team.svg',
    link: 'admin/users/team',
  },
  {
    title: 'Add Event',
    iconSrc: 'quick_event.svg',
    link: 'admin/events',
  },
  {
    title: 'View Learning Paths',
    iconSrc: 'quick_ladder.svg',
    link: '#',
  },
  {
    title: 'Battle Board',
    iconSrc: 'quick_game.svg',
    link: 'admin/reports',
  },
];

export const filterOptions = [
  // { title: 'Today', value: 1},
  // { title: 'Yesterday', value: 2},
  { title: 'Last 7 days', value: 7 },
  { title: 'Last 14 days', value: 14 },
  { title: 'Last 30 days', value: 30 },
];

export const organizatoinStateMenu = [
  {
    title: 'Learners',
    value: 'allLearners',
  },
  {
    title: 'Educators',
    value: 'allTeachers',
  },
  {
    title: 'Subscribers',
    value: 'allSubscribers',
  },
  {
    title: 'Custom Course Requests',
    value: 'courseRequests',
  },
  {
    title: 'Courses Published',
    value: 'publishedCourses',
  },
  {
    title: 'Time Spent Learning',
    value: '',
  },
  {
    title: 'Avg. Course Creation Time',
    value: '',
  },
  {
    title: 'Course Completions',
    value: '',
  },
];
