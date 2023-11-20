
const Groupbystatus = ({tickets}) =>
    {
        let maps = new Map();
        const todo=[];
        const inprogress =[];
        const backlog =[];
            tickets.forEach((ticket) => {
                if(!maps.has(ticket.status))
                {
                    if(ticket.status==='Todo')
                    {
                        todo.push(ticket.id);
                        todo.push(ticket.title);
                        todo.push(ticket.priority);
                        todo.push(ticket.tag);
                        maps.set(ticket.status,todo);
                    }
                    if(ticket.status==='In progress')
                    {
                        inprogress.push(ticket.id);
                        inprogress.push(ticket.title);
                        inprogress.push(ticket.priority);
                        inprogress.push(ticket.tag);
                        maps.set(ticket.status,inprogress);
                    }
                    if(ticket.status==='Backlog')
                    {
                        backlog.push(ticket.id);
                        backlog.push(ticket.title);
                        backlog.push(ticket.priority);
                        backlog.push(ticket.tag);
                        maps.set(ticket.status,backlog);
                    }
                }
               else{
                 if(ticket.status==='Todo')
                    {
                        todo.push(ticket.id);
                        todo.push(ticket.title);
                        todo.push(ticket.priority);
                        todo.push(ticket.tag);
                        maps.set(ticket.status,todo);
                    }
                    if(ticket.status==='In progress')
                    {
                        inprogress.push(ticket.id);
                        inprogress.push(ticket.title);
                        inprogress.push(ticket.priority);
                        inprogress.push(ticket.tag);
                        maps.set(ticket.status,inprogress);
                    }
                    if(ticket.status==='Backlog')
                    {
                        backlog.push(ticket.id);
                        backlog.push(ticket.title);
                        backlog.push(ticket.priority);
                        backlog.push(ticket.tag);
                        maps.set(ticket.status,backlog);
                    }
               }
            });
            return(
                 <div className="card">
                        {
                            <div className="card1">
                                {
                                    Array.from(maps.entries()).map(([status, titles]) => (
                        <div key={status} className="subcard">
                            <h3>{status}</h3>
                                
                            {
                                <div className="sc1">
                                    {
                                         titles.map((title) => 
                                        (
                                            <div className="c1">
                                                <h5 key={title}>{title}</h5>
                                            </div>
                                         )
                                         
                                        )
                                    }
                                </div>
                            }
                        
                        </div>
      ))
                                }
                            </div>
                        }
    </div>
            )
            maps.forEach((k,v)=>{
                console.log(k,v);
            })
    }

export default Groupbystatus