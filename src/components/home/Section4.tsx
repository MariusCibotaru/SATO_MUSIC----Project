import React from 'react';
import { Box, Typography } from '@mui/material';
import { popularSongs } from '../../utils/data';
import TrackCard from '../card/TrackCard';

const Section4: React.FC = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      borderRadius: 4, 
      height: '100%',
      width: '100%',
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
      }}>
        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Popular Tracks</Typography>
      </Box>

      <Box sx={{ 
        flex: '1 1 auto', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        width: '100%',
      }}>
        {popularSongs.map((song) => (
          <TrackCard 
            key={song.title}
            title={song.title}
            artist={song.artist}
            image={song.image}
            position={song.position}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Section4;
