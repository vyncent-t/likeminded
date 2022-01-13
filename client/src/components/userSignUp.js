import { Fragment, useState } from "react";
import { useMutation } from '@apollo/client'
import { CREATE_NEW_USER } from '../utils/mutations'
import { FIND_ALL_USERS } from "../utils/queries";


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

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await createNewUser({
                variables: {
                    username: userInfo.username,
                    email: userInfo.email,
                    password: userInfo.password
                },
            })

            // window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }






    return (
        <Fragment>
            <div className="col-md-6 contents bg-success m-3 card-body">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="mb-4">
                            <h3>Create Account</h3>
                            <p className="mb-4">Welcome to Likeminded, come connect with your cliques.</p>
                        </div>

                        <form className="flex-row justify-center justify-space-between-md" onSubmit={handleFormSubmit}>
                            <div className="form-group row m-2 justify-content-around">
                                <div>
                                    <label className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input name="email" type="email" className="form-control" placeholder="Email" value={userInfo.email} onChange={

                                            (e) =>
                                                setUserInfo({ ...userInfo, email: e.target.value })
                                        } />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <div>
                                    <label className="col-sm-2 col-form-label">Username</label>
                                    <div className="col-sm-10">
                                        <input name="username" type="text" className="form-control" placeholder="Username" value={userInfo.username} onChange={
                                            (e) =>
                                                setUserInfo({ ...userInfo, username: e.target.value })
                                        } />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <div>
                                    <label className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input name="password" type="password" className="form-control" placeholder="Password" value={userInfo.password} onChange={
                                            (e) =>
                                                setUserInfo({ ...userInfo, password: e.target.value })
                                        } />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row m-2 mt-3">
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
        </Fragment>
    )

}


export default UserSignUp;