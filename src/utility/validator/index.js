import * as ERROR from '../../constant/errors'

export const validate = (values) => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = ERROR.REQUIRED
    } else if (values.firstName.length < 2) {
        errors.firstName = ERROR.FIRST_NAME
    }
    if (!values.lastName) {
        errors.lastName = ERROR.REQUIRED
    } else if (values.lastName.length < 2) {
        errors.lastName = ERROR.LAST_NAME
    }
    if (!values.email) {
        errors.email = ERROR.REQUIRED
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = ERROR.EMAIL
    }
    if (!values.password) {
        errors.password = ERROR.REQUIRED
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/i.test(values.password)) {
        errors.password = ERROR.PASSWORD
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = ERROR.REQUIRED;
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = ERROR.CONFIRM_PASSWORD;
    }
    if (!values.otp) {
        errors.otp = ERROR.REQUIRED
    } else if (!/^[0-9]{6}$/i.test(values.otp)) {
        errors.otp = ERROR.OTP
    }
    if (!values.phone) {
        errors.phone = ERROR.REQUIRED
    } else if (!/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/i.test(values.phone)) {
        errors.phone = ERROR.PHONE
    }

    return errors
}