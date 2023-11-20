  const Groupbupriority = ({tickets}) =>
    {
        let mappriority = new Map();
        const p1=[];
        const p2 =[];
        const p3 =[];
        const p4 =[];
            tickets.forEach((ticket) => {
                if(!mappriority.has(ticket.priority))
                {
                    if(ticket.priority===1)
                    {
                        p1.push(ticket.id);
                        p1.push(ticket.title);
                        p1.push(ticket.tag);
                        mappriority.set(ticket.priority,p1);
                    }
                    if(ticket.priority===2)
                    {
                        p2.push(ticket.id);
                        p2.push(ticket.title);
                        p2.push(ticket.tag);
                        mappriority.set(ticket.priority,p2);
                    }
                    if(ticket.priority===3)
                    {
                        p3.push(ticket.id);
                        p3.push(ticket.title);
                        p3.push(ticket.tag);
                        mappriority.set(ticket.priority,p3);
                    }
                    if(ticket.priority===4)
                    {
                        p4.push(ticket.id);
                        p4.push(ticket.title);
                        p4.push(ticket.tag);
                        mappriority.set(ticket.priority,p4);
                    }
                }
               else{
                 if(ticket.priority===1)
                    {
                        p1.push(ticket.id);
                        p1.push(ticket.title);
                        p1.push(ticket.tag);
                        mappriority.set(ticket.priority,p1);
                    }
                    if(ticket.priority===2)
                    {
                        p2.push(ticket.id);
                        p2.push(ticket.title);
                        p2.push(ticket.tag);
                        mappriority.set(ticket.priority,p2);
                    }
                    if(ticket.priority===3)
                    {
                        p3.push(ticket.id);
                        p3.push(ticket.title);
                        p3.push(ticket.tag);
                        mappriority.set(ticket.priority,p3);
                    }
                    if(ticket.priority===4)
                    {
                        p4.push(ticket.id);
                        p4.push(ticket.title);
                        p4.push(ticket.tag);
                        mappriority.set(ticket.priority,p4);
                    }
               }
            });
            return (
    <div className="card">
      {
        <div className="card1">
            {
                Array.from(mappriority.entries()).map(([priority, priorityTitles]) => (
        <div key={priority} className="subcard">
          <h3>Priority {priority}</h3>
          
            {
                <div className="sc1">
                    {
                        priorityTitles.map((title, index) => (
                       
                            <div className="c1">
                                                <h5 key={title}>{title}</h5>
                                            </div>
                      
            ))
                    }
                </div>
            
            }
        
        </div>
      ))
            }
        </div>
      }
    </div>
  );
     mappriority.forEach((k,v) =>{
        console.log(k,v);
     })
    }
    export default Groupbupriority;