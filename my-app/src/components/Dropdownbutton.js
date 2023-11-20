import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Groupbupriority from './Groupbupriority';
import Groupbystatus from './Groupbystatus';
import Groupbyuser from './Groupbyuser';
import Sortstatusbypriority from './Sortstatusbypriority';
import Sortstatusbytitle from './Sortstatusbytitle';
const DropdownButton = () => {
     const[tickets, setTickets] = useState([]);
  const[users, setUsers] = useState([]);
    useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
      setTickets(response.data.tickets);
      setUsers(response.data.users);
      console.log(response.data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const [selectedOption, setSelectedOption] = useState();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
 let selectedComponent;

  switch (selectedOption) {
    case 'option1':
      selectedComponent = <Groupbystatus tickets={tickets}/>;
      break;
    case 'option2':
      selectedComponent = <Groupbyuser tickets={tickets} users={users}/>;
      break;
    case 'option3':
      selectedComponent = <Groupbupriority tickets={tickets}/>;
      break;
    case 'option4':
      selectedComponent = <Sortstatusbytitle tickets={tickets}/>;
      break;
    case 'option5':
      selectedComponent = <Sortstatusbypriority tickets={tickets}/>;
      break;
    default:
      selectedComponent = <Groupbystatus tickets={tickets} users={users}/>;
  }
  return (
    <div className='navbar'>
        <div className='dropdown'>
            <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option>Display</option>
        <option value="option1">Status</option>
        <option value="option2">User</option>
        <option value="option3">Priority</option>
        <option>Sorting</option>
        <option value="option4">Title</option>
     
        <option value="option5">Priority</option>
        <option>
            
        </option>
      </select>
      

      {selectedComponent && <div>{selectedComponent}</div>}
        
        </div>
   
        
    </div>
  );
};

export default DropdownButton;