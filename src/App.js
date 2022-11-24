import "../src/css/Employees.css"
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./screens/Home";
import Team from "./screens/Team";
import NoPageFound from "./components/NoPageFound";


function App() {
    const [employees, setEmployees] = useState([])
    const [teams, setTeams] = useState([])
    const [selectedTeam, setSelectedTeam] = useState("")
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        fetch("http://localhost:3000/employees")
        .then(res => res.json())
        .then(data => {setEmployees([...data])})
    }, [])

    useEffect(() => {
        fetch("http://localhost:3000/teams")
        .then(res => res.json())
        .then(data => {
            setTeams([...data])
            setSelectedTeam(data[0])
        })
    }, [])

    function handleSelectChange(e) {
      setSelectedTeam(e.target.value)
  }

  function handleEmployeeCardClick(e) {
      let employeeToBeChanged = employees.filter(employee => employee.id === parseInt(e.currentTarget.id))[0];
      if (employeeToBeChanged.teamName === selectedTeam) {
          employeeToBeChanged.teamName = ""
      } else if (employeeToBeChanged.teamName !== selectedTeam) {
          employeeToBeChanged.teamName = selectedTeam
      }

      let changedEmployees = employees.map(employee => e.currentTarget.id === employee.id ? employeeToBeChanged : employee)

      fetch(`http://localhost:3000/employees/${e.currentTarget.id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(employeeToBeChanged)
      })
      .then(res => res.json())
      .then(data => {
          setEmployees(changedEmployees)
      })
      .catch(error => console.error('Error:', error))
  }

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, [])

  function handleTeamChange(team) {
    setSelectedTeam(team)
  }

  return (

    <Routes>
      <Route path="/" element={
        <Home
          employees={employees}
          selectedTeam={selectedTeam}
          teams={teams}
          handleSelectChange={handleSelectChange}
          handleTeamChange={handleTeamChange}
          handleEmployeeCardClick={handleEmployeeCardClick}
          year={year}/>
      }/>
      <Route path="/teams" element={
        <Team
          employees={employees}
          selectedTeam={selectedTeam}
          teams={teams}
          handleTeamChange={handleTeamChange}
          year={year}/>
      }/>
      <Route path="*" element={<NoPageFound />}/>
    </Routes>
  );
}


export default App;
