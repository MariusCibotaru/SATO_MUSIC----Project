import React from 'react';
import { Card, CardMedia, Box, Typography } from '@mui/material';

interface AlbumCardProps {
  title: string;
  author: string;
  image: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({ title, author, image }) => {
  return (
    <Card 
      sx={{ 
        borderRadius: 2, 
        width: 175, 
        position: 'relative',
        cursor: 'pointer', // Добавление курсора указателя при наведении
      }}
    >
      <CardMedia
        component="img"
        sx={{ 
          width: 175,
          height: 175,
          borderRadius: 2,
          objectFit: 'cover'
        }}
        image={image}
        alt={`${title} cover`}
      />
      <Box sx={{ 
        position: 'absolute', 
        bottom: 0, 
        width: '100%', 
        bgcolor: 'rgba(0, 0, 0, 0.2)', 
        color: 'white',
        borderRadius: '0 0 8px 8px', 
        textAlign: 'center'
      }}>
        <Typography variant="h5">{title}</Typography>
      </Box>
    </Card>
  );
}

export default AlbumCard;
