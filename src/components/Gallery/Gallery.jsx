import React from 'react';

//import ImageList from '@material-ui/core/ImageList';
//import ImageListItem from '@material-ui/core/ImageListItem';
//import ImageListItemBar from '@material-ui/core/ImageListItemBar';
//import IconButton from '@material-ui/core/IconButton';

import { ImageList, ImageListItem, ImageListItemBar, IconButton, CssBaseline, Box, Typography } from '@material-ui/core'

import itemData from './itemData.js'

import useStyles from './styles';


export default function Gallery() {
    const classes = useStyles();
    return (
        <Box pt={10} className={classes.root}>
            <CssBaseline/>
            <Typography variant="h5"> Our Collection </Typography>
            <ImageList rowHeight={400} gap={5} className={classes.itemData}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.featured ? 2 : 1} rows={item.featured ? 2 : 1}>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar title={item.title} position="bottom" actionIcon={
                            <IconButton className={classes.icon}>
                                
                            </IconButton>
                        }

                        actionPosition="left"
                        className={classes.titleBar}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
};

