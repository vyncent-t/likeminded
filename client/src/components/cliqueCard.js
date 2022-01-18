import { Link } from "react-router-dom"

function CliqueCard(props) {


    console.log(`current props ${props}`)

    const currentUserID = props.currentUserID
    const cliques = props.cliques

    if (!cliques.length) {
        return <div><h3>No Cliques joined yet!</h3></div>
    }

    console.log("Cliques reached" + cliques)

    return (
        <div>
            <h3>Cliques</h3>
            <div className="containter d-flex justify-content-center">
                {cliques &&
                    cliques.map((clique) => (
                        <div className="card bg-light mb-3 m-4" key={clique._id}>
                            <div className="card-header">
                                <h4 className="card-title">{clique.clique_name}</h4>
                            </div>
                            <div className="card-body">
                                <p>{clique.clique_about}</p>
                                <p>clique id: {clique._id}</p>
                                <p>clique author id: {clique.clique_author}</p>
                                <p>current user id: {currentUserID}</p>
                            </div>
                            <div><Link to={`/clique/${clique._id}`}><button type="button" className="btn btn-primary m-3">View</button></Link>
                                {currentUserID === clique.clique_author && (
                                    <Link to={`/clique/${clique._id}/edit`}><button type="button" className="btn btn-info m-3">Edit</button></Link>
                                )}
                            </div>
                        </div>
                    ))}
            </div>
        </div >
    )
}

export default CliqueCard