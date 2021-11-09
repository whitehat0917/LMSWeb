import uuid from 'uuid/v1';

export const navLinks = [
  { label: `Home`, href: `/student` },
  { label: `My learning`, href: `/student/learning` },
  { label: `Events`, href: `/student/events` },
  { label: `Reports`, href: `/student/reports` },
  { label: `BattleBoard`, href: `/student/board` },
  { label: `Purchases`, href: `/student/purchases` },
  { label: `Certifications`, href: `/student/certifications` },
];

export const iconLinks = {
  course: {
    label: `course`,
    img: `/images/course-library.svg`,
    href: `/student/course`,
  },
};

export const footerLinks = [
  { label: `About`, href: `/student/About` },
  { label: `Contact`, href: `/student/contact` },
  { label: `Privacy Policy`, href: `/student/policy` },
  { label: `Terms & Conditions`, href: `/student/terms-conditions` },
];

export const certifications = [
  {
    degree: '/images/medal_high.svg',
    title: 'Introduction to Nuclear Physics',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non',
  },
  {
    degree: '/images/medal_low.svg',
    title: 'Online Professionals Forex',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non',
  },
  {
    degree: '/images/medal_medium.svg',
    title: 'Optimising Your Profile Settings on Facebook',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non',
  },
  {
    degree: '/images/medal_low.svg',
    title: 'How to Create Your Online Course',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non',
  },
  {
    degree: '/images/medal_high.svg',
    title: 'Become a Video Editor in 3 hours',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non',
  },
  {
    degree: '/images/medal_high.svg',
    title: 'L&T Certified Teacher',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non',
  },
  {
    degree: '/images/medal_high.svg',
    title: 'L&T Course Creation',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non',
  },
  {
    degree: '/images/medal_medium.svg',
    title: 'L&T Turn Your Idea Into Million Dollar Idea',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non',
  },
];

export const reportsActivityStatus = [
  {
    title: 'Attempted Courses',
    icon: '/images/book1.svg',
    value: '15',
  },
  {
    title: 'Completed Courses',
    icon: '/images/checklist.svg',
    value: '10',
  },
  {
    title: 'Completed Modules',
    icon: '/images/np_radio.svg',
    value: '25',
  },
  {
    title: 'Average Time Per Day',
    icon: '/images/clock.svg',
    value: '1hour',
  },
  {
    title: 'Attempted Courses',
    icon: '/images/clock.svg',
    value: '6hours',
  },
];

export const reportsAssessmentsStatus = [
  {
    title: 'Attempted',
    icon: '/images/pen.svg',
    value: '15',
  },
  {
    title: 'Completed',
    icon: '/images/checklist.svg',
    value: '10',
  },
  {
    title: 'Passed',
    icon: '/images/emoji_smile.svg',
    value: '25',
  },
  {
    title: 'Failed',
    icon: '/images/emoji_normal.svg',
    value: '1',
  },
  {
    title: 'puzzle-piece',
    icon: '/images/puzzle-piece.svg',
    value: '6',
  },
];

