import * as React from 'react';
import { useRouter } from 'next/router';
import WelcomeMessage from './WelcomeMessage';
import VideoTutorial from './VideoTutorial';
import GuidedTour from './GuidedTour';
import styles from './Landing.module.scss';
import { layoutContext } from '@layout/admin/Layout';

export default function AdminLanding() {
  const router = useRouter();

  const skipIntro = () => {
    router.push('/');
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const takeTour = () => {
    console.log('taking tour');
  };

  const { setIsVisibleFreeTrial } = React.useContext(layoutContext);
  React.useEffect(() => {
    setIsVisibleFreeTrial(false);
    return () => {
      setIsVisibleFreeTrial(true);
    };
  }, []);
  return (
    <div className={styles.landing}>
      <WelcomeMessage skipIntro={skipIntro} />
      <VideoTutorial
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
      />
      <GuidedTour takeTour={takeTour} />
    </div>
  );
}
