import BattleboardDetails from '@module/admin/battleboard/BattleboardDetails';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function details() {
  const router = useRouter();
  const { orgId: organizationId } = router.query;

  return <BattleboardDetails organizationId={organizationId} />;
}