export const carouselData = [
  {
    image: '/images/report1.png',
    cat: 'Course',
    teacher: 'David Finn',
    title: 'Become a Video Editor in 3 hours',
    description:
      'Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae nec ante. Cras at est augue. Cras ut interdum elit. Ut malesuada a urna sit amet blandit. Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae nec ante. Cras at est augue.',
    result: '79% Completed',
  },
  {
    image: '/images/report2.png',
    cat: 'Course',
    teacher: 'David Finn',
    title: 'How to Create Your Online Course',
    description:
      'Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae nec ante. Cras at est augue. Cras ut interdum elit. Ut malesuada a urna sit amet blandit. Aliquam in bibendum mauris. Sed vitae erat vel velit blandit pharetra vitae nec ante. Cras at est augue.',
    result: '20% Completed',
  },
  {
    image: '/images/report3.png',
    cat: 'Course',
    teacher: 'David Finn',
    title: 'Online Professionals Forex Trading',
    description:
      'Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis. Vestibulum et ligula suscipit, hendrerit erat a, ultricies velit. Etiam facilisis ligula nec velit posuere egestas. Nunc dictum lectus sem, vel dignissim purus luctus quis.',
    result: '81% Completed',
  },
  {
    image: '/images/report4.png',
    cat: 'Course',
    teacher: 'David Finn',
    title: 'Earn Revenue from Your Local Content',
    description:
      'Integer ac interdum lacus. Nunc porta semper lacus a varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc sagittis consectetur velit. Integer ac interdum lacus. Nunc porta semper lacus a varius.',
    result: '5% Completed',
  },
  {
    image: '/images/report5.png',
    cat: 'Course',
    teacher: 'David Finn',
    title: 'Turn Your Idea Into A Millio Dollar Idea',
    description:
      'Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper. Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta facilisis elementum. Sed condimentum sed massa quis ullamcorper.',
    result: '44% Completed',
  },
  {
    image: '/images/report6.png',
    cat: 'Course',
    teacher: 'David Finn',
    title: 'Introduction to Nuclear Physics',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    result: '91% Completed',
  },
  {
    image: '/images/report7.png',
    cat: 'Course',
    teacher: 'David Finn',
    title: 'Optimising your Profile Settings on Facebook',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    result: '32% Completed',
  },
];

export const videos = {
  data: [
    {
      title: 'Video Name 01',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbB5zsu52xpgDAIKlEJLHfyb687lWSg7N0VwR65ISY0EdZjZNbcMQ_72f1hZHEU9MdZU0&usqp=CAU',
      src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    },
    {
      title: 'Video Name 02',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbB5zsu52xpgDAIKlEJLHfyb687lWSg7N0VwR65ISY0EdZjZNbcMQ_72f1hZHEU9MdZU0&usqp=CAU',
      src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    },
    {
      title: 'Video Name 03',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbB5zsu52xpgDAIKlEJLHfyb687lWSg7N0VwR65ISY0EdZjZNbcMQ_72f1hZHEU9MdZU0&usqp=CAU',
      src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    },
  ],
};

export const guidedTours = [
  {
    title: 'Where to find things',
    content: 'Take a tour to see what we have available to you as a learner',
    icon: '/images/np_question.svg',
    url: '/',
  },
  {
    title: 'View Upcoming Events',
    content: 'Get started viewing and signing up for upcoming events',
    icon: '/images/quick_event.svg',
    url: '/',
  },
  {
    title: 'View your course library',
    content: 'Get started viewing the list of courses available to you',
    icon: '/images/np_course_3266002_000000.svg',
    url: '/',
  },
];

export const TotalStatsInfo = [
  {
    title: 'Certifications Completed',
    value: 15,
    icon: '/images/np_cert.svg',
  },
  {
    title: 'Total courses Completed',
    value: 12,
    icon: '/images/stats_student.svg',
  },
  {
    title: 'Total Hours Spent Learning',
    value: 250,
    icon: '/images/clock1.svg',
  },
];

export const CourseIndividualInfo = [
  ['Name', 'Value'],
  ['You', 12],
  ['John', 14.5],
  ['Mike', 12],
  ['Elizabeth', 7],
  ['Chris', 10],
  ['Joey', 7],
  ['Marina', 6],
  ['Clever', 5],
  ['Pierce', 14],
  ['Frank', 11],
  ['Troy', 8],
  ['Dean', 10],
  ['Martin', 7],
  ['Elisa', 6],
];

export const CourseTeamInfo = [
  ['Name', 'Value'],
  ['You', 6],
  ['John', 13],
  ['Mike', 2],
  ['Elizabeth', 5],
  ['Chris', 6],
  ['Joey', 3],
  ['Marina', 6],
  ['Clever', 14],
  ['Pierce', 10],
  ['Frank', 6],
  ['Troy', 14],
  ['Dean', 3],
  ['Martin', 5],
  ['Elisa', 12],
];

