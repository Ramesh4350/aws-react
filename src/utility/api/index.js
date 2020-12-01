import {Auth} from "@aws-amplify/auth";

export const signUp = (userDetail) => {
    Auth.signUp({
        username: userDetail.email,
        password: userDetail.password,
        attributes: {
            email: userDetail.email,
            phone_number: userDetail.phone,
            given_name: userDetail.firstName,
            family_name: userDetail.lastName,
        }

    }).then(res => {
        console.log(res)

    }).catch(onerror => {
            console.log(onerror)
        }
    )
}
export const signIn = (userDetail) => {
    Auth.signIn({
        username: userDetail.email,
        password: userDetail.password,

    }).then(res => {
        console.log(res)

    }).catch(onerror => {
            console.log(onerror);
        }
    )
}


export const confirmSignUp = (email, code) => {
    Auth.confirmSignUp(email, code).then(res => {
        console.log(res)
    }).catch(onerror => {
        console.log(onerror)
    })
}

export const resendOtp = (userDetail) => {
    Auth.resendSignUp(userDetail.email).then(res => {
        console.log(res)
    }).catch(onerror => {
        console.log(onerror)
    })
}
export const forgotPassword = (userDetail) => {
    Auth.forgotPassword(userDetail.email).then(res => {
        console.log(res)
    }).catch(onerror => {
        console.log(onerror)
    })
}

export const resetForgotPassword = (userDetail) => {
    Auth.forgotPasswordSubmit(
        userDetail.email,
        userDetail.code,
        userDetail.password
    ).then(res => {
        console.log(res)
    }).catch(onerror => {
        console.log(onerror)
    })
}

export const signOut = () => {
    Auth.signOut().then(res => {
        console.log(res)
    }).catch(onerror => {
        console.log(onerror)
    })
}
export const currentSession= Auth.currentSession();