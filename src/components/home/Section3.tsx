import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { albumsOfTheWeek } from '../../utils/data';
import AlbumCard from '../card/AlbumCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const VISIBLE_CARDS = 5;
const CARD_WIDTH_PERCENTAGE = 100 / VISIBLE_CARDS;

const Section3: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < albumsOfTheWeek.length - VISIBLE_CARDS) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= albumsOfTheWeek.length - VISIBLE_CARDS;

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: 4, 
      height: '100%',
      width: '100%',
      overflow: 'hidden',
    }}>
      <Box sx={{
        display: 'flex',
        flex: '0 0 auto',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
      }}>
        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Album of the week</Typography>
      </Box>

      <Box sx={{ 
        flex: '1 1 auto', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <IconButton 
          onClick={handlePrev} 
          sx={{ position: 'absolute', left: 0, zIndex: 1 }} 
          disabled={isPrevDisabled}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'row', 
          transform: `translateX(-${currentIndex * CARD_WIDTH_PERCENTAGE}%)`,
          transition: 'transform 0.5s ease-in-out',
          width: `${Math.max(albumsOfTheWeek.length, VISIBLE_CARDS) * CARD_WIDTH_PERCENTAGE}%`,
          alignItems: 'center'
        }}>
          {albumsOfTheWeek.map((album, index) => (
            <Box 
              key={index} 
              sx={{ 
                flex: `0 0 ${CARD_WIDTH_PERCENTAGE}%`,
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                boxSizing: 'border-box',
              }}
            >
              <AlbumCard 
                title={album.title}
                author={album.author}
                image={album.image}
              />
            </Box>
          ))}
        </Box>
        
        <IconButton 
          onClick={handleNext} 
          sx={{ position: 'absolute', right: 0, zIndex: 1 }} 
          disabled={isNextDisabled}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Section3;
