
export default function Employees(props) {
    const { employees, selectedTeam, handleEmployeeCardClick } = props;

    return (
        // <div className="container flex">
        //     <div className="content flex flex-column">
                <div className="employee-cards-container grid">
                    {
                        employees.map(({ id, teamName, fullName, gender, designation}) => {
                            return (
                                <div id={id} className={(teamName === selectedTeam) ? "employee-card employee-card-selected flex flex-column" : "employee-card flex flex-column"} key={id} onClick={handleEmployeeCardClick}>
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
        //     </div>
        // </div>
    )
}