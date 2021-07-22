import React from 'react';
import styled from 'styled-components';


import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({ product, onAddToCart}) => {
    const classes = useStyles();

    

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>

                    
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary"/>
                <div className={classes.priceDisplay}>
                    <Typography variant="h5">
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>

                    
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

const ProductWrapper = styled.div`
.card {
    border-color: transparent;
    background-color: rgba(255,255,255,0.5);
}

`

export default Product;