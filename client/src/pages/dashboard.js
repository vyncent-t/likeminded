import { Fragment } from "react"
import { useQuery } from '@apollo/client';
import { FIND_USERS_CLIQUES } from '../utils/queries';
import Navbar from "../components/Navbar"
import CliqueCard from "../components/cliqueCard"
import CreateCliqueCard from "../components/createCliqueCard";

import Auth from "../utils/auth"

function Dashboard() {

    const userID = Auth.getUser().data._id
    // need to set up variables when finding by id
    const { loading, data } = useQuery(FIND_USERS_CLIQUES, {
        variables: { id: userID }
    });


    console.log("clique data" + data)
    const cliques = data?.findUserCliqueMemberOf || []

    return (
        <Fragment>
            <Navbar />
            <h1>{`welcome ${Auth.getUser().data.username}`}</h1>
            <div>{`welcome ${userID}`}</div>
            <div >
                <div className="container justify-content-evenly">
                    {loading ? (<div>loading..</div>) : (<CliqueCard cliques={cliques} currentUserID={userID} />)}
                    <CreateCliqueCard />
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard