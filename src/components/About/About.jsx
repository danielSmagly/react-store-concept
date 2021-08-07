import React from 'react';

import { Typography, Paper, CssBaseline, Container, Grid, Box, Button, SvgIcon} from '@material-ui/core';

import styled from 'styled-components';

import { IoLogoInstagram } from 'react-icons/io';

import useStyles from './styles';



const About = () => {
    const classes = useStyles();
    return (
        
        <Box className={classes.content} >
            <CssBaseline/>
            
            <Box pt={18} pr={5} pb={25} pl={5} >
            
            
            <Paper className={classes.customBorderRadius, classes.bkrd} elevation={0} >
            <br/>
            <Grid container spacing={2} alignItems="flex-start" wrap="nowrap">
              <Grid item>
                  <Container maxWidth="md">
                      <Typography variant="h4">Viktor Verkhovod</Typography>
                  <Typography> was born in Bishkek, Kyrgyzstan. 
                    He attended a four-year Art College in Tashkent, Uzbekistan,
                     where he graduated in 1980 with a degree in Sculpture and Art Education. 
                     After graduation he worked at an art studio supported by the government, 
                     as a sculptor creating public art projects for 17 years. Then he worked 
                     as an art instructor for 11 years. Viktor came to the United States in 1997. 
                     His career in the United States began as a student and teacher's assistant 
                     in the Art Department of Sacramento City College. Like in Kyrgyzstan Viktor 
                     resumes to work on public art projects using materials such as stone, metal, 
                     and ceramics. In 2005 he had finished a project “Connection” which includes 
                     several metal sculptures at Dr. Barandas Park. One of his projects can be 
                     seen at County Primary Care Clinic made from ceramic tiles. Viktor and Frank 
                     Zamora completed a public art project for Woodland, Yolo County Juvenile 
                     Probation Center which included a wall mural and a 3D ceramic sculpture. 
                     Also a mural wall painting in Los Angeles at the Citrus College. His latest
                      projects are murals at Firebird Restaurant, Western Electrical Contractors 
                      Association in Mather CA and 648 5th Street/alley side of Simple Pleasures 
                      Catering in Lincoln, CA. His latest project “Artist and Model” is made out 
                      of stainless steel, is installed at the Elk Grove Aquatic Center. Currently 
                      Viktor is working at Gladding Mc Beam as a sculptor. And teaches two art 
                      classes for children ages 6 -14 and teaches sculpture workshops on human 
                      anatomy. Four of Viktor's sculptures are in a collection of National Museum 
                      of Fine Arts in Bishkek, Kyrgyzstan. Viktor's sculptures and paintings 
                      reflect his life experiences in Kyrgyzstan and his discoveries of life in America.
                      </Typography>
                  </Container>
                
              </Grid>
              
            </Grid>
            
            
          </Paper>
          <Box pt={2}>
          <Paper className={classes.customBorderRadius, classes.bkrd} elevation={0} alignItems="flex-start">
                    <Container margin={0} padding={0} > 
                        <Typography  variant="h6">Follow Viktor on: </Typography>
                        
                            <Button >
                                <IoLogoInstagram className={classes.btnInsta}/>
                            </Button>
                    </Container>
                  </Paper>
          </Box>
        </Box>



        </Box>
        

    )
}

const BackgroundBox = styled.div` 


    height: 150px;
    width: 150px;
    background-color: blue;
    border-radius: 80px;
    margin-bottom: 30px;
    float: left;
    margin-right: 20px;


`;



export default About;