import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import { lightTheme, darkTheme } from '../utils/theme';
import NavBar from '../components/navbar/NavBar';
import TopBar from '../components/topbar/TopBar';

const Main = () => {
  const [theme, setTheme] = useState(darkTheme);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', height: '100vh', gap: 2 }}>
            {/* Navbar on the left */}
            <Box sx={{ 
                width: isNavbarOpen ? '200px' : 'auto', 
                transition: 'width 0.3s',
                overflow: 'hidden'
            }}>
                <NavBar 
                    toggleTheme={toggleTheme} 
                    isDarkTheme={theme === darkTheme} 
                    toggleNavbar={toggleNavbar} 
                    isNavbarOpen={isNavbarOpen} 
                />
            </Box>

            {/* Main content area */}
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 4, p: 2, }}>
                <Box sx={{
                    width: '100%',
                    height: '54px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <TopBar />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Box>
            </Box>
        </Box>
    </ThemeProvider>
  );
};

export default Main;
