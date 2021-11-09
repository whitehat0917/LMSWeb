import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';
import UserTeam from '../../../app/components/admin/users/team/UserTeam';

export default function Team() {
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo?.userInfo?.organizationId;
  return <UserTeam organizationId={organizationId} />;
}
