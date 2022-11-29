
export default function Employees(props) {
    const { employees, selectedTeam, handleEmployeeCardClick } = props;

    return (
        // <div className="container flex">
        //     <div className="content flex flex-column">
                <div className="employee-cards-container grid">
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
                </div>
        //     </div>
        // </div>
    )
}