

import Auth from "../utils/auth"


function CliqueCard(props) {

    console.log(`current props ${props}`)

    const currentUserID = props.currentUserID
    const cliques = props.cliques

    console.log(props.currentUserID)

    if (!cliques.length) {
        return <div><h3>No Cliques joined yet!</h3></div>
    }

    console.log("Cliques reached" + cliques)

    return (
        <div>
            <h3>Cliques</h3>
            <div>
                {cliques &&
                    cliques.map((clique) => (
                        <div className="card bg-light mb-3" key={clique._id}>
                            <div className="card-header">
                                Clique
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{clique.clique_name}</h4>
                                <p>{clique.clique_about}</p>
                                <p>clique author id: {clique.clique_author}</p>
                                <p>current user id: {currentUserID}</p>
                            </div>
                            {currentUserID === clique.clique_author ? (<div>
                                <button className="btn btn-danger">Delete</button>
                                <button className="btn btn-info">Update</button>
                                <div>More...</div>
                            </div>) : (<div>
                                <div>Click...</div>
                            </div>)}
                        </div>
                    ))}
            </div>
        </div >
    )
}

export default CliqueCard