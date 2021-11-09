import React from 'react';
import CourseList from '@module/course-management/CourseList/CourseList';
import CourseOrganization from '@module/course-management/organization/CourseOrganization';
import { authnState } from 'store';
import { useRecoilValue } from 'recoil';
import { AccountStatus } from '@lms-api/models/user-info.model';

export default function index() {
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo?.userInfo?.organizationId;
  const isSuperUser = authnInfo?.userInfo?.type === AccountStatus.ADMINISTRATOR;
  return isSuperUser ? (
    <CourseOrganization />
  ) : (
    <CourseList organizationId={organizationId} />
  );
}
