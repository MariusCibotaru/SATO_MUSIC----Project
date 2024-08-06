import React from 'react';
import { useNavigate, useLocation, To } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LogoLightMode from '../../images/Logo/LogoLightMode.png';
import LogoDarkTheme from '../../images/Logo/LogoDarkMode.png';
import AvatarNav from '../../images/AvatarNav.jpg';
import FormatIndentDecreaseIcon from '@mui/icons-material/FormatIndentDecrease';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import { Avatar, Badge, Box, IconButton, Typography } from '@mui/material';

const pages = [
  { name: 'Home', path: '/', icon: <HomeOutlinedIcon />, notifications: 0 },
  { name: 'Category', path: '/women', icon: <CategoryOutlinedIcon />, notifications: 0 },
  { name: 'Library', path: '/men', icon: <LibraryBooksOutlinedIcon />, notifications: 0 },
  { name: 'Community', path: '/collections', icon: <PeopleOutlinedIcon />, notifications: 0 },
  { name: 'Friends', path: '/Friends', icon: <GroupOutlinedIcon />, notifications: 2 },
  { name: 'Wishlist', path: '/Wishlist', icon: <FavoriteBorderOutlinedIcon />, notifications: 0 },
  { name: 'Downloads', path: '/Downloads', icon: <GetAppOutlinedIcon />, notifications: 0 },
];

const extraPages = [
  { name: 'Settings', path: '/settings', icon: <SettingsOutlinedIcon />, notifications: 0 },
  { name: 'Help', path: '/help', icon: <HelpOutlineOutlinedIcon />, notifications: 0 },
];

interface NavBarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
  toggleNavbar: () => void;
  isNavbarOpen: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ toggleTheme, isDarkTheme, toggleNavbar, isNavbarOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: To) => {
    navigate(path);
  };

  const renderNavItem = (page: { name: string, path: string, icon: JSX.Element, notifications: number }) => {
    const isActive = location.pathname === page.path;
    return (
      <Box
        key={page.name}
        onClick={() => handleNavigation(page.path)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isNavbarOpen ? 'space-between' : 'center',
          cursor: 'pointer',
          width: '100%',
          p: 1,
          borderRadius: '16px',
          bgcolor: isActive ? 'rgba(128, 128, 128, 0.2)' : 'transparent', 
          transition: 'background-color 0.3s, border-radius 0.3s',
          ':hover': {
            bgcolor: 'rgba(128, 128, 128, 0.2)',
          },
          color: isActive ? '#49c8d8' : 'inherit', 
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ mr: isNavbarOpen ? 1 : 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {isNavbarOpen ? (
              page.icon
            ) : (
              page.notifications > 0 ? (
                <Badge variant="dot" color="error">
                  {page.icon}
                </Badge>
              ) : (
                page.icon
              )
            )}
          </Box>
          {isNavbarOpen && <Typography variant='h6'>{page.name}</Typography>}
        </Box>
        {isNavbarOpen && page.notifications > 0 && (
          <Box sx={{ width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(to left, #ff6a00, #ee0979)', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
              {page.notifications}
          </Box>
        )}
      </Box>
    );
  };

  const renderThemeToggle = () => {
    return (
      <Box onClick={toggleTheme} sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: isNavbarOpen ? 'space-between' : 'center',
        cursor: 'pointer',
        width: '100%',
        p: 1,
        borderRadius: '16px',
        bgcolor: 'transparent', 
        transition: 'background-color 0.3s, border-radius 0.3s',
        ':hover': {
          bgcolor: 'rgba(128, 128, 128, 0.2)',
        },
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ mr: isNavbarOpen ? 1 : 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
          </Box>
          {isNavbarOpen && <Typography variant='h6'>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</Typography>}
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      p: 2, 
      gap: 2, 
      bgcolor: 'rgba(0, 0, 0, 0.15)' 
    }}>
      <Box sx={{ 
        width: '100%', 
        height: '40px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        mb: 4,
      }}>
        {isNavbarOpen && <img src={isDarkTheme ? LogoDarkTheme : LogoLightMode} alt="Logo" style={{ height: '100%', width: 'auto' }}/>}
        <IconButton onClick={toggleNavbar}>
          {isNavbarOpen ? <FormatIndentDecreaseIcon fontSize='large' /> : <FormatIndentIncreaseIcon fontSize='large' />}
        </IconButton>
      </Box>

      <Box sx={{ 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexGrow: 1, 
        width: '100%', 
      }}>
        <Box sx={{ 
          flex: 3, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          justifyContent: 'flex-start', 
          gap: 2,
          width: '100%', 
        }}>
          {pages.map(renderNavItem)}
        </Box>

        <Box sx={{ 
          flex: 2.5, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          justifyContent: 'flex-end', 
          gap: 2,
          width: '100%', 
        }}>
          {extraPages.map(renderNavItem)}
          {renderThemeToggle()}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            width: '100%',
            p: 1,
            borderRadius: '16px',
            bgcolor: 'transparent', 
            transition: 'background-color 0.3s, border-radius 0.3s',
            ':hover': {
              bgcolor: 'rgba(128, 128, 128, 0.2)',
            },
          }}>
                <Avatar alt="User Avatar" src={AvatarNav} sx={{ height: '48px', width: '48px', borderRadius: '50%' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default NavBar;
