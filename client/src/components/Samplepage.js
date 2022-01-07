import Emaillist from'./Emaillist';
import { useQuery } from '@apollo/client';
import { FIND_ALL_EMAILS } from '../utils/queries';

function Samplepage() {

  const {loading,data} = useQuery(FIND_ALL_EMAILS);
  const emails = data;

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {loading ? (<div>loading..</div>) : (<Emaillist emails = {emails} />)}
        </div>

      </header>
    </div>
  );
}

export default Samplepage;
