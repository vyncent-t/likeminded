
import { useState } from "react";
import { useMutation } from "@apollo/client"



import Auth from "../utils/auth"
import { EDIT_CLIQUE_NAME } from "../utils/mutations";
import { EDIT_CLIQUE_ABOUT } from "../utils/mutations";


function EditCliqueCard(props) {

    const userID = Auth.getUser().data._id

    const [updateCliqueName, { errorName, dataCliqueName }] = useMutation(EDIT_CLIQUE_NAME)
    const [updateCliqueAbout, { errorAbout, dataCliqueAbout }] = useMutation(EDIT_CLIQUE_ABOUT)


    const [confirmModalOpen, toggleConfirmModalOpen] = useState(false)

    function toggleConfirmModal() {
        toggleConfirmModalOpen(!confirmModalOpen)
    }


    const cliqueID = props.editCliqueID
    console.log(`ready edits for clique ID ${cliqueID}`)

    const cliqueName = props.editCliqueName
    console.log(`ready edits for clique Name ${cliqueName}`)

    const cliqueAbout = props.editCliqueAbout
    console.log(`ready edits for clique About ${cliqueAbout}`)




    const [formState, setFormState] = useState({ id: cliqueID, clique_name: '', clique_about: '' })




    const handleNameChange = (event) => {
        // deconstruct the event.target object fields as their own variables
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        })
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
            const { data } = await updateCliqueName({
                variables: { id: cliqueID, clique_name: formState.clique_name },
            })

            console.log(data)
            console.log(`user declared clique name: ${formState.clique_name}`)
            console.log(`run edits for clique name`)
        } catch (e) {
            console.error(e)
        }



        try {
            const { data } = await updateCliqueAbout({
                variables: { id: cliqueID, clique_about: formState.clique_about },
            })

            console.log(data)
            console.log(`user declared clique about: ${formState.clique_about}`)
            console.log(`run edits for clique about`)
        } catch (e) {
            console.error(e)
        }

        console.log(formState.clique_name)
        console.log(formState.clique_about)



        window.location.replace(`/clique/${cliqueID}`);
    }

    return (
        <div className="card card-header m-3">
            <div>
                <h4 className="card-title">Edit clique</h4>
            </div>
            <div className="container">
                <form className="flex-row justify-center justify-space-between-md" onSubmit={handleFormSubmission}>
                    <div className="form-group row m-2 justify-content-around">
                        <div>
                            <label className="col-sm-2 col-form-label">Clique Name</label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    placeholder="Clique Name"
                                    name="clique_name"
                                    type="text"
                                    value={formState.clique_name}
                                    onChange={handleNameChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group row m-2">
                        <div>
                            <label className="col-sm-2 col-form-label">About this clique</label>
                            <div className="col-sm-10">
                                <input
                                    className="form-control"
                                    placeholder="Description"
                                    name="clique_about"
                                    type="text"
                                    value={formState.clique_about}
                                    onChange={handleAboutChange}
                                />
                            </div>
                        </div>
                    </div>


                    <div>
                        {!confirmModalOpen ? (<button className="btn btn-info m-3" onClick={toggleConfirmModal}>Update</button>) : (<div>
                            <p>Are you sure you want to update these changes?</p>
                            <button type="button" className="btn btn-info m-3" onClick={handleFormSubmission}>Update clique</button>
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

export default EditCliqueCard