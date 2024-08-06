import React from 'react';
import { Box } from '@mui/material';
import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import Section4 from '../components/home/Section4';
import Section5 from '../components/home/Section5';

const Home = () => {
  return (
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%', 
        width: '100%', 
        gap: 2,
        borderRadius: 4, 
        overflow: 'hidden' 
    }}>
      <Box sx={{ flex: 1, display: 'flex', gap: 2 }}>
        <Box sx={{ flex: 3 }}>
          <Section1 />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Section2 />
        </Box>
      </Box>
      <Box sx={{ flex: 1.25, display: 'flex', gap: 2 }}>
        <Box sx={{ flex: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ flex: 1.1 }}>
            <Section3 />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Section4 />
          </Box>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Section5 />
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
