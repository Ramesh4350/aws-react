import React from 'react';
import {Field, reduxForm} from 'redux-form'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Input} from '../../../component/input';
import {Aux} from "../../../hoc";
import *  as CONSTANTS from '../../../constant/actions';
import {ButtonSpinner} from "../../../ui/buttonSpinner";
import {Redirect} from "react-router";
import * as Routes from '../../../routes'
import {connect} from "react-redux";
import {validate} from '../../../utility/validator'
import {resetForgotPassword} from "../../../utility/api";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const submit = (values) => {
    resetForgotPassword(values);
}

const ChangePassword = (props) => {
    return <Aux>
        <form className={props.classes.form} noValidate onSubmit={props.onSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Field
                        name="otp"
                        id="otp"
                        component={Input}
                        label="OTP"
                        autoComplete="phone"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="password"
                        id="password"
                        component={Input}
                        label="New Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="confirmPassword"
                        id="confirmPassword"
                        component={Input}
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                    />
                </Grid>
            </Grid>
            {!(!props.pristine && props.submitting) ?
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={props.classes.submit}
                    disabled={props.pristine || props.submitting}
                >
                    {CONSTANTS.CONFIRM_OTP}
                </Button> :
                <ButtonSpinner/>}
        </form>
    </Aux>;
}

let ResetPassword = (props) => {
    const classes = useStyles();
    const {handleSubmit, pristine, submitting, submitSucceeded} = props
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <ChangePassword classes={classes} onSubmit={handleSubmit} pristine={pristine}
                                submitting={submitting}/>
                {submitSucceeded && <Redirect to={Routes.RESET_PASSWORD_SUCCESSFUL}/>}
            </div>

        </Container>
    );
}
ResetPassword = reduxForm({
    form: 'ChangePassword',
    validate,
    onSubmit: submit,
})(ResetPassword)
ResetPassword = connect(
    state => ({
        initialValues: state.form['Register']
    }),
)(ResetPassword)
export default ResetPassword

