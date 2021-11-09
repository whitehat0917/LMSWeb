import { BaseDto } from './base-dto';
import { LearningPath } from './learning-path.model';
import { UserInfo } from './user-info.model';
import { Course } from './course.model';
import { Team } from './team.model';
import { Event } from './event.model';

export class UserEnrollment extends BaseDto {
  completionDate?: string;
  courseId?: string;
  course?: Course;
  eventId?: string;
  event?: Event;
  learningPathId?: string;
  teamId?: string;
  learningPath?: LearningPath;
  usersId?: string;
  userInfo?: UserInfo;
  team?: Team;
}
