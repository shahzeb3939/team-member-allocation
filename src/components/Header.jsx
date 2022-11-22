export default function Header(props) {
    const employees = props.employees;
    const selectedTeam = props.selectedTeam;

    return (
        <div className="container flex">
            <div className="content flex flex-column">
            <div className="title-container flex flex-column">
                <h2>Team Member Allocation</h2>
                <h4>{selectedTeam} has {employees.filter(employee => (employee.teamName === selectedTeam)).length} members</h4>
            </div>
            </div>
        </div>
    )
}