import UserManagement from '@module/admin/users/UserManagement';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function OraganizationDetails() {
  const router = useRouter();
  const { orgId: organizationId } = router.query;

  return <UserManagement organizationId={organizationId} />;
}
