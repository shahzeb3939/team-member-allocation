import { useContext } from "react";
import DataContext from "../context/DataContext";

export default function Header() {
    const { employees, selectedTeam } = useContext(DataContext);

    return (
        // <div className="container flex">
        //     <div className="content flex flex-column">
            <div className="title-container flex flex-column">
                <h2>Team Member Allocation</h2>
                <h4>{selectedTeam} has {employees.filter(employee => (employee.teamName === selectedTeam)).length} members</h4>
            </div>
        //     </div>
        // </div>
    )
}