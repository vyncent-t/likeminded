
import { useState } from "react";
import { useMutation } from "@apollo/client"



import Auth from "../utils/auth"
import { CREATE_NEW_CLIQUE } from "../utils/mutations";
// import { ADD_NEW_MEMBER } from "../utils/mutations";
import { ADD_NEW_AUTHOR } from "../utils/mutations"


function CreateCliqueCard() {

    const userID = Auth.getUser().data._id

    const [formState, setFormState] = useState({ clique_author: userID, clique_name: '', clique_about: '' })

    const [createNewClique, { error, dataClique }] = useMutation(CREATE_NEW_CLIQUE)
    // const [addCliqueMember, { errorAdd, dataAdd }] = useMutation(ADD_NEW_MEMBER)
    const [addCliqueAuthor, { errorAuthor, dataAuthor }] = useMutation(ADD_NEW_AUTHOR)


    const handleChange = (event) => {
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
        console.log(`user declared clique name: ${formState.clique_name}`)
        console.log(`user declared clique about: ${formState.clique_about}`)

        try {
            const { data } = await createNewClique({
                variables: { ...formState },
            })

            console.log(`run in match clique id: ${data._id}`)
            console.log(`creating clique... ${dataClique}`)
        } catch (e) {
            console.log("error in clique creation")
            console.error(e)
            console.error(error)
        }

        try {
            const { dataA } = await addCliqueAuthor({
                variables: { clique_author: userID, clique_name: formState.clique_name, newUser: userID }
            })

            console.log(`created a new clique, author id: ${dataA}`)
            console.log(`created a new clique: ${dataAuthor}`)
        } catch (e) {
            console.log("error in clique author pin")
            console.error(e)
            console.error(errorAuthor)
        }


        window.location.reload();
    }

    return (
        <div className="card d-flex w-auto h-auto m-5">
            <div className="card-header">
                <h4 className="card-title">Create new clique</h4>
            </div>
            <div className="m-3">
                <form onSubmit={handleFormSubmission}>
                    <div className="form-group row m-2">
                        <div>
                            <label>Clique Name</label>
                            <input
                                className="form-control"
                                placeholder="Clique Name"
                                name="clique_name"
                                type="text"
                                value={formState.clique_name}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row m-2">
                        <div>
                            <label >About this clique</label>
                            <input
                                className="form-control"
                                placeholder="Description"
                                name="clique_about"
                                type="text"
                                value={formState.clique_about}
                                onChange={handleChange}
                            />
                        </div>
                    </div>


                    <div className="form-group row m-2 mt-3 justify-content-center">
                        <div className="col-sm-10">
                            <button type="submit" className="btn btn-primary">Create Clique</button>
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

export default CreateCliqueCard