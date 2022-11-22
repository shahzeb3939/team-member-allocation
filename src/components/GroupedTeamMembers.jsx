import '../css/GroupedTeamMembers.css'

export default function GroupedTeamMembers(props) {
    const employees = props.employees;
    const teams = props.teams;
    const selectedTeam = props.selectedTeam;
    const handleTeamChange = props.handleTeamChange

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
        <div className="container flex">
            <div className="content flex flex-column">


                <div className="teams-list-container flex flex-column">
                    {
                        teams.map(team => (
                            <div className="team-list flex flex-column" onClick={handleTeamListClick} key={team} name={team}>
                                <p className="team-name">Team Name: {team}</p>
                                <div className="gap-fill"></div>
                                <div className={team === selectedTeam ? "employee-cards-container grid block-padding" : "employee-cards-container grid block-padding hide"} name={team}>
                                    {
                                        employees.filter(employee => employee.teamName === team).map(employee => {
                                            return (
                                                <div id={employee.id} className="employee-card flex flex-column no-hover" key={employee.id}>
                                                    <div className="image-container">
                                                        <img src={(employee.gender === "male") ? require("../images/maleProfile.jpg") : require("../images/femaleProfile.jpg")} alt="profile_picture" />
                                                    </div>
                                                    <p className="full-name">Full Name: {employee.fullName}</p>
                                                    <p className="designation-title">Designation: <span className="designation">{employee.designation}</span></p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>)
                        )
                    }
                </div>


                {/* <div className="employee-cards-container grid">
                    {
                        employees.map(employee => {
                            return (
                                <div id={employee.id} className={(employee.teamName === selectedTeam) ? "employee-card employee-card-selected flex flex-column" : "employee-card flex flex-column"} key={employee.id} onClick={handleEmployeeCardClick}>
                                    <div className="image-container">
                                        <img src={(employee.gender === "male") ? require("../images/maleProfile.jpg") : require("../images/femaleProfile.jpg")} alt="profile_picture" />
                                    </div>
                                    <p className="full-name">Full Name: {employee.fullName}</p>
                                    <p className="designation-title">Designation: <span className="designation">{employee.designation}</span></p>
                                </div>
                            )
                        })
                    }
                </div> */}
            </div>
        </div>
    )
}