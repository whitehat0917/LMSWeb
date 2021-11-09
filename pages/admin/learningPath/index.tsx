// import ManageAccount from '../app/components/manageaccount/manageaccount';
// import ManageAccount from '@module/admin/manageaccount/ManageAccount';
import LearningPath from '@module/admin/learningpath/LearningPath';
import LearningOrganization from '@module/admin/learningpath/organization/LearningPathOrganization';

import React from 'react';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';
import { AccountStatus } from '@lms-api/models/user-info.model';

const learningPath = () => {
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo?.userInfo?.organizationId;
  const isSuperUser = authnInfo?.userInfo?.type === AccountStatus.ADMINISTRATOR;
  return isSuperUser ? (
    <LearningOrganization />
  ) : (
    <LearningPath organizationId={organizationId} />
  );
};

export default learningPath;
