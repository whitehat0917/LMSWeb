import { LearnerTracker } from '@lms-api/models';
import { atom } from 'recoil';

export const learnerTrackerState = atom<LearnerTracker>({
  key: 'learnerTrackerState',
  default: null
});