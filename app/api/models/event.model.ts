import { BaseDto } from './base-dto';
import { UserEnrollment } from './user-enrollment.model';

export class Event extends BaseDto {
  name: string;
  description?: string;
  cmsRef?: string;
  organizationId: string;
  publishDate?: string;
  url?: string;
  cover?: string;
  startDateTime: string;
  endDateTime: string;
  users?: UserEnrollment[];
}
