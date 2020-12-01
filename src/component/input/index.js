import React from 'react';
import {TextField} from '@material-ui/core';
import MuiPhoneNumber from "material-ui-phone-number";

export const Input = ({input, label, meta: {touched, error, warning}, ...custom}) => {
    return (
        <TextField
            name={input}
            variant='outlined'
            fullWidth
            label={label}
            error={touched && (typeof error !== "undefined")}
            helperText={touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            required
            {...input}
            {...custom}
        />
    )
}
export const InputPhone = ({input, label, meta: {touched, error, warning}, ...custom}, refName) => {
    return (
        <MuiPhoneNumber
            name="phone"
            variant='outlined'
            fullWidth
            label="Phone Number"
            error={touched && (typeof error !== "undefined")}
            helperText={touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            required
            {...input}
            {...custom}
            data-cy="user-phone"
            defaultCountry={"in"}
        />
    )
}
