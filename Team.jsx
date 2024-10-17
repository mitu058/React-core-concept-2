import { useState } from "react"

export default function Team(){
    const [team,setTeam] = useState(11)
    const clickAdd = () =>{
        const newTeam = team + 1
        setTeam(newTeam)
    }
    const clickRemove = () =>{
        setTeam(team - 1) 
    }
    const playerStyle = {
        border : '2px solid green',
        margin : '20px',
        padding : '20px'
    }

    return (
        <div style={playerStyle}>
            <h3>Players : {team}</h3>
            <button onClick={clickAdd}>Add</button>
            <button onClick={clickRemove}>Remove</button>
        </div>
    )
}