import { Menu, MenuItem } from '@material-ui/core';
import { useRouter } from 'next/router';
import * as React from 'react';

export default function AccountMenu({
  handleMenuClose,
  handleLogOut,
  isMenuOpen,
  anchorEl,
}) {
  const menuId = 'primary-search-account-menu';
  const router = useRouter();
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => router.push('/admin/manageaccount/')}>
        Account Settings
      </MenuItem>
      <MenuItem onClick={() => router.push('/admin/help')}>Help</MenuItem>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={() => router.push('/admin/featuresRequest')}>
        Feature Requests
      </MenuItem>
      <MenuItem onClick={handleLogOut}>Sign Out</MenuItem>
    </Menu>
  );
}
