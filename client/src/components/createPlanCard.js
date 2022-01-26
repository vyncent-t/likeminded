
import { useState } from "react";
import { useMutation } from "@apollo/client"
import { useParams } from "react-router-dom"



import Auth from "../utils/auth"
import { CREATE_NEW_PLAN } from "../utils/mutations";
// import { ADD_NEW_MEMBER } from "../utils/mutations";
// import { ADD_NEW_AUTHOR } from "../utils/mutations"


function CreatePlanCard(props) {

    const params = useParams()
    const userID = Auth.getUser().data._id
    const cliqueID = params.cliqueID
    const eventID = params.eventID

    const [planFormState, setPlanFormState] = useState({ plan_author: userID, parent_event: eventID, plan_name: '', plan_about: '' })

    const [createNewPlan, { error, dataPlan }] = useMutation(CREATE_NEW_PLAN)
    // const [addEventMember, { errorAdd, dataAdd }] = useMutation(ADD_NEW_MEMBER)
    // const [addCliqueAuthor, { errorAuthor, dataAuthor }] = useMutation(ADD_NEW_AUTHOR)


    const handleChange = (event) => {
        // deconstruct the event.target object fields as their own variables
        const { name, value } = event.target

        setPlanFormState({
            ...planFormState,
            [name]: value
        })
    }


    // need to add the add member mutation in the form handler
    const handleFormSubmission = async (event) => {
        event.preventDefault();
        console.log(`user declared plan name: ${planFormState.plan_name}`)
        console.log(`user declared plan about: ${planFormState.plan_about}`)

        try {
            const { data } = await createNewPlan({
                variables: { ...planFormState },
            })

            console.log(`run in match plan id: ${data._id}`)
            console.log(`creating plan... ${dataPlan}`)
        } catch (e) {
            console.log("error in plan creation")
            console.error(e)
            console.error(error)
        }


        window.location.reload();
    }

    return (
        <div className="card d-flex w-auto h-75 m-5">
            <div className="card-header">
                <h4 className="card-title">Create new plan</h4>
            </div>
            <div className="m-3">
                <form onSubmit={handleFormSubmission}>
                    <div className="form-group row m-2">
                        <div>
                            <label>Plan Name</label>
                            <input
                                className="form-control"
                                placeholder="Plan Name"
                                name="plan_name"
                                type="text"
                                value={planFormState.plan_name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group m-2">
                        <div>
                            <label>About this plan</label>
                            <input
                                className="form-control"
                                placeholder="Description"
                                name="plan_about"
                                type="text"
                                value={planFormState.plan_about}
                                onChange={handleChange}
                            />
                        </div>
                    </div>


                    <div className="form-group row m-2 mt-3 justify-content-center">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Create Plan</button>
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

export default CreatePlanCard