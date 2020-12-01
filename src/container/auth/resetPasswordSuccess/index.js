import React from 'react';
import {Alert} from "@material-ui/lab";
import {Box, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import {Link as RouterLink} from "react-router-dom";
import * as Routes from "../../../routes";
import * as CONSTANTS from "../../../constant/actions";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import {Aux} from "../../../hoc";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

}));

let ResetPasswordSuccess = () => {
    const classes = useStyles();

    return (
        <Aux>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Alert> <Typography component="h1" variant="h6"><strong>Success! </strong>Password reset
                        Done</Typography></Alert>
                    <Box mt={3}><Typography component="h1" variant="h6">Please login again with new password to
                        continue....</Typography></Box>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link component={RouterLink} to={Routes.SIGN_IN} variant="body2">
                                {CONSTANTS.SIGN_IN_AFTER_RESET}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Aux>
    );
}

export default ResetPasswordSuccess;