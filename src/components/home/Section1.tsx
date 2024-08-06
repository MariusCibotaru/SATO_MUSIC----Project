import React from 'react';
import { Box, Typography, Avatar, AvatarGroup, Button } from '@mui/material';
import Fon from '../../images/Section1/Fon2.jpg';
import Avatar1 from '../../images/Avatar/Avatar1.jpeg';
import Avatar2 from '../../images/Avatar/Avatar2.jpg';
import Avatar3 from '../../images/Avatar/Avatar3.png';
import Avatar4 from '../../images/Avatar/Avatar4.jpg';

function CustomSurplusAvatars() {
  return (
    <AvatarGroup
      sx={{
        '& .MuiAvatar-root': {
          border: 'none',
          marginRight: 1,
        },
      }}
      renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
      total={4251}
    >
      <Avatar alt="Remy Sharp" src={Avatar1} />
      <Avatar alt="Travis Howard" src={Avatar2} />
      <Avatar alt="Agnes Walker" src={Avatar3} />
      <Avatar alt="Trevor Henderson" src={Avatar4} />
    </AvatarGroup>
  );
}

const Section1 = () => {
  return (
    <Box sx={{ 
      backgroundImage: `url(${Fon})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: 4, 
      height: '100%',
      width: '100%',
      px: 10
    }}>
      <Box sx={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center', 
        alignItems: 'flex-start', 
        height: '100%', 
      }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'left' }}>
          Artist of the month
        </Typography>
        <Typography variant="h1" sx={{ 
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '6rem'
        }}>
          Sobel
        </Typography>
        <Typography variant="h4" sx={{ color: 'white'}}>
          Pułapka na motyle
        </Typography>
        <CustomSurplusAvatars />

        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button sx={{ 
            borderRadius: '16px', 
            background: 'linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)', 
            color: 'white', 
            fontWeight: 'bold',
            px: 4,
            py: 1
          }}>
            View Playlist
          </Button>
          <Button sx={{ 
            borderRadius: '16px', 
            border: '2px solid white', 
            color: 'white', 
            fontWeight: 'bold',
            px: 4,
            py: 1
          }}>
            Follow
          </Button>
        </Box>
      </Box>

      <Box sx={{ flex: 1 }} />
    </Box>
  );
}

export default Section1;
