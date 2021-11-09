import { BaseDto } from './base-dto';
import { LearningPath } from './learning-path.model';
import { UserInfo } from './user-info.model';
import { UserEnrollment } from './user-enrollment.model';
import LessonType from 'types/elements/LessonType';

export class Course extends BaseDto {
  title: string;
  subtitle?: string;
  description?: string;
  length?: string;
  objective?: string;
  status: string;
  active: number;
  organizationId: string;
  categoryId: string;
  category?: Category;
  subjectId?: string;
  subject?: Subject;
  learningPath?: LearningPath[];
  cmsRef?: string;
  publishDate?: string;
  imageUrl?: string;
  videoUrl?: string;
  price: number;
  minimunScorePercentage: number;
  readingType: string;
  scheduleStartDate?: string;
  scheduleEndDate?: string;
  completionDate?: string;
  users?: UserEnrollment[];
  modules?: Module[];
  authors?: Author[];
  difficultyLevel: number;
  isPublic: boolean;
  authorId?: string;
}

export class Category extends BaseDto {
  name: string;
  description?: string;
  organizationId: string;
  isPublic: boolean;
  subject?: Subject[];
  course?: Course[];
}

export class Subject extends BaseDto {
  name: string;
  description?: string;
  categoryId: string;
  isPublic: boolean;
  category?: Category;
  course?: Course[];
}

export class Topic extends BaseDto {
  name: string;
  description?: string;
  moduleId: string;
  module?: Module;
  publishDate?: string;
  imageUrl?: string;
  videoUrl?: string;
  content?: string;
  status?: string;
  contentType?: LessonType;
  completionDate?: string;
  lenghtInMinute?: number;
}

export class Module extends BaseDto {
  name: string;
  description?: string;
  courseId: string;
  course?: Course;
  topic?: Topic[];
  status?: string;
  completionDate?: string;
  lenghtInMinute?: number;
  organizationId: string;
}

export class Author {
  id: string;
  courseId: string;
  course: Course;
  authorId: string;
  author: UserInfo;
}
