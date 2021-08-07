import React from 'react';

import { Typography, CssBaseline, AppBar, Container, Toolbar} from '@material-ui/core';

import useStyles from './styles';



const Footer = () => {
    const classes = useStyles();
    return (
            
            <AppBar position="static" color="#7c4094" className={classes.appBar}>
                <CssBaseline/>
              <Container maxWidth="md">
                <Toolbar>
                  <Typography variant="body2" color="inherit">
                    
                  </Typography>
                  

                </Toolbar>
              </Container>
            </AppBar>
    )
}



export default Footer;