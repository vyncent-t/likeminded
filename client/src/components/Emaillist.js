import React from 'react';

const Emaillist = ({ emails, username }) => {
  if (!emails) {
    return <><h3>No Emails Yet</h3></>;
  }

  return (
    <div>
      <h3 className="text-primary">{username}</h3>
      <div className="flex-row justify-space-between my-4">
        {emails &&
          emails.map((email) => (
            <div key={emails._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {emails.username} <br />
                  <span>
                      {emails.email}
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