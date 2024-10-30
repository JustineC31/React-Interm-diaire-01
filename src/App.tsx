import './App.css'
import { useState,useEffect } from 'react';
import EmployeeCard from './Components/EmployeeCard'

function App() {
  const [employee, setEmployee] = useState({
    name: {
      first: "",
      last: "",
    },
    email: "",
    picture: {
      medium: "",
    },
  });

  const getEmployee = () => {
    fetch("https://randomuser.me/api?nat=en")
      .then((response) => response.json())
      .then((data) => {
        // Utilisation de la destructuration
        const [randomUser] = data.results;
        setEmployee(randomUser);
      });
  };

  useEffect(() => {
    getEmployee();
  }, []);
  return (
    <div className='App'>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  );
}

export default App
