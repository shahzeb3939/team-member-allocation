import { Select, MenuItem } from '@mui/material';

export default function SelectTeam(props) {
    const teams = props.teams;
    const selectedTeam = props.selectedTeam;
    const handleSelectChange = props.handleSelectChange;


    return (
        // <div className="container flex">
        //     <div className="content flex flex-column">
                <Select
                    size="small"
                    className="team-select" 
                    value={selectedTeam}
                    onChange={handleSelectChange}>
                    {
                        teams.map(team => (
                            <MenuItem value={team} key={team}>{team}</MenuItem>
                        ))
                    }
                </Select>
        //     </div>
        // </div>
    )
}