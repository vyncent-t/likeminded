
import { useState } from "react";
import { useMutation } from "@apollo/client"



import Auth from "../utils/auth"
import { EDIT_EVENT_NAME } from "../utils/mutations";
import { EDIT_EVENT_ABOUT } from "../utils/mutations";


function EditEventCard(props) {

    const userID = Auth.getUser().data._id

    const [updateEventName, { errorName, dataEventName }] = useMutation(EDIT_EVENT_NAME)
    const [updateEventAbout, { errorAbout, dataEventAbout }] = useMutation(EDIT_EVENT_ABOUT)


    const [confirmModalOpen, toggleConfirmModalOpen] = useState(false)

    function toggleConfirmModal() {
        toggleConfirmModalOpen(!confirmModalOpen)
    }



    const cliqueID = props.editCliqueID
    console.log(`ready edits for clique ID ${cliqueID}`)

    const eventID = props.editEventID
    console.log(`ready edits for event ID ${eventID}`)

    const eventName = props.editEventName
    console.log(`ready edits for event Name ${eventName}`)

    const eventAbout = props.editEventAbout
    console.log(`ready edits for event About ${eventAbout}`)




    const [formState, setFormState] = useState({ id: eventID, event_name: props.eventName, event_about: props.eventAbout })




    const handleNameChange = (event) => {
        // deconstruct the event.target object fields as their own variables
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        })

        console.log(formState.event_name)
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
            const { data } = await updateEventName({
                variables: { id: eventID, event_name: formState.event_name },
            })

            console.log(data)
            console.log(dataEventName)
            console.log(`user declared event name: ${formState.event_name}`)
            console.log(`run edits for event name`)
        } catch (e) {
            console.error(e)
        }



        try {
            const { data } = await updateEventAbout({
                variables: { id: eventID, event_about: formState.event_about },
            })

            console.log(data)
            console.log(dataEventAbout)
            console.log(`user declared event about: ${formState.event_about}`)
            console.log(`run edits for event about`)
        } catch (e) {
            console.error(e)
        }


        window.location.replace(`/clique/${cliqueID}/event/${eventID}/edit`);
    }

    return (
        <div className="card card-header m-3">
            <div>
                <h4 className="card-title">Edit event</h4>
            </div>
            <div className="container">
                <form className="flex-row justify-center justify-space-between-md" onSubmit={handleFormSubmission}>
                    <div className="form-group row m-2 justify-content-around">
                        <div>
                            <label className="col-sm-2 col-form-label">Event Name</label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    placeholder="Event Name"
                                    name="event_name"
                                    type="text"
                                    value={formState.event_name}
                                    onChange={handleNameChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group row m-2">
                        <div>
                            <label className="col-sm-2 col-form-label">About this event</label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    placeholder="Description"
                                    name="event_about"
                                    type="text"
                                    value={formState.event_about}
                                    onChange={handleAboutChange}
                                />
                            </div>
                        </div>
                    </div>


                    <div>
                        {!confirmModalOpen ? (<button className="btn btn-info m-3" onClick={toggleConfirmModal}>Update</button>) : (<div>
                            <p>Are you sure you want to update these changes?</p>
                            <button type="button" className="btn btn-info m-3" onClick={handleFormSubmission}>Update event</button>
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

export default EditEventCard