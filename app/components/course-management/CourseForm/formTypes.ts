import { Topic } from '@lms-api/models';

export enum CourseType {
  SCHEDULED = 'Scheduled',
  SELF_PACED = 'Self-Paced',
}
export interface CourseOverviewInputs {
  id?: string;
  title: string;
  subtitle?: string;
  description: string;
  length?: string;
  objective?: string;
  status?: number;
  active?: boolean | string | number;
  categoryId?: string;
  subjectId?: string;
  learningPathId?: string;
  cmsRef?: string;
  publishDate?: string;
  createdAt?: string;
  createdBy?: string;
  category?: [
    {
      id: string;
      name: string;
      description: string;
    }
  ];
  imageUrl?: string;
  videoUrl?: string;
  organizationId?: string;
  authorId?: string;
  modules?: [
    {
      id?: string;
      name: string;
      description?: string;
      courseId?: string;
      topic?: Topic[];
    }
  ];
}

export interface ModulesFormInputs {
  name: any;
  module: {
    id?: string;
    name?: string;
    description?: string;
    editingName?: boolean;
  };
  lesson: Topic;
}

export interface CourseSettingsInputs {
  price: number;
  publishDate?: string;
  courseType: CourseType;
  learnerNavigation?: string;
  courseCompletionReq: {
    value: string;
    type: string;
  };
  assignedCurriculum: string;
  collbrators: string;
  reviewers: string;
  termsAccepted: boolean;
  schedule: {
    startDate: string;
    endDate: string;
  };
}

export interface UserInputs {
  firstName: string;
  lastName: string;
  email: string;
  businessNumber?: string;
  mobileNumber: string;
  avatar: string;
  type: string;
  active: string;
  address: {
      address1: string;
      address2: string;
      city: string;
      zipCode: string;
      state: string;
      country: string;
    };
}

export interface OtherFormInputs {
  title: string;
}

export interface CourseFormInputs
  extends CourseOverviewInputs,
    ModulesFormInputs,
    OtherFormInputs,
    CourseSettingsInputs {}
