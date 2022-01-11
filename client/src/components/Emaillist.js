import React from 'react';

const Emaillist = ({ emails }) => {
  if (!emails.length) {
    return <div><h3>No Emails Yet</h3></div>;
  }

  console.log("email" + emails.email)

  return (
    <div>
      <h3>Emails</h3>
      <div>
        {emails &&
          emails.map((email) => (
            <div key={email._id}>
              <div >
                <h4 >
                  username: {email.username} <br />
                  <span>
                    email: {email.email}
                  </span>
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Emaillist;