import { Select, MenuItem } from '@mui/material';
import { useContext } from "react";
import DataContext from "../context/DataContext";

export default function SelectTeam() {
    const { teams, selectedTeam, handleSelectChange } = useContext(DataContext);

    return (
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
    )
}