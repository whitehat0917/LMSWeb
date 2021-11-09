import { BaseDto } from './base-dto';
import { Course } from './course.model';
import { Team } from './team.model';
import { UserEnrollment } from './user-enrollment.model';

export class LearningPath extends BaseDto {
  name: string;
  description?: string;
  active?: boolean;
  difficultyLevel?: number;
  isPublic?: boolean;
  status?: string;
  publishDate?: string;
  coverUrl?: string;
  courses?: Course[];
  enrollments?: UserEnrollment[];
  teams?: Team[];
  organizationId: string;
}

export class LearningPathCreateDto {
  name: string;
  description?: string;
  coverUrl?: string;
  organizationId: string;
}
