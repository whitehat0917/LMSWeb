import RequestOrganization from '@module/admin/requests/organization/RequestOrganization';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';

export default function index() {
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo?.userInfo?.organizationId;
  return <RequestOrganization organizationId={organizationId} />;
}
