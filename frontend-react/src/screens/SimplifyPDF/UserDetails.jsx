import React, {useState, useEffect} from 'react'

// Local file imports
import Navbar from '../../components/Navbar/NavbarApp'

// MUI Imports
import Box from '@mui/material/Box';
import { Button, FilledInput, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

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
    const [checked, setChecked] = useState(true);

   useEffect(() => {
      if (delay > 0) {
         setTimeout(() => setIsIn(true), delay)
      }
   })

   const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
                    height: '550px', width: '70vw', background: 'gray', borderRadius: 5, 
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
                        <Grid container direction="row">
                            <Typography variant='subtitle1' sx={{color: 'white', fontWeight: '500', mr: 6}}>Which language is the source document in?</Typography>
                            <FormGroup>
                                <FormControlLabel 
                                    control={
                                        <Checkbox 
                                        labelStyle={{color: 'white'}}
                                        iconStyle={{fill: 'white'}}
                                        inputStyle={{color:'white'}}
                                        style={{color:'white'}}
                                        checked={checked}
                                        onChange={handleChange}
                                        />
                                    } 
                                    label={'Translate'}
                                />
                            </FormGroup>
                        </Grid>
                        <TextField fullWidth id="outlined-basic" label="Enter Source Language" variant="outlined" InputLabelProps={{
                             style: { color: '#fff'}, 
                             }} inputProps={{style: {color: 'white'}}} 
                            sx={{
                                mb:2,
                            input: {
                                color: 'white', 
                                '&::placeholder': 
                                    {
                                        color: 'white',
                                    }
                                }, 
                            '& label.Mui-focused': {
                                color: 'white',
                            },
                            '& label.Mui': {
                                color: 'white',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'white',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'white',
                                  color: 'white'
                                },
                                '&:hover fieldset': {
                                  borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'white',
                                },
                            },
                        }}/>
                        {checked ? 
                            <>
                            <Typography variant='subtitle1' sx={{color: 'white', fontWeight: '500', mr: 6}}>Which language would you like to translate the document to?</Typography>
                            <TextField fullWidth id="outlined-basic" label="Enter Source Language" variant="outlined" InputLabelProps={{
                             style: { color: '#fff'}, 
                             }} inputProps={{style: {color: 'white'}}} 
                            sx={{
                                my:2,

                            input: {
                                color: 'white', 
                                '&::placeholder': 
                                    {
                                        color: 'white',
                                    }
                                }, 
                            '& label.Mui-focused': {
                                color: 'white',
                            },
                            '& label.Mui': {
                                color: 'white',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'white',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'white',
                                  color: 'white'
                                },
                                '&:hover fieldset': {
                                  borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'white',
                                },
                            },
                        }}/>
                            </>
                            :
                            <></>
                        }
                        <Grid container direction="row">
                            <Button 
                                sx={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold',
                                    borderRadius: 2,
                                    px: 3, py: 1,
                                    my: 2,
                                    "&:hover":  {
                                        backgroundColor: '#F5F5F5',
                                    }
                                }}
                                variant="contained" 
                                component="label"
                            >

                                Upload a File
                                <input hidden accept="pdf/*" type="file" />

                            </Button>
                            <Typography sx={{my: 3, mx: 2}}>or</Typography>
                            <TextField  id="outlined-basic" label="Enter Website URL:" variant="outlined" InputLabelProps={{
                             style: { color: '#fff'}, 
                             }} inputProps={{style: {color: 'white'}}} 
                            sx={{
                                my:2,
                                width: '52.5vw',

                            input: {
                                color: 'white', 
                                '&::placeholder': 
                                    {
                                        color: 'white',
                                    }
                                }, 
                            '& label.Mui-focused': {
                                color: 'white',
                            },
                            '& label.Mui': {
                                color: 'white',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'white',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: 'white',
                                  color: 'white'
                                },
                                '&:hover fieldset': {
                                  borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: 'white',
                                },
                            },
                        }}/>
                        </Grid>
                        <Grid container alignItems='right'>
                            <Button 
                                sx={{
                                    backgroundColor: '#9569EC',
                                    color: 'white',
                                    border: '1px solid #9569EC',
                                    textTransform: 'capitalize',
                                    fontWeight: 'bold',
                                    borderRadius: 2,
                                    px: 3, py: 1,
                                    my: 2,
                                    "&:hover":  {
                                        backgroundColor: '#202633',
                                    }
                                }}
                                variant="contained" 
                                
                            >
                                Continue
                            </Button>
                        </Grid>
                        
                    </Grid>
                    
                    
                </Grid>
                
            </Grid>
        </Grid>
        
      </Box>
    </Box>
  )
}

export default UserDetails