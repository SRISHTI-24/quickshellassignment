import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import DropdownButton from './components/Dropdownbutton.js';
const App = () =>{
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

  const handleoptions = () =>{

  }
  return(
    
    <>
      <DropdownButton />
     
      
    </>
  )
}

export default App;