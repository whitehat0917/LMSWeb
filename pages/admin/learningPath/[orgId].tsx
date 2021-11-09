// import ManageAccount from '../app/components/manageaccount/manageaccount';
// import ManageAccount from '@module/admin/manageaccount/ManageAccount';
import LearningPath from '@module/admin/learningpath/LearningPath';
import { useRouter } from 'next/router';

import React from 'react';

const learningPath = () => {
  const router = useRouter();
  const { orgId: organizationId } = router.query;

  return <LearningPath organizationId={organizationId} />;
};

export default learningPath;
