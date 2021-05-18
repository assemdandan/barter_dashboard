const initState = {
    isSignedIn: false,
    id: null,
    username: "",
    name: null,
    email: "",
    phone: '',
    picture: "",
    err: null
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGNED_IN':
            return {
                ...state,
                isSignedIn: true,
                username: action.body.username,
                email: action.body.email,
                name: action.body.name,
                // phone: action.body.picture,
                phone: action.body.phone,
                err: null
            }
        case 'SIGNED_UP':
            return {
                ...state,
                isSignedIn: true,
                username: action.body1.username,
                email: action.body1.email,
                name: action.body1.name,
                // phone: action.body.picture,
                phone: action.body1.phone,
                err: null
            }
        case 'ERROR_SIGNING_IN':
            return {
                ...state,
                err: action.err
            }
        case 'ERROR_SIGNING_UP':
            return {
                ...state,
                err: action.err
            }
        case 'GET_USER':
            return {
                ...state,
                err: null,
                id: action.body.idUsers,
                username: action.body.Username,
                email: action.body.Email,
                name: action.body.FirstName + " " + action.body.LastName,
                // phone: action.body.picture,
                phone: action.body.PhoneNumb,

            }
        case 'ERROR_GETTING_USER':
            return {
                ...state,
                err: action.err
            }
        default:
            return state;
    }
}

export default authReducer;
