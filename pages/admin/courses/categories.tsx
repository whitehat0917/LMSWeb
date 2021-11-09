import CourseCategories from '@module/course-management/course-categories/CourseCategories';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';

export default function categories() {
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo?.userInfo?.organizationId;

  return <CourseCategories organizationId={organizationId} />;
}
