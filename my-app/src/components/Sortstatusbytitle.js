import React from 'react';

const Sortstatusbytitle = ({ tickets }) => {
  let maps = new Map();
  const todo = [];
  const inprogress = [];
  const backlog = [];

  tickets.forEach((ticket) => {
    const status = ticket.status;
    const existingStatus = maps.get(status);

    if (existingStatus) {
      existingStatus.push({ id: ticket.id, title: ticket.title, priority: ticket.priority, tag: ticket.tag });
    } else {
      maps.set(status, [{ id: ticket.id, title: ticket.title, priority: ticket.priority, tag: ticket.tag }]);
    }
  });

  // Sort titles within each status group alphabetically
  maps.forEach((titles) => {
    titles.sort((a, b) => a.title.localeCompare(b.title));
  });

  // Sort the statuses alphabetically
  const sortedStatuses = Array.from(maps.keys()).sort();

  return (
    <div className="card">
      <div className="card1">
        {sortedStatuses.map((status) => (
          <div key={status} className="subcard">
            <h3>{status}</h3>
            <div className="sc1">
              {maps.get(status).map((ticket, index) => (
                <div className="c1" key={index}>
                  <h5>{ticket.title}</h5>
                  <p>Priority: {ticket.priority}</p>
                  <p>tag: {ticket.tag}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sortstatusbytitle;
