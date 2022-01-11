import { Fragment } from "react";


function UserLogIn() {

    return (
        <Fragment>
            <div className="col-md-6 contents">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="mb-4">
                            <h3>Sign In</h3>
                            <p className="mb-4">Welcome to Likeminded, come connect with your cliques.</p>
                        </div>
                        <form className="flex-row justify-center justify-space-between-md" >
                            {/* <div className="form-group row m-2 justify-content-around">
                                <div>
                                    <label className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input name="email" type="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                            </div> */}

                            <div className="form-group row m-2">
                                <div>
                                    <label className="col-sm-2 col-form-label">Username</label>
                                    <div className="col-sm-10">
                                        <input name="username" type="text" className="form-control" placeholder="Username" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row m-2">
                                <div>
                                    <label className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input name="password" type="password" className="form-control" placeholder="Password" />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group row m-2 mt-3">
                                <div className="col-sm-10">
                                    <button type="submit" className="btn btn-primary">Log in</button>
                                </div>

                                {/* {error && (
                                    <div className="col-12 my-3 bg-danger text-white p-3">
                                        Something went wrong...
                                    </div>
                                )} */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}


export default UserLogIn;