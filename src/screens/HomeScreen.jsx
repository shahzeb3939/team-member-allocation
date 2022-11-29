import Header from "../components/Header"
import LineBreak from "../components/LineBreak"
import SelectTeam from "../components/SelectTeam"
import Employees from "../components/Employees"

export default function Home(props) {
    const { employees, selectedTeam, teams, handleSelectChange, handleEmployeeCardClick } = props

    return (
        <>
        <Header 
            employees={employees}
            selectedTeam={selectedTeam}/>
        <LineBreak />
        <SelectTeam 
            teams={teams}
            selectedTeam={selectedTeam}
            handleSelectChange={handleSelectChange}/>
        <Employees 
            employees={employees}
            teams={teams}
            selectedTeam={selectedTeam}
            handleEmployeeCardClick={handleEmployeeCardClick}/>
        </>
    )
}