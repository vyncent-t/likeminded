import { Fragment } from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client"
import { LOGIN_USER } from "../utils/mutations"
import { Link } from "react-router-dom"

import Auth from "../utils/auth"


function UserLogIn() {


    const [formState, setFormState] = useState({ email: '', password: '' });

    const [userLogin, { error, data }] = useMutation(LOGIN_USER);

    // update the form state based on changes in the inputs
    const handleChange = (event) => {
        // deconstruct the event.target object fields as their own variables
        const { name, value } = event.target

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        console.log(formState)

        try {
            const { data } = await userLogin({
                variables: { ...formState },
            })

            Auth.login(data.userLogin.token)
        } catch (e) {
            console.error(e)
        }


    }

    return (
        <Fragment>
            {Auth.loggedIn() ? (
                <div className="col-md-6 contents bg-success m-3 card-body">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="mb-4">
                                <h3>Log in</h3>
                                <p>You are already logged in!</p>
                                <p><Link to="/"> Click to navigate back to the homepage </Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            ) :

                <div className="col-md-6 contents bg-success m-3">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="mb-4">
                                <h3>Log in</h3>
                                <p className="mb-4">Welcome to Likeminded, come connect with your cliques.</p>
                            </div>

                            <div>
                                {data ? (<p> You are already logged in! <Link to="/"> Click to navigate back to the homepage </Link> </p>) : (
                                    <form className="flex-row justify-center justify-space-between-md" onSubmit={handleFormSubmission}>
                                        <div className="form-group row m-2 justify-content-around">
                                            <div>
                                                <label className="col-sm-2 col-form-label">Email</label>
                                                <div className="col-sm-10">
                                                    <input
                                                        className="form-control"
                                                        placeholder="Your email"
                                                        name="email"
                                                        type="email"
                                                        value={formState.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group row m-2">
                                            <div>
                                                <label className="col-sm-2 col-form-label">Password</label>
                                                <div className="col-sm-10">
                                                    <input
                                                        className="form-control"
                                                        placeholder="******"
                                                        name="password"
                                                        type="password"
                                                        value={formState.password}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="form-group row m-2 mt-3">
                                            <div className="col-sm-10">
                                                <button type="submit" className="btn btn-primary">Log in</button>
                                            </div>

                                            {error && (
                                                <div className="my-3 p-3 bg-danger text-white rounded">
                                                    {error.message}
                                                </div>
                                            )}
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </Fragment>
    )

}


export default UserLogIn;