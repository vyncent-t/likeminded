import { Fragment } from "react";
import Samplepage from "../components/Samplepage";
import UserSignUp from "../components/userSignUp";
import UserLogIn from "../components/userLogIn";

const { default: Navbar } = require("../components/Navbar");


function CreateLogInPage() {

    return (
        <div>
            <Navbar />
            <div className="container d-flex justify-content-between">
                <UserSignUp />
                <UserLogIn />
            </div>
            <Samplepage />
        </div>
    )
}

export default CreateLogInPage