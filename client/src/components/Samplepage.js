import Emaillist from './Emaillist';
import { useQuery } from '@apollo/client';
import { FIND_ALL_EMAILS } from '../utils/queries';

function Samplepage() {

  const { loading, data } = useQuery(FIND_ALL_EMAILS);
  console.log("data " + data)

  const emails = data?.findAllUsers || [];

  return (
    <div >
      <header >
        <div>
          {loading ? (<div>loading..</div>) : (<Emaillist emails={emails} />)}
        </div>

      </header>
    </div>
  );
}

export default Samplepage;
