import { Fragment } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';
import { FIND_CLIQUE } from '../utils/queries';
import { DELETE_CLIQUE } from "../utils/mutations"

import Navbar from "../components/Navbar"
import CliqueCard from "../components/cliqueCard"
import CreateCliqueCard from "../components/createCliqueCard";



import Auth from "../utils/auth"




function CliquePage() {

    // redirect user on not logged in
    if (!Auth.loggedIn()) {
        window.location.replace('http://localhost:3000/')
    }

    const params = useParams()
    console.log(params)
    const currentUserID = Auth.getUser().data._id

    const [deleteModalOpen, toggleDeleteModalOpen] = useState(false)

    function toggleDeleteModal() {
        toggleDeleteModalOpen(!deleteModalOpen)
    }

    const cliqueID = params.cliqueID

    // take the key from props._id for the clique id and then useQuery for findCliqueById


    // need to set up variables when finding by id
    const { loading, data } = useQuery(FIND_CLIQUE, {
        variables: { id: cliqueID }
    });

    console.log("clique data for " + data)
    // const clique = data.findCliqueById.clique_name



    const [deleteCliqueById, { deleteError }] = useMutation(DELETE_CLIQUE)

    async function deleteChosenClique(event) {

        const cliqueID = event.target.value

        console.log(cliqueID)
        try {
            const { data } = await deleteCliqueById({
                variables: { id: cliqueID }
            })
            console.log(`deleted clique of id ${data}`)

        } catch (e) {
            console.log(e)
            console.log(deleteError)
        }

        window.location.replace("http://localhost:3000/dashboard");

    }




    return (
        <Fragment>
            <Navbar />
            <h1>{`Clique info - reader ${Auth.getUser().data.username}`}</h1>
            <div>{`welcome id user ${currentUserID}`}</div>
            <div>
                <div className="container justify-content-evenly">
                    {loading ? (<div>loading..</div>) :
                        (<div>
                            {data &&
                                (<div className="card bg-light mb-3">
                                    <div className="card-header">
                                        <h4 className="card-title">{data.findCliqueById.clique_name}</h4>
                                    </div>
                                    <div className="card-body">
                                        <p>{data.findCliqueById.clique_about}</p>
                                        <p>clique id: {data.findCliqueById._id}</p>
                                        <p>clique author id: {data.findCliqueById.clique_author}</p>
                                        <p>current user id: {currentUserID}</p>
                                    </div>
                                    {currentUserID === data.findCliqueById.clique_author ? (<div className="container d-flex justify-content-end">
                                        {!deleteModalOpen ? (<button className="btn btn-danger m-3" onClick={toggleDeleteModal}>Delete</button>) : (<div>
                                            <p>Are you sure you want to delete?</p>
                                            <button type="button" className="btn btn-danger m-3" value={data.findCliqueById._id} onClick={deleteChosenClique}>Delete clique</button>
                                            <button type="button" className="btn m-3" onClick={toggleDeleteModal}>Cancel</button>
                                        </div>)}
                                        <div>
                                            <button type="button" className="btn btn-info m-3">Update</button>
                                        </div>
                                    </div>) : (<div>
                                        <div>Click...</div>
                                    </div>)}
                                </div>)
                            }
                        </div>)}
                </div>
            </div>
        </Fragment>
    )
}

export default CliquePage