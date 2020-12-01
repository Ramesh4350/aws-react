import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import {Grid} from '@material-ui/core';
import Box from "@material-ui/core/Box";

export const ButtonSpinner = () => {
    return (
        <Box mt={3}>
            <Grid alignItems='center' justify='center' container>
                <CircularProgress disableShrink size='2rem'
                                  thickness={5}/>
            </Grid>
        </Box>
    );
}