export const durationInfo = [
  {
    id: uuid(),
    option: 'All time',
    value: '',
  },
  {
    id: uuid(),
    option: 'Last 30 days',
    value: '720h',
  },
  {
    id: uuid(),
    option: 'Last 15 days',
    value: '360h',
  },
  {
    id: uuid(),
    option: 'Last 7 days',
    value: '168h',
  },
  {
    id: uuid(),
    option: 'Yesterday',
    value: '48h',
  },
  {
    id: uuid(),
    option: 'Today',
    value: '24h',
  },
];

export const sortItems = [
  {
    id: uuid(),
    option: 'Date',
    value: 'date',
  },
  {
    id: uuid(),
    option: 'A-Z',
    value: 'increase',
  },
  {
    id: uuid(),
    option: 'Z-A',
    value: 'decrease',
  },
];

export const ProgressBarInfo = [
  {
    pathName: 'Path A',
    courses: 1,
    assessments: 4,
    date: '22/03/2021',
    pros: 50.2,
  },
  {
    pathName: 'Path B',
    courses: 1,
    assessments: 4,
    date: '5/04/2021',
    pros: 67.3,
  },
];

export const BattleboardInfo = [
  {
    title: 'Your Points',
    value: '15,784',
    icon: '/images/group_38.svg',
  },
  {
    title: 'Your Group`s Points',
    value: '25,658',
    icon: '/images/group_39.svg',
  },
];

export const UpcomingInfo = [
  {
    title: 'Event Name 01',
    date: '2nd February',
  },
  {
    title: 'Course 01 Exam',
    date: '7th March',
  },
  {
    title: 'Event Name 01',
    date: '22nd April',
  },
];

export const EventInfo = [
  {
    title: 'Event Name 01',
    date: '24th February',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui.',
    signed: false,
  },
  {
    title: 'Event Name 01',
    date: '24th February',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui.',
    signed: true,
  },
  {
    title: 'Event Name 01',
    date: '24th February',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui.',
    signed: true,
  },
  {
    title: 'Event Name 01',
    date: '24th February',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui.',
    signed: true,
  },
  {
    title: 'Event Name 01',
    date: '24th February',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui.',
    signed: false,
  },
  {
    title: 'Event Name 01',
    date: '24th February',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui.',
    signed: true,
  },
  {
    title: 'Event Name 01',
    date: '24th February',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui.',
    signed: true,
  },
  {
    title: 'Event Name 05',
    date: '24th February',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui.',
    signed: true,
  },
];

