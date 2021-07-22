import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons1: {
    display: 'flex',
    alignItems: 'center',
  },

  buttons2: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  buttons3: {
    display: 'flex',
    alignItems: 'flex-end',
  },


}));