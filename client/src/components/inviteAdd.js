
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client"
import { FIND_USERNAME } from "../utils/queries"
import { ADD_NEW_MEMBER } from "../utils/mutations";
import { useParams } from "react-router-dom";



function InviteAdd(props) {

    const params = useParams()
    const newUsername = props.addMember
    const cliqueID = params.cliqueID


    const { loading, data } = useQuery(FIND_USERNAME, {
        variables: { username: newUsername }
    })

    // this is saved as an object
    // to access the fields use newUser._id and newUser.username
    let newUser = data?.findUserByUsername || 'temp0'

    const [addCliqueMember, { errorAdd, dataAdd }] = useMutation(ADD_NEW_MEMBER)

    const handleFormSubmission = async (event) => {
        event.preventDefault();

        try {
            console.log(`trying to add member to clique id: ${cliqueID}`)
            console.log(`trying to add member id: ${newUser._id}`)
            const { data } = await addCliqueMember({
                variables: { id: cliqueID, newUser: newUser._id }
            })
            console.log(data)
            console.log(dataAdd)
            console.log("added complete")
        } catch (e) {
            console.log(`error ${errorAdd}`)
            console.error(e)
        }


        // window.location.reload();
    }



    return (
        <div className="card">
            <div className="card-body">
                {loading && (
                    <div>loading</div>
                )}
                {!newUser.username ? (
                    <div>No user found by that username</div>
                ) : (
                    <div>
                        <div>Would you like to add {newUser.username} to your clique?
                        </div>
                        <div>
                            <button type="submit" onClick={handleFormSubmission} className="btn btn-primary m-2">Add user</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}


export default InviteAdd