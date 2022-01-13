


function CliqueCard({ cliques }) {

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
                        <div className="card bg-light mb-3">
                            <div className="card-header">
                                Clique
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{clique.clique_name}</h4>
                                <p>{clique.clique_about}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div >
    )
}

export default CliqueCard