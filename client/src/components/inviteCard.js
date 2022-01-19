
import { useState } from "react";
import { useMutation } from "@apollo/client"


import Auth from "../utils/auth"
import InviteAdd from "./inviteAdd";




function InviteCard(props) {

    const cliqueID = props.cliqueID

    const userID = Auth.getUser().data._id

    const [formNewUserState, setFormNewUserState] = useState({ clique_author: userID, username: '', newUser: '' })


    const handleChange = (event) => {
        // deconstruct the event.target object fields as their own variables
        const { name, value } = event.target



        setFormNewUserState({
            ...formNewUserState,
            [name]: value
        })


    }


    // need to add the add member mutation in the form handler


    return (
        <div className="card card-header m-3 containe">
            <div>
                <h4 className="card-title">Add clique member</h4>
            </div>
            <div className="r">
                <form className="flex-row justify-center justify-space-between-md">
                    <div className="container form-group row justify-content-around">
                        <div className="container-fluid">
                            <label className=" col-form-label">Who would you like to add?</label>
                            <div className=" col-2">
                                <input
                                    className="form-control m-2"
                                    placeholder="Enter username here"
                                    name="username"
                                    type="text"
                                    value={formNewUserState.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <InviteAdd addMember={formNewUserState.username} cliqueID={cliqueID} />

                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default InviteCard
