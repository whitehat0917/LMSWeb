import React from 'react';
import SettingsPage from '@module/admin/settings/SettingsPage';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';
import { AccountStatus } from '@lms-api/models/user-info.model';
import SettingsOrganization from '@module/admin/settings/organization/SettingsOrganization';

const settings = () => {
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo?.userInfo?.organizationId;
  const id = authnInfo?.userInfo?.id;
  const isSuperUser = authnInfo?.userInfo?.type === AccountStatus.ADMINISTRATOR;
  return isSuperUser ? (
    <SettingsOrganization organizationId={organizationId} />
  ) : (
    <SettingsPage id={id} />
  );
};

export default settings;
