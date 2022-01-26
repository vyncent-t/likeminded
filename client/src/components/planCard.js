import { Link } from "react-router-dom"
import { FIND_PLANS } from '../utils/queries'
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"

function PlanCard(props) {


    console.log(`current props ${props}`)

    const currentUserID = props.currentUserID

    const params = useParams()
    const cliqueID = params.cliqueID
    const eventID = params.eventID

    console.log(`looking for plans of event id ${eventID}`)


    const { loading, data } = useQuery(FIND_PLANS, {
        variables: { id: eventID }
    })

    console.log("Plans reached")
    console.log(data)

    const plans = data?.findAllEventPlans || []

    console.log(plans)



    return (
        <div>
            <h3>Plans -</h3>
            <div >
                {loading && (
                    <div>Loading..</div>
                )}
                {plans.length > 0 ? (
                    <div className="containter-fluid d-flex ">
                        {
                            plans.map((plan) => (
                                <div className="card bg-light mb-3 m-4" key={plan._id}>
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="card-title">{plan.plan_name}</h4>
                                        <div>
                                            <button className="btn btn-primary">Vote<i className="bi bi-check-square m-2"></i></button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <p>{plan.plan_about}</p>
                                        <p>plan id: {plan._id}</p>
                                        <p>plan parent event ID: {plan.parent_event}</p>
                                        <p>plan author id: {plan.plan_author}</p>
                                        <p>current user id: {currentUserID}</p>
                                    </div>
                                    <div>
                                        <Link to={`/clique/${cliqueID}/event/${plan.parent_event}/plan/${plan._id}`}><button type="button" className="btn btn-primary m-3">View Plan</button></Link>
                                        {currentUserID === plan.plan_author && (
                                            <Link to={`/clique/${cliqueID}/event/${plan.parent_event}/plan/${plan._id}/edit`}><button type="button" className="btn btn-info m-3">Edit Plan</button></Link>
                                        )}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div>No plans yet</div>
                )}
            </div>
        </div >
    )
}

export default PlanCard