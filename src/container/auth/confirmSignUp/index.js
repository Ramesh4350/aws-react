import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as MESSAGE from '../../../constant/message';
import * as CONSTANTS from '../../../constant/actions';
import {Input} from '../../../component/input';
import {validate} from '../../../../src/utility/validator/index';
import {Field, reduxForm} from "redux-form";
import * as Routes from '../../../routes';
import Alert from "@material-ui/lab/Alert";
import Box from "@material-ui/core/Box";
import {connect} from "react-redux";
import {Aux} from "../../../hoc";
import {Redirect} from "react-router";
import {Spinner} from "../../../ui/spinner";
import {confirmSignUp} from "../../../utility/api";

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

const submit = ({otp, values}) => {
    const {email} = values;
    confirmSignUp(email, otp);
}

function RenderConfirmSignUp(props) {
    return <Aux>
        <Typography component="h1" variant="h4">
            <Box mb={4}><strong>{MESSAGE.VERIFY_OTP}</strong></Box>
        </Typography>
        <Alert
            severity="success"><Typography component="h1"
                                           variant="h6">{MESSAGE.OTP_NOTIFICATION}<strong>KRAVI4350@GMAIL.COM</strong></Typography></Alert>

        <form className={props.classes.form} noValidate
              onSubmit={props.onSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Field
                        name="otp"
                        id="otp"
                        component={Input}
                        label="Otp"
                        autoComplete="Otp"
                        margin="normal"
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={props.classes.submit}
                disabled={props.pristine || props.submitting}
            >
                {CONSTANTS.CONFIRM_OTP}
            </Button>
        </form>
    </Aux>;
}

let ConfirmSignUp = (props) => {
    const classes = useStyles();
    const {handleSubmit, pristine, submitSucceeded, submitting} = props;

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                {!(!pristine && submitting) ? (submitSucceeded ? <Redirect to={Routes.SIGN_IN}/> :
                    <RenderConfirmSignUp classes={classes} onSubmit={handleSubmit} pristine={pristine}
                                         submitting={submitting}/>) :
                    <Spinner/>}
            </div>
        </Container>
    );
}

ConfirmSignUp = reduxForm({
    form: 'ConfirmRegistration',
    validate,
    onSubmit: submit
})(ConfirmSignUp)
ConfirmSignUp = connect(
    state => ({
        initialValues: state.form['Register']
    }),
)(ConfirmSignUp)
export default ConfirmSignUp
