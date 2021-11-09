import Events from '@module/admin/events/Events';
import EventOrganization from '@module/admin/events/organization/EventOrganization';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';
import { AccountStatus } from '@lms-api/models/user-info.model';

const index = () => {
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo?.userInfo?.organizationId;
  const isSuperUser = authnInfo?.userInfo?.type === AccountStatus.ADMINISTRATOR;

  return isSuperUser ? (
    <EventOrganization />
  ) : (
    <Events organizationId={organizationId} />
  );
};

export default index;
