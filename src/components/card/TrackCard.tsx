import React, { useState } from 'react';
import { Card, CardMedia, Box, Typography, IconButton, useTheme } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import DownloadIcon from '@mui/icons-material/Download';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface TrackCardProps {
  title: string;
  artist: string;
  image: string;
  position: number;
}

const TrackCard: React.FC<TrackCardProps> = ({ title, artist, image, position }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === 'light';

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Card sx={{ 
      borderRadius: 2, 
      width: 350, 
      display: 'flex', 
      flexDirection: 'row', 
      overflow: 'hidden',
      boxShadow: 2,
      position: 'relative',
      transition: 'transform 0.3s ease-in-out',
      backgroundColor: isLightTheme ? theme.palette.grey[100] : theme.palette.background.paper,
      color: theme.palette.text.primary,
      '&:hover': {
        transform: 'scale(1.05)'
      }
    }}>
      <CardMedia
        component="img"
        sx={{ 
          width: 150,
          height: 150,
          objectFit: 'cover',
          cursor: 'pointer'
        }}
        image={image}
        alt={`${title} cover`}
      />
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: 2,
        flex: 1,
        textAlign: 'center'
      }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">{artist}</Typography>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: 1,
          gap: 1
        }}>
          <IconButton sx={{ color: 'primary.main' }}>
            <PlayArrowIcon />
          </IconButton>
          <IconButton sx={{ color: 'primary.main' }}>
            <DownloadIcon />
          </IconButton>
          <IconButton sx={{ color: isFavorite ? 'red' : 'primary.main' }} onClick={handleFavoriteClick}>
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
      </Box>
      <Typography 
        variant="h5" 
        sx={{ 
          position: 'absolute', 
          top: 10, 
          right: 10, 
          fontWeight: 'bold',
          color: 'text.secondary'
        }}
      >
        {position}
      </Typography>
    </Card>
  );
}

export default TrackCard;
