import React from 'react';
import { Box, InputAdornment, TextField, useTheme, Badge, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const TopBar = () => {
    const theme = useTheme();
    const isDarkTheme = theme.palette.mode === 'dark';
    const darkThemeBgColor = 'rgba(255, 255, 255, 0.2)';
    const iconButtonBgColor = 'rgba(128, 128, 128, 0.5)';

    return (
        <Box sx={{ 
            width: '100%', 
            color: 'white',   
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            gap: 2,           
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                flex: 3
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%', maxWidth: '400px' }}>
                    <TextField
                        variant="outlined"
                        placeholder="Search here"
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            sx: { fontWeight: 'bold', fontSize: 14 } 
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '16px',
                                bgcolor: isDarkTheme ? darkThemeBgColor : 'rgba(211, 211, 211, 0.3)', // Adjusted transparency
                                '& fieldset': {
                                    borderColor: 'transparent', 
                                },
                                '&:hover fieldset': {
                                    borderColor: 'black',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'black',
                                },
                            },
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{ 
                display: 'flex',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between', 
                gap: 2,
                height: '100%',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: iconButtonBgColor,
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        '&:hover': {
                            bgcolor: 'rgba(128, 128, 128, 0.7)',
                        }
                    }}>
                        <MailOutlineIcon sx={{ fontSize: '30px' }} />
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: iconButtonBgColor,
                        borderRadius: '50%',
                        width: 40,
                        height: 40,
                        cursor: 'pointer',
                        transition: 'background-color 0.3s',
                        '&:hover': {
                            bgcolor: 'rgba(128, 128, 128, 0.7)',
                        }
                    }}>
                        <Badge variant="dot" color="error" sx={{ '& .MuiBadge-dot': { top: '2px', right: '5px' } }}>
                            <NotificationsNoneIcon sx={{ fontSize: '30px' }} />
                        </Badge>
                    </Box>
                </Box>
                <Box sx={{
                    background: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
                    borderRadius: '16px',
                    padding: 2,
                    px: 4,
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                    '&:hover': {
                        bgcolor: 'rgba(73, 200, 216, 0.8)',
                    }
                }}>
                    <Typography variant="h5" color="white">
                        Upgrade Plan
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default TopBar;
