import React, { useState } from 'react'
import { Card, CardContent, Grid, Typography, InputAdornment, TextField, IconButton, Button, LinearProgress } from '@material-ui/core';
import useStyles from '../../utils/styles/signup';
import Alert from '@material-ui/lab/Alert';
import MuiPhoneNumber from "material-ui-phone-number";
import BarterLogo from '../../utils/assets/BarterLogo.svg';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';
import Loading from '../common/Loading';
import { NavLink } from 'react-router-dom';
import { getUser, signUp, verifyEmail } from '../../store/actions/userActions';
import { connect } from 'react-redux';
import VerifyDialog from '../common/verifyDialog';

const Signup = ({ signUp, auth, getUser, sendCode }) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState({
        value: '',
        confirm: ''
    });
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [verify, setVerify] = useState({
        code: Math.floor(1000 + Math.random() * 9000).toString(),
        userCode: ''
    });
    const [open, setOpen] = useState(false);
    const [body, setBody] = useState({});

    const handleClickShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('entered')
        if (password.value !== password.confirm) {
            setError('Passwords doesn\'t match');
            return;
        }
        setBody({
            Username: username,
            Password: password.value,
            FirstName: firstname,
            LastName: lastname,
            Email: email,
            PhoneNumb: phone,
            Birthdate: dob
        })
        setLoading(true)
        getUser(username, setLoading, (found) => {
            if (found) setError('Username already used');
            else {
                sendCode(verify.code, email);
                if (error) setError(null);
                setOpen(true);
            }
        });
    }
    return (
        <div className={classes.root}>
            <Grid container direction="column" justify="center" alignItems="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
                    <Card elevation={10} className={classes.card}>
                        <CardContent >
                            <form onSubmit={handleSubmit}>
                                <Grid container direction="row" spacing={3} justify="center" alignItems="center">
                                    <Grid item item xs={12} sm={12} lg={12} md={12} xl={12}>
                                        <img src={BarterLogo} alt="Barter Logo" className={classes.media} />
                                    </Grid>
                                    <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                        <Typography className={classes.header}>Sign Up</Typography>
                                    </Grid>
                                    <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                        <Typography className={classes.text}>Barter with people near you!</Typography>
                                    </Grid>
                                    <div className={classes.formContainer}>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <TextField
                                                className={classes.textField}
                                                id="username"
                                                value={username}
                                                onChange={(e) => {
                                                    setUsername(e.target.value);
                                                }}
                                                label="Username"
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <TextField
                                                className={classes.textField}
                                                id="firstname"
                                                value={firstname}
                                                onChange={(e) => {
                                                    setFirstname(e.target.value);
                                                }}
                                                required
                                                label="First Name"
                                            />
                                        </Grid>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <TextField
                                                className={classes.textField}
                                                id="lastname"
                                                value={lastname}
                                                onChange={(e) => {
                                                    setLastname(e.target.value);
                                                }}
                                                label="Last Name"
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <br />
                                            <MuiPhoneNumber
                                                required={true}
                                                fullWidth
                                                disableDropdown={false}
                                                label="Phone Number"
                                                countryCodeEditable={false}
                                                type="tel"
                                                id="phone"
                                                value={phone}
                                                defaultCountry={"lb"}
                                                onlyCountries={["lb"]}
                                                onChange={(value) => {
                                                    setPhone(value);
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <TextField
                                                className={classes.textField}
                                                id="email"
                                                value={email}
                                                type="email"
                                                onChange={(e) => {
                                                    setEmail(e.target.value);
                                                }}
                                                label="E-mail"
                                                required
                                            />
                                        </Grid>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <br />
                                            <TextField
                                                required={false}
                                                id="dob"
                                                fullWidth
                                                value={dob}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                type="date"
                                                fullWidth
                                                label="Date Of Birth"
                                                color="primary"
                                                onChange={(e) => {
                                                    setDob(e.target.value);
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <TextField
                                                className={classes.textField}
                                                id="password"
                                                value={password.value}
                                                onChange={(e) => {
                                                    setPassword({
                                                        ...password,
                                                        value: e.target.value
                                                    });
                                                }}
                                                required
                                                label="Password"
                                                type={showPassword ? 'text' : 'password'}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <TextField
                                                className={classes.textField}
                                                id="password"
                                                value={password.confirm}
                                                onChange={(e) => {
                                                    setPassword({
                                                        ...password,
                                                        confirm: e.target.value
                                                    });
                                                }}
                                                required
                                                label="Confirm Password"
                                                type={showPassword ? 'text' : 'password'}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={handleClickShowPassword}
                                                                edge="end"
                                                            >
                                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                        </Grid>
                                        <br /><br />
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            {!loading ? (<Button type="submit"
                                                disabled={
                                                    (username.length === 0 || password.length === 0)
                                                } className={classes.button} variant="contained" color="primary" disableElevation>
                                                Sign Up
                                            </Button>) : <LinearProgress style={{ marginBottom: '12%' }} />}
                                            {error && (
                                                <Alert variant="filled" severity="error">
                                                    {error}
                                                </Alert>
                                            )}
                                        </Grid><br />
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <Typography className={classes.text}>Already have an account? <NavLink to="/signin">Sign in</NavLink> </Typography>
                                        </Grid>
                                    </div>

                                </Grid>
                                <br />
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
                <br />
            </Grid>
            {open && (
                <VerifyDialog open={open} setOpen={setOpen} verify={verify} setVerify={setVerify} signUp={signUp} body={body} setLoading={setLoading} setError={setError} />
            )}
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (body, setLoading, callback) => dispatch(signUp(body, setLoading, callback)),
        getUser: (username, setLoading, callback) => dispatch(getUser(username, setLoading, callback)),
        sendCode: (code, email) => dispatch(verifyEmail(code, email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);