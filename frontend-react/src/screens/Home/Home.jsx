import React from 'react'
// Import local files.
import Navbar from '../../components/Navbar/Navbar'

// MUI Import functions
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Box sx={{
        backgroundColor: 'rgba(8, 10, 15, 0.95)',
        height: '92vh',
        overflow: 'none'
      }}>
        <Grid container height="100%" direction="column" display="flex" justifyContent="center" align="center">
          <Grid item>
              <Grid container direction="row" display="flex" justifyContent="center">
                <Typography sx={{color: 'white', fontWeight: 'bold'}} variant='h2'>simpl</Typography>
                <Typography sx={{color: '#03D394', fontWeight: 'bold'}} variant='h2'>•</Typography>
                <Typography sx={{color: 'white', fontWeight: 'bold'}} variant='h2'>ai</Typography>
              </Grid>
              <Typography variant='subtitle' sx={{color: 'white'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Home