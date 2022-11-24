import Navbar from "../components/Navbar"
import Header from "../components/Header"
import LineBreak from "../components/LineBreak"
import SelectTeam from "../components/SelectTeam"
import Employees from "../components/Employees"
import Footer from "../components/Footer"

export default function Home(props) {
    const { employees, selectedTeam, teams, handleSelectChange, handleEmployeeCardClick, year } = props

    return (
        <>
        <Navbar />
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
            handleSelectChange={handleSelectChange}
            handleEmployeeCardClick={handleEmployeeCardClick}/>
        <Footer 
            year={year}/>
        </>
    )
}