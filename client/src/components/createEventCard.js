
import { useState } from "react";
import { useMutation } from "@apollo/client"



import Auth from "../utils/auth"
import { CREATE_NEW_EVENT } from "../utils/mutations";
// import { ADD_NEW_MEMBER } from "../utils/mutations";
import { ADD_NEW_AUTHOR } from "../utils/mutations"


function CreateEventCard(props) {

    const userID = Auth.getUser().data._id
    const cliqueID = props.currentCliqueID

    const [eventFormState, setEventFormState] = useState({ event_author: userID, parent_clique: cliqueID, event_name: '', event_about: '' })

    const [createNewEvent, { error, dataEvent }] = useMutation(CREATE_NEW_EVENT)
    // const [addEventMember, { errorAdd, dataAdd }] = useMutation(ADD_NEW_MEMBER)
    // const [addCliqueAuthor, { errorAuthor, dataAuthor }] = useMutation(ADD_NEW_AUTHOR)


    const handleChange = (event) => {
        // deconstruct the event.target object fields as their own variables
        const { name, value } = event.target

        setEventFormState({
            ...eventFormState,
            [name]: value
        })
    }


    // need to add the add member mutation in the form handler
    const handleFormSubmission = async (event) => {
        event.preventDefault();
        console.log(`user declared event name: ${eventFormState.event_name}`)
        console.log(`user declared event about: ${eventFormState.event_about}`)

        try {
            const { data } = await createNewEvent({
                variables: { ...eventFormState },
            })

            console.log(`run in match event id: ${data._id}`)
            console.log(`creating event... ${dataEvent}`)
        } catch (e) {
            console.log("error in event creation")
            console.error(e)
            console.error(error)
        }

        // try {
        //     const { dataA } = await addCliqueAuthor({
        //         variables: { clique_author: userID, clique_name: eventFormState.clique_name, newUser: userID }
        //     })

        //     console.log(`created a new clique, author id: ${dataA}`)
        //     console.log(`created a new clique: ${dataAuthor}`)
        // } catch (e) {
        //     console.log("error in clique author pin")
        //     console.error(e)
        //     console.error(errorAuthor)
        // }


        window.location.reload();
    }

    return (
        <div className="card card-header m-3">
            <div>
                <h4 className="card-title">Create new event</h4>
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
                                    value={eventFormState.event_name}
                                    onChange={handleChange}
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
                                    value={eventFormState.event_about}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>


                    <div className="form-group row m-2 mt-3">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Create Event</button>
                        </div>

                        {error && (
                            <div className="my-3 p-3 bg-danger text-white rounded">
                                {error.message}
                            </div>
                        )}
                    </div>
                </form>
            </div>

        </div>
    )
}

export default CreateEventCard