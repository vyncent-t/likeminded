import { Link } from "react-router-dom"
import { FIND_EVENTS } from '../utils/queries'
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { Fragment } from "react"

function EventCard(props) {


    console.log(`current props ${props}`)

    const currentUserID = props.currentUserID

    const params = useParams()
    const cliqueID = params.cliqueID

    console.log(`looking for events of clique id ${cliqueID}`)


    const { loading, data } = useQuery(FIND_EVENTS, {
        variables: { id: cliqueID }
    })

    console.log("Events reached")
    console.log(data)

    const events = data?.findAllCliqueEvents || []

    console.log(events)



    return (
        <Fragment>
            <div className="d-flex flex-wrap justify-content-center w-auto h-50">
                {loading && (
                    <div>Loading..</div>
                )}
                {events.length > 0 ? (
                    <div className="containter-fluid d-flex ">
                        {
                            events.map((event) => (
                                <div className="card bg-light mb-3 m-4" key={event._id}>
                                    <div className="card-header">
                                        <h4 className="card-title">{event.event_name}</h4>
                                    </div>
                                    <div className="card-body">
                                        <p>{event.event_about}</p>
                                        <p>event id: {event._id}</p>
                                        <p>event parent clique ID: {event.parent_clique}</p>
                                        <p>event author id: {event.event_author}</p>
                                        <p>current user id: {currentUserID}</p>
                                    </div>
                                    <div>
                                        <Link to={`/clique/${cliqueID}/event/${event._id}`}><button type="button" className="btn btn-primary m-3">View Event</button></Link>
                                        {currentUserID === event.event_author && (
                                            <Link to={`/clique/${cliqueID}/event/${event._id}/edit`}><button type="button" className="btn btn-info m-3">Edit Event</button></Link>
                                        )}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div>No events yet</div>
                )}
            </div>
        </Fragment >
    )
}

export default EventCard