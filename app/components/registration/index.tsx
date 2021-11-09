import React from 'react';
import { useRecoilValue } from 'recoil';
import { signUpStepState } from 'store';
import Step2View from './step2';
import Step3View from './step3';

const IndexView = () => {
  const step = useRecoilValue(signUpStepState);
  switch (step.step) {
    case 3:
      return <Step3View />;
    default:
      return <Step2View />;
  }
};

export default IndexView;
