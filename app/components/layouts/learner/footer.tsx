import { Box, Container, makeStyles, MenuItem } from '@material-ui/core';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { footerLinks } from '../../../data/mock';

const useStyle = makeStyles(() => ({
  footerLink: {
    minHeight: '55px',
    fontWeight: 600,
    fontSize: '11px',
    marginLeft: '5px',
    color: 'white',
    '&:hover': {
      background: 'none',
      color: '#006DFF',
      fontWeight: 600,
    },
  },
  mFooterLink: {
    fontWeight: 600,
    fontSize: '11px',
    marginLeft: '5px',
    color: 'white',
    '&:hover': {
      background: 'none',
      color: '#006DFF',
      fontWeight: 600,
    },
  },
}));

export function Footer() {
  const [state, setState] = useState({ mobileView: false });
  const { mobileView } = state;
  const classes = useStyle();

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const getFooterButtons = () => {
    return footerLinks.map(({ label, href }, index) => {
      return (
        <Link
          key={index}
          {...{
            href: href,
            color: 'primary',
            style: { textDecoration: 'underline overline' },
          }}
        >
          <MenuItem
            className={mobileView ? classes.mFooterLink : classes.footerLink}
          >
            {label}
          </MenuItem>
        </Link>
      );
    });
  };

  const mobileFooter = () => {
    return (
      <Container>
        <Box
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'column'}
          alignItems={'center'}
          pb={'5px'}
          pt={'10px'}
        >
          <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
            {getFooterButtons()}
          </Box>
          <Box fontSize={'11px'} fontWeight={'500'} color={'white'}>
            © 2021 Learn or Teach Inc.
          </Box>
        </Box>
      </Container>
    );
  };

  const desktopFooter = () => {
    return (
      <Container>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Box fontSize={'11px'} fontWeight={'500'} color={'white'}>
            © 2021 Learn or Teach Inc.
          </Box>
          <Box display={'flex'} alignItems={'center'}>
            {getFooterButtons()}
          </Box>
        </Box>
      </Container>
    );
  };

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      minHeight={'55px'}
      bgcolor={'#0F2438'}
    >
      {mobileView ? mobileFooter() : desktopFooter()}
    </Box>
  );
}

export default Footer;
