import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Selfie from "../components/Selfie";
import PersonalInformation from "../components/PersonalInformation";
import Homepage from "../homepage/Homepage";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existent route redirects to the homepage.
 */

function RoutesFunc({ login, signup }) {
    console.debug(
        "Routes",
        `login=${typeof login}`,
        `register=${typeof register}`,
    );

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Homepage />} />
                <Route exact path='/login' element={<LoginForm login={login} />} />
                <Route exact path='/signup' element={<SignupForm signup={signup} />} />
                <PrivateRoute exact path='/profile' element={<ProfileForm />} />
                <Route exact path='/Selfie' element={<Selfie />} />
                <Route exact path='/PersonalInformation' element={<PersonalInformation />} />
            </Routes>
        </Router>
    );
}

export default RoutesFunc;

