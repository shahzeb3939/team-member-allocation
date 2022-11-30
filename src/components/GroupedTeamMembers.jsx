import '../css/GroupedTeamMembers.css'

export default function GroupedTeamMembers(props) {
    const employees = props.employees;
    const teams = props.teams;
    const selectedTeam = props.selectedTeam;
    const handleTeamListClick = props.handleTeamListClick

    return (
        // <div className="container flex">
        //     <div className="content flex flex-column">
                <div className="teams-list-container flex flex-column">
                    {
                        teams.map(team => (
                            <div className="team-list flex flex-column" onClick={handleTeamListClick} key={team} name={team}>
                                <p className="team-name">Team Name: {team}</p>
                                <div className="gap-fill"></div>
                                <div className={team === selectedTeam ? "employee-cards-container grid block-padding" : "employee-cards-container grid block-padding hide"} name={team}>
                                    {
                                        employees.filter(({ teamName, }) => teamName === team).map(({id, gender, fullName, designation}) => {
                                            return (
                                                <div id={id} className="employee-card flex flex-column no-hover" key={id}>
                                                    <div className="image-container">
                                                        <img src={(gender === "male") ? require("../images/maleProfile.jpg") : require("../images/femaleProfile.jpg")} alt="profile_picture" />
                                                    </div>
                                                    <p className="full-name">Full Name: {fullName}</p>
                                                    <p className="designation-title">Designation: <span className="designation">{designation}</span></p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>)
                        )
                    }
                </div>
        //     </div>
        // </div>
    )
}