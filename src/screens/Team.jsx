import Navbar from "../components/Navbar"
import Header from "../components/Header"
import LineBreak from "../components/LineBreak"
import GroupedTeamMembers from "../components/GroupedTeamMembers"
import Footer from "../components/Footer"

export default function Team(props) {
    const { employees, selectedTeam, teams, handleTeamChange, year } = props

    return (
        <>
        <Navbar />
        <Header 
            employees={employees}
            selectedTeam={selectedTeam}/>
        <LineBreak />
        <GroupedTeamMembers
              employees={employees}
              teams={teams}
              selectedTeam={selectedTeam}
              handleTeamChange={handleTeamChange}/>
        <Footer 
            year={year}/>
        </>
    )
}