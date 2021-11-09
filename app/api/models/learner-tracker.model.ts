import { BaseDto } from './base-dto';

export class LearnerTracker extends BaseDto {
  title: string;
  subtitle?: string;
  description?: string;
  length?: string;
  objective?: string;
  status: string;
  active: number;
  organizationId: string;
  categoryId: string;
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
  modules?: Learner[];
  difficultyLevel: number;
  isPublic: boolean;
  authorId?: string;
}

export class Learner extends BaseDto {
  name: string;
  description?: string;
  courseId: string;
  course?: LearnerTracker;
  status?: string;
  completionDate?: string;
  lenghtInMinute?: number;
  organizationId: string;
}
