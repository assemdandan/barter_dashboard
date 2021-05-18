import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

export default function VerifyDialog({ open, setOpen, verify, setVerify, signUp, body, setLoading, setError }) {

    const history = useHistory();
    const [entry, setEntry] = React.useState('');
    const [err, setErr] = React.useState(null);
    const [clicked, setClicked] = React.useState(false);

    const handleClose = () => {
        setLoading(false);
        setOpen(false);
    };

    const handleSubmit = () => {
        if (verify.code.toString() === entry.toString()) {
            setClicked(true);
            signUp(body, setLoading, ({ success, msg }) => {
                if (!success) {
                    setError(msg);
                    setOpen(false);
                } else {
                    history.push('/');
                }
            });
        } else {
            setErr('Wrong Code');
        }
    }

    return (
        <div>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Verification</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {"Please enter the code sent to you in order to confirm your identity."}
                        <br />
                        {"Check your spam folder."}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Code"
                        type="text"
                        fullWidth
                        onChange={(e) => {
                            setEntry(e.target.value);
                        }}
                    />
                    {err && (
                        <Alert variant="filled" severity="error">
                            {err}
                        </Alert>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
          </Button>
                    <Button disabled={clicked} onClick={handleSubmit} color="primary">
                        Confirm
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}