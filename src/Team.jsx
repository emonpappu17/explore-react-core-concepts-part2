import { useState } from "react"

export default function Team() {
    const [team, setTeam] = useState(11);
    const abc = useState(11);
    console.log(abc);
    const handleAdd = () => {
        // const newTeam = team + 1;
        // setTeam(newTeam);
        setTeam(team + 1);
    }

    const handleRemove = () => {
        setTeam(team - 1);
    }

    const teamStyle = {
        border: '2px solid purple',
        margin: '14px',
        padding: '15px',
        borderRadius: '15'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>remove</button>
        </div>
    )
}