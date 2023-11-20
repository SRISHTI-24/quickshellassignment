import './Component.css';
const Groupbyuser = ({tickets, users}) =>
    {
        let mp2 = new Map();
        users.forEach((user) =>{
            if(!mp2.has(user.id))
            {
                mp2.set(user.id, user.name);
            }
            else{
                mp2.set(user.id, user.name);
            }
        })
       
        let mpuser = new Map();
        const user1=[];
        const user2 =[];
        const user3 =[];
        const user4 =[];
        const user5 =[];
            tickets.forEach((ticket) => {
                if(!mpuser.has(ticket.userId))
                {
                    if(ticket.userId==='usr-1')
                    {
                        user1.push(ticket.id);
                        user1.push(ticket.title);
                        user1.push(ticket.tag);
                        mpuser.set(mp2.get('usr-1'),user1);
                    }
                    if(ticket.userId==='usr-2')
                    {
                        user2.push(ticket.id);
                        user2.push(ticket.title);
                        user2.push(ticket.tag);
                        mpuser.set(mp2.get('usr-2'),user2);
                    }
                    if(ticket.userId==='usr-3')
                    {
                        user3.push(ticket.id);
                        user3.push(ticket.title);
                        user3.push(ticket.tag);
                        mpuser.set(mp2.get('usr-3'),user3);
                    }
                    if(ticket.userId==='usr-4')
                    {
                        user4.push(ticket.id);
                        user4.push(ticket.title);
                        user4.push(ticket.tag);
                        mpuser.set(mp2.get('usr-4'),user4);
                    }
                    if(ticket.userId==='usr-5')
                    {
                        user5.push(ticket.id);
                        user5.push(ticket.title);
                        user5.push(ticket.tag);
                        mpuser.set(mp2.get('usr-5'),user5);
                    }
                   
                }
               else{
                 if(ticket.userId==='usr-1')
                    {
                        user1.push(ticket.id);
                        user1.push(ticket.title);
                        user1.push(ticket.tag);
                        mpuser.set(mp2.get('usr-1'),user1);
                    }
                    if(ticket.userId==='usr-2')
                    {
                        user2.push(ticket.id);
                        user2.push(ticket.title);
                        user2.push(ticket.tag);
                        mpuser.set(mp2.get('usr-2'),user2);
                    }
                    if(ticket.userId==='usr-3')
                    {
                        user3.push(ticket.id);
                        user3.push(ticket.title);
                        user3.push(ticket.tag);
                        mpuser.set(mp2.get('usr-3'),user3);
                    }
                    if(ticket.userId==='usr-4')
                    {
                        user4.push(ticket.id);
                        user4.push(ticket.title);
                        user4.push(ticket.tag);
                        mpuser.set(mp2.get('usr-4'),user4);
                    }
                    if(ticket.userId==='usr-5')
                    {
                        user5.push(ticket.id);
                        user5.push(ticket.title);
                        user5.push(ticket.tag);
                        mpuser.set(mp2.get('usr-5'),user5);
                    }
               }
            });
     mpuser.forEach((k,v) =>{
        console.log(k,v);
     })

      return (
    <div className='card'>
      {
        <div className='card1'>
            {
                Array.from(mpuser.entries()).map(([userName, userTitles]) => (
        <div key={userName} className="subcard">
          <h3>{userName}</h3>
          {
            <div className='sc1'>
                {
                   
                userTitles.map((title, index) => (
              <h5 key={index}>{title}</h5>
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
    }
    export default Groupbyuser;