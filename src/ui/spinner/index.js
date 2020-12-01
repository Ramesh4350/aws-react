import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import {Grid} from '@material-ui/core';
import Box from "@material-ui/core/Box";

export const Spinner = () => {
    return (
        <Box mt={12}>
            <Grid alignItems='center' justify='center' container>
                <CircularProgress disableShrink size='6rem'
                                  thickness={6}/>
            </Grid>
        </Box>
    );
}
