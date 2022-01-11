import Emaillist from './Emaillist';
import { useQuery } from '@apollo/client';
import { FIND_ALL_EMAILS } from '../utils/queries';

function Samplepage() {

  const { loading, data } = useQuery(FIND_ALL_EMAILS);
  console.log("data " + data)

  // look up
  const emails = data?.findAllUsers || [];

  return (
    <div >
      <div>
        {loading ? (<div>loading..</div>) : (<Emaillist emails={emails} />)}
      </div>
    </div>
  );
}

export default Samplepage;
