import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';
import { ReactSVG } from 'react-svg'
import BarterLogo from '../../utils/assets/BarterLogo.svg';


export default function Loading({ progress }) {
    return (
        <div>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={12} md={12}>
                    <ReactSVG src={BarterLogo} style={{
                        height: '30%',
                        width: '30%',
                    }} />
                </Grid>
                <Grid item xs={12} md={12}>
                    {progress ?
                        (<CircularProgress disableShrink style={{ color: '#1565D8' }} progress={progress} />)
                        : (<CircularProgress disableShrink style={{ color: '#1565D8' }} />)}
                </Grid>

            </Grid>
        </div>
    );
}