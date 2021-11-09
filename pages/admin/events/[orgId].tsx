import Events from '@module/admin/events/Events';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function events() {
  const route = useRouter();
  const { orgId: organizationId } = route.query;

  return <Events organizationId={organizationId} />;
}
