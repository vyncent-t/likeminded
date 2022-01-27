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

                <div className="card d-flex w-auto h-75 m-5">
                    <div>
                        <div>
                            <div className="card-header">
                                <h3>Log in</h3>
                            </div>

                            <div className="container pb-3">
                                {data ? (<p> You are already logged in! <Link to="/"> Click to navigate back to the homepage </Link> </p>) : (
                                    <form onSubmit={handleFormSubmission}>
                                        <div className="form-group m-2">
                                            <div>
                                                <p className="m-2">Already made an account? Welcome back to Likeminded!</p>
                                                <label>Email</label>
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

                                        <div className="form-group m-2">
                                            <div>
                                                <label>Password</label>
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


                                        <div className="form-group m-2 mt-3">
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