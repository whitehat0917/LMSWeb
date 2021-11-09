export enum CourseType {
  SCHEDULED = 'Scheduled',
  SELF_PACED = 'Self-Paced',
}

export interface CourseOverviewInputs {
  id?: string;
  title: string;
  categoryId: string;
  subjectId: string;
  learningPathId: string;
  description: string;
  imageUrl?: string;
  objective: string;
  videoUrl: string;
}

export interface ModulesFormInputs {
  module: {
    id?: string;
    name?: string;
    description?: string;
    editingName?: boolean;
  };
  lesson: {
    name?: string;
    description?: string;
    videoUrl?: string;
    type?: string;
    moduleId?: string;
  };
}

export interface CourseSettingsInputs {
  price: number;
  publishDate: string;
  courseType: CourseType;
  learnerNavigation: string;
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
export interface CourseFormInputs
  extends CourseOverviewInputs,
    ModulesFormInputs {}
