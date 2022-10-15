import React from 'react'
import { Link } from "react-router-dom";

// Import local files.
import Navbar from '../../components/Navbar/Navbar'

// MUI Import functions
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
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
          <Grid item>
            <Grid container sx={{mt: 5}} direction="row" display="flex" justifyContent="center">
              <Link to="/about" style={{ textDecoration: 'none' }}>
                <Button sx={{
                  color: 'white', 
                  textTransform: 'capitalize', 
                  border: '1px solid #03D394', 
                  borderRadius: 10, 
                  fontWeight: '600',
                  px: 2,
                  mt: 2,
                  "&:hover":  {
                    backgroundColor: '#03D394',
                    color: 'white',
                    textDecoration: 'none',
                  },
                }}>
                  About Us
                </Button>
              </Link>

              <Link to="/app/get-data" style={{ textDecoration: 'none' }}>
                <Button sx={{
                  color: 'white', 
                  textTransform: 'capitalize', 
                  border: '1px solid #9569EC', 
                  borderRadius: 10, 
                  fontWeight: '600',
                  px: 2,
                  mt: 2,
                  ml: 2,
                  "&:hover":  {
                    backgroundColor: '#9569EC',
                    color: 'white',
                  }
                }}>
                  See Our Work
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Home