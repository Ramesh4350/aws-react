import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as CONSTANTS from '../../../constant/actions';
import {Input} from '../../../component/input';
import {validate} from '../../../../src/utility/validator/index';
import {Field, reduxForm} from "redux-form";
import {Link as RouterLink} from "react-router-dom";
import * as Routes from '../../../routes';
import {Aux} from "../../../hoc";
import {Redirect} from "react-router";
import {Spinner} from "../../../ui/spinner";
import {signIn} from '../../../utility/api';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const submit = (values) => {
    signIn(values);
}

function RenderSignIn(props) {
    return <Aux>
        <Avatar className={props.classes.avatar}>
            <LockOutlinedIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
            {CONSTANTS.SIGN_IN}
        </Typography>
        <form className={props.classes.form} noValidate onSubmit={props.onSubmit}>
            <Grid item xs={12}>
                <Field
                    name="email"
                    id="email"
                    component={Input}
                    label="Email Address"
                    autoComplete="email"
                    margin="normal"
                />
            </Grid>
            <Grid item xs={12}>
                <Field
                    name="password"
                    id="password"
                    component={Input}
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
            </Grid>
            <FormControlLabel
                control={<Checkbox value="remember" color="primary"/>}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={props.classes.submit}
                disabled={props.pristine || props.submitting}
            >
                {CONSTANTS.SIGN_IN}
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link component={RouterLink} to={Routes.RESET_PASSWORD} variant="body2">
                        {CONSTANTS.FORGOT_PASSWORD}
                    </Link>
                </Grid>
                <Grid item>
                    <Link component={RouterLink} to={Routes.SIGN_UP} variant="body2">
                        {CONSTANTS.DO_NOT_HAVE_ACCOUNT}
                    </Link>
                </Grid>
            </Grid>
        </form>
    </Aux>;
}

let SignIn = (props) => {
    console.log(props);
    const classes = useStyles();
    const {handleSubmit, pristine, submitSucceeded, submitting} = props

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                {!(!pristine && submitting) ? (submitSucceeded ? <Redirect to={Routes.HOME}/> :
                    <RenderSignIn classes={classes} onSubmit={handleSubmit} pristine={pristine}
                                  submitting={submitting}/>) :
                    <Spinner/>}
            </div>
        </Container>
    );
}
export default SignIn = reduxForm({
    form: 'Login',
    validate,
    onSubmit: submit
})(SignIn)

