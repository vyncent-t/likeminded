import { Fragment } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';
import { FIND_CLIQUE } from '../utils/queries';
import { DELETE_CLIQUE, REMOVE_MEMBER } from "../utils/mutations"

import Navbar from "../components/Navbar"
import CliqueCard from "../components/cliqueCard"
import EditCliqueCard from "../components/editCliqueCard";



import Auth from "../utils/auth"
import InviteCard from "../components/inviteCard";
import LeaveCard from "../components/inviteCard";
import EventCard from "../components/eventCard";
import CreateEventCard from "../components/createEventCard";




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



    const [inviteModalOpen, toggleInviteModalOpen] = useState(false)

    function toggleInviteModal() {
        toggleInviteModalOpen(!inviteModalOpen)
    }

    const [leaveModalOpen, toggleLeaveModalOpen] = useState(false)

    function toggleLeaveModal() {
        toggleLeaveModalOpen(!leaveModalOpen)
    }


    const [updateModalOpen, toggleUpdateModalOpen] = useState(false)

    function toggleUpdateModal() {
        toggleUpdateModalOpen(!updateModalOpen)
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
    const [removeCliqueMember, { removeError }] = useMutation(REMOVE_MEMBER)

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

    async function userLeaveClique() {

        try {
            const { data } = await removeCliqueMember({
                variables: { id: cliqueID, targetUser: currentUserID }
            })
            console.log(`deleted clique of id ${data}`)

        } catch (e) {
            console.log(e)
            console.log(deleteError)
        }

        window.location.replace("http://localhost:3000/dashboard");

    }


    return (
        <div>
            <Navbar />
            <div className="container m-3 d-flex">
                <div>
                    <div>{`welcome id user ${currentUserID}  ${Auth.getUser().data.username}`}</div>
                    <h1>{`Clique`}</h1>
                    <div>
                        <button className="btn btn-primary m-3" onClick={toggleInviteModal}>Invite</button>
                        {!leaveModalOpen ? (<span>
                            <button className="btn btn-secondary m-3" onClick={toggleLeaveModal}>Leave Clique</button>
                        </span>) : (
                            <span>
                                <p>Are you sure you want to leave this clique?</p>
                                <button className="btn btn-danger m-3" onClick={userLeaveClique}>Leave</button>
                                <button className="btn btn-secondary m-3" onClick={toggleLeaveModal}>Cancel</button>
                            </span>
                        )}
                    </div>
                </div>
                <div className="container">
                    <div className="container justify-content-evenly">
                        {loading ? (<div>loading..</div>) :
                            (<div>
                                {data &&
                                    (<div className="card bg-light mb-3">
                                        <div className="card-header container d-flex justify-content-between">
                                            <h4 className="card-title">{data.findCliqueById.clique_name}</h4>
                                            {(currentUserID === data.findCliqueById.clique_author) && (params.edit === "edit") && (
                                                <div>
                                                    <button className="btn btn-primary" onClick={toggleInviteModal}>invite</button>
                                                </div>
                                            )}
                                        </div>
                                        <div className="card-body">
                                            <p>{data.findCliqueById.clique_about}</p>
                                            <p>clique id: {data.findCliqueById._id}</p>
                                            <p>clique author id: {data.findCliqueById.clique_author}</p>
                                            <p>current user id: {currentUserID}</p>
                                        </div>


                                        <div className="container">

                                            {(currentUserID === data.findCliqueById.clique_author) && (params.edit === "edit") ? (
                                                <div className="container d-flex justify-content-end">
                                                    <div>
                                                        {!deleteModalOpen ? (<button className="btn btn-danger m-3" onClick={toggleDeleteModal}>Delete</button>) : (<div>
                                                            <p>Are you sure you want to delete?</p>
                                                            <button type="button" className="btn btn-danger m-3" value={data.findCliqueById._id} onClick={deleteChosenClique}>Delete clique</button>
                                                            <button type="button" className="btn m-3" onClick={toggleDeleteModal}>Cancel</button>
                                                        </div>)}
                                                    </div>
                                                    <div>
                                                        <button className="btn btn-info m-3" onClick={toggleUpdateModal}>Edit</button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div>Click...</div>
                                                </div>)}
                                        </div>
                                    </div>)
                                }


                                {updateModalOpen && <div>
                                    <EditCliqueCard editCliqueID={data.findCliqueById._id}
                                        editCliqueName={data.findCliqueById.clique_name}
                                        editCliqueAbout={data.findCliqueById.clique_about}
                                    />
                                </div>}


                                {inviteModalOpen &&
                                    <div>
                                        <InviteCard CliqueID={data.findCliqueById._id} />
                                    </div>}
                            </div>)}
                    </div>
                </div>
            </div>

            <div className="mx-4">
                <h2>Events</h2>
                <div className="mx-3 d-flex flex-wrap flex-row">
                    <div className="d-flex justify-content-center" >
                        <CreateEventCard currentUserID={currentUserID} currentCliqueID={cliqueID} />
                        <EventCard currentUserID={currentUserID} />
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CliquePage