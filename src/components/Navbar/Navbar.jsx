import React from 'react'

import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Box } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'


import logo from '../../assets/img3.png';

import useStyles from './styles';

import styled from 'styled-components'




const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();


    return (
        <>
            <Box>
           
            
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                <div className={classes.growIcon}/>
                    
                    <Typography component={Link} to='/' variant="h6" className={classes.title} color="inherit">
                        <img src={ logo } alt="Store-Img" height="48px"  className={classes.image} />
                        
                    </Typography>

                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <Typography component={Link} to='/gallery' variant="subtitle1" className={classes.title} color="inherit">
                            Gallery
                        </Typography>
                    </div> )}
                    <div className={classes.growIcon2}/>
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <Typography component={Link} to='/about' variant="subtitle1" className={classes.title} color="inherit">
                            About
                        </Typography>
                    </div> )}
                    <div className={classes.growIcon}/>
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to='/cart' aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
            </Box>
        
            
        </>
    )
}


export default Navbar;