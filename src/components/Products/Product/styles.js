import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
      },
      media: {
        height: 100,
        paddingTop: '79.25%', // 16:9
        elevation: 0
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      priceDisplay: {
        display: 'flex',
        justifyContent: 'start',
        
      }
}))