import { createContext } from "react";
import { useEffect, useState } from "react"


const DataContext = createContext<Object>({

})

interface Employee {
    id: number,
    fullName: string,
    designation: string,
    gender: string,
    teamName: string
  }

export function DataProvider({ children }: { children: JSX.Element }) {

    const [employees, setEmployees] = useState<Employee[]>([])
    const [teams, setTeams] = useState<string[]>([])
    const [selectedTeam, setSelectedTeam] = useState<string>("")
    const [year, setYear] = useState<number>(new Date().getFullYear());

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

    function handleSelectChange(e: Event) {
      let elementClicked: HTMLInputElement = e.target as HTMLInputElement;
      let elementValue: string | null = elementClicked.value;
      if (elementValue !== null) {
        setSelectedTeam(elementValue)
      }
  }

  function handleEmployeeCardClick(e: Event) {
      let elementClicked: Element = e.currentTarget as Element;
      let employeeToBeChanged = employees.filter(employee => employee.id === parseInt(elementClicked.id))[0];
      if (employeeToBeChanged.teamName === selectedTeam) {
          employeeToBeChanged.teamName = ""
      } else if (employeeToBeChanged.teamName !== selectedTeam) {
          employeeToBeChanged.teamName = selectedTeam
      }

      let changedEmployees = employees.map(employee => employee.id === parseInt(elementClicked.id) ? employeeToBeChanged : employee)

      fetch(`http://localhost:3000/employees/${elementClicked.id}`, {
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

  function handleTeamChange(team: string) {
    setSelectedTeam(team)
  }

  function handleTeamListClick(e: Event) {
    const clickedElement: Element = e.currentTarget as Element;
    
    const cards: HTMLCollection = clickedElement.parentElement?.getElementsByClassName("employee-cards-container") as HTMLCollection;

    for (let card of cards) {
        if (card.getAttribute("name") === clickedElement.getAttribute("name")) {
            card.classList.remove("hide")
        } else {
            card.classList.add("hide")
        }
    }
    let elementAttribute: string | null = clickedElement.getAttribute("name");
    if (elementAttribute !== null) {
      handleTeamChange(elementAttribute)
    }
}

    return (
        <DataContext.Provider value={{
            employees,
            teams,
            selectedTeam,
            year,
            handleSelectChange,
            handleEmployeeCardClick,
            handleTeamListClick
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;