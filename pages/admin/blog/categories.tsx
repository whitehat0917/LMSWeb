import BlogCategories from '@module/admin/blog/BlogCategories';
import * as React from 'react';
import { useRecoilValue } from 'recoil';
import { authnState } from 'store';

export default function Categories() {
  const authnInfo = useRecoilValue(authnState);
  const organizationId = authnInfo?.userInfo?.organizationId;
  return <BlogCategories organizationId={organizationId} />;
}
