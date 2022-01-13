import { Fragment } from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client"
import { useQuery } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations"
import { Link } from "react-router-dom"

import Auth from "../utils/auth"
import { CREATE_NEW_CLIQUE } from "../utils/mutations";
import { ADD_NEW_MEMBER } from "../utils/mutations";
import { ADD_NEW_AUTHOR } from "../utils/mutations"


function CreateCliqueCard() {

    const userID = Auth.getUser().data._id

    const [formState, setFormState] = useState({ clique_author: userID, clique_name: '', clique_about: '' })

    const [createNewClique, { error, data }] = useMutation(CREATE_NEW_CLIQUE)
    const [addCliqueMember, { errorAdd, dataAdd }] = useMutation(ADD_NEW_MEMBER)
    const [addCliqueAuthor, { errorAuthor, dataAuthor }] = useMutation(ADD_NEW_AUTHOR)


    // const { loading, dataNarrow } = useQuery(FIND_NARROW_CLIQUE, {
    //     variables: { author_id: userID, clique_name: formState.clique_name }
    // })

    // const [findCliqueByNarrow, { errorNarrow, dataNarrow }] = useQuery(FIND_NARROW_CLIQUE)

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
        } catch (e) {
            console.log("error in clique creation")
            console.error(e)
        }

        try {
            const { data } = await addCliqueAuthor({
                variables: { clique_author: userID, clique_name: formState.clique_name, newUser: userID }
            })

            console.log("created!")
        } catch (e) {
            console.log("error in clique narrow")
            console.error(e)
        }


        window.location.reload();
    }

    return (
        <div>
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>


                <div className="form-group row m-2 mt-3">
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
    )
}

export default CreateCliqueCard