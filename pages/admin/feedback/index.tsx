import FeedbackOrganization from '@module/admin/feedback/organization/FeedbackOrganization';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';

export default function Index() {
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo?.userInfo?.organizationId;
  return <FeedbackOrganization />;
}
