import { Fragment, useState } from "react";
import { useMutation } from '@apollo/client'
import { CREATE_NEW_USER } from '../utils/mutations'
import { LOGIN_USER } from "../utils/mutations"
import { FIND_ALL_USERS } from "../utils/queries";

import Auth from "../utils/auth"

function UserSignUp() {
    const [userInfo, setUserInfo] = useState({ email: '', username: '', password: '' })


    const [createNewUser, { error }] = useMutation(CREATE_NEW_USER, {
        update(cache, { data: { createNewUser } }) {
            try {
                const { findAllUsers } = cache.readQuery({ query: FIND_ALL_USERS })

                cache.writeQuery({
                    query: FIND_ALL_USERS,
                    data: { findAllUsers: [...findAllUsers, createNewUser] }
                })
            } catch (e) {
                console.error(e)
            }
        }
    })

    const [userLogin, { errorLog, data }] = useMutation(LOGIN_USER);


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await createNewUser({
                variables: { ...userInfo },
            })

            // window.location.reload()
        } catch (err) {
            console.log(err)
        }


        try {
            const { data } = await userLogin({
                variables: { email: userInfo.email, password: userInfo.password },
            })

            Auth.login(data.userLogin.token)
        } catch (e) {
            console.error(e)
        }


    }






    return (
        <Fragment>
            <div className="card d-flex w-auto h-75 m-5">
                <div>
                    <div>
                        <div className="card-header">
                            <h3>Create Account</h3>
                        </div>
                        <div className="container pb-3">
                            <p className="m-2">Welcome to Likeminded, come connect with your cliques.</p>
                            <form onSubmit={handleFormSubmit}>
                                <div className="form-group m-2">
                                    <div>
                                        <label>Email</label>
                                        <div className="col-sm-10">
                                            <input name="email" type="email" className="form-control" placeholder="Email" value={userInfo.email} onChange={

                                                (e) =>
                                                    setUserInfo({ ...userInfo, email: e.target.value })
                                            } />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group m-2">
                                    <div>
                                        <label>Username</label>
                                        <div className="col-sm-10">
                                            <input name="username" type="text" className="form-control" placeholder="Username" value={userInfo.username} onChange={
                                                (e) =>
                                                    setUserInfo({ ...userInfo, username: e.target.value })
                                            } />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group m-2">
                                    <div>
                                        <label>Password</label>
                                        <div className="col-sm-10">
                                            <input name="password" type="password" className="form-control" placeholder="Password" value={userInfo.password} onChange={
                                                (e) =>
                                                    setUserInfo({ ...userInfo, password: e.target.value })
                                            } />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group m-2 mt-3">
                                    <div className="col-sm-10">
                                        <button type="submit" className="btn btn-primary">Create Account</button>
                                    </div>

                                    {error && (
                                        <div className="col-12 my-3 bg-danger text-white p-3">
                                            Something went wrong...
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )

}


export default UserSignUp;