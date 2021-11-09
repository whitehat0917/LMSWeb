import OrganizationUsers from '@module/admin/users/organization/OrganizationUsers';
import UserManagement from '@module/admin/users/UserManagement';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';
import { AccountStatus } from '@lms-api/models/user-info.model';

export default function index() {
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo?.userInfo?.organizationId;

  const isSuperUser = authnInfo?.userInfo?.type === AccountStatus.ADMINISTRATOR;
  return isSuperUser ? (
    <OrganizationUsers />
  ) : (
    <UserManagement organizationId={organizationId} />
  );
}
