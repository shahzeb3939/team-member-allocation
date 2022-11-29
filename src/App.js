import "../src/css/Employees.css"
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"

import HomeScreen from "./screens/HomeScreen";
import TeamScreen from "./screens/TeamScreen";
import NoPageFound from "./components/NoPageFound";
import PageLayout from "./components/PageLayout";


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

  function handleTeamListClick(e) {
    const clickedElement = e.currentTarget;
    const cards = e.currentTarget.parentElement.getElementsByClassName("employee-cards-container");

    for (let card of cards) {
        if (card.getAttribute("name") === clickedElement.getAttribute("name")) {
            card.classList.remove("hide")
        } else {
            card.classList.add("hide")
        }
    }
    handleTeamChange(e.currentTarget.getAttribute("name"))
}

  return (

    <Routes>
      <Route element={<PageLayout year={year} />}>
        <Route path="/" element={
          <HomeScreen
            employees={employees}
            selectedTeam={selectedTeam}
            teams={teams}
            handleSelectChange={handleSelectChange}
            handleTeamChange={handleTeamChange}
            handleEmployeeCardClick={handleEmployeeCardClick}
          />}
        />
        <Route path="/teams" element={
          <TeamScreen
            employees={employees}
            selectedTeam={selectedTeam}
            teams={teams}
            handleTeamListClick={handleTeamListClick}
          />}
        />
      </Route>
      <Route path="*" element={<NoPageFound />}/>
    </Routes>
  );
}


export default App;
