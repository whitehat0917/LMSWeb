import { AccountStatus } from '@lms-api//models/user-info.model';
import BattleboardDetails from '@module/admin/battleboard/BattleboardDetails';
import BattleboardOrganization from '@module/admin/battleboard/organization/BattleboardOrganization';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';

export default function Index() {
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo?.userInfo?.organizationId;
  const isSuperUser = authnInfo?.userInfo?.type === AccountStatus.ADMINISTRATOR;
  return isSuperUser ? (
    <BattleboardOrganization />
  ) : (
    <BattleboardDetails organizationId={organizationId} />
  );
}
