import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  const classes = useStyles();



  return (
    <Card className="cart-item">
      <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
          <Typography variant="h4">{item.name}</Typography>
          <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
          <div className={classes.buttons2}>

              <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>
                 <IndeterminateCheckBoxIcon/> 
              </Button>
              </div>
              <div className={classes.buttons1}>

              <Typography variant="h5"> {item.quantity} </Typography>
              </div>
          <div className={classes.buttons3}>
              <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>
                 <AddBoxIcon/> 
              </Button>
          </div>
          <div className={classes.buttons3}>
          <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
          </div>
          
      </CardActions>
      
    </Card>
  );
};

export default CartItem;