import { NavLink } from "react-router-dom"
import Auth from '../utils/auth'
import { Fragment } from "react"

function Navbar() {
    const logUserOut = (event) => {
        event.preventDefault();
        Auth.logout()
    }
    return (
        <div className="font-weight-bold">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex justify-content-between">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Likeminded</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">


                            {Auth.loggedIn() ?
                                <Fragment>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                                    </li>
                                    <button className="btn btn-info" onClick={logUserOut}>Logout</button>
                                </Fragment> : (
                                    <Fragment>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/">Home
                                            </NavLink>
                                        </li>
                                        {/* 
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/about">About</NavLink>
                                        </li> */}
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/welcome">Login / Sign up</NavLink>
                                        </li>
                                    </Fragment>
                                )}



                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="http://localhost:3000/#" role="button" aria-haspopup="true" aria-expanded="true">Login / Sign up</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a>
                                </div>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;