import SettingsPage from '@module/admin/settings/SettingsPage';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function SettingById() {
  const router = useRouter();
  const { id: id } = router.query;

  return <SettingsPage id={id} />;
}
