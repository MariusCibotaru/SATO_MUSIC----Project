import React, { useState } from 'react';
import { Box, Typography, IconButton, Slider, useTheme } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import LoopIcon from '@mui/icons-material/Loop';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DownloadIcon from '@mui/icons-material/Download';
import Fon from '../../images/Section5/Fon.jpeg';

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const Section5: React.FC = () => {
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === 'light';

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false); 
  const maxTime = 180; 

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setCurrentTime(newValue as number);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100%',
      width: '100%',
      gap: 2 
    }}> 
      <Box sx={{ 
        flex: '0 0 auto', 
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        width: '100%',
      }}>
        <Typography variant='h4' sx={{ fontWeight: 'bold' }}>Now Playing</Typography>
      </Box>
      <Box sx={{ 
        flex: '1 1 auto', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        bgcolor: isLightTheme ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.2)', 
        width: '100%',
        padding: 2,
        borderRadius: 4, 
        backdropFilter: 'blur(10px)',
        gap: 1
      }}>
        <Box sx={{ 
          flex: '1 1 auto', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center',
          width: '50%',
          bgcolor: isLightTheme ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.3)', 
          borderRadius: 4,
          padding: 1,
          gap: 1,
          backgroundImage: `url(${Fon})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }}>
        </Box>
        <Box sx={{ 
          flex: '0 0 auto', 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center',
          width: '100%',
        }}>
          <Box sx={{ 
            flex: '0 0 auto', 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '80%',
          }}>
            <Typography variant="h6">Believer</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton 
                aria-label="add to favorites"
                onClick={handleFavoriteToggle}
                sx={{
                  color: isFavorite ? 'red' : 'inherit',
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 0.7,
                  },
                }}
              >
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <IconButton 
                aria-label="download"
                sx={{
                  cursor: 'pointer',
                  '&:hover': {
                    opacity: 0.7,
                  },
                }}
              >
                <DownloadIcon />
              </IconButton>
            </Box>
          </Box>
          <Slider 
            value={currentTime} 
            onChange={handleSliderChange} 
            min={0} 
            max={maxTime} 
            sx={{ width: '80%' }}
          />
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            width: '80%',
          }}>
            <Typography variant="caption">{formatTime(currentTime)}</Typography>
            <Typography variant="caption">{formatTime(maxTime)}</Typography>
          </Box>
        </Box>
        <Box sx={{ 
          flex: '0 0 auto', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          width: '90%',
        }}>
          <IconButton aria-label="shuffle">
            <ShuffleIcon />
          </IconButton>
          <IconButton aria-label="previous">
            <SkipPreviousIcon />
          </IconButton>
          <IconButton 
            aria-label="play/pause" 
            onClick={handlePlayPause}
            sx={{
              width: 56,
              height: 56,
              bgcolor: 'primary.main',
              '&:hover': {
                bgcolor: 'primary.dark',
              },
            }}
          >
            {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton aria-label="next">
            <SkipNextIcon />
          </IconButton>
          <IconButton aria-label="repeat">
            <LoopIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Section5;
