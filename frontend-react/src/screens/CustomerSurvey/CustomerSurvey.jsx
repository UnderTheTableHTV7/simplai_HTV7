import React from 'react'

// MUI File Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
const CustomerSurvey = () => {
  return (
    <Box 
    sx={{
        height: '100vh', 
        background: 'linear-gradient(90.07deg, #FF9505 48.51%, #F5D020 156.71%)',
    }}>
        <Grid container justifyContent='right'> 
            <Grid item >
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
            </Grid>
        </Grid>
    </Box>
  )
}

export default CustomerSurvey