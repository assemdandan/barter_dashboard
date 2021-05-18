import React, { useState, useEffect } from 'react'
import { Card, CardContent, Grid, Typography, InputAdornment, TextField, IconButton, Button, LinearProgress } from '@material-ui/core';
import useStyles from '../../utils/styles/signin';
import Alert from '@material-ui/lab/Alert';
import BarterLogo from '../../utils/assets/BarterLogo.svg';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import LockIcon from '@material-ui/icons/Lock';
import Loading from '../common/Loading';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { signIn } from '../../store/actions/userActions';
import { connect } from 'react-redux';

const Signin = ({ signIn, auth }) => {
    const classes = useStyles();
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    const handleClickShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('entered')
        const body = {
            Username: username,
            Password: password
        }
        setLoading(true);
        signIn(body, setLoading, (success) => {
            if (success) {
                history.push('/');
                // console.log(auth)
            } else {
                setError(true);
            }
        })
    }


    // if (loading)
    //     return (
    //         <Grid container direction="column" justify="center" alignItems="center" style={{ minHeight: '100vh' }}>
    //             <Grid item xs={12}>
    //                 <Loading />
    //             </Grid>
    //         </Grid>
    //     );

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
                                        <Typography className={classes.header}>Sign In</Typography>
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
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <AccountCircle />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <br />
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <TextField
                                                className={classes.textField}
                                                id="password"
                                                value={password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                }}
                                                label="Password"
                                                type={showPassword ? 'text' : 'password'}
                                                InputProps={{
                                                    startAdornment: (
                                                        <InputAdornment position="start">
                                                            <LockIcon />
                                                        </InputAdornment>
                                                    ),
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
                                                Sign In
                                            </Button>) : <LinearProgress style={{ marginBottom: '12%' }} />}
                                            {error && (
                                                <Alert variant="filled" severity="error">
                                                    Wrong Credentials!
                                                </Alert>
                                            )}
                                        </Grid><br />
                                        <Grid item xs={12} lg={12} md={12} sm={12} xl={12}>
                                            <Typography className={classes.text}>Don’t have an account? <NavLink to="/signup">Sign up</NavLink> </Typography>
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
        signIn: (body, setLoading, callback) => dispatch(signIn(body, setLoading, callback))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
