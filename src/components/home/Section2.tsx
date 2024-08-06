import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import TrendingCard from '../card/TrendingCard';
import { trendingArtists } from '../../utils/data';

const Section2 = () => {
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === 'light';

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: 4, 
      height: '100%',
      width: '100%',
      gap: 2
    }}>
      {/* First Box */}
      <Box sx={{ 
        flex: '0 0 auto', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%', 
      }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Trending Artists
        </Typography>
        <Button variant="contained" sx={{ 
          borderRadius: '50px', 
          backgroundColor: isLightTheme ? 'white' : theme.palette.grey[800],
          fontWeight: 'bold',
          color: isLightTheme ? 'black' : 'white',
          transition: 'background-color 0.3s',
          '&:hover': {
            backgroundColor: isLightTheme ? '#dcdcdc' : theme.palette.grey[700], 
          }
        }}>
          See All
        </Button>
      </Box>

      {/* Second Box */}
      <Box sx={{ 
        flex: '1 1 auto', 
        display: 'flex', 
        flexDirection: 'column',
        width: '100%', 
        overflowY: 'auto', 
        height: 0,
        gap: 2, 
      }}>
        {trendingArtists.map((artist) => (
          <TrendingCard
            key={artist.name}
            name={artist.name}
            albumsReleased={artist.albumsReleased}
            currentPosition={artist.currentPosition}
            changeInPosition={artist.changeInPosition}
            image={artist.image}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Section2;
