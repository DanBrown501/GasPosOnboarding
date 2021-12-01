import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useLocalStorage from "./hooks/useLocalStorage";
import Navigation from "./routes-nav/Navigation";
// import RoutesFunc from "./routes-nav/RoutesFunc";
import LoadingSpinner from "./common/LoadingSpinner";
import GasPosApi from "./api/api";
import UserContext from "./auth/UserContext";
import jwt from "jsonwebtoken";
import Selfie from "./components/Selfie";
import PersonalInformation from "./components/PersonalInformation";
import Homepage from "./homepage/Homepage";
import LoginForm from "./auth/LoginForm";
import SignupForm from "./auth/SignupForm";
import PrivateRoute from "./routes-nav/PrivateRoute";

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "GasPos-token";

/** Jobly application.
 *
 * - infoLoaded: has user data been pulled from API?
 *   (this manages spinner for "loading...")
 *
 * - currentUser: user obj from API. This becomes the canonical way to tell
 *   if someone is logged in. This is passed around via context throughout app.
 *
 * - token: for logged in users, this is their authentication JWT.
 *   Is required to be set for most API calls. This is initially read from
 *   localStorage and synced to there via the useLocalStorage hook.
 *
 * App -> Routes
 */


/** Handles site-wide signup.
    *
    * Automatically logs them in (set token) upon signup.
    *
    * Make sure you await this function and check its return value!
    */
async function signup(signupData) {
    try {
        let token = await GasPosApi.signup(signupData);
        setToken(token);
        return { success: true };
    } catch (errors) {
        console.error("signup failed", errors);
        return { success: false, errors };
    }
}

/** Handles site-wide login.
 *
 * Make sure you await this function and check its return value!
 */
async function login(loginData) {
    try {
        let token = await GasPosApi.login(loginData);
        setToken(token);
        return { success: true };
    } catch (errors) {
        console.error("login failed", errors);
        return { success: false, errors };
    }
}

function App({ login, signup }) {
    const [infoLoaded, setInfoLoaded] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

    console.debug(
        "App",
        "infoLoaded=", infoLoaded,
        "currentUser=", currentUser,
        "token=", token,
    );

    // Load user info from API. Until a user is logged in and they have a token,
    // this should not run. It only needs to re-run when a user logs out, so
    // the value of the token is a dependency for this effect.

    useEffect(function loadUserInfo() {
        console.debug("App useEffect loadUserInfo", "token=", token);

        async function getCurrentUser() {
            if (token) {
                try {
                    let { username } = jwt.decode(token);
                    // put the token on the Api class so it can use it to call the API.
                    GasPosApi.token = token;
                    let currentUser = await GasPosApi.getCurrentUser(username);
                    setCurrentUser(currentUser);
                } catch (err) {
                    console.error("App loadUserInfo: problem loading", err);
                    setCurrentUser(null);
                }
            }
            setInfoLoaded(true);
        }

        // set infoLoaded to false while async getCurrentUser runs; once the
        // data is fetched (or even if an error happens!), this will be set back
        // to false to control the spinner.
        setInfoLoaded(false);
        getCurrentUser();
    }, [token]);

    /** Handles site-wide logout. */
    function logout() {
        setCurrentUser(null);
        setToken(null);
    }

   


    if (!infoLoaded) return <LoadingSpinner />;

    return (
        <BrowserRouter>
            <UserContext.Provider
                value={{ currentUser, setCurrentUser }}>
                <div className="App">
                    <Navigation logout={logout} />
                    <Routes>
                        <Route exact path='/' element={<Homepage />} />
                        <Route exact path='/login' element={<LoginForm login={login} />} />
                        <Route exact path='/signup' element={<SignupForm signup={signup} />} />
                        <Route path='/profile' element={<PrivateRoute />} />
                        <Route exact path='/Selfie' element={<Selfie />} />
                        <Route exact path='/PersonalInformation' element={<PersonalInformation />} />
                    </Routes>
                </div>
            </UserContext.Provider>
        </BrowserRouter>
    );
}

export default App;
