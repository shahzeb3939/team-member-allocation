import "../css/Employees.css"
import { useEffect, useState } from "react"

export default function Employees() {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/employees")
        .then(res => res.json())
        .then(data => {setEmployees([...data])})
    })
    
    // function abc() {
    //     return setEmployees(employees + 1)
    // }

    return (
        <div className="container flex">
        <div className="content flex flex-column">
          <div className="title-container flex flex-column">
            <h2>Team Member Allocation</h2>
            <h4>TeamB has 5 members</h4>
          </div>
          <select className="team-select">
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
          </select>
          <hr />
          <div className="employee-cards-container grid">
            {
                employees.map(employee => (
                    <div className="employee-card flex flex-column" key={employee.id}>
                        <div className="image-container">
                            <img src={(employee.gender === "male") ? require("../images/maleProfile.jpg") : require("../images/femaleProfile.jpg")} alt="profile_picture" />
                        </div>
                        <p className="full-name">Full Name: {employee.fullName}</p>
                        <p className="designation-title">Designation: <span className="designation">{employee.designation}</span></p>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    )
}