import { NavLink } from "react-router-dom"
import Auth from '../utils/auth'

function Navbar() {
    const logUserOut = (event) => {
        event.preventDefault();
        Auth.logout()
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Likeminded</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link active" href="#">Home
                                    <span className="visually-hidden">(current)</span>
                                </a>
                            </li> */}
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
 */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <div>
                                    {Auth.loggedIn() ? (
                                        <div>
                                            <button className="btn btn-info" onClick={logUserOut}>Logout</button>
                                        </div>
                                    ) : (
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/welcome">Login / Sign up</NavLink>
                                        </li>
                                    )}
                                </div>
                            </li>

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