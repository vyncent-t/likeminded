import { Fragment } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';
import { FIND_EVENT } from '../utils/queries';
import { DELETE_EVENT } from "../utils/mutations"
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar"
import PlanCard from "../components/planCard"
import EditEventCard from "../components/editEventCard";



import Auth from "../utils/auth"
import InviteCard from "../components/inviteCard";
import CreatePlanCard from "../components/createPlanCard";




function EventPage() {

    // redirect user on not logged in
    if (!Auth.loggedIn()) {
        window.location.replace('http://localhost:3000/')
    }

    const params = useParams()
    console.log("params for event page")
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


    const [updateModalOpen, toggleUpdateModalOpen] = useState(false)

    function toggleUpdateModal() {
        toggleUpdateModalOpen(!updateModalOpen)
    }




    const cliqueID = params.cliqueID
    const eventID = params.eventID

    // take the key from props._id for the clique id and then useQuery for findCliqueById


    // need to set up variables when finding by id
    const { loading, data } = useQuery(FIND_EVENT, {
        variables: { id: eventID }
    });

    console.log("event data for " + data)
    // const clique = data.findCliqueById.clique_name



    const [deleteEventById, { deleteError }] = useMutation(DELETE_EVENT)

    async function deleteChosenEvent(event) {

        const eventID = event.target.value

        console.log(eventID)
        try {
            const { data } = await deleteEventById({
                variables: { id: eventID }
            })
            console.log(`deleted event of id ${data}`)

        } catch (e) {
            console.log(e)
            console.log(deleteError)
        }

        window.location.replace(`http://localhost:3000/clique/${cliqueID}/`);

    }




    return (
        <div>
            <Navbar />
            <div className=" m-3 d-flex">
                <div className="m-3">
                    <h1>{`Event`}</h1>
                    <div>
                        <Link to={`/clique/${cliqueID}`}><button type="button" className="btn btn-info">Back to clique</button></Link>
                    </div>
                    {/* <div>
                        <div>{`welcome id user ${currentUserID}`}  ${Auth.getUser().data.username}</div>
                    </div> */}
                </div>


                <div className="container">
                    <div className="container justify-content-evenly">
                        {loading ? (<div>loading..</div>) :
                            (<div>
                                {data &&
                                    (<div className="card bg-light mb-3">
                                        <div className="card-header container d-flex justify-content-between">
                                            <h4 className="card-title">{data.findEventById.event_name}</h4>
                                        </div>
                                        <div className="card-body">
                                            <p>{data.findEventById.event_about}</p>
                                            <p>event id: {data.findEventById._id}</p>
                                            <p>event parent clique id: {data.findEventById.parent_clique}</p>
                                            <p>event author id: {data.findEventById.event_author}</p>
                                            <p>current user id: {currentUserID}</p>
                                        </div>


                                        <div className="container">

                                            {(currentUserID === data.findEventById.event_author) && (params.edit === "edit") ? (
                                                <div className="container d-flex justify-content-end">
                                                    <div>
                                                        {!deleteModalOpen ? (<button className="btn btn-danger m-3" onClick={toggleDeleteModal}>Delete</button>) : (<div>
                                                            <p>Are you sure you want to delete?</p>
                                                            <button type="button" className="btn btn-danger m-3" value={data.findEventById._id} onClick={deleteChosenEvent}>Delete event</button>
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
                                    <EditEventCard editEventID={data.findEventById._id}
                                        editCliqueID={data.findEventById.parent_clique}
                                        editEventName={data.findEventById.event_name}
                                        editEventAbout={data.findEventById.event_about}
                                    />
                                </div>}


                                {inviteModalOpen &&
                                    <div>
                                        <InviteCard EventID={data.findEventById._id} />
                                    </div>}
                            </div>)}
                    </div>
                </div>
            </div>

            <div className="mx-4">
                <h2>Plans</h2>
                <div className="mx-3 d-flex flex-wrap flex-row">
                    <div className="d-flex justify-content-center" >
                        <CreatePlanCard currentUserID={currentUserID} currentCliqueID={cliqueID} />
                        <PlanCard currentUserID={currentUserID} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventPage