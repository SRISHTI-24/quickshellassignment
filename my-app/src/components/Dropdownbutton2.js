import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Groupbupriority from './Groupbupriority';
import Groupbystatus from './Groupbystatus';
const DropdownButton2 = () => {
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
      selectedComponent = <Groupbupriority tickets={tickets}/>;
      break;
    
    default:
      selectedComponent = <Groupbystatus tickets={tickets}/>;
  }
  return (
    <div className='navbar'>
        <div className='dropdown'>
            <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
        <option>Display</option>
       <option value='option1'>Sorting</option>
        <option value='option2'>
            Priority
        </option>
      </select>
      

      {selectedComponent && <div>{selectedComponent}</div>}
        
        </div>
   
        
    </div>
  );
};

export default DropdownButton2;