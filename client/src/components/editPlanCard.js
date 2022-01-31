
import { useState } from "react";
import { useMutation } from "@apollo/client"



import Auth from "../utils/auth"
import { EDIT_PLAN_NAME } from "../utils/mutations";
import { EDIT_PLAN_ABOUT } from "../utils/mutations";


function EditPlanCard(props) {

    const userID = Auth.getUser().data._id

    const [updatePlanName, { errorName, dataPlanName }] = useMutation(EDIT_PLAN_NAME)
    const [updatePlanAbout, { errorAbout, dataPlanAbout }] = useMutation(EDIT_PLAN_ABOUT)


    const [confirmModalOpen, toggleConfirmModalOpen] = useState(false)

    function toggleConfirmModal() {
        toggleConfirmModalOpen(!confirmModalOpen)
    }



    const cliqueID = props.editCliqueID
    console.log(`ready edits for clique ID ${cliqueID}`)

    const eventID = props.editEventID
    console.log(`ready edits for event ID ${eventID}`)

    const planID = props.editPlanID
    console.log(`ready edits for plan ID ${planID}`)

    const planName = props.editPlanName
    console.log(`ready edits for plan Name ${planName}`)

    const planAbout = props.editPlanAbout
    console.log(`ready edits for plan About ${planAbout}`)




    const [formState, setFormState] = useState({ id: planID, plan_name: props.planName, plan_about: props.planAbout })




    const handleNameChange = (event) => {
        // deconstruct the event.target object fields as their own variables
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        })

        console.log(formState.plan_name)
    }


    const handleAboutChange = (event) => {
        // deconstruct the event.target object fields as their own variables
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        })
    }



    // need to add the add member mutation in the form handler
    const handleFormSubmission = async (event) => {
        event.preventDefault();

        try {
            const { data } = await updatePlanName({
                variables: { id: planID, plan_name: formState.plan_name },
            })

            console.log(data)
            console.log(dataPlanName)
            console.log(`user declared plan name: ${formState.plan_name}`)
            console.log(`run edits for plan name`)
        } catch (e) {
            console.error(e)
        }



        try {
            const { data } = await updatePlanAbout({
                variables: { id: planID, plan_about: formState.plan_about },
            })

            console.log(data)
            console.log(dataPlanAbout)
            console.log(`user declared plan about: ${formState.plan_about}`)
            console.log(`run edits for plan about`)
        } catch (e) {
            console.error(e)
        }


        window.location.replace(`/clique/${cliqueID}/event/${eventID}/plan/${planID}/edit`);
    }

    return (
        <div className="card w-50 h-75 m-5">
            <div className="card-header">
                <h4 className="card-title">Edit plan</h4>
            </div>
            <div className="m-3">
                <form className="" onSubmit={handleFormSubmission}>
                    <div className="form-group row m-2">
                        <div>
                            <label>Plan Name</label>
                            <input
                                className="form-control"
                                placeholder="Plan Name"
                                name="plan_name"
                                type="text"
                                value={formState.plan_name}
                                onChange={handleNameChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row m-2">
                        <div>
                            <label>About this plan</label>
                            <input
                                className="form-control"
                                placeholder="Description"
                                name="plan_about"
                                type="text"
                                value={formState.plan_about}
                                onChange={handleAboutChange}
                            />
                        </div>
                    </div>


                    <div>
                        {!confirmModalOpen ? (<button className="btn btn-info m-3" onClick={toggleConfirmModal}>Update</button>) : (<div>
                            <p>Are you sure you want to update these changes?</p>
                            <button type="button" className="btn btn-info m-3" onClick={handleFormSubmission}>Update plan</button>
                            <button type="button" className="btn m-3" onClick={toggleConfirmModal}>Cancel</button>
                        </div>)}
                    </div>

                    <div className="form-group row m-2 mt-3">

                        {(errorName || errorAbout) && (
                            <div className="my-3 p-3 bg-danger text-white rounded">
                                {errorName.message}
                                {errorAbout.message}
                            </div>
                        )}
                    </div>
                </form>
            </div>

        </div>
    )
}

export default EditPlanCard