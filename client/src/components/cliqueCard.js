import { useState } from "react"
import { useMutation } from "@apollo/client"
import { DELETE_CLIQUE } from "../utils/mutations"

function CliqueCard(props) {

    const [deleteModalOpen, toggleDeleteModalOpen] = useState(false)
    const [deleteForm, setDeleteForm] = useState('')




    function toggleDeleteModal() {
        toggleDeleteModalOpen(!deleteModalOpen)
    }


    const [deleteCliqueById, { deleteError }] = useMutation(DELETE_CLIQUE)

    async function deleteChosenClique(event) {

        const cliqueID = event.target.value

        console.log(cliqueID)

        // await setDeleteForm(cliqueID)
        // console.log(deleteForm)


        // try {
        //     const { data } = await deleteCliqueById({
        //         variables: { id: cliqueID }
        //     })
        //     console.log(`deleted ${data}`)

        // } catch (e) {
        //     console.log(e)
        //     console.log(deleteError)
        // }

        // window.location.reload();

    }

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
            <div>
                {cliques &&
                    cliques.map((clique) => (
                        <div className="card bg-light mb-3" key={clique._id}>
                            <div className="card-header">
                                <h4 className="card-title">{clique.clique_name}</h4>
                            </div>
                            <div className="card-body">
                                <p>{clique.clique_about}</p>
                                <p>clique id: {clique._id}</p>
                                <p>clique author id: {clique.clique_author}</p>
                                <p>current user id: {currentUserID}</p>
                            </div>
                            {currentUserID === clique.clique_author ? (<div className="container d-flex justify-content-end">
                                {!deleteModalOpen ? (<button className="btn btn-danger m-3" onClick={toggleDeleteModal}>Delete</button>) : (<div>
                                    <p>Are you sure you want to delete?</p>
                                    <button type="button" className="btn btn-danger m-3" value={clique._id} onClick={deleteChosenClique}>Delete clique</button>
                                    <button type="button" className="btn m-3" onClick={toggleDeleteModal}>Cancel</button>
                                </div>)}
                                <div>
                                    <button type="button" className="btn btn-info m-3">Update</button>
                                </div>
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