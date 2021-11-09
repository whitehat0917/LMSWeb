import * as React from 'react';
import CourseSubject from '@module/course-management/course-subject/CourseSubject';
import { useRouter } from 'next/router';

export default function SubCategories() {
  const router = useRouter();
  const { orgId: organizationId } = router.query;
  return <CourseSubject organizationId={organizationId} />;
}
