import Samplepage from "../components/Samplepage";
import UserSignUp from "../components/userSignUp";

const { default: Navbar } = require("../components/Navbar");


function CreateLogInPage() {

    return (
        <div>
            <Navbar />
            <UserSignUp />
            <Samplepage />
        </div>
    )
}

export default CreateLogInPage