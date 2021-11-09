import React from 'react';
import SalesHistory from '@module/admin/sales/SalesHistory';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';

export default function index() {
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo?.userInfo?.organizationId;

  return <SalesHistory organizationId={organizationId} />;
}
