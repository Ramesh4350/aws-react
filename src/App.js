import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, useHistory} from "react-router-dom";
import SignUp from './container/auth/signUp';
import SignIn from './container/auth/signIn';
import Home from './container/home';
import ConfirmSignUp from './container/auth/confirmSignUp';
import * as Routes from './routes'
import * as Sentry from "@sentry/react";
import ResetAccount from "./container/auth/resetAccount";
import ResetPasswordSuccess from "./container/auth/resetPasswordSuccess";
import FeedList from "./container/video/videoList";
import FeedDetail from "./container/video/videoDetail";
import {currentSession, signOut} from './utility/api';
import UploadVideo from './container/video/admin';

const App = () => {
    const history = useHistory();
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isAuthenticated, userHasAuthenticated] = useState(false);

    useEffect(() => {
        onLoad();
    }, []);

    async function onLoad() {
        try {
            await currentSession;
            userHasAuthenticated(true);
        } catch (e) {
            if (e !== 'No current user') {
                console.log(e);
            }
        }

        setIsAuthenticating(false);
    }

    async function handleLogout() {
        await signOut;

        userHasAuthenticated(false);

        history.push("/login");
    }

    return (
        <BrowserRouter>
            <Home>
                <Route path={Routes.SIGN_UP} exact component={SignUp}/>
                <Route path={Routes.CONFIRM_SIGN_UP} exact component={ConfirmSignUp}/>
                <Route path={Routes.SIGN_IN} exact component={SignIn}/>
                <Route path={Routes.RESET_PASSWORD} exact component={ResetAccount}/>
                <Route path={Routes.RESET_PASSWORD_SUCCESSFUL} exact component={ResetPasswordSuccess}/>
                <Route path={Routes.FEED_LIST} exact component={FeedList}/>
                <Route path={Routes.FEED_DETAIL} exact component={FeedDetail}/>
                <Route path={Routes.UPLOAD_VIDEO} exact component={UploadVideo}/>
            </Home>
        </BrowserRouter>
    );
}

export default Sentry.withProfiler(App);