export class QuestionDto {
  text: string;
  rate: number;
  type: number;
  quizId: string;
}

export class QuestionOptionDto {
  text: string;
  isCorrect: number;
  rate: number;
  questionId: string;
}

export class QuizDto {
  title: string;
  score: number;
  active: number;
  status: number;
  courseId: string;
  learningPathId: string;
  publishDate: string;
  cmsRef: string;
}

export class UserAnswerDto {
  userId: string;
  quizId: string;
}

export class UploadDto {
  containerName?: string;
  folderName?: string;
  fileData?: any;
}

export class RequestDemoDto {
  id?: string;
  createdBy?: string;
  createdAt?: string;
  updatedBy?: string;
  updatedAt?: string;
  type?: string;
  courseDescription?: string;
  budgetAmount?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  industry?: string;
  size?: number;
  country?: string;
}

export class ApiResponse<T> {
  data?: T;
  error?: string;
}


export function mapResponse<T>(response): ApiResponse<T> {
    return <ApiResponse<T>>{
      data: !response.data?.error ? response.data as T : null,
      error: response.data?.error
    };
  }