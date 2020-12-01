import {Aux} from "../../hoc";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import * as MESSAGE from "../../constant/message";
import Grid from "@material-ui/core/Grid";
import {Field} from "redux-form";
import {Input} from "../input";
import Button from "@material-ui/core/Button";
import * as CONSTANTS from "../../constant/actions";
import {ButtonSpinner} from "../../ui/buttonSpinner";
import React from "react";

export const RenderEmail=(props)=> {
    return <Aux>
        <Typography component="h1" variant="h4">
            <Box mb={4}><strong>{MESSAGE.FORGOT_PASSWORD}</strong></Box>
        </Typography>
        <Typography component="h1" variant="h6">
            {MESSAGE.FORGOT_PASSWORD_TITLE}
        </Typography>
        <form className={props.classes.form} noValidate
              onSubmit={props.onSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Field
                        name="email"
                        id="email"
                        component={Input}
                        label="email"
                        autoComplete="email"
                        margin="normal"
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