import LessonType from 'types/elements/LessonType';

export const lessonTypes = [
  {
    title: 'Add New Video Lesson',
    image: '/images/video.svg',
    name: LessonType.VIDEO,
    contentType: LessonType.VIDEO,
  },
  {
    title: 'Add New Text Lesson',
    image: '/images/text.svg',
    name: LessonType.TEXT,
    contentType: LessonType.TEXT,
  },
  {
    title: 'Add New Audio Lesson',
    image: '/images/audio.svg',
    name: LessonType.AUDIO,
    contentType: LessonType.AUDIO,
  },
  {
    title: 'Add New Attachment Lesson',
    image: '/images/attachment.svg',
    name: LessonType.ATTACHMENT,
    contentType: LessonType.ATTACHMENT,
  },
  {
    title: 'Add New Embedded Lesson',
    image: '/images/embed.svg',
    name: LessonType.EMBEDDED_LINKS,
    contentType: LessonType.EMBEDDED_LINKS,
  },
  {
    title: 'Add New Presentation Lesson',
    image: '/images/slideshow.svg',
    name: LessonType.SLIDESHOW,
    contentType: LessonType.SLIDESHOW,
  },
  {
    title: 'Add New Scenario Lesson',
    image: '/images/senerio.svg',
    name: LessonType.SCENARIO,
    contentType: LessonType.SCENARIO,
  },
  {
    title: 'Add New Accordion Lesson',
    image: '/images/accordion.svg',
    name: LessonType.ACCORDION,
    contentType: LessonType.ACCORDION,
  },
];

export const courseCompletionReqTypes = [
  {
    name: 'USD',
    value: 'USD',
  },
  {
    name: 'Percentage',
    value: 'Percentage',
  },
];

export const PAGINATION_LIMIT = 10;
