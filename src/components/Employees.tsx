import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Employee } from "../context/DataContext";

export default function Employees() {
    const { employees, selectedTeam, handleEmployeeCardClick } = useContext(DataContext);

    return (
            <div className="employee-cards-container grid">
                {
                    employees.map(({ id, teamName, fullName, gender, designation }: Employee) => {
                        return (
                            <div id={id.toString()} className={(teamName === selectedTeam) ? "employee-card employee-card-selected flex flex-column" : "employee-card flex flex-column"} key={id} onClick={handleEmployeeCardClick}>
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
    )
}