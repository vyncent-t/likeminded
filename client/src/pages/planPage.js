import { Fragment } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';
import { FIND_PLAN } from '../utils/queries';
import { DELETE_PLAN } from "../utils/mutations"
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar"
import PlanCard from "../components/planCard"
import EditPlanCard from "../components/editPlanCard";



import Auth from "../utils/auth"
import CreatePlanCard from "../components/createPlanCard";




function PlanPage() {

    // redirect user on not logged in
    if (!Auth.loggedIn()) {
        window.location.replace('http://localhost:3000/')
    }

    const params = useParams()
    console.log("params for plan page")
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
    const planID = params.planID

    console.log("plan id read " + planID)

    // take the key from props._id for the clique id and then useQuery for findCliqueById


    // need to set up variables when finding by id
    const { loading, data } = useQuery(FIND_PLAN, {
        variables: { id: planID }
    });

    console.log("plan data for " + data)
    // const clique = data.findCliqueById.clique_name



    const [deletePlanById, { deleteError }] = useMutation(DELETE_PLAN)

    async function deleteChosenPlan(event) {

        const planID = event.target.value

        console.log(planID)
        try {
            const { data } = await deletePlanById({
                variables: { id: planID }
            })
            console.log(`deleted plan of id ${data}`)

        } catch (e) {
            console.log(e)
            console.log(deleteError)
        }

        window.location.replace(`http://localhost:3000/clique/${cliqueID}/event/${eventID}`);

    }




    return (
        <div>
            <Navbar />

            <div>
                <div>{`welcome id user ${currentUserID} ${Auth.getUser().data.username}`}</div>
                <h1>{`Plan`}</h1>
                <div>
                    <Link to={`/clique/${cliqueID}/event/${eventID}`}><button type="button" className="btn btn-info m-3">Back to event</button></Link>
                </div>
            </div>


            <div className="container">
                <div className="container justify-content-evenly">
                    {loading ? (<div>loading..</div>) :
                        (<div>
                            {data &&
                                (<div className="card bg-light mb-3">
                                    <div className="card-header container d-flex justify-content-between">
                                        <h4 className="card-title">{data.findPlanById.plan_name}</h4>
                                    </div>
                                    <div className="card-body">
                                        <p>{data.findPlanById.plan_about}</p>
                                        <p>plan id: {data.findPlanById._id}</p>
                                        <p>plan parent event id: {data.findPlanById.parent_event}</p>
                                        <p>plan author id: {data.findPlanById.plan_author}</p>
                                        <p>current user id: {currentUserID}</p>
                                    </div>


                                    <div className="container">

                                        {(currentUserID === data.findPlanById.plan_author) && (params.edit === "edit") ? (
                                            <div className="container d-flex justify-content-end">
                                                <div>
                                                    {!deleteModalOpen ? (<button className="btn btn-danger m-3" onClick={toggleDeleteModal}>Delete</button>) : (<div>
                                                        <p>Are you sure you want to delete?</p>
                                                        <button type="button" className="btn btn-danger m-3" value={data.findPlanById._id} onClick={deleteChosenPlan}>Delete plan</button>
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
                                <EditPlanCard
                                    editPlanID={data.findPlanById._id}
                                    editCliqueID={data.findPlanById.parent_clique}
                                    editEventID={data.findPlanById.parent_event}
                                    editPlanName={data.findPlanById.plan_name}
                                    editPlanAbout={data.findPlanById.plan_about}
                                />
                            </div>}

                        </div>)}
                </div>
            </div>
        </div>
    )
}

export default PlanPage