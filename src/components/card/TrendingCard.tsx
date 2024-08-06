import React from 'react';
import { Box, Typography, Avatar, useTheme } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface TrendingCardProps {
  name: string;
  albumsReleased: number;
  currentPosition: number;
  changeInPosition: number;
  image: string;
}

const TrendingCard: React.FC<TrendingCardProps> = ({ name, albumsReleased, currentPosition, changeInPosition, image }) => {
  const theme = useTheme();

  const getBackgroundColor = () => {
    if (theme.palette.mode === 'dark') {
      return theme.palette.background.default;
    } else {
      return '#f5f5f5'; 
    }
  };

  const getTextColor = () => {
    if (theme.palette.mode === 'dark') {
      return theme.palette.text.primary;
    } else {
      return theme.palette.text.secondary; 
    }
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      borderRadius: '16px', 
      padding: 2, 
      gap: 2, 
      width: '100%', 
      height: '100%', 
      backgroundColor: getBackgroundColor()
    }}>
      <Avatar src={image} sx={{ width: 56, height: 56 }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: getTextColor() }}>
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: getTextColor() }}>
          Albums Released: {albumsReleased}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'right' }}>
        <Typography variant="body2" sx={{ color: changeInPosition > 0 ? 'green' : 'red' }}>
          {changeInPosition > 0 ? `+${changeInPosition}` : changeInPosition}
        </Typography>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          width: 24, 
          height: 24, 
          borderRadius: '50%', 
          backgroundColor: changeInPosition > 0 ? 'green' : 'red', 
          ml: 1 
        }}>
          {changeInPosition > 0 ? <ArrowDropUpIcon sx={{ color: 'white' }} /> : <ArrowDropDownIcon sx={{ color: 'white' }} />}
        </Box>
      </Box>
      <Typography variant="h4" sx={{ minWidth: '50px', textAlign: 'right', color: getTextColor() }}>
        {currentPosition}
      </Typography>
    </Box>
  );
}

export default TrendingCard;
