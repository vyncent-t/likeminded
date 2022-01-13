import { Fragment } from "react";
import Samplepage from "../components/Samplepage";
import UserSignUp from "../components/userSignUp";
import UserLogIn from "../components/userLogIn";

import Navbar from "../components/Navbar";

import Auth from "../utils/auth"

function CreateLogInPage() {

    return (
        <div>
            <Navbar />
            <div className="container d-flex justify-content-between">
                {!Auth.loggedIn() ? (<Fragment>
                    <UserSignUp />
                    <UserLogIn />
                </Fragment>) : <Fragment>
                    <UserLogIn />
                </Fragment>}
            </div>
            <Samplepage />
        </div>
    )
}

export default CreateLogInPage