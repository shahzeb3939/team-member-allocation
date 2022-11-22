import "../src/css/Employees.css"
import { lazy, Suspense, useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Footer from './components/Footer';
import Fallback from "./components/Fallback";
import Navbar from "./components/Navbar";
import SelectTeam from "./components/SelectTeam";
import LineBreak from "./components/LineBreak";
// import NoPageFound from "./components/NoPageFound";
// import Employees from './components/Employees';
const Employees = lazy(() => import('./components/Employees'))
// import GroupedTeamMembers from "./components/GroupedTeamMembers";
const GroupedTeamMembers = lazy(() => import('./components/GroupedTeamMembers'))

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
          console.log('Success:', data);
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
    <Router>
      <Navbar />
      <Header 
        employees={employees}
        selectedTeam={selectedTeam}/>
      <LineBreak />
      <Suspense fallback={<Fallback />} >
        <Routes>
          <Route path="/" element={
            <>
              <SelectTeam 
                teams={teams}
                selectedTeam={selectedTeam}
                handleSelectChange={handleSelectChange}/>
              <Employees 
                employees={employees}
                teams={teams}
                selectedTeam={selectedTeam}
                handleSelectChange={handleSelectChange}
                handleEmployeeCardClick={handleEmployeeCardClick}/>
            </>
          } />
          <Route path="/teams" element={
            <GroupedTeamMembers
              employees={employees}
              teams={teams}
              selectedTeam={selectedTeam}
              handleTeamChange={handleTeamChange}/>
          } />
        </Routes>
      </Suspense>
      <Footer 
        year={year}/>
    </Router>
  );
}

export default App;
