import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
    },
    card: {
        width: '50%',
        margin: 'auto',
        ['@media only screen and (max-width: 992px)']: { // eslint-disable-line no-useless-computed-key
            width: '100%',
        },
    },
    formContainer: {
        margin: 'auto',
    },
    button: {
        margin: 'auto',
        width: '100%',
        marginBottom: '5%'
    },
    textField: {
        width: '100%',
    },
    media: {
        display: 'block',
        margin: 'auto',
        width: '30%',
        height: '30%',
        ['@media only screen and (max-width: 992px)']: { // eslint-disable-line no-useless-computed-key
            width: '50%',
            height: '50%',
        },
        paddingBottom: 24
    },
    text: {
        textAlign: 'center',
        fontSize: '0.75rem',
        ['@media only screen and (max-width: 992px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '1.2rem'
        },
        color: 'gray',
        fontWeight: "bold"
    },
    header: {
        textAlign: 'center',
        fontSize: '1.5rem',
        ['@media only screen and (max-width: 992px)']: { // eslint-disable-line no-useless-computed-key
            fontSize: '3rem'
        },
        fontWeight: "bold"
    }
}));

export default useStyles;