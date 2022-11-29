import Header from "../components/Header"
import LineBreak from "../components/LineBreak"
import GroupedTeamMembers from "../components/GroupedTeamMembers"

export default function Team(props) {
    const { employees, selectedTeam, teams, handleTeamListClick } = props

    return (
        <>
        <Header 
            employees={employees}
            selectedTeam={selectedTeam}/>
        <LineBreak />
        <GroupedTeamMembers
              employees={employees}
              teams={teams}
              selectedTeam={selectedTeam}
              handleTeamListClick={handleTeamListClick}/>
        </>
    )
}