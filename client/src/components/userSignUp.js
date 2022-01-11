import { Fragment, useState } from "react";
import { useMutation } from '@apollo/client'
import { CREATE_NEW_USER } from '../utils/mutations'


function UserSignUp() {
    const [userInfo, setUserInfo] = useState({ email: '', username: '', password: '' })


    const [createNewUser, { error }] = useMutation(CREATE_NEW_USER)

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

            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    // const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     if (name === "email") {
    //         setUserInfo({ ...userInfo, [name]: value })
    //         if (name === "username") {
    //             setUserInfo({ ...userInfo, [name]: value })
    //         }
    //         if (name === "password") {
    //             setUserInfo({ ...userInfo, [name]: value })
    //         }
    //     }
    // }

    // const handleChange = (event) => {
    //     setUserInfo({ [event.target.name]: event.target.value })
    // }


    return (
        <Fragment>
            <div className="col-md-6 contents">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="mb-4">
                            <h3>Create Account</h3>
                            <p className="mb-4">Welcome to Likeminded, come connect with your cliques.</p>
                        </div>

                        <form className="flex-row justify-center justify-space-between-md align-center" onSubmit={handleFormSubmit}>
                            <div className="form-group row m-2">
                                <label className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input name="email" type="email" className="form-control" placeholder="Email" value={userInfo.email} onChange={

                                        (e) =>
                                            setUserInfo({ ...userInfo, email: e.target.value })
                                    } />
                                </div>
                            </div>
                            <div className="form-group row m-2">
                                <label className="col-sm-2 col-form-label">Username</label>
                                <div className="col-sm-10">
                                    <input name="username" type="text" className="form-control" placeholder="Username" value={userInfo.username} onChange={
                                        (e) =>
                                            setUserInfo({ ...userInfo, username: e.target.value })
                                    } />
                                </div>
                            </div>
                            <div className="form-group row m-2">
                                <label className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input name="password" type="password" className="form-control" placeholder="Password" value={userInfo.password} onChange={
                                        (e) =>
                                            setUserInfo({ ...userInfo, password: e.target.value })
                                    } />
                                </div>
                            </div>

                            <div className="form-group row m-2">
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