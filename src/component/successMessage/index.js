import React from 'react';
import {Alert} from "@material-ui/lab";
import * as MESSAGE from './../../constant/message';
import {Typography} from "@material-ui/core";

const SuccessMessage = (props) => {
    return (
        <Alert
            severity='success'><Typography>{MESSAGE.OTP_NOTIFICATION}<strong>KRAVI4350@GMAIL.COM</strong></Typography></Alert>
    );
}

export default SuccessMessage;