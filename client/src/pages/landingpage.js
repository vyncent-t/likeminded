import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Samplepage from "../components/Samplepage";
import logoFun from "../image/undraw_Having_fun_re_vj4h.svg"
import logoDev from "../image/undraw_Development_re_g5hq.svg"
import logoTeam from "../image/undraw_Team_goals_re_4a3t.svg"

function LandingPage() {

    return (
        <Fragment>
            <Navbar />

            <section className=" p-5 text-center text-sm-start">
                <div className="container">
                    <div className="d-sm-flex justify-content-start ">
                        <div className="me-5">
                            <h2>Keeping everyone <span className="text-warning">likedminded</span>...</h2>
                            <p className="lead my-4 fw-bold">
                                We believe that everything is better with company, with Likeminded our goal is to
                                make sure you and your friends stay connected and on the same page for all things in
                                life.
                            </p>
                            <a href="/signup" className="btn btn-primary btn-lg border border-light border-3">
                                Sign up today <i className="bi bi-person-check"></i>
                            </a>
                        </div>
                        <img className="img-fluid img-thumbnail m-3 d-sm-block bg-light rounded"
                            src={logoDev} alt="" />
                    </div>
                </div>
            </section>
            <section className="bg-success p-5 text-center text-sm-start">
                <div className="container text-light">
                    <div className="d-sm-flex justify-content-start">
                        <div className="me-5">
                            <h2>Making plans has never been easier</h2>
                            <p className="lead my-4 fw-bold">
                                Likeminded is built to serve you and your friends, making managing your busy social
                                circles and staying up to date with their latest endevours more streamlined than
                                ever- just send the invite and start planning!
                            </p>
                        </div>
                        <img className="img-fluid img-thumbnail m-3 d-sm-block bg-light rounded-cricle"
                            src={logoTeam} alt="" />

                    </div>
                </div>
            </section>
            <section className=" bg-info p-5 text-center text-sm-start">
                <div className="container text-light">
                    <div className="d-sm-flex justify-content-center">
                        <div className="me-5">
                            <h2>Be as meticulous or spontaneous as you like</h2>
                            <p className="lead my-4 fw-bold">
                                From long term plans to the last minute ones, Likeminded is here to connect you to the people you love!
                            </p>
                        </div>
                        <img className="img-fluid img-thumbnail m-3 d-sm-block bg-light rounded-cricle"
                            src={logoFun} alt="" />

                    </div>
                </div>
            </section>

            <Samplepage />
        </Fragment>
    )


}

export default LandingPage;