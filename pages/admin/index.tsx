import { AccountStatus } from '@lms-api/models/user-info.model';
import DashboardOrganization from '@module/admin/dashboard/organization/DashboardOrganization';
import Dashboard from 'components/admin/dashboard/Dashboard';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';

export default function index() {
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo.userInfo.organizationId;
  const isSuperUser = authnInfo?.userInfo?.type === AccountStatus.ADMINISTRATOR;

  return isSuperUser ? (
    <DashboardOrganization />
  ) : (
    <Dashboard organizationId={organizationId} />
  );
}
