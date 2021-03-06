import { makeStyles, fade } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: '.1em',
     
    background: 'rgba(255, 255, 255)',
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
  },
  
  growIcon: {
    flexGrow: .05,
  },
  growIcon2: {
    flexGrow: .1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none'
  },
  
  
}));