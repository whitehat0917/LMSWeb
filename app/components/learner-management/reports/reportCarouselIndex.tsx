import React, { useCallback, useState } from 'react';
import ReportCarousel from '@module/learner-management/reports/reportCarousel';
import 'react-multi-carousel/lib/styles.css';

const ReportCarouselIndex = ({ data }) => {
  const [deviceType, setDeviceType] = useState('');
  useCallback(() => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      setDeviceType('tablet');
    }
    if (
      /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua,
      )
    ) {
      setDeviceType('mobile');
    }
    setDeviceType('desktop');
  }, []);

  return (
    <ReportCarousel deviceType={deviceType} data={data} />
  );
};

export default ReportCarouselIndex;