export const CourseInfo = {
  video: {
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbB5zsu52xpgDAIKlEJLHfyb687lWSg7N0VwR65ISY0EdZjZNbcMQ_72f1hZHEU9MdZU0&usqp=CAU',
    src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  },
  textDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus nisl tincidunt eget nullam non nisi est sit. At tempor commodo ullamcorper a lacus vestibulum. Maecenas sed enim ut sem viverra aliquet eget. Risus in hendrerit gravida rutrum quisque non tellus orci. Sodales ut eu sem integer vitae justo eget. Senectus et netus et malesuada fames ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Vitae tempus quam pellentesque nec nam aliquam. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Odio ut sem nulla pharetra diam. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Orci sagittis eu volutpat odio facilisis mauris sit. Mauris augue neque gravida in fermentum et sollicitudin. Ac orci phasellus egestas tellus rutrum tellus pellentesque. Nisi est sit amet facilisis magna etiam tempor orci. Neque gravida in fermentum et sollicitudin ac. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Accumsan in nisl nisi scelerisque eu. Enim facilisis gravida neque convallis a cras semper.',
  objectives: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
  ],
  instructor: {
    avatar: '/images/users-images/jose.JPG',
    name: 'Jose Wallace',
    role: 'Consultant, Instructor',
    skills: ['Human Resource Management', 'Employee Management'],
    courseLength: '3h 25m',
    publishedDate: '25/05/2020',
    rating: 4,
    reviewCount: 500,
  },
  reviews: [
    {
      avatar: '/images/users-images/craig.JPG',
      name: 'Craig Willis',
      rating: 5,
      recommend: 143,
      liked: true,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus nisl tincidunt eget nullam non nisi est sit. At tempor commodo ullamcorper a lacus vestibulum. Maecenas sed enim ut sem viverra aliquet eget. Risus in hendrerit gravida rutrum quisque non tellus orci. Sodales ut eu sem integer vitae justo eget. Senectus et netus et malesuada fames ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Vitae tempus quam pellentesque nec nam aliquam. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Odio ut sem nulla pharetra diam. Ipsum dolor sit amet consectetur adipiscing elit duis tristique sollicitudin.',
    },
    {
      avatar: '/images/users-images/mary.JPG',
      name: 'Mary Carpenter',
      rating: 4,
      recommend: 100,
      liked: false,
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus nisl tincidunt eget nullam non nisi est sit. At tempor commodo ullamcorper a lacus vestibulum. Maecenas sed enim ut sem viverra aliquet eget. Risus in hendrerit gravida rutrum quisque non tellus orci. Sodales ut eu sem integer vitae justo eget. Senectus et netus et malesuada fames ac.',
    },
  ],
  learners: {
    avatars: [
      '/images/users-images/mary.JPG',
      '/images/users-images/craig.JPG',
      '/images/users-images/alan.JPG',
      '/images/users-images/mike.JPG',
      '/images/users-images/rachel.JPG',
      '/images/users-images/sara.JPG',
    ],
    amount: '12,051',
  },
  detail: {
    price: '$500',
  },
  content: [
    {
      title: '01. INTRODUCTION',
      content: [
        {
          img: '/images/np_video_gray.svg',
          text: 'What Is the Americans With Disabilities Act?',
          index: 0,
        },
        {
          img: '/images/np_ada.svg',
          text: 'ADA Glossary',
          index: 1,
        },
      ],
    },
    {
      title: '02. DETERMINING YOUR ELIGIBILITY',
      content: [
        {
          img: '/images/np_quiz.svg',
          text: 'Quiz',
          index: 2,
        },
        {
          img: '/images/np_speaker.svg',
          text: 'What are Essential Job Functions',
          index: 3,
        },
        {
          img: '/images/np_attachment.svg',
          text: 'Determining If You\'re A Qualified Individual',
          index: 4,
        },
      ],
    },
    {
      title: '03. DISABILITY DISCRIMINATION',
      content: [
        {
          img: '/images/np_embed-code.svg',
          text: 'What is Disability Discrimination',
          index: 5,
        },
        {
          img: '/images/np_slideshow.svg',
          text: 'How to file a complaint',
          index: 6,
        },
        {
          img: '/images/np_interactive_gray.svg',
          text: 'Determining If You\'re A Qualified Individual',
          index: 7,
        },
        {
          img: '/images/np_layers.svg',
          text: 'Summary',
          index: 8,
        },
      ],
    },
  ],
  questions: [
    {
      avatar: '/images/users-images/mary.JPG',
      name: 'Jose Wallace',
      country: 'From United States of America',
      source: 'From the lesson \'What are Essential Job Functions\' | Yesterday',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus nisl tincidunt eget nullam non nisi est sit. At tempor commodo ullamcorper a lacus vestibulum. Maecenas sed enim ut sem viverra aliquet eget. Risus in hendrerit gravida rutrum quisque non tellus orci. Sodales ut eu sem integer vitae justo eget. Senectus et netus et malesuada fames ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam??',
      likeCount: 'No',
      answerCount: 'No',
      liked: false,
      answerText: 'Be the first to answer',
    },
    {
      avatar: '/images/users-images/mike.JPG',
      name: 'Craig Wills',
      country: 'From United States of America',
      source: 'From the lesson \'What are Essential Job Functions\' | Yesterday',
      text:
        'Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Erat velit scelerisque in dictum. Etiam sit amet nisl purus in. Magna eget est lorem ipsum dolor sit. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Dui sapien eget mi proin. At erat pellentesque adipiscing commodo elit at imperdiet dui. Varius duis at consectetur lorem donec massa sapien. Ac tincidunt vitae semper quis. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Velit dignissim sodales ut eu sem. Iaculis nunc sed augue lacus viverra vitae. Dui sapien eget mi proin sed libero.',
      likeCount: '01',
      answerCount: '01',
      liked: true,
      answerText: 'Answer',
      subitems: [
        {
          deep: 0,
          avatar: '/images/users-images/mary.JPG',
          name: 'Jose Wallace',
          country: 'From United States of America',
          text:
            'Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Erat velit scelerisque in dictum. Etiam sit amet nisl purus in. Magna eget est lorem ipsum dolor sit. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Dui sapien eget mi proin. At erat pellentesque adipiscing commodo elit at imperdiet dui. Varius duis at consectetur lorem donec massa sapien. Ac tincidunt vitae semper quis. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Velit dignissim sodales ut eu sem. Iaculis nunc sed augue lacus viverra vitae. Dui sapien eget mi proin sed libero.',
          likeCount: '01',
          answerCount: '01',
          liked: true,
        },
        {
          deep: 1,
          avatar: '/images/users-images/mike.JPG',
          name: 'Craig Wills',
          country: 'From United States of America',
          text: 'Thank you so much!',
          likeCount: '01',
          answerCount: '01',
          liked: true,
        },
      ],
    },
  ],
  introduction:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus nisl tincidunt eget nullam non nisi est sit. At tempor commodo ullamcorper a lacus vestibulum. Maecenas sed enim ut sem viverra aliquet eget. Risus in hendrerit gravida rutrum quisque non tellus orci. Sodales ut eu sem integer vitae justo eget. Senectus et netus et malesuada fames ac. Pretium nibh ipsum consequat nisl vel pretium lectus quam??',
  qualifyContent: [
    {
      type: 'pdf',
      title: 'small-pot-template.pdf',
      src: '/documents/test.pdf',
    },
    {
      type: 'pdf',
      title: 'medium-pot-template.pdf',
      src: '/documents/test.pdf',
    },
    {
      type: 'pdf',
      title: 'large-pot-template.pdf',
      src: '/documents/test.pdf',
    },
    {
      type: 'xls',
      title: 'watering-schedule.xlsx',
      src: '/documents/test.XLSX',
    },
  ],
  images: [
    '/images/video-images/video-image-large1.png',
    '/images/video-images/video-image-large2.png',
    '/images/video-images/video-image-large3.png',
  ],
  treeData: [
    [
      {
        id: 0,
        depth: 0,
        parent: -1,
        children: true,
        title:
          'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?',
      },
    ],
    [
      {
        id: 1,
        depth: 1,
        parent: 0,
        children: true,
        title: 'Ut enim ad minima veniam',
      },
      {
        id: 2,
        depth: 1,
        parent: 0,
        children: false,
        title: 'At vero eos et accusamus et iusto odio dignissimos',
      },
    ],
    [
      {
        id: 3,
        depth: 2,
        parent: 1,
        children: false,
        title: 'At vero eos et accusamus et',
      },
      {
        id: 4,
        depth: 2,
        parent: 1,
        children: false,
        title: 'At vero eos et accusamus et',
      },
      {
        id: 5,
        depth: 2,
        parent: 1,
        children: false,
        title: 'At vero eos et accusamus et',
      },
    ],
  ],
  summary: [
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      image: '/images/video-images/video-image-large1.png',
    },
    {
      title: 'Consetetur sadipscing elitr',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      image: '/images/video-images/video-image-large1.png',
    },
    {
      title:
        'Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      image: '/images/video-images/video-image-large1.png',
    },
    {
      title: 'At vero eos et accusam et justo duo dolores',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
      image: '/images/video-images/video-image-large1.png',
    },
  ],
};

