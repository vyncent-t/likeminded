import { useQuery } from '@apollo/client';
import { FIND_USERS_CLIQUES } from '../utils/queries';
import Navbar from "../components/Navbar"
import CliqueCard from "../components/cliqueCard"
import CreateCliqueCard from "../components/createCliqueCard";

import Auth from "../utils/auth"

function Dashboard() {

    // redirect user on not logged in
    if (!Auth.loggedIn()) {
        window.location.replace('http://localhost:3000/')
    }

    const userID = Auth.getUser().data._id
    // need to set up variables when finding by id
    const { loading, data } = useQuery(FIND_USERS_CLIQUES, {
        variables: { id: userID }
    });


    console.log("clique data" + data)
    const cliques = data?.findUserCliqueMemberOf || []

    return (
        <div>
            <Navbar />
            <h1>{`welcome ${Auth.getUser().data.username}`}</h1>
            {/* <div>{`welcome ${userID}`}</div> */}
            <div><h3>Dashboard</h3></div>
            <div>
                {loading ? (<div>loading..</div>) : (
                    <div className="d-flex justify-content-center mx-5">
                        <CliqueCard cliques={cliques} currentUserID={userID} />
                    </div>)}
            </div>
        </div>
    )
}

export default Dashboard