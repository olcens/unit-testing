import React, { ChangeEvent, FC, useState } from 'react';
import {
  AppBar,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  Tooltip,
  SvgIcon
} from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { pages, userOptions } from './constatns';
import { useUsers } from 'views/Users/useUsers';
import { SearchInput } from '../SearchInput';
import { Avatar } from './Navbar.styled';
import { getUserId } from 'utils/getUserId';
import { User } from 'types/User/user';

export const NavBar: FC = () => {
  const { getFilteredUsers, setUsersFilterText, filterText, selectedUser } = useUsers();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleShowUser = (user: User) => {
    setTimeout(() => {
      const element = document.getElementById(`USER-ID-${getUserId(user)}`);

      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setAnchorElUser(null);
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsersFilterText(e.target.value);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, fontWeight: 'bold', color: 'white', display: 'block' }}
                onClick={() => getFilteredUsers({ results: 30, gender: page.toLowerCase() })}
              >
                {page}
              </Button>
            ))}
          </Box>

          <SearchInput
            filterText={filterText}
            handleChange={handleSearchChange}
            handleClear={() => setUsersFilterText('')}
          />

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {selectedUser ? (
                  <Avatar src={selectedUser.picture.medium} />
                ) : (
                  <SvgIcon sx={{ color: 'white', fontSize: 40 }}>
                    <AccountCircle />
                  </SvgIcon>
                )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box>
                {userOptions.map((option) => (
                  <MenuItem key={option} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{option}</Typography>
                  </MenuItem>
                ))}
                {selectedUser && (
                  <MenuItem key={selectedUser.email} onClick={() => handleShowUser(selectedUser)}>
                    <Typography textAlign="center">Show user</Typography>
                  </MenuItem>
                )}
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
