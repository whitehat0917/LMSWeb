import { useRouter } from 'next/router';
import CourseList from '@module/course-management/CourseList/CourseList';
import * as React from 'react';

export default function OraganizationDetails() {
  const router = useRouter();
  const { orgId: organizationId } = router.query;

  return <CourseList organizationId={organizationId} />;
}
