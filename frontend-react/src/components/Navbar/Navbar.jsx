import React from 'react'
import { Link } from "react-router-dom";

// MUI Import functions
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Grid from '@mui/material/Grid';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{fontWeight: 'bold'}} variant="h6" component="h1">simpl</Typography><Typography sx={{color: '#03D394', mb: 0.1}}>•</Typography><Typography sx={{fontWeight: 'bold'}} variant="h6" component="h1">ai</Typography>
          <Grid container justifyContent="flex-end">
            <Link to="/app/user-config" style={{ textDecoration: 'none' }}>
              <Button 
                sx={{
                    backgroundColor: 'white',
                    color: 'black',
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    borderRadius: 5,
                    px: 3, py: 1,
                    m: 2,
                    "&:hover":  {
                        backgroundColor: '#F5F5F5',
                    }
                }}
                variant="contained" 
                endIcon={<TrendingFlatIcon/>}
              >
                App
              </Button>
            </Link>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar