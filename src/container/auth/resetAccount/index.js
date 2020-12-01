import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {validate} from '../../../../src/utility/validator/index';
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {RenderEmail} from "../../../component/renderEmail";
import SuccessMessage from '../../../component/successMessage';
import ResetPassword from "../ResetPassword";
import {resendOtp} from "../../../utility/api";

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
    resendOtp(values);
}

let ResetAccount = (props) => {
    const classes = useStyles();
    const {handleSubmit, pristine, submitSucceeded, submitting} = props;

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                <RenderEmail classes={classes} onSubmit={handleSubmit} pristine={pristine} submitting={submitting}/>
                {submitSucceeded && <SuccessMessage/>}
                {submitSucceeded && <ResetPassword/>}
            </div>
        </Container>
    );
}

ResetAccount = reduxForm({
    form: 'Forgot Password',
    validate,
    onSubmit: submit
})(ResetAccount)
ResetAccount = connect(
    state => ({
        initialValues: state.form['Register']
    }),
)(ResetAccount)
export default ResetAccount
