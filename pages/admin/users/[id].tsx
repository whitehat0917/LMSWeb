import UserDashboard from '@module/user-management/dashboard/Dashboard';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function Details() {
  const router = useRouter();
  const { id: userId } = router.query;

  return <UserDashboard userId={userId} />;
}
