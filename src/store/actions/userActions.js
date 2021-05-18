import http from '../../utils/common/http-common';
import strings from '../../utils/constants/strings';



export const getUser = (username, setLoading, callback) => {
    return (dispatch, getState) => {
        http.get(`/user${strings.key}&username=${username}`)
            .then(res => {
                if (res.status === 203) {
                    callback(false);
                    const err = res.data.error;
                    dispatch({ type: 'ERROR_GETTING_USER', err })
                } else {
                    callback(true);
                    const body = res.data.user;
                    dispatch({ type: 'GET_USER', body })
                    setLoading(false);
                }
            }).catch(err => {
                dispatch({ type: 'ERROR_GETTING_USER', err })
                setLoading(false);
            })
    }
}

export const verifyEmail = (code, email) => {
    return (dispatch, getState) => {
        http.post(`/user/auth/verify${strings.key}&code=${code}&mailTo=${email}`)
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
    }
}


export const signIn = (body, setLoading, callback) => {
    return (dispatch, getState) => {
        http.post(`/user/auth/signin${strings.key}`, body)
            .then(res => {
                if (res.status === 200) {
                    const data = res.data.user;
                    const body = {
                        username: data.Username,
                        phone: data.PhoneNumb,
                        email: data.Email,
                        name: data.FirstName + " " + data.LastName,
                    };
                    dispatch({ type: 'SIGNED_IN', body });
                    callback(true)
                } else {
                    const err = res.data
                    dispatch({ type: 'ERROR_SIGNING_IN', err });
                    callback(false)
                }
                setLoading(false);
            }).catch(err => {
                console.log(err);
                err.msg = 'Doesn\'t exist';
                setLoading(false);
                callback(false)
                dispatch({ type: 'ERROR_SIGNING_IN', err });
            });
    }
}

export const signUp = (body, setLoading, callback) => {
    return (dispatch, getState) => {
        http.post(`/user/auth/create${strings.key}`, body)
            .then(res => {
                console.log(res.status);
                if (res.status === 200) {
                    const data = res.data.UserId;
                    const body1 = {
                        username: body.Username,
                        phone: body.PhoneNumb,
                        email: body.Email,
                        name: body.FirstName + " " + body.LastName,
                    };
                    dispatch({ type: 'SIGNED_UP', body1 });
                    callback({ success: true, msg: null })
                } else if (res.status === 202) {
                    const err = res.data
                    dispatch({ type: 'ERROR_SIGNING_UP', err });
                    callback({ success: false, msg: 'User Exists' })
                } else {
                    const err = res.data
                    dispatch({ type: 'ERROR_SIGNING_UP', err });
                    callback({ success: false, msg: 'Error Occured' })
                }
                setLoading(false);
            }).catch(err => {
                console.log(err);
                err.msg = 'Doesn\'t exist';
                setLoading(false);
                callback({ success: false, msg: 'Error Occured' })
                dispatch({ type: 'ERROR_SIGNING_UP', err });
            });
    }
}