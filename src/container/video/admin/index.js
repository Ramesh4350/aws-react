import React, {useState} from 'react';
import {Field, reduxForm} from 'redux-form'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import {Input} from '../../../component/input';
import {InputPhone} from '../../../component/input';
import {validate} from '../../../../src/utility/validator/index';
import {Link as RouterLink} from "react-router-dom";
import {Aux} from "../../../hoc";
import {Spinner} from "../../../ui/spinner";
import {Redirect} from "react-router";
import * as Routes from "../../../routes";
import *  as CONSTANTS from '../../../constant/actions';
import {signUp} from '../../../utility/api';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
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
    signUp(values);
}

const RenderAdmin = (props) => {
    return <Aux>
        <Avatar className={props.classes.avatar}>
            <VideoCallIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
            {CONSTANTS.VIDEO_SECTION}
        </Typography>
        <form className={props.classes.form} noValidate onSubmit={props.onSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="firstName"
                        id="firstName"
                        component={Input}
                        label="First Name"
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name="lastName"
                        id="lastName"
                        component={Input}
                        label="Last Name"
                        autoComplete="lname"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="phone"
                        id="phone"
                        component={InputPhone}
                        label="Phone Number"
                        autoComplete="phone"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Field
                        name="email"
                        id="email"
                        component={Input}
                        label="Email Address"
                        autoComplete="email"
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
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary"/>}
                        label={CONSTANTS.TERM_AND_CONDITION}
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
                {CONSTANTS.SIGN_UP}
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    <Link component={RouterLink} to={Routes.SIGN_IN} variant="body2">
                        {CONSTANTS.ALREADY_SIGN_IN}
                    </Link>
                </Grid>
            </Grid>
        </form>
    </Aux>;
}

let Admin = (props) => {
    const classes = useStyles();
    const [filePicked, setFilePicked] = useState('');
    const {handleSubmit, pristine, submitting, submitSucceeded} = props;
    const onPickFileHandler = (e) => {
        const file = e.target.files[0];
        setFilePicked(file.name)
    }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>
                {!(!pristine && submitting) ? (submitSucceeded ? <Redirect to={Routes.CONFIRM_SIGN_UP}/> :
                    <RenderAdmin classes={classes} onSubmit={handleSubmit} pristine={pristine}
                                 submitting={submitting} pickFile={onPickFileHandler} file={filePicked}/>) :
                    <Spinner/>}
            </div>
            <br/>
        </Container>
    );
}
export default reduxForm({
    form: 'Register',
    validate,
    onSubmit: submit,
})(Admin)