export const eventCalendarInfo = [
  {
    title: 'Event Name 01',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero',
  },
  {
    title: 'Event Name 01',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero',
  },
  {
    title: 'Event Name 01',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero',
  },
];

export const countries = [
  { value: `us`, label: `United States of America` },
  { value: `uk`, label: `United Kingdom` },
  { value: `ca`, label: `Canada` },
];

export const quiz = [
  {
    quizType: 'select',
    index: 1,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et??',
    content: [
      'Imperdiet nisi nullam',
      'Imperdiet nisi nullam',
      'Imperdiet nisi nullam',
      'Imperdiet nisi nullam',
    ],
    rightAnswer: 0,
    answer: 0,
    result: true,
    explanation:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    quizType: 'true',
    index: 2,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et??',
    rightAnswer: 0,
    answer: 1,
    result: false,
    explanation:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    quizType: 'selectImage',
    index: 3,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et??',
    content: [
      '/images/video-images/video-image-large1.png',
      '/images/video-images/video-image-large2.png',
    ],
    rightAnswer: 0,
    answer: 0,
    result: true,
    explanation:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    quizType: 'match',
    index: 4,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et??',
    leftContent: [
      { match: -1, text: 'Imperdiet nisi nullam' },
      { match: -1, text: 'Imperdiet nisi nullam' },
      { match: -1, text: 'Imperdiet nisi nullam' },
      { match: -1, text: 'Imperdiet nisi nullam' },
    ],
    rightContent: [
      { match: -1, text: 'Imperdiet nisi nullam' },
      { match: -1, text: 'Imperdiet nisi nullam' },
      { match: -1, text: 'Imperdiet nisi nullam' },
      { match: -1, text: 'Imperdiet nisi nullam' },
    ],
    leftAnswer: [
      { match: 1, text: 'Imperdiet nisi nullam', correct: 0, result: false },
      { match: 2, text: 'Imperdiet nisi nullam', correct: 2, result: true },
      { match: 3, text: 'Imperdiet nisi nullam', correct: 3, result: true },
      { match: 0, text: 'Imperdiet nisi nullam', correct: 1, result: false },
    ],
    rightAnswer: [
      { match: 0, text: 'Imperdiet nisi nullam', correct: 0, result: false },
      { match: 1, text: 'Imperdiet nisi nullam', correct: 3, result: false },
      { match: 2, text: 'Imperdiet nisi nullam', correct: 1, result: true },
      { match: 3, text: 'Imperdiet nisi nullam', correct: 2, result: true },
    ],
    result: false,
    explanation:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    quizType: 'text',
    index: 5,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et??',
    result: false,
    answer:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    correctAnswer:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    explanation:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    quizType: 'sort',
    index: 6,
    title: 'Drag the following to be in the correct order',
    content: [
      'Imperdiet nisi nullam',
      'Imperdiet nisi nullam',
      'Imperdiet nisi nullam',
      'Imperdiet nisi nullam',
    ],
    answer: [
      'Imperdiet nisi nullam',
      'Imperdiet nisi nullam',
      'Imperdiet nisi nullam',
      'Imperdiet nisi nullam',
    ],
    correctAnswer: [
      'Imperdiet nisi nullam',
      'Imperdiet nisi nullam',
      'Imperdiet nisi nullam',
      'Imperdiet nisi nullam',
    ],
    result: false,
    explanation:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
];

export const quizIndex = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const quizColor = ['black', 'brown', 'blue', 'red', 'green'];
export const individualBoardData = [
  {
    title: 'Your Points',
    value: '15,784',
    icon: '/images/group_38.svg',
  },
  {
    title: 'Your Average',
    value: '7845',
    icon: '',
  },
];

export const boardAdsData = {
  title: 'sign up to win',
  subTitle: 'Sign up today for `Course 01` to win a T-shirt',
  limitTime: '03h 24m remaining',
  product: '/images/learner_tshirt.png',
};

export const competitionData = [
  {
    name: 'Jose Wallace',
    points: 15784,
    upText: 'Up 500 from last week',
    avatar: '',
  },
  {
    name: 'Craig willis',
    points: 15784,
    upText: 'Up 500 from last week',
    avatar: '',
  },
  {
    name: 'Rachel Griffin',
    points: 15784,
    upText: 'Up 500 from last week',
    avatar: '',
  },
  {
    name: 'Mary Carpenter',
    points: 15784,
    upText: 'Up 500 from last week',
    avatar: '',
  },
  {
    name: 'You',
    points: 15784,
    upText: 'Up 500 from last week',
    avatar: '',
  },
];

export const cabinets = [
  {
    title: 'Learning Hours',
    description: `You're in the top 30% of the learners in terms of learning hours this month!`,
    src: '/images/medal_high.svg',
  },
  {
    title: 'Course Completion',
    description: `You're in the top 600% of the learners in terms of learning hours this month!`,
    src: '/images/medal_medium.svg',
  },
  {
    title: 'Passed Exams',
    description: `You're in the top 90% of the learners in terms of learning hours this month!`,
    src: '/images/medal_inter_medium.svg',
  },
];

export const quizResult = {
  score: 33.3,
  correctAnswers: '2',
  wrongAnswers: '6',
  speed: '31',
  allAnswered: false,
};

export const courses = [
  {
    mainCat: 'Business',
    subCat: [
      {
        title: 'Business Analysis',
      },
      {
        title: 'business Strategy',
      },
      {
        title: 'Data Analysis',
      },
      {
        title: 'Data Visualisation',
      },
      {
        title: 'Business Software and Tools',
      },
      {
        title: 'Business Management',
      },
    ],
  },
  {
    mainCat: 'Customer Service',
    subCat: [
      {
        title: 'CRM Software',
      },
      {
        title: 'Customer Service Skills',
      },
      {
        title: 'Customer service Management',
      },
      {
        title: 'Contact Centers',
      },
      {
        title: 'Service Metrics',
      },
      {
        title: 'Service Management',
      },
    ],
  },
  {
    mainCat: 'Human Resources',
    subCat: [
      {
        title: 'Talent management',
      },
      {
        title: 'Diversity and Inclusion',
      },
      {
        title: 'HR Strategy',
      },
      {
        title: 'Learning and Development',
      },
      {
        title: 'Recruiting',
      },
      {
        title: 'Human Management',
      },
    ],
  },
  {
    mainCat: 'Cloud Computing',
    subCat: [
      {
        title: 'Cloud Computing',
      },
      {
        title: 'Cloud Administration',
      },
      {
        title: 'Cloud Services',
      },
      {
        title: 'Cloud Platforms',
      },
      {
        title: 'Cloud Security',
      },
      {
        title: 'Cloud Management',
      },
    ],
  },
  {
    mainCat: 'Data Science',
    subCat: [
      {
        title: 'Data Analysis',
      },
      {
        title: 'Business Intelligence',
      },
      {
        title: 'Data Visualization',
      },
      {
        title: 'Big Data',
      },
      {
        title: 'Machine Learning',
      },
      {
        title: 'Data Management',
      },
    ],
  },
  {
    mainCat: 'IT Helpdesk',
    subCat: [
      {
        title: 'Client Operating Systems',
      },
      {
        title: 'Software Support',
      },
      {
        title: 'Upgrade and Maintenance',
      },
      {
        title: 'Help Desk Skills',
      },
      {
        title: 'Operating System Distribution',
      },
      {
        title: 'IT Management',
      },
    ],
  },
];

export const unReadMessages = [
  {
    name: 'Jose Wallace',
    lastMessage: `You're Welcome! See ya`,
    avatar: '/images/imonial1.png',
    time: '11:30am',
  },
  {
    name: 'CX Course Group',
    lastMessage: `You: you're welcome`,
    avatar: '/images/imonial2.jpg',
    time: 'Yesterday',
  },
  {
    name: 'Craig Willis',
    lastMessage: `Cool. Thanks`,
    avatar: '/images/imonial3.jpg',
    time: '02/03/2021',
  },
  {
    name: 'Rachel Grifflin',
    lastMessage: `Happy New Year`,
    avatar: '/images/imonial1.png',
    time: '01/01/2021',
  },
  {
    name: 'Mary Carpenter',
    lastMessage: `Hey did you finish the assignment?`,
    avatar: '/images/imonial1.png',
    time: '11:30am',
  },
];
