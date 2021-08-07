import { makeStyles, theme } from '@material-ui/core/styles';

export default makeStyles((theme) => ({



    root: {
        "& > *": {
            margin: theme.spacing(1),
            width: theme.spacing(130),
            //eight: theme.spacing(30)

        }
    },

    content: {
        backgroundColor: 'rgba(255, 255, 255)'
    },

    bkrd: {
        background: '#f2f2f2',
        height: "auto",
        width: "100%"
    },

    customBorderRadius: {
        borderRadius: 50,
        //background: 'linear-gradient(45deg, #e8e8e8 50%, #f7f7f7 100%)',
    },

    btnInsta: {
        height: '100px',
        width: '100px'
    }

}));