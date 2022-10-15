import React, {useState, useEffect} from 'react'

// Local file imports
import Navbar from '../../components/Navbar/NavbarApp'

// MUI Imports
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const CheckboxLabel = (labelValue) => {
    return(
        <FormGroup>
            <FormControlLabel 
                control={
                    <Checkbox 
                    labelStyle={{color: 'white'}}
                    iconStyle={{fill: 'white'}}
                    inputStyle={{color:'white'}}
                    style={{color:'white'}}
                    />
                } 
                label={labelValue}
            />
        </FormGroup>
    )
}
const UserDetails = () => {
    var In = true;
    var delay = 0;
    var timeout = 1000;

    const [isIn, setIsIn] = useState(In && delay === 0)

   useEffect(() => {
      if (delay > 0) {
         setTimeout(() => setIsIn(true), delay)
      }
   })

  return (
    <Box sx={{overflowY: 'hidden'}}>
    <Box sx={{
        backgroundColor: 'rgba(8, 11, 15, 1)',
        height: '100vh',
        
    }}>
        <Navbar/>
        <Grid container height="100%" direction="column" display="flex" justifyContent="center" align="center">
            <Grid item>
                <Typography sx={{color: '#03D394', fontWeight: 'bold'}} variant='h5'>Tell us about you.</Typography>
                <Typography sx={{color: 'white', mb: 4}} variant='lead'>Please fill some basic details to get started.</Typography>

                <Grid container direction="column" align="left" sx={{
                    height: '500px', width: '70vw', background: 'gray', borderRadius: 5, 
                    background: '#202633',
                    p: 5, mt: 4,
                    color: 'white'
                }}>
                    <Grid item>
                        <Typography variant='subtitle1' sx={{color: 'white', fontWeight: '500'}}>Identify the type of document you would like to simplify:</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row">
                            {CheckboxLabel('Technical Document')}
                            {CheckboxLabel('Legal Document')}
                            {CheckboxLabel('Medical Document')}
                            {CheckboxLabel('Other')}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' sx={{color: 'white', fontWeight: '500'}}>Which language is the source document in?</Typography>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default UserDetails