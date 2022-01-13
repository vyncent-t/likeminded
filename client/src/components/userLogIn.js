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
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Login</h4>
                    <div className="card-body">
                        {data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/">back to the homepage.</Link>
                            </p>
                        ) : (
                            <form onSubmit={handleFormSubmission}>
                                <input
                                    className="form-input"
                                    placeholder="Your email"
                                    name="email"
                                    type="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                />
                                <input
                                    className="form-input"
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                    value={formState.password}
                                    onChange={handleChange}
                                />
                                <button
                                    className="btn btn-block btn-primary"
                                    style={{ cursor: 'pointer' }}
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </form>
                        )}

                        {error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    )

}


export default UserLogIn;